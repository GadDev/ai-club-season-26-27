import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [360, 1440]) {
  test(`programmes page lists all reference curricula and is accessible at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("./?page=programmes");

    await expect(
      page.getByRole("heading", { level: 1, name: "Reference Programmes" }),
    ).toBeVisible();

    await expect(
      page
        .getByRole("navigation", { name: "Main" })
        .getByRole("link", { name: "Programmes", exact: true }),
    ).toHaveAttribute("aria-current", "page");

    await expect(page.locator(".programme")).toHaveCount(9);
    await expect(
      page.getByRole("heading", { name: "AI Engineering Foundations" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Future of Software Engineering" }),
    ).toBeVisible();

    // Each programme's season narrative runs October through June.
    const firstMonths = page
      .locator(".programme")
      .first()
      .locator(".programme-month-name");
    await expect(firstMonths).toHaveCount(9);
    await expect(firstMonths.first()).toHaveText("October");
    await expect(firstMonths.last()).toHaveText("June");

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);

    const violations = (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations;
    expect(violations).toEqual([]);

    await page.screenshot({
      path: `test-results/programmes-${width}.png`,
      fullPage: false,
    });
  });
}
