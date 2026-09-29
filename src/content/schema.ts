import { z } from "zod";
import { months, sessionMonth } from "./model";
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);
export const seasonSchema = z.strictObject({
  id: z.literal("2026-2027"),
  startMonth: z.literal("2026-10"),
  endMonth: z.literal("2027-06"),
  editorialStatus: z.enum(["draft", "reviewed"]),
});
const base = {
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  pairId: z
    .string()
    .regex(/^P\d{2}$/)
    .optional(),
  title: z.string().trim().min(1),
  summary: z.string().trim().min(1),
  track: z.enum(["foundations", "engineering", "deep-dive"]),
  domain: z.enum([
    "understand-ai",
    "build-with-ai",
    "develop-with-ai",
    "operate-ai",
    "frontier",
  ]),
  format: z
    .array(z.enum(["talk", "workshop", "demo", "lab", "discussion"]))
    .min(1),
  location: z.string().trim().min(1).optional(),
  editorialOrder: z.number().int().nonnegative(),
};
const instant = z.iso.datetime({ offset: true });
export const sessionSchema = z.discriminatedUnion("status", [
  z.strictObject({
    ...base,
    status: z.literal("proposed"),
    targetMonth: month,
  }),
  z.strictObject({
    ...base,
    status: z.literal("scheduled"),
    startsAt: instant,
  }),
  z.strictObject({
    ...base,
    status: z.literal("completed"),
    startsAt: instant,
  }),
  z
    .strictObject({
      ...base,
      status: z.literal("cancelled"),
      startsAt: instant.optional(),
      targetMonth: month.optional(),
      reason: z.string().trim().min(1).optional(),
    })
    .refine(
      (s) => Boolean(s.startsAt) !== Boolean(s.targetMonth),
      "A cancellation needs exactly one date or target month",
    ),
]);
export type Session = z.infer<typeof sessionSchema>;
export type Season = z.infer<typeof seasonSchema>;
export function validateSessions(records: unknown[]): Session[] {
  const parsed = records.map((r) => sessionSchema.parse(r));
  const seen = new Set<string>();
  for (const s of parsed) {
    if (seen.has(s.id)) throw new Error(`Duplicate session ID: ${s.id}`);
    seen.add(s.id);
    if (!months.includes(sessionMonth(s)))
      throw new Error(`Session outside the season: ${s.id}`);
  }
  return parsed.sort(
    (a, b) =>
      sessionMonth(a).localeCompare(sessionMonth(b)) ||
      ("startsAt" in a && a.startsAt && "startsAt" in b && b.startsAt
        ? Date.parse(a.startsAt) - Date.parse(b.startsAt)
        : 0) ||
      a.editorialOrder - b.editorialOrder ||
      a.id.localeCompare(b.id),
  );
}
