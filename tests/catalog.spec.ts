import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 1440]) {
  test(`catalog is complete, filterable and accessible at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("./?page=catalog");

    await expect(
      page.getByRole("heading", { level: 1, name: "Topic Catalog" }),
    ).toBeVisible();
    await expect(page.locator(".catalog-topic")).toHaveCount(693);
    await expect(page.getByText("Showing 693 / 693 topics")).toBeVisible();
    await expect(page.getByRole("link", { name: "Catalog" })).toHaveAttribute(
      "aria-current",
      "page",
    );

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);

    const search = page.getByLabel("Find a topic");
    await search.fill("AI-AGT-001");
    await expect(page.locator(".catalog-topic")).toHaveCount(1);
    await expect(
      page.getByRole("heading", {
        name: "Agent Design Patterns: Agent orchestration architecture clinic",
      }),
    ).toBeVisible();

    await search.fill("");
    await page.getByRole("button", { name: "Foundation" }).click();
    await expect(page.locator(".catalog-topic")).toHaveCount(231);
    await expect(page.getByText("Showing 231 / 693 topics")).toBeVisible();

    const violations = (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations;
    expect(violations).toEqual([]);

    await page.screenshot({
      path: `test-results/catalog-${width}.png`,
      fullPage: false,
    });
  });
}
