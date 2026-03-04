# Lesson 08: Understanding Themes

## Objectives
- Understand what WordPress themes are and how they work
- Know the difference between free and premium themes
- Learn how to evaluate and choose a theme
- Understand parent and child themes

---

## What is a Theme?

A WordPress theme controls the **visual appearance** and **layout** of your site. It determines:
- How your header and footer look
- The layout of pages and posts (sidebar, full-width, etc.)
- Typography (fonts, sizes, line spacing)
- Colors and styling
- What template options are available

### Key Concept
**A theme controls presentation, not content.** You can switch themes without losing your posts, pages, media, or settings. Your content stays in the database; the theme just changes how it's displayed.

---

## How Themes Work (Under the Hood)

A theme is a folder of files inside `wp-content/themes/`:

```
wp-content/themes/your-theme/
├── style.css          ← Main stylesheet + theme metadata
├── functions.php      ← Theme functionality (registers menus, widgets, etc.)
├── index.php          ← Fallback template
├── header.php         ← Site header
├── footer.php         ← Site footer
├── sidebar.php        ← Sidebar
├── single.php         ← Single post template
├── page.php           ← Single page template
├── archive.php        ← Category/tag archive pages
├── 404.php            ← "Page not found" template
├── screenshot.png     ← Theme preview image
└── ...more template files
```

You don't need to edit these files — especially since we'll be using Elementor for design. But understanding the structure helps you troubleshoot issues later.

---

## Free vs Premium Themes

| Aspect | Free Themes | Premium Themes |
|--------|------------|----------------|
| **Cost** | $0 | $30-100+ (one-time or yearly) |
| **Where to find** | WordPress.org theme directory | ThemeForest, theme developer sites |
| **Support** | Community forums only | Dedicated support from the developer |
| **Updates** | Variable — some abandoned | Regular updates (usually) |
| **Features** | Basic | More customization options, demos, page templates |
| **Quality** | Hit or miss | Generally higher quality |
| **Security** | Reviewed by WordPress.org | Depends on the developer |

### For Elementor Users
Since Elementor handles most of the design, you don't need a feature-heavy theme. In fact, **a minimal theme is better** because:
- It won't conflict with Elementor's styling
- Faster loading (less code)
- Fewer compatibility issues

**Recommended themes for Elementor:**
1. **Hello Elementor** (free) — made by the Elementor team, ultra-minimal, designed specifically for Elementor
2. **Astra** (free + paid) — lightweight, highly customizable, great Elementor integration
3. **GeneratePress** (free + paid) — performance-focused, clean code
4. **OceanWP** (free + paid) — lots of built-in features and demos

---

## Choosing a Theme: What to Look For

### Must-Haves
1. **Regular updates** — last updated within the past 6 months
2. **WordPress version compatibility** — works with the latest WordPress version
3. **Responsive design** — looks good on mobile, tablet, and desktop
4. **Good reviews/ratings** — 4+ stars with many reviews
5. **Active support** — developer responds to questions

### Nice-to-Haves
- Demo content import (one-click to get a pre-designed site)
- Multiple header/footer layouts
- WooCommerce compatibility (if you'll build e-commerce sites)
- Translation-ready (if you need multilingual sites)

### Red Flags
- Not updated in over a year
- Low ratings or many unresolved complaints
- Excessive features you don't need (bloated themes slow your site)
- No documentation
- Requires many paid add-ons for basic features

---

## Parent and Child Themes

### What is a Child Theme?
A child theme **inherits** all the functionality and styling of another theme (the "parent") while letting you make customizations that won't be overwritten when the parent theme updates.

```
Parent Theme (e.g., Astra)
    ↓ provides base styling and functionality
Child Theme (e.g., Astra Child)
    ↓ your customizations live here
```

### Why Use a Child Theme?
- **Safe customizations** — your changes survive parent theme updates
- **Easy to revert** — delete the child theme to go back to the parent
- **Clean separation** — keeps your changes separate from the original theme

### When You Need a Child Theme
- When you need to edit theme template files (PHP)
- When you want to add custom CSS that won't be lost on update
- When you need to override specific theme functions

### When You Don't Need a Child Theme
- When using Elementor for all your design (Elementor stores designs in the database, not in theme files)
- When you only use the WordPress Customizer for changes
- When the theme has its own options panel for customization

**For this course:** Since we're using Elementor, you probably won't need a child theme right away. But it's good to know about them.

---

## The Default WordPress Themes

WordPress comes with several default themes (named by year):
- **Twenty Twenty-Five** (or the latest year's theme)
- **Twenty Twenty-Four**
- **Twenty Twenty-Three**

These are good for learning but typically not used for professional client sites. They demonstrate WordPress capabilities and serve as a fallback.

**Best practice:** Keep one default theme installed as a fallback. If your active theme breaks, WordPress will automatically switch to a default theme so your site doesn't go completely down.

---

## Block Themes vs Classic Themes

WordPress has two types of themes:

### Classic Themes
- Use PHP template files (header.php, footer.php, etc.)
- Customized through the Customizer, theme options, or code
- Work well with Elementor and other page builders
- **This is what we'll use** — Hello Elementor is a classic theme

### Block Themes (Full Site Editing / FSE)
- Use HTML template files with block markup
- Customized entirely through the block editor (Gutenberg)
- The Site Editor lets you edit headers, footers, and templates visually
- Newer approach — WordPress is moving in this direction
- Don't use these with Elementor — they're designed for Gutenberg

**For your work with Elementor**, stick with classic themes.

---

## Exercises

1. **Browse the theme directory**: Go to **Appearance → Themes → Add New Theme** in your WordPress admin. Browse popular and featured themes. Notice the preview, ratings, and "Last Updated" info.

2. **Preview a theme**: Click on any theme and then click **"Live Preview"** to see how it would look on your site without activating it.

3. **Check installed themes**: Go to **Appearance → Themes** to see which themes are currently installed. You should see the currently active theme and 1-2 default themes.

4. **Research Hello Elementor**: Search for "Hello Elementor" in the theme directory. Read its description and reviews. We'll install it in the next lesson.

5. **Compare themes**: Preview 3 different themes on your site and note the differences in layout, typography, and overall feel.

---

## Key Takeaways

- A theme controls how your site **looks**, not your content
- You can **switch themes without losing content** — content is stored in the database
- For Elementor users, **minimal themes are best** (Hello Elementor, Astra, GeneratePress)
- Check for **recent updates, good ratings, and responsive design** when choosing a theme
- **Child themes** let you customize safely without losing changes on update
- Keep one **default theme installed** as a fallback
- Use **classic themes** (not block themes) when working with Elementor

---

**Next Lesson:** [Lesson 09 - Installing and Configuring a Theme](lesson-09-installing-theme.md)
