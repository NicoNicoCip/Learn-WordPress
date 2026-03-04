# Lesson 09: Installing and Configuring a Theme (Hello Elementor)

## Objectives
- Install and activate the Hello Elementor theme
- Configure basic theme settings
- Understand theme activation and deactivation
- Delete unused themes

---

## Installing Hello Elementor

Hello Elementor is the **official theme made by the Elementor team**. It's designed to be a blank canvas that lets Elementor do all the heavy lifting for design.

### Step 1: Install the Theme

1. Go to **Appearance → Themes**
2. Click **"Add New Theme"** at the top
3. In the search box, type **"Hello Elementor"**
4. Find the theme by "Starter Templates" / Elementor team
5. Click **"Install"**
6. Wait for installation to complete

### Step 2: Activate the Theme

1. After installation, click **"Activate"**
2. Your site now uses Hello Elementor

### Step 3: Visit Your Site

1. Go to your site's front-end (`http://learning-wordpress.local/`)
2. Notice that it looks very minimal — almost empty
3. **This is intentional** — Hello Elementor is a blank canvas for Elementor

---

## Understanding What Just Happened

When you activated Hello Elementor:
- The **previous theme was deactivated** (but not deleted)
- Hello Elementor's templates are now used to display your content
- Your **content didn't change** — all posts, pages, and settings are intact
- The **appearance changed** because the new theme has different styling

---

## Theme Configuration

Hello Elementor is intentionally minimal, but it does have some basic settings.

### Through the Customizer

1. Go to **Appearance → Customize** (or visit your site and click "Customize" in the admin bar)
2. The Customizer opens with a live preview

Available sections in Hello Elementor:
- **Site Identity** — Logo, site title, tagline, site icon (favicon)
- **Menus** — Navigation menu locations
- **Homepage Settings** — Same as Settings → Reading
- **Additional CSS** — Add custom CSS code

### Setting Up Site Identity

1. In the Customizer, click **"Site Identity"**
2. **Logo**: Click "Select Logo" to upload your site logo
   - Recommended: Upload a PNG with transparency
   - Suggested size: 200-300px wide
3. **Site Title**: Your site name (also set in Settings → General)
4. **Tagline**: Your site description
5. **Site Icon (Favicon)**: The small icon that appears in browser tabs
   - Upload a square image, at least 512×512 pixels
   - PNG format works best
6. Click **"Publish"** to save changes

---

## Managing Themes

### Viewing Installed Themes
- Go to **Appearance → Themes**
- Your active theme is shown first
- Other installed (inactive) themes are shown below

### Deleting Unused Themes
Keep your site clean — delete themes you won't use:

1. Go to **Appearance → Themes**
2. Click on an **inactive** theme
3. Click **"Delete"** in the bottom-right of the theme details popup
4. Confirm deletion

**Keep at least one backup theme** (like Twenty Twenty-Five) in case your active theme has issues.

**Rule of thumb:** Keep your active theme + one default WordPress theme. Delete the rest.

### Updating Themes
Themes receive updates for security fixes, bug fixes, and new features:
1. Go to **Dashboard → Updates**
2. If theme updates are available, they'll be listed here
3. Select the themes to update and click **"Update Themes"**
4. Alternatively, you'll see a notification on the Themes page

---

## Installing Themes from ZIP Files

Some premium themes aren't in the WordPress directory. You download a ZIP file from the developer:

1. Go to **Appearance → Themes → Add New Theme**
2. Click **"Upload Theme"** at the top
3. Click **"Choose File"** and select the ZIP file
4. Click **"Install Now"**
5. After installation, click **"Activate"**

---

## What Makes Hello Elementor Special

| Feature | Benefit |
|---------|---------|
| **Ultra-lightweight** | Only ~6KB of CSS, fastest loading theme |
| **No styling opinions** | Doesn't impose fonts, colors, or layouts — Elementor controls everything |
| **Built by Elementor team** | Perfect compatibility guaranteed |
| **Header/Footer support** | Works with Elementor Pro's Theme Builder (or free alternatives like "Header Footer Elementor" plugin) |
| **Regular updates** | Maintained by the Elementor team |

### When Hello Elementor Might Not Be Enough

Hello Elementor is intentionally barebones. If you need features without Elementor Pro:
- **Custom header/footer without a page builder** → Consider Astra or GeneratePress
- **Built-in layout options** → Consider Astra (has a free header builder)
- **Pre-built site demos** → Consider Astra + Starter Templates plugin

For this course, Hello Elementor is perfect since we're learning Elementor for design.

---

## Exercises

1. **Install and activate Hello Elementor**: Follow the steps above.

2. **Set up Site Identity**: In the Customizer, add a site title, tagline, and favicon. You can use any small square image as a favicon.

3. **Delete unused themes**: Remove any themes you won't use, keeping Hello Elementor and one default theme as a backup.

4. **Preview before activating**: Install another theme (like Astra) — use "Live Preview" to see how it looks, but don't activate it. Then go back to Hello Elementor.

5. **Check for updates**: Go to Dashboard → Updates and see if any theme updates are available.

---

## Key Takeaways

- **Hello Elementor** is the ideal theme for Elementor users — lightweight and designed as a blank canvas
- Install themes from the admin: **Appearance → Themes → Add New**
- **Activate** to start using a theme; content is preserved when switching
- Use the **Customizer** for basic settings (logo, favicon, site identity)
- **Delete unused themes** to keep your site clean and secure
- Keep **one backup theme** (a default WordPress theme) installed
- Premium themes can be installed from ZIP files

---

**Next Lesson:** [Lesson 10 - Menus and Navigation](lesson-10-menus-navigation.md)
