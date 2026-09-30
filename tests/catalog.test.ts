import { describe, expect, it } from "vitest";
import catalogData, { type CatalogTopic } from "../src/content/catalog";

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
