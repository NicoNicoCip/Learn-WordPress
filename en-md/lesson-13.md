# Lesson 13: Installing Elementor + Interface Overview

## Objectives
- Install and activate the Elementor plugin
- Understand the Elementor interface layout
- Learn the difference between Elementor Free and Pro
- Open your first page in Elementor

---

## What is Elementor?

Elementor is a **visual drag-and-drop page builder** for WordPress. Instead of writing code or using the basic block editor, you design pages visually — what you see is what your visitors get.

### Why Elementor?
- **Visual editing** — design in real-time, no previewing back and forth
- **No coding needed** — drag widgets, click to style
- **Professional results** — create designs that look like they were custom-coded
- **Huge community** — tons of tutorials, templates, and third-party add-ons
- **Industry standard** — used by millions of sites, required by many agencies

---

## Free vs Pro

| Feature | Elementor Free | Elementor Pro ($59+/year) |
|---------|---------------|--------------------------|
| **Basic widgets** | 40+ widgets | 100+ widgets |
| **Page building** | Yes | Yes |
| **Theme Builder** | No | Yes — design header, footer, blog templates |
| **Popup Builder** | No | Yes |
| **WooCommerce Builder** | No | Yes — design shop/product pages |
| **Form Widget** | No | Yes |
| **Global Widgets** | No | Yes — reuse widgets across pages |
| **Custom CSS per widget** | No | Yes |
| **Templates** | Limited | 300+ pro templates |

### Starting with Free
You can accomplish a lot with the free version. We'll start with free and note when a feature requires Pro. There are also free third-party plugins that add some Pro-like features (we'll mention those too).

---

## Installing Elementor

### Step 1: Install the Plugin
1. Go to **Plugins → Add New Plugin**
2. Search for **"Elementor"**
3. Find **"Elementor Website Builder"** by Elementor.com
4. Click **"Install Now"**
5. After installation, click **"Activate"**

### Step 2: Skip the Setup Wizard
- Elementor may show a setup wizard — you can go through it or skip it
- We'll configure everything manually

### Step 3: Verify Installation
- You should see **"Elementor"** in the left sidebar of wp-admin
- When editing any page, you'll see an **"Edit with Elementor"** button

---

## Opening a Page in Elementor

### Method 1: From wp-admin
1. Go to **Pages → All Pages**
2. Hover over a page
3. Click **"Edit with Elementor"**

### Method 2: From the page editor
1. Edit any page in WordPress
2. Click the **"Edit with Elementor"** button at the top

### Method 3: From the front-end
1. Visit any page while logged in
2. Click **"Edit with Elementor"** in the admin bar

### Creating a New Page with Elementor
1. Go to **Pages → Add New**
2. Give it a title
3. Click **"Edit with Elementor"**

---

## The Elementor Interface

When you open Elementor, the interface has these key areas:

### Left Panel (Widget Panel)
The panel on the left side contains:

**Top section:**
- **Hamburger menu (☰)** — access settings, user preferences, navigation
- **Widget search** — search for widgets by name
- **Widget categories** — browse widgets by category

**Widget area:**
- Grid of available widgets you can drag onto the page
- Categories: Basic, General, Site, Pro, etc.

**Bottom section:**
- **Settings (gear icon)** — page settings (title, layout, featured image)
- **Navigator (layers icon)** — shows a tree view of all elements on the page
- **History (clock icon)** — undo/redo history with timestamps
- **Responsive mode (device icons)** — switch between desktop, tablet, mobile views

### Canvas (Center/Right)
The main editing area where you build your page:
- **Blue "+" buttons** — add new sections
- **Drag widgets** from the left panel onto the canvas
- **Click any element** to select and edit it
- **Right-click** for context menu (copy, paste, delete, etc.)

### Bottom Bar
- **Responsive mode toggles** — desktop, tablet, mobile
- **Page settings shortcut**
- **Navigator toggle**
- **Publish/Update button**

---

## Key Interface Actions

