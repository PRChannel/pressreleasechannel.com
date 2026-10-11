# PR Channel CMS setup

The admin UI is already installed at `/admin/`.

## Recommended authentication: Decap Turbo + GitHub

1. Create a Decap Turbo organization.
2. Connect GitHub.
3. When installing the Turbo GitHub App, choose **Only select repositories** and select only `PRChannel/pressreleasechannel.com`.
4. Create one Turbo site:
   - Git provider: GitHub
   - Repository: `PRChannel/pressreleasechannel.com`
   - Branch: `main`
   - Config path: `admin/config.yml`
   - Admin interface URL: `https://pressreleasechannel.com/admin/`
5. Copy the Turbo Site ID.
6. Edit `admin/config.yml` and replace:

   `REPLACE_WITH_YOUR_DECAP_TURBO_SITE_ID`

   with the Site ID.
7. Commit. After GitHub Pages rebuilds, open `https://pressreleasechannel.com/admin/`.

## Security rules

- Never put your GitHub password in this repository.
- Never put a GitHub Personal Access Token in `admin/config.yml`.
- Never commit a GitHub OAuth client secret or API secret.
- GitHub credentials should only be entered on GitHub's own login/authorization screen.
- Restrict the GitHub App to this repository only.

## What the CMS can edit

- Articles in `_posts/`
- Article images in `assets/images/uploads/`
- Company information in `_data/company.yml`

Publishing an article creates a real Git commit. GitHub Pages then rebuilds the public site automatically.
