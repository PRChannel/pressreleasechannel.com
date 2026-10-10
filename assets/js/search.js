(function () {
  'use strict';

  var form = document.querySelector('[data-site-search-form]');
  var input = document.querySelector('[data-site-search-input]');
  var status = document.querySelector('[data-search-status]');
  var results = document.querySelector('[data-search-results]');

  if (!form || !input || !status || !results) return;

  var index = [];
  var loaded = false;
  var loadError = false;

  function normalize(value) {
    return (value || '')
      .toString()
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9\u00c0-\u024f\u4e00-\u9fff]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function escapeHtml(value) {
    return (value || '').toString().replace(/[&<>"]/g, function (char) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char];
    });
  }

  function tokenise(query) {
    return normalize(query).split(' ').filter(function (token) { return token.length > 1; });
  }

  function includesAll(text, tokens) {
    return tokens.every(function (token) { return text.indexOf(token) !== -1; });
  }

  function scoreEntry(entry, query, tokens) {
    var title = normalize(entry.title);
    var description = normalize(entry.description);
    var category = normalize(entry.category);
    var content = normalize(entry.content);
    var fullQuery = normalize(query);
    var score = 0;

    if (!tokens.length) return -1;
    if (!includesAll(title + ' ' + description + ' ' + category + ' ' + content, tokens)) return -1;

    if (title === fullQuery) score += 500;
    if (title.indexOf(fullQuery) !== -1) score += 220;
    if (description.indexOf(fullQuery) !== -1) score += 90;
    if (category.indexOf(fullQuery) !== -1) score += 70;

    tokens.forEach(function (token) {
      if (title.indexOf(token) !== -1) score += 60;
      if (description.indexOf(token) !== -1) score += 24;
      if (category.indexOf(token) !== -1) score += 18;
      if (content.indexOf(token) !== -1) score += 4;
    });

    var titleTokenHits = tokens.filter(function (token) { return title.indexOf(token) !== -1; }).length;
    if (titleTokenHits === tokens.length) score += 110;

    return score;
  }

  function excerpt(entry, tokens) {
    var base = (entry.description || '').trim();
    if (base) return base;

    var text = (entry.content || '').replace(/\s+/g, ' ').trim();
    if (!text) return '';

    var normalizedText = normalize(text);
    var firstHit = -1;
    tokens.some(function (token) {
      var pos = normalizedText.indexOf(token);
      if (pos !== -1) { firstHit = pos; return true; }
      return false;
    });

    if (firstHit < 0) return text.slice(0, 220) + (text.length > 220 ? '…' : '');
    var start = Math.max(0, firstHit - 70);
    var segment = text.slice(start, start + 260);
    return (start > 0 ? '…' : '') + segment + (start + 260 < text.length ? '…' : '');
  }

  function render(query) {
    var tokens = tokenise(query);
    results.innerHTML = '';

    if (!query.trim()) {
      status.textContent = 'Start typing to search existing content.';
      return;
    }

    if (!loaded) {
      status.textContent = loadError ? 'Search index could not be loaded.' : 'Loading search index…';
      return;
    }

    var ranked = index.map(function (entry) {
      return {entry: entry, score: scoreEntry(entry, query, tokens)};
    }).filter(function (item) {
      return item.score >= 0;
    }).sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return (a.entry.title || '').localeCompare(b.entry.title || '');
    }).slice(0, 30);

    if (!ranked.length) {
      status.innerHTML = 'No results for <strong>“' + escapeHtml(query) + '”</strong>. Try fewer or broader words.';
      return;
    }

    status.innerHTML = '<strong>' + ranked.length + '</strong> result' + (ranked.length === 1 ? '' : 's') + ' for <strong>“' + escapeHtml(query) + '”</strong>';

    ranked.forEach(function (item) {
      var entry = item.entry;
      var article = document.createElement('article');
      article.className = 'search-result-item';
      article.innerHTML =
        '<div class="search-result-meta">' + escapeHtml(entry.category || entry.type || 'PR Channel') + (entry.date ? ' · ' + escapeHtml(entry.date) : '') + '</div>' +
        '<h2><a href="' + escapeHtml(entry.url) + '">' + escapeHtml(entry.title) + '</a></h2>' +
        '<p>' + escapeHtml(excerpt(entry, tokens)) + '</p>' +
        '<a class="search-result-link" href="' + escapeHtml(entry.url) + '">Open page →</a>';
      results.appendChild(article);
    });
  }

  function setQueryInUrl(query) {
    if (!window.history || !window.history.replaceState) return;
    var url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set('q', query.trim());
    else url.searchParams.delete('q');
    window.history.replaceState({}, '', url.toString());
  }

  var timer;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      setQueryInUrl(input.value);
      render(input.value);
    }, 120);
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    setQueryInUrl(input.value);
    render(input.value);
  });

  fetch('/search.json', {headers: {'Accept': 'application/json'}})
    .then(function (response) {
      if (!response.ok) throw new Error('Search index request failed');
      return response.json();
    })
    .then(function (data) {
      index = Array.isArray(data) ? data : [];
      loaded = true;
      var initial = new URLSearchParams(window.location.search).get('q') || '';
      if (initial) {
        input.value = initial;
        render(initial);
      }
    })
    .catch(function () {
      loadError = true;
      status.textContent = 'Search index could not be loaded. Please try again after the site finishes rebuilding.';
    });
})();
