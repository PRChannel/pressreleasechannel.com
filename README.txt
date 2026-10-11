PR Channel Featured Image logic fix

Upload these paths to the same locations in the GitHub repository:
- _layouts/post.html
- _includes/head.html
- _includes/resolve-content-image.html (new)
- admin/config.yml
- admin/index.html

Final behavior:
1. Featured Image is metadata only. It is NOT rendered as a separate image on an article page.
2. Body images remain exactly where they were inserted in the article. Nothing is removed or moved.
3. If Featured Image is set manually, lists/social previews use it.
4. If Featured Image is empty, lists/social previews automatically use the first image found in the article body.
5. Clearing Featured Image in Decap CMS removes the stale `image` key on the next save.

For an article that currently has a stale image value:
- upload this patch
- reopen the article in /admin/
- click Remove image (if shown) or leave Featured Image empty
- save/publish once
The preSave cleanup will remove the old `image:` front-matter key.
