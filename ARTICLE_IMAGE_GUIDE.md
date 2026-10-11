# Article image guide

The redesigned article template supports these optional front matter fields:

```yaml
image: /assets/images/uploads/example.jpg
image_alt: "Descriptive alt text for the article image"
image_caption: "Short factual caption for the image."
```

If `image` is empty, the article simply renders without a cover image.

The same `image` is also used as the Open Graph / Twitter share image.

For images inserted in the article body, Markdown remains supported:

```markdown
![Descriptive alt text](/assets/images/uploads/example-detail.jpg)
```

Or use HTML when you need a visible caption:

```html
<figure>
  <img src="/assets/images/uploads/example-detail.jpg" alt="Descriptive alt text">
  <figcaption>Short factual caption.</figcaption>
</figure>
```
