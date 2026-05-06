Pueblo de Palmas Static Website — V16

Deployment notes:
- This package uses stable production filenames: index.html, properties.html, available-lots.html, styles.css, site.js, etc.
- Upload the CONTENTS of this folder to the GitHub repository root.
- Because filenames are stable, new uploads should replace the prior files cleanly.
- GitHub Pages should be set to: Deploy from a branch → main → / (root).
- The homepage loads from index.html automatically.

What changed in V16:
- Stable production naming so future uploads overwrite old files instead of creating version clutter.
- Repaired missing Milanos Phase III plat thumbnail.
- Added stronger mobile polish and safer fallback behavior for broken images.
- Improved property cards, plat/map presentation, lot-finder behavior, and buyer CTA flow.
- Reduced public-facing wording that made the site feel like a prototype.

Recommended workflow now:
1. Delete old versioned HTML files from the repository if you want a clean repo.
2. Upload all files from this V16 folder.
3. Commit changes.
4. Wait for GitHub Pages to finish deploying.
5. Open the GitHub Pages URL and hard-refresh.
