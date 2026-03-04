# Lesson 10: Menus and Navigation

## Objectives
- Create and manage navigation menus
- Add pages, posts, categories, and custom links to menus
- Create dropdown (sub-item) menus
- Assign menus to theme locations
- Understand menu best practices

---

## What Are WordPress Menus?

Menus are the **navigation links** that help visitors move around your site. Typically found in:
- **Header** (main navigation bar)
- **Footer** (footer links)
- **Sidebar** (sometimes used for secondary navigation)

WordPress has a dedicated menu management system that lets you create menus and assign them to locations defined by your theme.

---

## Creating Your First Menu

### Step 1: Open the Menu Editor

1. Go to **Appearance → Menus**
2. You'll see the menu editor with two sections:
   - **Left side**: Items you can add to the menu (Pages, Posts, Custom Links, Categories)
   - **Right side**: The menu structure (currently empty)

### Step 2: Create a New Menu

1. In the **"Menu Name"** field, type: `Main Navigation`
2. Click **"Create Menu"**

### Step 3: Add Pages to the Menu

1. On the left side, under **"Pages"**, you'll see your existing pages
2. Click **"View All"** to see all pages
3. Check the boxes next to the pages you want in your menu:
   - Home
   - About Us
   - Services
   - Blog
   - Contact
4. Click **"Add to Menu"**

### Step 4: Arrange Menu Items

The items appear on the right side. You can:
- **Drag and drop** to reorder them
- Items at the top appear first (leftmost in a horizontal menu)

Recommended order:
1. Home
2. About Us
3. Services
4. Blog
5. Contact

### Step 5: Assign a Menu Location

1. At the bottom of the menu editor, find **"Menu Settings"**
2. Under **"Display location"**, check **"Primary"** (or "Header Menu" — the name depends on your theme)
3. Click **"Save Menu"**

### Step 6: View Your Menu

Visit your site to see the navigation menu in the header.

---

## Creating Dropdown Menus (Sub-Items)

Dropdown menus show nested items when you hover over a parent item.

### How to Create Dropdowns:

1. Add all the items you want to the menu
2. Drag a menu item **slightly to the right** under another item
3. It will indent and become a **sub-item**

### Example Structure:
```
Home
About Us
Services              ← parent item
  ├── Web Design      ← sub-item (dropdown)
  ├── SEO             ← sub-item
  └── Marketing       ← sub-item
Blog
Contact
```

### To Create This:
1. Add "Services", "Web Design", "SEO", and "Marketing" pages to the menu
2. Drag "Web Design" under "Services" and slightly to the right until it indents
3. Do the same for "SEO" and "Marketing"
4. Save the menu

**Tip:** You can go multiple levels deep (sub-sub-items), but avoid going more than 2 levels — it gets confusing for users on mobile.

---

## Types of Menu Items

### Pages
- Most common menu item type
- Links to your WordPress pages

### Posts
- Links to specific blog posts
- Not commonly used in main navigation

### Custom Links
- Link to **any URL** (internal or external)
- Useful for:
  - External links (social media, partner sites)
  - Anchor links (`#section-name`)
  - Links to non-WordPress pages

**To add a custom link:**
1. In the left panel, expand **"Custom Links"**
2. Enter the **URL** and **Link Text**
3. Click **"Add to Menu"**

### Categories
- Links to category archive pages
- Useful for blog-heavy sites

**Example:** Adding a "News" category to the menu would link to the page showing all posts in the News category.

---

## Editing Menu Items

Click the **down arrow** on any menu item to expand its settings:

| Setting | What It Does |
|---------|-------------|
| **Navigation Label** | The text displayed in the menu (doesn't have to match the page title) |
| **Title Attribute** | Tooltip text shown on hover (optional) |
| **Open link in a new tab** | Opens the link in a new browser tab (enable in Screen Options first) |
| **CSS Classes** | Add custom CSS classes for styling (enable in Screen Options first) |

### Renaming Menu Items
You can display a different name than the page title:
1. Expand the menu item
2. Change the **"Navigation Label"**
3. Example: Your page is "About Us" but you want the menu to say just "About"

### Enabling Advanced Options
Click **"Screen Options"** (top-right) and check:
- **Link Target** — to enable "Open in new tab"
- **CSS Classes** — to add custom classes
- **Link Relationship (XFN)** — for link rel attributes
- **Description** — to add descriptions (some themes display these)

---

## Creating Multiple Menus

You can create different menus for different locations:

### Common Menu Setup:
1. **Main Navigation** → Header (primary location)
2. **Footer Menu** → Footer (shorter menu with legal links)

### Creating a Footer Menu:
1. Go to **Appearance → Menus**
2. Click **"Create a new menu"** link
3. Name it `Footer Menu`
4. Add items like: Privacy Policy, Terms of Service, Contact, Sitemap
5. Under "Display location", check **"Footer"** (if available in your theme)
6. Save

---

## Managing Menus in the Customizer

You can also manage menus through the Customizer with a live preview:

1. Go to **Appearance → Customize → Menus**
2. Select a menu to edit or create a new one
3. Add, remove, and reorder items with a live preview
4. Click **"Publish"** to save

This is useful because you can see changes in real-time.

---

## Menu Best Practices

### Do:
- Keep the main menu to **5-7 items** max
- Put the most important items first (or last — these positions get the most attention)
- Use **clear, concise labels** ("Services" not "What We Can Do For You")
- Include a **call-to-action** as the last item (e.g., "Contact Us" or "Get a Quote")
- Test the menu on mobile — make sure dropdowns work

### Don't:
- Don't overload the menu with too many items
- Don't go deeper than 2 levels of dropdown
- Don't use vague labels like "More" or "Misc"
- Don't put your entire sitemap in the navigation
- Don't forget to test on mobile devices

### Mobile Menu Considerations
- Most themes automatically convert the menu to a **hamburger menu** (☰) on mobile
- Long menus become scrollable lists on mobile — keep them short
- Make sure your most important pages are easily accessible

---

## Exercises

1. **Create a main navigation menu**: Add Home, About, Services, Blog, and Contact pages. Assign it to the Primary/Header location.

2. **Create dropdown items**: Add sub-pages under "Services" as dropdown items (create simple pages for "Web Design", "SEO", "Marketing" if they don't exist).

3. **Add a custom link**: Add a custom link to your menu that opens in a new tab (any external URL).

4. **Create a footer menu**: Create a second menu with Privacy Policy, Terms, and Contact. Assign it to the Footer location.

5. **Rename a menu item**: Change the Navigation Label of one of your menu items to be different from its page title.

6. **Test on mobile**: Use your browser's responsive mode (F12 → toggle device toolbar) to see how your menu looks on mobile.

---

## Key Takeaways

- Create menus at **Appearance → Menus**
- Drag items **to the right** to create dropdown sub-items
- **Assign menus to locations** (Primary/Header, Footer) defined by your theme
- Menu items can be **pages, posts, categories, or custom links**
- You can **rename menu labels** independently of page titles
- Keep main menus to **5-7 items** with max 2 levels of dropdowns
- Create **separate menus** for header and footer
- Always **test on mobile** — most visitors are on phones

---

**Next Lesson:** [Lesson 11 - Widgets and Sidebars](lesson-11-widgets-sidebars.md)
