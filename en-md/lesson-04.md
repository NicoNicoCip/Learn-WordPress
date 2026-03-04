# Lesson 04: Posts vs Pages - When to Use Which

## Objectives
- Understand the fundamental difference between Posts and Pages
- Know when to use each one
- Create your first Post and your first Page
- Learn the Gutenberg block editor basics

---

## Posts vs Pages: The Core Difference

| Feature | Posts | Pages |
|---------|-------|-------|
| **Purpose** | Blog/news content — timely, date-based | Static content — evergreen, standalone |
| **Date** | Always have a published date | No visible date |
| **Categories/Tags** | Yes — can be organized and filtered | No — standalone |
| **Order** | Displayed newest-first automatically | Displayed in your custom order |
| **Comments** | Enabled by default | Disabled by default |
| **Author** | Shows author by default | Usually doesn't show author |
| **Appears in** | Blog feed, archives, RSS | Navigation menus, as standalone pages |
| **Examples** | News articles, blog posts, announcements | About, Contact, Services, Home, Privacy Policy |

### Simple Rule of Thumb
- **Would this content make sense with a date?** → It's a **Post**
- **Is this content meant to be permanent and findable via the menu?** → It's a **Page**

---

## When to Use Posts

Use posts when the content is:
- **Time-sensitive** — news, announcements, updates
- **Part of a series** — blog entries, tutorials, articles
- **Categorizable** — belongs in a category (e.g., "Company News", "Tips & Tricks")
- **Expected to grow** — you'll keep adding more over time

### Examples:
- "We Just Launched Our New Product Line" (announcement)
- "10 Tips for Better Web Design" (blog article)
- "Monthly Company Newsletter - March 2026" (recurring content)

---

## When to Use Pages

Use pages when the content is:
- **Permanent** — doesn't change frequently
- **Standalone** — makes sense on its own, not part of a series
- **Part of the site structure** — belongs in the navigation menu
- **Not date-dependent** — would be weird with a "Published on" date

### Examples:
- Home page
- About Us
- Our Services
- Contact Us
- Privacy Policy / Terms of Service
- Portfolio
- FAQ
- Team / Staff page

---

## Creating Your First Page

Let's create an "About" page:

1. Go to **Pages → Add New Page** in the sidebar
2. You're now in the **Gutenberg Block Editor**

### The Block Editor (Gutenberg)

WordPress uses a **block-based editor**. Everything is a "block":
- Paragraphs are blocks
- Headings are blocks
- Images are blocks
- Lists, quotes, buttons — all blocks

#### Key Interface Elements:
- **Title area** (top) — type your page title here
- **Content area** — where you add blocks
- **"+" button** — click to add a new block
- **Right sidebar** — settings for the selected block or the page itself
  - **Block tab** — settings for the currently selected block
  - **Page tab** — settings for the whole page (featured image, URL slug, etc.)

### Create the About Page:

1. **Title**: Type `About Us`
2. **First block**: Click in the content area and type a paragraph:
   ```
   Welcome to our company. We are dedicated to providing excellent service.
   ```
3. **Add a heading**: Press Enter, then type `/heading` and select "Heading". Type: `Our Mission`
4. **Add another paragraph**: Press Enter and type:
   ```
   Our mission is to deliver high-quality solutions that make a difference.
   ```
5. **Add a list**: Press Enter, type `/list` and select "List". Add a few items:
   - Quality first
   - Customer satisfaction
   - Innovation
6. Click **"Publish"** (top-right)
7. Click **"Publish"** again to confirm
8. Click **"View Page"** to see it on the front-end

---

## Creating Your First Post

Now let's create a blog post:

1. Go to **Posts → Add New Post**
2. **Title**: Type `Welcome to Our Blog`
3. **Content**: Type a paragraph:
   ```
   This is our first blog post! We're excited to share news, tips, and updates with you. Stay tuned for more content coming soon.
   ```
4. **Set a Category**:
   - In the right sidebar, find the **Categories** section (under the Post tab)
   - Click **"Add New Category"**
   - Type `General` and click "Add New Category"
   - Make sure it's checked
