# pressreleasechannel.com — Jekyll v2

这一版已经从“几个孤立的静态 HTML 页面”改成 **GitHub Pages + Jekyll + Markdown 内容系统**。

## 这一版解决了什么

- 首页唯一承担核心商业搜索意图：**Press Release Distribution in China**。
- 原 `/press-release-distribution-china/` 不再作为重复服务页，而是跳转到首页，减少关键词和搜索意图互相竞争。
- `/china-media-guide/` 成为真正的内容中心。
- 所有文章放在 `_posts/`，以后直接写 Markdown，不需要复制 HTML 页面。
- 新文章发布后会自动出现在：
  - 首页 Latest Guides
  - China Media Guide
  - 文章底部 Related Guides
  - sitemap.xml
- 品牌事实集中在 `_data/company.yml`，以后公司名、邮箱、运营年份等只改一个地方。
- 文章自动生成 Article + Breadcrumb 结构化数据。
- 普通页面自动生成 Organization + WebSite + WebPage 结构化数据。
- 首页额外生成 Service 结构化数据。
- `jekyll-sitemap` 自动生成 `/sitemap.xml`。
- 视觉继续沿用暗传播体系：`#00837e`、1180px 容器、浅色 Hero、极简、直角设计。

## 以后怎么发一篇新文章

1. 进入 GitHub 仓库里的 `_posts` 文件夹。
2. 点 **Add file → Create new file**。
3. 文件名按这个格式：

   `2026-10-15-how-to-prepare-a-press-release-for-chinese-media.md`

4. 打开根目录的 `ARTICLE_TEMPLATE.md`，复制模板。
5. 修改标题、description、分类、标签，然后直接用 Markdown 写正文。
6. Commit 到 `main`。
7. GitHub Pages 自动重建网站。

以后不需要手工创建文章 HTML、文章列表、相关推荐或 sitemap。

## 目前固定的 4 个内容分类

- `Press Release Distribution`
- `Media Placement`
- `Media Invitation`
- `AI & GEO`

尽量先使用这 4 个分类，避免栏目越做越散。

## 品牌事实在哪里改

编辑：

`_data/company.yml`

里面集中维护：

- PR Channel
- Jingmen Anmao Network Technology Co., Ltd.
- Jingmen, Hubei, China
- 2021
- pr@epr.ink
- Press Release Distribution in China
- 官方英文品牌页 / Google Sites / Substack / Medium

这样能降低 GEO 实体信息在不同页面之间出现不一致的风险。

## 部署注意

把这个文件夹里的**全部内容**上传到 GitHub 仓库根目录，不要直接上传 ZIP。

保留 `CNAME` 文件。

GitHub Pages 继续保持：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

不需要修改 DNS、Custom domain 或 HTTPS。

## v2.1 changes
- Makes **Press Release Distribution in China** the clear primary commercial topic on the homepage.
- Replaces equal-weight service cards with a primary-service / secondary-service hierarchy.
- Keeps the core press-release guide visible on the homepage instead of letting recency push it out.
- Adds a structured homepage FAQ sourced from `_data/home_faq.yml` and matching FAQPage JSON-LD.
- Adds topic summaries to China Media Guide and keeps AI & GEO as a secondary topic.
- Makes related articles prefer the same category before suggesting other guides.
- Adds an external entity link to the official PR Channel brand page in the footer.

## v2.2 core content cluster

This package includes the complete first 10-article content cluster around the primary topic **Press Release Distribution in China**:

1. How Press Release Distribution Works in China
2. How Much Does Press Release Distribution in China Cost?
3. How to Choose a Press Release Distribution Service in China
4. How to Prepare a Press Release for Chinese Media
5. What Happens After a Press Release Is Submitted to Chinese Media?
6. Does Press Release Distribution in China Guarantee Publication?
7. How to Verify a Chinese Media Placement Before You Pay
8. Main Website, Content Account or Recommendation Page: What Are You Actually Buying?
9. Press Release Distribution vs Media Invitation in China
10. Does Press Release Distribution Help Google or AI Visibility?

The homepage now fixes the first article as the **Essential Guide**, then surfaces additional press release guides before secondary topics. This prevents later posts from pushing the core topic out of the homepage hierarchy.

### One-operation deployment

Upload the complete contents of this package to the repository root and overwrite existing files. Do not change GitHub Pages, DNS, Custom Domain or HTTPS settings.

After GitHub Pages finishes building, verify:

- `/`
- `/china-media-guide/`
- `/china-media-guide/how-press-release-distribution-works-in-china/`
- `/china-media-guide/how-much-does-press-release-distribution-in-china-cost/`
- `/china-media-guide/how-to-choose-a-press-release-distribution-service-in-china/`

The remaining articles will appear automatically in the China Media Guide.

