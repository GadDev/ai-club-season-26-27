import { describe, expect, it } from "vitest";
import catalogData, { type CatalogTopic } from "../src/content/catalog";
import { catalogProgrammes } from "../src/content/catalog-programmes";

const catalog: CatalogTopic[] = catalogData;

describe("topic catalog reference data", () => {
  it("contains the complete 693-topic reference catalog with stable unique IDs", () => {
    expect(catalog).toHaveLength(693);
    expect(new Set(catalog.map((topic) => topic.id)).size).toBe(693);
  });

  it("keeps the three tracks balanced and every topic informative", () => {
    const counts = catalog.reduce<Record<string, number>>((result, topic) => {
      result[topic.track] = (result[topic.track] ?? 0) + 1;
      return result;
    }, {});

    expect(counts).toEqual({
      Advanced: 231,
      Foundation: 231,
      Practitioner: 231,
    });

    for (const topic of catalog) {
      expect(topic.id).toMatch(/^AI-[A-Z]{3}-\d{3}$/);
      expect(topic.title.trim().length).toBeGreaterThan(0);
      expect(topic.description.trim().length).toBeGreaterThan(20);
      expect(topic.category.trim().length).toBeGreaterThan(0);
      expect(topic.format.trim().length).toBeGreaterThan(0);
      expect(topic.programmes.length).toBeGreaterThan(0);
      expect(topic.months.length).toBeGreaterThan(0);
    }
  });
});

describe("catalog programmes", () => {
  it("describes exactly the nine reference programmes referenced by the topics", () => {
    expect(catalogProgrammes).toHaveLength(9);
    expect(new Set(catalogProgrammes.map((p) => p.code)).size).toBe(9);
    expect(catalogProgrammes.map((p) => p.code).sort()).toEqual(
      Array.from({ length: 9 }, (_, i) => `P${i + 1}`).sort(),
    );

    const programmeNames = new Set(catalogProgrammes.map((p) => p.name));
    const topicProgrammeNames = new Set(catalog.flatMap((t) => t.programmes));
    expect(programmeNames).toEqual(topicProgrammeNames);

    for (const programme of catalogProgrammes) {
      expect(programme.tagline.trim().length).toBeGreaterThan(0);
      expect(programme.description.trim().length).toBeGreaterThan(20);
      expect(
        catalog.some((topic) => topic.programmes.includes(programme.name)),
      ).toBe(true);
    }
  });

  it("gives every programme a nine-month October-to-June season narrative", () => {
    const expectedMonths = [
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
    ];

    for (const programme of catalogProgrammes) {
      expect(programme.narrative.map((m) => m.month)).toEqual(expectedMonths);
      for (const month of programme.narrative) {
        expect(month.hook.trim().length).toBeGreaterThan(0);
        expect(month.topic.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