5. **Add Tags**:
   - In the right sidebar, find the **Tags** section
   - Type `welcome, first post` and press Enter
6. Click **"Publish"** → **"Publish"** again
7. Click **"View Post"** to see it

---

## Working with the Block Editor

### Adding Blocks
There are several ways to add blocks:
1. Click the **"+"** button that appears between blocks
2. Click the **"+"** button in the top-left toolbar
3. Type **`/`** in an empty block to search for block types
4. Press **Enter** to create a new paragraph block

### Common Block Types
| Block | What It Does | Shortcut |
|-------|-------------|----------|
| Paragraph | Regular text | Just start typing |
| Heading | Section headers (H2, H3, etc.) | `/heading` |
| Image | Insert an image | `/image` |
| List | Bulleted or numbered list | `/list` |
| Quote | A styled blockquote | `/quote` |
| Button | A call-to-action button | `/button` |
| Columns | Multi-column layout | `/columns` |
| Separator | A horizontal line | `/separator` |
| Spacer | Vertical space between blocks | `/spacer` |

### Block Controls
When you click on a block, you get:
- **Block toolbar** (appears above the block) — formatting options
- **Block settings** (right sidebar, Block tab) — detailed settings
- **Three-dot menu** on the toolbar — move, duplicate, delete, etc.

### Moving Blocks
- Use the **up/down arrows** on the block toolbar
- **Drag and drop** using the six-dot grip icon
- Use the **three-dot menu → Move to** for precise placement

### Keyboard Shortcuts in the Editor
| Shortcut | Action |
|----------|--------|
| `Ctrl + B` | Bold |
| `Ctrl + I` | Italic |
| `Ctrl + K` | Insert link |
| `Ctrl + Z` | Undo |
| `Ctrl + Shift + Z` | Redo |
| `Ctrl + S` | Save draft / Update |
| `Enter` | New block |
| `Shift + Enter` | New line within same block |

---

## Page/Post Settings (Right Sidebar)

### For Pages:
- **Status & Visibility** — draft, published, scheduled, visibility (public/private)
- **URL (Slug)** — the URL path (e.g., `/about-us`)
- **Featured Image** — a hero image for the page
- **Page Attributes** — parent page (for hierarchy), template, order
- **Discussion** — enable/disable comments

### For Posts (additional options):
- **Categories** — assign to one or more categories
- **Tags** — add descriptive keywords
- **Excerpt** — a short summary (used in blog feeds)
- **Author** — who wrote this post

---

## Page Hierarchy (Parent/Child Pages)

Pages can be organized hierarchically:
- A "Services" page could be the parent
- "Web Design", "SEO", "Marketing" could be child pages
- This creates URLs like `/services/web-design/`

To set a parent page:
1. Edit the child page
2. In the right sidebar → **Page** tab → **Page Attributes**
3. Select the parent page from the dropdown

---

## Exercises

1. **Create 3 more pages**: Create pages for "Services", "Contact", and "Blog" (you can leave them mostly empty for now — just add a title and a short paragraph).

2. **Create 2 more posts**: Create two blog posts with different categories. Try using different block types (headings, lists, images).

3. **Practice blocks**: On one of your pages, practice adding and arranging these blocks: Heading, Paragraph, Image (upload any image), List, Button, Columns.

4. **Set a parent page**: Create a child page under "Services" called "Web Design". Check the URL structure.

5. **Explore post settings**: On one of your posts, explore the right sidebar — try setting a featured image, adding an excerpt, and changing the URL slug.

---

## Key Takeaways

- **Posts** = date-based, categorized content (blogs, news)
- **Pages** = static, standalone content (About, Contact, Services)
- The **Gutenberg block editor** is how you create content in both
- Everything in the editor is a **block** — type `/` to search for block types
- Pages can have **parent-child hierarchy** for organized URL structures
- The **right sidebar** contains important settings for each post/page
- Use `Shift + Enter` for a new line, `Enter` for a new block

---

**Next Lesson:** [Lesson 05 - Categories, Tags, and Taxonomies](lesson-05-categories-tags.md)
