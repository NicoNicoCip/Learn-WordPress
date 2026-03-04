# Lesson 03: The WordPress Dashboard Tour

## Objectives
- Navigate the WordPress admin dashboard confidently
- Understand what each section of the dashboard does
- Customize the dashboard to show useful information
- Know where to find everything you need

---

## Accessing the Dashboard

1. Start your site in Local WP
2. Click **"WP Admin"** or navigate to `http://learning-wordpress.local/wp-admin/`
3. Log in with your credentials (`admin` / `admin`)

The first thing you see after logging in is the **Dashboard Home**.

---

## Dashboard Home Screen

The Dashboard home shows a collection of **widgets** (information panels):

### Welcome Panel
- Quick links to customize your site, write a post, manage widgets, etc.
- You can dismiss this by clicking "Dismiss" in the top-right of the panel

### At a Glance
- Shows how many posts, pages, and comments your site has
- Shows your current theme and WordPress version
- Quick snapshot of your site's content

### Activity
- Shows recently published posts
- Shows recent comments awaiting moderation

### Quick Draft
- A mini editor to quickly jot down a post idea (saves as a draft)

### WordPress Events and News
- Upcoming WordPress community events
- Latest news from WordPress.org

### Customizing the Dashboard
- Click **"Screen Options"** (top-right corner) to show/hide widgets
- Drag and drop widgets to rearrange them
- Most professionals hide everything except "At a Glance" and "Activity"

---

## The Admin Sidebar - Section by Section

The left sidebar is your main navigation. Let's go through each item:

### 1. Dashboard
- **Home** — the main dashboard screen (what we just covered)
- **Updates** — shows available updates for WordPress core, themes, and plugins

### 2. Posts
Where you manage **blog posts** (date-based, chronological content).
- **All Posts** — list of all posts, with options to edit, trash, or bulk-edit
- **Add New Post** — create a new blog post
- **Categories** — organize posts into categories (e.g., "News", "Tutorials")
- **Tags** — add keyword tags to posts for further organization

### 3. Media
The **Media Library** — all uploaded files (images, PDFs, videos, audio).
- **Library** — browse all uploaded media in grid or list view
- **Add New Media File** — upload new files
- You can also upload media directly when editing a post or page

### 4. Pages
Where you manage **static pages** (About, Contact, Services, etc.).
- **All Pages** — list of all pages
- **Add New Page** — create a new page
- Pages don't have categories or tags — they're standalone content

### 5. Comments
Manage comments left on your blog posts.
- Approve, reply to, edit, spam, or trash comments
- Set comment moderation rules in Settings → Discussion

### 6. Appearance
Controls how your site **looks**.
- **Themes** — install, activate, and manage themes
- **Customize** — the WordPress Customizer (live preview of changes)
- **Widgets** — manage sidebar and footer content blocks
- **Menus** — create and manage navigation menus
- **Theme File Editor** — edit theme code directly (use with caution!)

### 7. Plugins
Manage site **functionality**.
- **Installed Plugins** — see all plugins, activate/deactivate them
- **Add New Plugin** — search and install plugins from the WordPress repository
- **Plugin File Editor** — edit plugin code directly (don't use this unless you know what you're doing)

### 8. Users
Manage **user accounts** and roles.
- **All Users** — list of all users on the site
- **Add New User** — create a new user account
- **Profile** — edit your own profile (display name, email, password, etc.)

### 9. Tools
Utility features.
- **Available Tools** — links to press-this and other tools
- **Import** — import content from other platforms (Blogger, Tumblr, etc.)
- **Export** — export your WordPress content as XML
- **Site Health** — diagnostic information about your site

### 10. Settings
Configure how your site **behaves**.
- **General** — site title, tagline, URL, timezone, date format
- **Writing** — default post category, post format
- **Reading** — what your homepage displays, how many posts to show
- **Discussion** — comment settings and moderation rules
- **Media** — default image sizes
- **Permalinks** — URL structure for your posts and pages
- **Privacy** — privacy policy page settings

---

## The Admin Bar (Top Bar)

The dark bar at the top of every page (also visible on the front-end when logged in):

| Item | What It Does |
|------|-------------|
| **WordPress logo** | Links to WordPress.org, documentation, and forums |
| **Site name** | Hover to get a link to visit the front-end |
| **Updates** | Shows if updates are available (number badge) |
| **Comments** | Shows pending comments (number badge) |
| **+ New** | Quick-create a new post, page, media, or user |
| **Your name (right side)** | Edit profile, log out |

---

## Screen Options & Help

Two often-overlooked features at the **top-right** of every admin page:

### Screen Options
- Click to show/hide columns and elements on the current page
- Different options appear depending on which page you're on
- Example: On the Posts list, you can show/hide columns like Author, Categories, Tags, Date

### Help
- Click for context-sensitive help about the current page
- Useful when you forget what a specific setting does

---

## Keyboard Shortcuts

WordPress has some handy keyboard shortcuts:

| Shortcut | Action |
|----------|--------|
| `Alt + Shift + N` | New post (in the editor) |
| `/` | Open the block inserter (in Gutenberg editor) |

For comment moderation, enable shortcuts in **Users → Profile → Keyboard Shortcuts**.

---

## Exercises

1. **Explore every sidebar item**: Click through every section in the left sidebar. Don't change anything — just look at what's available.

2. **Customize the dashboard**: Click "Screen Options" on the Dashboard home and hide everything except "At a Glance" and "Activity".

3. **Check the Settings pages**: Visit each page under Settings (General, Writing, Reading, Discussion, Media, Permalinks, Privacy) and read through the options. Note what each one controls.

4. **Visit your site from the admin bar**: Hover over your site name in the top bar and click "Visit Site". Then click your site name again to go back to the dashboard.

5. **Check Site Health**: Go to **Tools → Site Health** and see what it reports. This will be more useful later, but get familiar with where it is.

---

## Key Takeaways

- The **left sidebar** is your main navigation — it contains everything
- **Posts** are for blog content, **Pages** are for static content
- **Appearance** controls how your site looks (themes, menus, widgets)
- **Plugins** add functionality
- **Settings** configures behavior (especially Permalinks and Reading)
- **Screen Options** (top-right) lets you customize every admin page
- The **admin bar** provides quick access to common actions
- You can dismiss the Welcome panel and rearrange dashboard widgets

---

**Next Lesson:** [Lesson 04 - Posts vs Pages](lesson-04-posts-vs-pages.md)
