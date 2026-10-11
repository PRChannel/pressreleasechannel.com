PR Channel article layout hotfix

Cause fixed:
_config.yml provides /assets/img/og-default.svg as the default social image for posts.
The article-v3 template mistakenly treated that default social image as a visible cover image.

Upload and replace only:
_layouts/post.html

Do NOT replace admin/config.yml. Your Decap Turbo Site ID remains untouched.

After GitHub Pages rebuilds:
- Posts without a manually selected image: no large cover image is shown.
- Related posts without a manually selected image: compact PR placeholder is shown.
- Posts with a real image selected in CMS: that image is shown as the article cover.
