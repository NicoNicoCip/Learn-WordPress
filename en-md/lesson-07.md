# Lesson 07: WordPress Settings Deep Dive

## Objectives
- Configure all essential WordPress settings correctly
- Set up proper permalinks (URL structure)
- Configure reading settings (homepage display)
- Understand each settings page and when to change it

---

## Settings → General

**Path:** Settings → General

| Setting | What It Does | Recommended |
|---------|-------------|-------------|
| **Site Title** | Your website's name (appears in browser tab, header) | Your business/site name |
| **Tagline** | A short description of your site | A brief slogan or description |
| **WordPress Address (URL)** | Where WordPress files are installed | Don't change this! |
| **Site Address (URL)** | The public URL visitors use | Don't change this! |
| **Administration Email** | Email for admin notifications | Your real email |
| **Membership** | Allow anyone to register | Usually unchecked (unless you need user registration) |
| **New User Default Role** | Role assigned to new registrants | Subscriber (safest) |
| **Site Language** | Language for the admin interface | Your preferred language |
| **Timezone** | Used for scheduling posts | Your timezone |
| **Date Format** | How dates are displayed | Your preference |
| **Time Format** | How times are displayed | Your preference |

### Action Items:
1. Set your **Site Title** to something meaningful
2. Write a clear **Tagline** (or leave it empty — some themes display "Just another WordPress site" if you don't change it!)
3. Set your **Timezone**
4. **Never change** the WordPress Address or Site Address unless you know exactly what you're doing — this can break your site

---

## Settings → Writing

**Path:** Settings → Writing

| Setting | What It Does | Recommended |
|---------|-------------|-------------|
| **Default Post Category** | Category for posts when none is selected | Change from "Uncategorized" to your general category |
| **Default Post Format** | Post format (Standard, Video, Quote, etc.) | Standard |

This page is simple. The main action:
- Set your **Default Post Category** to whatever you renamed "Uncategorized" to

---

## Settings → Reading

**Path:** Settings → Reading

This is one of the **most important** settings pages.

### Your Homepage Displays

| Option | What It Does |
|--------|-------------|
| **Your latest posts** | Homepage shows a list of your recent blog posts (like a traditional blog) |
| **A static page** | Homepage shows a specific page you created (like a business website) |

**For most professional sites, choose "A static page":**
1. Select **"A static page"**
2. **Homepage**: Select the page to use as your homepage (create a "Home" page first if you haven't)
3. **Posts page**: Select a page to use as your blog listing (create a "Blog" page — it can be empty, WordPress will populate it automatically)

### Other Reading Settings

| Setting | What It Does | Recommended |
|---------|-------------|-------------|
| **Blog pages show at most** | Number of posts per page | 10 is fine |
| **Syndication feeds show** | Number of items in RSS feed | 10 is fine |
| **For each post in a feed, include** | Full text or summary in RSS | Summary |
| **Search engine visibility** | Discourage search engines from indexing | **Uncheck this!** (Unless you're in development and don't want Google to find your site yet) |

### Critical Warning!
The "Search engine visibility" checkbox ("Discourage search engines from indexing this site") should be:
- **Checked** while you're developing locally or building the site
- **Unchecked** when the site goes live — forgetting this means Google won't index your site!

---

## Settings → Discussion

**Path:** Settings → Discussion

Controls **comments** and user interaction.

### Key Settings:

| Setting | What It Does | Recommended for Business Sites |
|---------|-------------|-------------------------------|
| **Allow people to submit comments on new posts** | Enable/disable comments globally | Uncheck if you don't want a blog with comments |
| **Comment author must fill out name and email** | Require identification | Check |
| **Users must be registered and logged in to comment** | Restrict who can comment | Usually uncheck |
| **Automatically close comments on posts older than X days** | Auto-close old discussions | 30-90 days is common |
| **Comment must be manually approved** | Moderate all comments | Check — prevents spam |
| **Comment moderation** | Hold comments with certain content | Default is fine |
| **Disallowed comment keys** | Block comments with certain words | Add spam words as needed |

### If You Don't Want Comments at All:
1. Uncheck "Allow people to submit comments on new posts"
2. This applies to **new** posts only — existing posts keep their current setting
3. To disable comments on existing posts, bulk-edit them (Posts → All Posts → Select All → Bulk Actions → Edit → Comments: Do not allow)

---

## Settings → Media

**Path:** Settings → Media

Controls the **image sizes** WordPress generates when you upload.

| Setting | Default | Purpose |
|---------|---------|---------|
| **Thumbnail size** | 150 × 150 | Small previews |
| **Medium size** | 300 × 300 max | In-content images |
| **Large size** | 1024 × 1024 max | Full-width images |

**Recommendation:** Leave these at defaults unless your theme or design requires specific sizes.

### Organize Media
- **"Organize my uploads into month- and year-based folders"** — Keep this checked. It creates folders like `/uploads/2026/03/` which prevents having thousands of files in one directory.

---

## Settings → Permalinks (Critical!)

**Path:** Settings → Permalinks

This controls the **URL structure** of your site. This is one of the first things you should set up.

### Available Structures:

| Structure | Example URL | Recommended? |
|-----------|------------|--------------|
| **Plain** | `?p=123` | Never — ugly and bad for SEO |
| **Day and name** | `/2026/03/02/sample-post/` | For news sites |
| **Month and name** | `/2026/03/sample-post/` | For blogs |
| **Numeric** | `/archives/123` | Never |
| **Post name** | `/sample-post/` | **Yes — use this one!** |
| **Custom** | You define it | For specific needs |

### Set It Now:
1. Select **"Post name"**
2. Click **"Save Changes"**

**Why "Post name"?**
- Clean, readable URLs: `yoursite.com/about-us/` instead of `yoursite.com/?p=5`
- Better for SEO — keywords in the URL help search engines
- Better for sharing — people can read and trust the URL
- Short and professional

### Important Warning:
**Change permalinks FIRST, before creating lots of content.** Changing them later can break existing links and hurt SEO. On a live site with existing content, changing permalinks requires setting up redirects.

---

## Settings → Privacy

**Path:** Settings → Privacy

- Select or create a **Privacy Policy page**
- WordPress can generate a template privacy policy for you
- Required by law in many regions (GDPR in Europe, CCPA in California)

### Action Items:
1. Click **"Create a new Privacy Policy page"** if you haven't already
2. Edit the generated page to match your site's actual practices
3. Or select an existing privacy policy page

---

## First-Time Setup Checklist

Here's the order to configure a new WordPress site:

1. **Settings → General**
   - Set Site Title and Tagline
   - Set Timezone
   - Remove "Just another WordPress site" from Tagline

2. **Settings → Permalinks**
   - Select "Post name" → Save Changes

3. **Settings → Reading**
   - Set "A static page" for homepage (after creating Home and Blog pages)
   - Check "Discourage search engines" while developing

4. **Settings → Discussion**
   - Configure comment settings based on your needs

5. **Settings → Writing**
   - Set Default Post Category

6. **Settings → Media**
   - Usually leave defaults

7. **Settings → Privacy**
   - Create or assign a privacy policy page

---

## Exercises

1. **Configure General settings**: Set your site title, tagline, and timezone. Remove "Just another WordPress site" if it's still there.

2. **Set Permalinks to "Post name"**: This is critical — do it now before creating lots of content.

3. **Set up your homepage**:
   - Create a page called "Home" (if you haven't already)
   - Create a page called "Blog"
   - Go to Settings → Reading → select "A static page"
   - Set Homepage to "Home" and Posts page to "Blog"
   - Visit your site to see the change

4. **Configure comments**: Decide if you want comments on your site. If not, uncheck the setting in Discussion. If yes, enable moderation.

5. **Check search engine visibility**: Make sure it's checked while developing locally (we'll uncheck it when going live).

6. **Create a privacy policy**: Use the Settings → Privacy page to create one.

---

## Key Takeaways

- **Set Permalinks to "Post name" immediately** — do this before creating content
- **Set a static homepage** in Reading settings for professional/business sites
- **Remove "Just another WordPress site"** from your tagline
- **Check "Discourage search engines"** during development, uncheck when going live
- **Enable comment moderation** if you allow comments
- The most critical settings pages are: **Permalinks**, **Reading**, and **General**
- Always configure settings **before** building out your content

---

**Next Module:** [Module 2 - Themes & Appearance](../Module-02-Themes/lesson-08-understanding-themes.md)