### Selecting Elements
- **Click** an element on the canvas to select it
- **Blue border** appears around the selected element
- The left panel switches to show that element's settings

### Element Handle
When you hover over an element, you see a handle with:
- **Edit icon (pencil)** — edit the element
- **Drag handle (dots)** — drag to move
- **Right-click** — copy, paste, duplicate, delete

### Section Handle
When you hover over a section (the full-width container), you see:
- **Blue tab at the top** with a grid icon
- Click to select the section
- Drag to move the section
- Right-click for section options

---

## Navigator Panel

The Navigator is incredibly useful — it shows your page structure as a tree:

1. Click the **layers icon** in the bottom-left of the panel
2. Or press **Ctrl + I** on your keyboard

The Navigator shows:
```
Page
├── Section 1
│   ├── Column 1
│   │   ├── Heading
│   │   └── Text Editor
│   └── Column 2
│       └── Image
├── Section 2
│   └── Column 1
│       ├── Heading
│       └── Button
```

### Navigator Features:
- Click any item to select it on the canvas
- Drag items to reorder them
- Right-click for options (rename, duplicate, delete)
- The eye icon hides/shows elements
- **Rename elements** for better organization (right-click → Rename)

---

## Saving Your Work

### Save Options:
- **Publish** — makes the page live (or updates if already published)
- **Save Draft** — saves without publishing
- **Save as Template** — saves the design as a reusable template

### Auto-Save
Elementor auto-saves periodically, but always save manually before closing.

### Keyboard Shortcut
- **Ctrl + S** — save/publish your page

### Exiting Elementor
- Click the **hamburger menu (☰)** → **Exit**
- Or click the **"X"** in the top-left corner
- Or click **"Back to WordPress Editor"** link

---

## Elementor Settings (in wp-admin)

After installing, there's an **Elementor** menu item in wp-admin with these settings:

### Settings
- **General**: Choose which post types can use Elementor (Pages, Posts)
- **Integrations**: Connect Google Maps, reCAPTCHA, etc.
- **Advanced**: CSS print method, editor loader method
- **Performance**: Experiment with performance features

### Important Setting:
Go to **Elementor → Settings → General** and make sure **"Pages"** and **"Posts"** are checked under "Post Types" so you can use Elementor on both.

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save |
| `Ctrl + Z` | Undo |
| `Ctrl + Shift + Z` | Redo |
| `Ctrl + C` | Copy element |
| `Ctrl + V` | Paste element |
| `Ctrl + D` | Duplicate element |
| `Delete` | Delete selected element |
| `Ctrl + I` | Toggle Navigator |
| `Ctrl + Shift + M` | Toggle responsive mode |
| `Ctrl + Shift + L` | Open template library |
| `Ctrl + ?` | Show all keyboard shortcuts |

---

## Exercises

1. **Install Elementor**: Follow the installation steps above.

2. **Open a page in Elementor**: Open your "Home" page in Elementor. Don't add anything yet — just explore the interface.

3. **Explore the widget panel**: Browse through the available widgets. Note which ones are free and which are Pro.

4. **Try the Navigator**: Press Ctrl + I to open the Navigator. If the page is empty, that's fine — we'll use it more in the next lesson.

5. **Check keyboard shortcuts**: Press Ctrl + ? to see all keyboard shortcuts.

6. **Configure Elementor settings**: Go to Elementor → Settings → General and make sure Pages and Posts are enabled.

---

## Key Takeaways

- Elementor is a **visual drag-and-drop page builder** — no coding needed
- Install it like any plugin: **Plugins → Add New → search "Elementor"**
- The interface has a **left panel** (widgets/settings) and a **canvas** (your page)
- The **Navigator** (Ctrl + I) shows your page structure as a tree — use it often
- **Free version** is powerful enough to start; Pro adds theme builder, popups, forms
- Always **save your work** (Ctrl + S) before exiting
- Edit any page with Elementor by clicking **"Edit with Elementor"**

---

**Next Lesson:** [Lesson 14 - Sections, Columns, and Widgets](lesson-14-sections-columns-widgets.md)
