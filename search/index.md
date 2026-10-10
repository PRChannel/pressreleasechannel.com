---
layout: default
title: Search Guides & Articles
description: Search PR Channel guides, articles and research before creating or publishing a new topic.
permalink: /search/
search_category: Search
---
<section class="page-hero search-page-hero">
  <div class="container">
    <nav class="breadcrumbs"><a href="/">Home</a> → Search</nav>
    <span class="eyebrow">Content search</span>
    <h1>Search Guides & Articles</h1>
    <p class="lead">Search existing PR Channel content by topic, title or keyword. It is useful for finding a guide quickly and for checking whether a subject has already been covered before creating a new article.</p>
  </div>
</section>

<section class="section search-section">
  <div class="container search-container">
    <form class="site-search-form" role="search" data-site-search-form>
      <label for="site-search-input">Search PR Channel</label>
      <div class="site-search-input-wrap">
        <input id="site-search-input" name="q" type="search" autocomplete="off" spellcheck="false" placeholder="Try: media placement, pricing, editorial review..." data-site-search-input>
        <button type="submit">Search</button>
      </div>
      <p class="search-help">Title matches are ranked first, followed by descriptions, categories and article text.</p>
    </form>

    <div class="search-status" aria-live="polite" data-search-status>Start typing to search existing content.</div>
    <div class="search-results" data-search-results></div>

    <noscript>
      <p class="search-noscript">JavaScript is required for this on-site search. You can still browse all guides from the <a href="/china-media-guide/">China Media Guide</a>.</p>
    </noscript>
  </div>
</section>

<script src="/assets/js/search.js" defer></script>
