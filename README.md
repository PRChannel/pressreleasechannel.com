# PR Channel / pressreleasechannel.com — Final SEO/GEO Structure

This package is the consolidated GitHub Pages + Jekyll site structure for pressreleasechannel.com.

## Core architecture

- `/` — Primary commercial intent: **Press Release Distribution in China**
- `/china-media-guide/` — Main knowledge hub
- `/china-media-guide/press-release-distribution/` — Core topic hub
- `/china-media-guide/media-placement-verification/` — Media placement and verification hub
- `/china-media-guide/media-invitation/` — Media invitation hub
- `/china-media-guide/search-ai-visibility/` — Secondary search / AI visibility hub
- `/how-we-evaluate-chinese-media-placements/` — Stable PR Channel methodology page
- `/author/yang-xiaole/` — Author entity page
- `/about/` — Brand/operator fact page

## Content included

The `_posts/` directory contains 20 articles:
- 10 foundational China media / distribution guides
- 10 buyer-intent guides for overseas companies

Each article is assigned to a topic hub. The newer buyer-oriented articles use `buyer_intent: true`.

## Important publishing rule

Future articles should normally be added only to `_posts/`. Do not upload a full-site ZIP for routine article publishing.

Use quoted YAML values for `title` and `description`.

## Development stop rule

The architecture should now be treated as stable. For the next 30–60 days, only:
- fix real bugs;
- publish content;
- improve contextual internal links;
- build legitimate external mentions;
- monitor Google/Bing indexing, impressions and queries;
- test AI retrieval/citation.

Do not keep changing navigation, taxonomy or URL structure without evidence from actual data.
