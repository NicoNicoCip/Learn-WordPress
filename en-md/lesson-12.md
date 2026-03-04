# Lesson 12: The WordPress Customizer

## Objectives
- Use the WordPress Customizer for site-wide settings
- Configure site identity (logo, favicon)
- Add custom CSS
- Understand the Customizer's role when using Elementor

---

## What is the Customizer?

The **WordPress Customizer** is a visual tool for making site-wide changes with a **live preview**. It lets you modify settings and see the results in real-time before publishing.

Access it at: **Appearance → Customize** (or click "Customize" in the admin bar while viewing your site)

---

## Customizer Interface

### Layout:
- **Left panel**: Settings and options organized by section
- **Right panel**: Live preview of your site
- **Top bar**: Navigation (back button, device preview, publish)

### Device Preview
In the bottom of the left panel, you'll see device icons:
- **Desktop** — full-width view
- **Tablet** — tablet-width view
- **Mobile** — phone-width view

Use these to check how your site looks on different devices.

---

## Customizer Sections (Hello Elementor)

Hello Elementor's Customizer is minimal. Here's what you'll find:

### Site Identity
The most important Customizer section:

| Setting | What to Do |
|---------|-----------|
| **Logo** | Upload your site logo (PNG with transparency recommended, 200-300px wide) |
| **Site Title** | Your site name (displayed if no logo is set) |
| **Tagline** | Short site description |
| **Display Site Title and Tagline** | Show/hide these in the header |
| **Site Icon (Favicon)** | Square image (512×512px min) for browser tabs |

### Menus
Same menu management as Appearance → Menus, but with a live preview.

### Widgets
Same as Appearance → Widgets, but with a live preview.

### Homepage Settings
Same as Settings → Reading — choose whether the homepage shows latest posts or a static page.

### Additional CSS
Add custom CSS that applies site-wide. This is where you put small style tweaks without editing theme files.

---

## Adding Custom CSS

The **Additional CSS** section is useful for small styling adjustments:

1. Go to **Appearance → Customize → Additional CSS**
2. Type your CSS in the editor
3. See changes in real-time in the preview

### Example CSS Snippets:

**Hide the page title on all pages:**
```css
.page .entry-title {
    display: none;
}
```

**Change link color:**
```css
a {
    color: #0066cc;
}
a:hover {
    color: #004499;
}
```

**Add more space between paragraphs:**
```css
.entry-content p {
    margin-bottom: 1.5em;
}
```

### When to Use Additional CSS vs Elementor Styling
- **Additional CSS**: For site-wide changes that affect non-Elementor pages (blog posts, archive pages, admin-controlled areas)
- **Elementor styling**: For pages built with Elementor (Elementor has its own style controls — use those instead)

---

## Customizer with Other Themes

If you switch to a more feature-rich theme (like Astra), the Customizer will have many more sections:

| Section | What It Controls |
|---------|-----------------|
| Global | Base colors, typography, container width |
| Header Builder | Logo placement, menu style, search, buttons |
| Breadcrumb | Navigation breadcrumbs |
| Blog | Blog layout, post meta, archive pages |
| Sidebar | Sidebar layout and width |
| Footer Builder | Footer columns, copyright, widgets |
| Colors & Background | Site-wide color scheme |
| Typography | Font families, sizes, weights |
| Buttons | Button styles, colors, borders |
| Layout | Content width, padding |

This is why some people choose Astra or GeneratePress — they offer more control through the Customizer without needing Elementor Pro.

---

## Customizer vs Elementor vs Theme Settings

Understanding when to use each:

| What You're Changing | Where to Do It |
|---------------------|---------------|
| Site logo and favicon | Customizer → Site Identity |
| Page design and layout | Elementor editor |
| Global colors and fonts (Elementor pages) | Elementor → Site Settings |
| Blog post layout | Customizer or theme settings (if available) |
| Navigation menus | Customizer → Menus or Appearance → Menus |
| Footer design (with Elementor) | Elementor Theme Builder (Pro) or Header Footer plugin |
| Small CSS tweaks | Customizer → Additional CSS |
| SEO settings | SEO plugin (Yoast/RankMath) |

---

## Publishing and Scheduling Changes

### Publishing Immediately
- Click **"Publish"** in the Customizer to apply changes immediately

### Saving as Draft
- Click the **gear icon** next to Publish
- Select **"Save Draft"** to save without publishing
- Your changes are saved but not visible to visitors
- Come back later to publish

### Scheduling Changes
- Click the gear icon next to Publish
- Select **"Schedule"**
- Pick a date and time
- Changes will go live automatically at that time
- Useful for coordinated launches (new logo, redesign, etc.)

---

## Exercises

1. **Set up Site Identity**: Upload a logo (or use a placeholder image), set a favicon, and configure your site title and tagline.

2. **Preview on different devices**: Use the device preview buttons to see how your site looks on desktop, tablet, and mobile.

3. **Add custom CSS**: Go to Additional CSS and add a simple rule (like changing a color or hiding an element). See the live preview.

4. **Try saving as draft**: Make a change, save it as a draft, then close the Customizer. Re-open it to find your draft.

5. **Explore menus in the Customizer**: Navigate to the Menus section and try editing your menu with the live preview.

---

## Key Takeaways

- The **Customizer** provides live-preview editing for site-wide settings
- Use it for **site identity** (logo, favicon), **menus**, and **small CSS tweaks**
- **Additional CSS** is where you add site-wide styling adjustments
- When using Elementor, the Customizer's role is reduced — Elementor handles most design
- You can **save as draft** or **schedule** Customizer changes
- More feature-rich themes (Astra, GeneratePress) add many more Customizer options
- Use the **device preview** to check mobile and tablet views

---

**Next Module:** [Module 3 - Elementor Page Building](../Module-03-Elementor/lesson-13-installing-elementor.md)
