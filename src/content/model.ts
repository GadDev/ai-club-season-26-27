import type { Session } from "./schema";
export type { Session } from "./schema";
export const tracks = [
  {
    id: "foundations",
    name: "Foundations",
    level: "Beginner",
    description: "Ideas, principles & context",
  },
  {
    id: "engineering",
    name: "Engineering",
    level: "Practitioner",
    description: "Tools, systems & practice",
  },
  {
    id: "deep-dive",
    name: "Deep Dive",
    level: "Advanced",
    description: "Research, architecture & trade-offs",
  },
] as const;
export const months = [
  "2026-10",
  "2026-11",
  "2026-12",
  "2027-01",
  "2027-02",
  "2027-03",
  "2027-04",
  "2027-05",
  "2027-06",
];
export function sessionMonth(s: Session) {
  if ("targetMonth" in s && s.targetMonth) return s.targetMonth;
  if (!("startsAt" in s) || !s.startsAt)
    throw new Error(`Missing placement: ${s.id}`);
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Europe/Luxembourg",
    year: "numeric",
    month: "2-digit",
  }).formatToParts(new Date(s.startsAt!));
  return `${parts.find((p) => p.type === "year")!.value}-${parts.find((p) => p.type === "month")!.value}`;
}
export function nextEvent(sessions: Session[], now: number) {
  return sessions
    .filter(
      (s): s is Extract<Session, { status: "scheduled" }> =>
        s.status === "scheduled" && Date.parse(s.startsAt) > now,
    )
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt))[0];
}
export const monthLabel = (m: string, short = false) =>
  new Intl.DateTimeFormat("en-GB", {
    month: short ? "short" : "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${m}-01T12:00:00Z`));
export const dateLabel = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Luxembourg",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(date));
