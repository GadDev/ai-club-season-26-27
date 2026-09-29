# Season grid review — 30 September 2026

The updated index restores the reference’s geometric symbols, condensed month headings, diagonal introductory arrow, and 15.5% desktop track column. Topic labels describe the actual 30 proposal pairs. Cells with two topics show both; their row grows to preserve readability instead of forcing the reference’s single-topic row height.

- [Desktop grid at 1672 CSS px](desktop.png)
- [Mobile selector and three track previews at 360 CSS px](mobile.png)

Screenshots are generated from the production build by `tests/timeline.spec.ts`. All nine browser checks and eight content tests passed locally, including accessibility/navigation at 360, 768, 1280 and 1440px. Hero dimensions and vector lettering also passed their existing checks.

To regenerate, run `npm run build && npm test && npm run test:e2e`; copy `test-results/season-grid-desktop.png` and `test-results/season-grid-mobile.png` here after visual inspection. These images document this review, rather than acting as automatic pixel baselines.
