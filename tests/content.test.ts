import { describe, it, expect } from "vitest";
import { validateSessions, validateTopics } from "../src/content/schema";
import { sessionMonth, nextEvent } from "../src/content/model";
import data from "../src/content/generated.json";
const proposal = {
  id: "test-talk",
  title: "Test",
  summary: "Test summary",
  track: "engineering",
  domain: "operate-ai",
  format: ["talk"],
  status: "proposed",
  targetMonth: "2026-10",
  editorialOrder: 0,
};
const event = (startsAt: string, status = "scheduled") => {
  const { targetMonth, ...rest } = proposal;
  return { ...rest, status, startsAt };
};
describe("editorial data boundaries", () => {
  it("places all 30 proposal pairs as separate talks and workshops", () => {
    const sessions = validateSessions(data.sessions);
    const pairs = new Map<string, typeof sessions>();
    for (const session of sessions) {
      expect(session.pairId).toBeDefined();
      pairs.set(session.pairId!, [
        ...(pairs.get(session.pairId!) ?? []),
        session,
      ]);
    }
    expect(sessions).toHaveLength(60);
    expect([...pairs.keys()].sort()).toEqual(
      Array.from(
        { length: 30 },
        (_, i) => `P${String(i + 1).padStart(2, "0")}`,
      ),
    );
    for (const pair of pairs.values()) {
      expect(pair).toHaveLength(2);
      expect(pair.map((s) => s.format.join("+")).sort()).toEqual([
        "talk",
        "workshop",
      ]);
      expect(new Set(pair.map((s) => s.track)).size).toBe(1);
      if (pair.every((session) => session.status === "proposed")) {
        expect(new Set(pair.map(sessionMonth)).size).toBe(1);
      }
      expect(Math.abs(pair[0].editorialOrder - pair[1].editorialOrder)).toBe(1);
    }
  });
  it("keeps proposals out of next event", () =>
    expect(nextEvent(validateSessions([proposal]), 0)).toBeUndefined());
  it("rejects duplicate IDs, private fields and invented proposal days", () => {
    expect(() => validateSessions([proposal, proposal])).toThrow("Duplicate");
    expect(() =>
      validateSessions([{ ...proposal, presenter: "Name" }]),
    ).toThrow();
    expect(() =>
      validateSessions([
        { ...proposal, startsAt: "2026-10-05T12:00:00+02:00" },
      ]),
    ).toThrow();
  });
  it("requires a real offset date for scheduled events and the season range", () => {
    expect(() => validateSessions([event("2026-10-05T12:00:00")])).toThrow();
    expect(() => validateSessions([event("2026-02-30T12:00:00Z")])).toThrow();
    expect(() => validateSessions([event("2027-07-01T12:00:00Z")])).toThrow();
  });
  it("places dates in Luxembourg, including month boundaries and DST", () => {
    expect(
      sessionMonth(validateSessions([event("2026-09-30T23:00:00Z")])[0]),
    ).toBe("2026-10");
    expect(
      sessionMonth(validateSessions([event("2027-03-31T22:30:00Z")])[0]),
    ).toBe("2027-04");
  });
  it("selects the earliest future scheduled event and advances at its start", () => {
    const list = validateSessions([
      event("2026-10-05T12:00:00+02:00"),
      { ...event("2026-10-06T12:00:00+02:00"), id: "second" },
      { ...event("2026-10-04T12:00:00+02:00", "cancelled"), id: "cancelled" },
    ]);
    expect(nextEvent(list, Date.parse("2026-10-05T09:59:59Z"))?.id).toBe(
      "test-talk",
    );
    expect(nextEvent(list, Date.parse("2026-10-05T10:00:00Z"))?.id).toBe(
      "second",
    );
  });
  it("requires exactly one placement for cancelled records", () => {
    const { targetMonth, ...rest } = proposal;
    expect(() =>
      validateSessions([{ ...rest, status: "cancelled" }]),
    ).toThrow();
    expect(() =>
      validateSessions([
        { ...event("2026-10-05T10:00:00Z", "cancelled"), targetMonth },
      ]),
    ).toThrow();
  });
});

describe("season index editorial metadata", () => {
  it("rejects missing, orphaned and invalid topic descriptions", () => {
    const sessions = validateSessions(data.sessions);
    expect(Object.keys(validateTopics(data.topics, sessions))).toHaveLength(30);
    const { P01, ...missing } = data.topics;
    expect(() => validateTopics(missing, sessions)).toThrow(
      "Missing topic metadata: P01",
    );
    expect(() =>
      validateTopics({ ...data.topics, P99: P01 }, sessions),
    ).toThrow("Topic without sessions: P99");
    expect(() =>
      validateTopics(
        { ...data.topics, P01: { ...P01, symbol: "unknown" } },
        sessions,
      ),
    ).toThrow();
  });
});
