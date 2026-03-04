# Lesson 05: Categories, Tags, and Taxonomies

## Objectives
- Understand how WordPress organizes content with categories and tags
- Know the difference between categories and tags and when to use each
- Create and manage categories and tags
- Understand what taxonomies are

---

## What Are Taxonomies?

A **taxonomy** is a way to group and classify content. WordPress has two built-in taxonomies for posts:

1. **Categories** — broad groupings (like chapters in a book)
2. **Tags** — specific descriptors (like index entries in a book)

### Categories vs Tags

| Feature | Categories | Tags |
|---------|-----------|------|
| **Purpose** | Broad grouping/classification | Specific topics/keywords |
| **Required?** | Yes — every post must have at least one | No — completely optional |
| **Hierarchy** | Yes — can have parent/child categories | No — flat structure only |
| **Typical count per post** | 1-3 | 3-10 |
| **Default** | "Uncategorized" if none selected | None |
| **Best for** | Site structure and navigation | Content discovery and search |

### Analogy
Think of a bookstore:
- **Categories** = the sections: Fiction, Non-Fiction, Science, History
- **Tags** = descriptive labels: bestseller, award-winner, new release, paperback

---

## Planning Your Categories

Before creating categories, plan them based on your site's content:

### Good Category Structure (for a business blog):
- Company News
- Industry Insights
- Tips & Tutorials
- Case Studies
- Product Updates

### Rules for Good Categories:
1. **Keep them broad** — 5-10 categories is ideal for most sites
2. **Make them clear** — a visitor should know what they'll find in each
3. **Keep them balanced** — avoid having 50 posts in one category and 2 in another
4. **Use hierarchy sparingly** — one level of sub-categories is usually enough

### Bad Category Examples:
- Too specific: "Blog post about our Monday meeting" (this should be a tag)
- Too vague: "Stuff" or "Other"
- Too many: 30+ categories with 1-2 posts each

---

## Managing Categories

### Creating Categories

**Method 1: From the Categories page**
1. Go to **Posts → Categories**
2. Fill in:
   - **Name**: The display name (e.g., "Company News")
   - **Slug**: The URL-friendly version (auto-generated, e.g., `company-news`)
   - **Parent Category**: Select if this is a sub-category
   - **Description**: Optional — some themes display this
3. Click **"Add New Category"**

**Method 2: While editing a post**
1. In the post editor, find **Categories** in the right sidebar
2. Click **"Add New Category"**
3. Type the name and click "Add New Category"

### Editing Categories
1. Go to **Posts → Categories**
2. Hover over a category and click **"Edit"** or **"Quick Edit"**
3. You can change the name, slug, parent, and description

### Deleting Categories
1. Go to **Posts → Categories**
2. Hover over a category and click **"Delete"**
3. Posts in that category will be moved to the default category ("Uncategorized")

### Setting the Default Category
1. Go to **Settings → Writing**
2. Change **"Default Post Category"** to your preferred category
3. Rename "Uncategorized" to something better (like "General")

---

## Managing Tags

### Creating Tags

**Method 1: From the Tags page**
1. Go to **Posts → Tags**
2. Fill in:
   - **Name**: The display name
   - **Slug**: URL-friendly version (auto-generated)
   - **Description**: Optional
3. Click **"Add New Tag"**

**Method 2: While editing a post**
1. In the post editor, find **Tags** in the right sidebar
2. Type tag names separated by commas
3. Press Enter to add them

### Tag Best Practices
- Use **lowercase** for consistency
- Use **existing tags** when possible (check what you've already created)
- Don't create tags you'll only use once
- Tags should be useful for visitors searching your content
- 3-5 tags per post is a good target

---

## How Categories and Tags Affect Your Site

### Archive Pages
WordPress automatically creates archive pages for each category and tag:
- `yoursite.com/category/company-news/` — shows all posts in "Company News"
- `yoursite.com/tag/wordpress/` — shows all posts tagged "wordpress"

These pages are styled by your theme and can be customized later with Elementor.

### Navigation
Categories are commonly used in:
- Main navigation menus
- Sidebar widgets
- Footer links
- Blog page filters

### SEO Impact
- **Categories** create a content hierarchy that search engines understand
- **Tags** help with internal linking and content discovery
- Don't create too many of either — it creates thin archive pages that hurt SEO

---

## Practical Example

Let's say you're building a site for a web design agency:

### Categories:
```
Web Design
├── UI Design
├── UX Design
Digital Marketing
├── SEO
├── Social Media
Case Studies
Company News
```

### Tags (used across categories):
```
wordpress, elementor, responsive-design, e-commerce,
small-business, redesign, mobile-first, branding,
analytics, conversion-rate
```

### Example Post:
- **Title**: "5 Responsive Design Tips for Small Business Websites"
- **Category**: Web Design → UI Design
- **Tags**: responsive-design, small-business, mobile-first

---

## Understanding Taxonomies (Deeper)

Categories and tags are both examples of **taxonomies** — systems for classifying content. WordPress core provides two:

| Taxonomy | Type | Applied To |
|----------|------|-----------|
| Category | Hierarchical | Posts |
| Tag | Non-hierarchical (flat) | Posts |

**Note:** Pages don't have categories or tags by default. If you need to organize pages, you'll use menus and page hierarchy (parent/child).

Some plugins and themes add **custom taxonomies**. For example:
- WooCommerce adds "Product Categories" and "Product Tags" (separate from regular post categories/tags)
- A portfolio plugin might add "Portfolio Categories"
- A real estate plugin might add "Property Type" and "Location"

You don't need to worry about custom taxonomies now — just know they exist.

---

## Exercises

1. **Rename "Uncategorized"**: Go to Posts → Categories, edit "Uncategorized", and rename it to "General".

2. **Create a category structure**: Create 4-5 categories that would make sense for a business blog. Create at least one with a sub-category (child category).

3. **Set the default category**: Go to Settings → Writing and change the default category from "Uncategorized" to "General".

4. **Create posts with categories and tags**: Create 3 posts, each in a different category, with 3-5 relevant tags each.

5. **View archive pages**: After creating posts, visit the category archive page by going to `http://learning-wordpress.local/category/your-category-slug/`. See how WordPress automatically groups posts.

6. **Check the Tags page**: Go to Posts → Tags to see all the tags you've created. Notice how it shows the count of posts using each tag.

---

## Key Takeaways

- **Categories** are broad groups (required, hierarchical) — think "sections"
- **Tags** are specific descriptors (optional, flat) — think "keywords"
- Every post needs at least one category; tags are optional
- Plan your categories before you start creating content
- Don't over-create — 5-10 categories and a modest number of tags is ideal
- WordPress creates automatic **archive pages** for each category and tag
- Rename "Uncategorized" to something meaningful like "General"

---

**Next Lesson:** [Lesson 06 - The Media Library](lesson-06-media-library.md)
