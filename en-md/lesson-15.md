# Lesson 15: Typography, Colors, and Global Styles in Elementor

## Objectives
- Set up global colors and fonts for consistency across your site
- Understand Elementor's Site Settings
- Use global styles effectively to maintain a cohesive design
- Learn typography best practices for web design

---

## Why Global Styles Matter

Without global styles, you'd set colors and fonts on every single widget individually. Global styles let you:
- **Define colors and fonts once**, apply them everywhere
- **Change your entire site's look** by editing one setting
- **Maintain consistency** — no accidental mismatched colors
- **Work faster** — pick from your palette instead of entering hex codes

---

## Accessing Site Settings

1. Open any page in Elementor
2. Click the **hamburger menu (☰)** in the top-left of the panel
3. Click **"Site Settings"**

Or click the **hamburger menu → Site Settings** directly.

---

## Global Colors

### Setting Up Your Color Palette

1. In Site Settings, click **"Global Colors"**
2. You'll see 4 default color slots:
   - **Primary** — your main brand color
   - **Secondary** — your secondary brand color
   - **Text** — default body text color
   - **Accent** — for buttons, links, highlights

3. Click each color to change it. Enter a hex code or use the color picker.

### Example Professional Color Palette:
| Slot | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Dark Blue | `#2c3e50` | Headers, main elements |
| Secondary | Teal | `#1abc9c` | Accents, icons |
| Text | Dark Gray | `#333333` | Body text |
| Accent | Coral | `#e74c3c` | Buttons, CTAs, highlights |

### Adding Custom Colors
- Click **"+ Add Color"** to add more colors to your palette
- Useful for: light background, dark background, subtle gray, success green, etc.

### Recommended Additional Colors:
- **Background Light**: `#f8f9fa` — light section backgrounds
- **Background Dark**: `#1a1a2e` — dark section backgrounds
- **White**: `#ffffff` — for text on dark backgrounds
- **Light Gray**: `#6c757d` — subtle text, captions

### Using Global Colors
When you're editing any element's color:
1. Click the color field
2. Click the **globe icon** (🌐) at the top of the color picker
3. Select from your global colors
4. The element is now **linked** to the global color — if you change the global color later, this element updates automatically

---

## Global Fonts (Typography)

### Setting Up Global Fonts

1. In Site Settings, click **"Global Fonts"**
2. You'll see 4 default typography slots:
   - **Primary** — headings and titles
   - **Secondary** — sub-headings
   - **Text** — body/paragraph text
   - **Accent** — special text (buttons, badges, etc.)

3. Click each to configure:
   - **Font Family**: Choose from Google Fonts or system fonts
   - **Font Size**: Size in px, em, or rem
   - **Font Weight**: Thin (100) to Black (900)
   - **Line Height**: Space between lines (1.4-1.8 for body text)
   - **Letter Spacing**: Space between letters

### Popular Font Combinations:

**Modern & Clean:**
- Headings: **Montserrat** (Bold, 700)
- Body: **Open Sans** (Regular, 400)

**Professional:**
- Headings: **Playfair Display** (Bold, 700)
- Body: **Source Sans Pro** (Regular, 400)

**Minimal:**
- Headings: **Poppins** (SemiBold, 600)
- Body: **Poppins** (Regular, 400)

**Corporate:**
- Headings: **Raleway** (Bold, 700)
- Body: **Lato** (Regular, 400)

### Typography Best Practices

| Element | Recommended Size | Weight |
|---------|-----------------|--------|
| H1 (Page title) | 36-48px | Bold (700) |
| H2 (Section title) | 28-36px | Bold (700) |
| H3 (Sub-section) | 22-28px | SemiBold (600) |
| H4 (Minor heading) | 18-22px | SemiBold (600) |
| Body text | 16-18px | Regular (400) |
| Small text | 14px | Regular (400) |
| Button text | 14-16px | SemiBold (600) |

### Line Height Guidelines:
- **Headings**: 1.2-1.4 (tighter)
- **Body text**: 1.5-1.8 (more readable)
- **Small text**: 1.4-1.6

---

## Other Site Settings

### Layout Settings
In Site Settings → **Layout**:
- **Content Width**: Default page content width (1140px is standard)
- **Widgets Space**: Default gap between widgets (20px is common)
- **Stretched Section Fit to Content Width**: How full-width sections behave

### Lightbox
In Site Settings → **Lightbox**:
- Configure the image lightbox behavior (popup when clicking images)
- Set background color, UI color, and gallery features

### Background
In Site Settings → **Background**:
- Set a global background color or image for your entire site

### Buttons
In Site Settings → **Buttons**:
- Set default button styles that apply to all Elementor buttons
- Typography, padding, border radius, colors
- Normal and hover states

### Images
In Site Settings → **Images**:
- Default border radius for images
- Default hover animation

---

## Building a Style Guide Page

A style guide page helps you visualize your design system. Create one:

1. Create a new page called "Style Guide" (you can unpublish it later)
2. Open it in Elementor
3. Add sections showing:

### Section 1: Colors
- Add colored boxes (use Spacer widgets with background colors) showing your palette
- Label each with the color name and hex code

### Section 2: Typography
- Add headings showing H1 through H6 styles
- Add body text samples
- Add button text samples

### Section 3: Buttons
- Show your button styles: primary, secondary, outline
- Show hover states

### Section 4: Components
- Show common elements: icon boxes, testimonials, cards, etc.

This page serves as a reference when building other pages, ensuring consistency.

---

## The Design Process

When starting a new site, set up your global styles first:

1. **Choose your color palette** (3-5 colors max)
   - Primary brand color
   - Secondary/accent color
   - Text color
   - Background color variations

2. **Choose your fonts** (2 fonts max)
   - One for headings
   - One for body text
   - (Using the same font for both is also fine)

3. **Set typography scale** (heading sizes, body size, line heights)

4. **Set button styles** (padding, border radius, colors)

5. **Then start building pages** — with your system in place, pages are much faster to create

---

## Exercises

1. **Set up global colors**: Go to Site Settings → Global Colors. Choose a professional color palette with Primary, Secondary, Text, and Accent colors. Add 2-3 custom colors.

2. **Set up global fonts**: Go to Site Settings → Global Fonts. Choose a heading font and a body font. Configure sizes, weights, and line heights.

3. **Configure default button styles**: Go to Site Settings → Buttons. Set typography, padding, border radius, and colors for default buttons.

4. **Use global colors on a widget**: Edit any widget, find a color setting, click the globe icon, and select a global color. Then change that global color in Site Settings and watch the widget update.

5. **Set content width**: Go to Site Settings → Layout and set Content Width to 1140px.

6. **Build a style guide page**: Create a page showcasing your colors, typography, and common elements.

---

## Key Takeaways

- **Set up global styles FIRST** before building pages — this saves enormous time
- **Global Colors**: Define your palette once, use everywhere via the globe icon
- **Global Fonts**: Set heading and body typography in Site Settings
- Use **2 fonts max** (one for headings, one for body — or the same font for both)
- Use **3-5 colors** in your palette
- Standard **content width** is 1140px
- Standard **body text** size is 16-18px
- Changing a global style **updates every element** that uses it
- Create a **style guide page** as a reference for consistency

---

**Next Lesson:** [Lesson 16 - Building a Homepage from Scratch](lesson-16-building-homepage.md)
