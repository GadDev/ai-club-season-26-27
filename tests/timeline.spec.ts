import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
for (const width of [360, 768, 1440]) {
  test(`timeline is readable and navigable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("./");
    await expect(
      page.getByRole("heading", { name: "No date confirmed yet." }),
    ).toBeVisible();
    await expect(page.locator(".session-card")).toHaveCount(16);
    await expect(page.locator(".month-chapter")).toHaveCount(9);
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
    expect(errors).toEqual([]);
    await page.screenshot({
      path: `test-results/timeline-${width}.png`,
      fullPage: true,
    });
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "Skip to the season" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#season")).toBeFocused();
    if (width === 360) {
      await page
        .getByRole("navigation", { name: "Jump to month" })
        .getByRole("link", { name: /Jun/ })
        .click();
      await expect(page).toHaveURL(/#month-2027-06$/);
      await expect(page.locator("#month-2027-06")).toBeFocused();
    }
  });
}
