# CMS View Live fix

This update fixes **View Live** for Articles.

- `preview_path` now uses the article `url_slug`.
- All 20 existing posts were backfilled using their existing filename slug so their current public URLs do **not** change.
- An explicit `permalink` was added to existing posts to keep those URLs stable even if an article title is edited later.
- Decap Turbo authentication and the existing `turbo_site_id` are unchanged.

For a new article, enter a URL Slug such as:

`how-press-release-distribution-works-in-china`

Do not change it after the article is published.
