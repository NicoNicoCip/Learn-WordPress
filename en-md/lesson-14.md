# Lesson 14: Sections, Columns, and Widgets — The Building Blocks

## Objectives
- Understand the Section → Column → Widget hierarchy
- Create and configure sections with different column layouts
- Add, move, and style widgets
- Learn the three settings tabs: Content, Style, Advanced

---

## The Elementor Hierarchy

Every Elementor page is built with three levels:

```
Section (full-width row)
  └── Column (vertical division within a section)
       └── Widget (the actual content — text, image, button, etc.)
```

Think of it like a table:
- **Section** = a row
- **Column** = a cell in that row
- **Widget** = content inside the cell

---

## Sections

### What is a Section?
A section is a **full-width horizontal row** that spans your page. It's the largest building block.

### Creating a Section
1. Click the **"+"** icon on the canvas (or the red circle "+" at the bottom)
2. Choose a **column structure**:
   - 1 column (full width)
   - 2 columns (50/50)
   - 3 columns (33/33/33)
   - And more variations (25/75, 75/25, etc.)
3. The section appears on your page

### Section Settings
Click the **blue handle** at the top of a section to select it. The left panel shows:

**Content Tab:**
- **Layout**: Boxed or Full Width
- **Content Width**: Set maximum content width (e.g., 1140px)
- **Column Gap**: Space between columns (No Gap, Narrow, Default, Extended, Wide)
- **Height**: Default, Min Height, or Fit to Screen
- **Vertical Align**: Top, Middle, Bottom, Space Between
- **HTML Tag**: Semantic HTML element (div, header, footer, section, etc.)

**Style Tab:**
- **Background**: Color, image, gradient, video, or slideshow
- **Background Overlay**: Add a color/gradient overlay on top of the background
- **Border**: Add borders and border radius
- **Shape Divider**: Add decorative shapes (waves, triangles, etc.) at top/bottom
- **Typography**: Default text color and typography

**Advanced Tab:**
- **Margin & Padding**: Spacing outside and inside the section
- **Motion Effects**: Scroll animations, parallax
- **Responsive**: Show/hide on specific devices
- **Custom CSS**: Add CSS for this section only (Pro)
- **Attributes**: Custom HTML attributes

### Section Context Menu
Right-click a section handle for:
- **Copy / Paste** — copy entire sections
- **Duplicate** — create an identical copy below
- **Save as Template** — save for reuse
- **Delete** — remove the section

---

## Columns

### What is a Column?
Columns are **vertical divisions** within a section. They hold widgets.

### Adjusting Column Widths
1. Hover between two columns until you see a **blue resize handle**
2. Drag left or right to adjust the width percentage
3. Column widths are shown as percentages (e.g., 60% / 40%)

### Column Settings
Click the **gray column handle** (at the top of the column) to select it:

**Content Tab:**
- **Column Width**: Exact percentage
- **Vertical Align**: How widgets are aligned vertically

**Style Tab:**
- **Background**: Color, image, gradient
- **Border**: Borders and border radius
- **Typography**: Default text styles for this column

**Advanced Tab:**
- **Margin & Padding**: Spacing for this specific column
- **Responsive**: Show/hide on specific devices
- **Custom CSS**: Column-specific CSS (Pro)

### Adding/Removing Columns
- **Right-click** a column handle → **Add New Column** (adds a column)
- **Right-click** a column handle → **Delete** (removes a column)
- Or **Duplicate** a column to create a copy

---

## Widgets

### What is a Widget?
Widgets are the **actual content elements** — text, images, buttons, icons, video players, etc.

### Adding Widgets
1. Find a widget in the **left panel**
2. **Drag it** onto a column on the canvas
3. Or click the **"+"** inside an empty column to browse widgets

### Essential Free Widgets

| Widget | What It Does |
|--------|-------------|
| **Heading** | Section titles and headings (H1-H6) |
| **Text Editor** | Rich text content (paragraphs, lists, formatting) |
| **Image** | Display an image |
| **Button** | A clickable call-to-action button |
| **Icon** | Display an icon from Font Awesome or other libraries |
| **Spacer** | Add vertical space between elements |
| **Divider** | A horizontal line separator |
| **Google Maps** | Embed a Google map |
| **Video** | Embed YouTube, Vimeo, or self-hosted video |
| **Icon Box** | Icon + heading + description combo |
| **Image Box** | Image + heading + description combo |
| **Star Rating** | Display a star rating |
| **Progress Bar** | Animated progress/skill bar |
| **Counter** | Animated counting number |
| **Testimonial** | Customer testimonial with image and text |
| **Accordion** | Collapsible content sections (FAQ-style) |
| **Tabs** | Tabbed content panels |
| **Social Icons** | Social media icon links |
| **Alert** | A dismissible notice/message box |

### Widget Editing Tabs
Every widget has **three tabs** in the left panel:

---

## The Three Tabs: Content, Style, Advanced

### Content Tab
Controls **what** the widget displays:
- Text content, headings, button labels
- Image source, video URL
- Link URLs
- Widget-specific content options

**Example (Button widget):**
- Text: "Get Started"
- Link: `/contact`
- Icon: optional icon before/after text
- Alignment: left, center, right

### Style Tab
Controls **how** the widget looks:
- Colors (text, background, border)
- Typography (font family, size, weight, line height)
- Padding and spacing within the widget
- Border and border radius
- Box shadow
- Hover states (how it looks when the mouse hovers over it)

**Example (Button widget):**
- Typography: Font family, size, weight
- Text Color: Normal and Hover states
- Background Color: Normal and Hover
- Border: Width, color, radius
- Padding: Space inside the button
- Box Shadow: Drop shadow effect

### Advanced Tab
Controls **behavior** and **positioning**:
- **Layout**: Width, alignment, custom positioning
- **Motion Effects**: Entrance animations, scroll effects
- **Background**: Widget-level background
- **Border**: Widget-level border
- **Responsive**: Show/hide on desktop, tablet, or mobile
- **Custom CSS**: Widget-specific CSS (Pro)
- **Attributes**: Custom data attributes

---

## Working with Padding and Margin

Understanding the difference is critical:

```
|--- Margin (space OUTSIDE the element) ---|
|                                           |
|  |--- Border ---|                         |
|  |               |                        |
|  |  |-- Padding (space INSIDE) --|        |
|  |  |                            |        |
|  |  |    Content lives here      |        |
|  |  |                            |        |
|  |  |----------------------------|        |
|  |                               |        |
|  |-------------------------------|        |
|                                           |
|-------------------------------------------|
```

- **Margin**: Space between elements (pushes other elements away)
- **Padding**: Space between the element's border and its content

### Setting Padding/Margin in Elementor
1. Select any element (section, column, or widget)
2. Go to the **Advanced** tab
3. Find **Margin** and **Padding**
4. Enter values in px, em, %, or vh
5. Click the **chain link icon** to set all sides at once, or unlink to set each side individually

---

## Practical: Building a Simple Section

Let's build a hero section:

### Step 1: Create a Section
1. Click "+" and select a **single column** layout

### Step 2: Configure the Section
1. Click the section handle (blue tab)
2. **Content Tab**: Set Height → Min Height → `500px`
3. **Style Tab**:
   - Background → Classic → Color → choose a dark blue (#1a1a2e)
4. **Advanced Tab**: Set Padding → `60px` top and bottom

### Step 3: Add a Heading
1. Drag the **Heading** widget into the column
2. **Content Tab**:
   - Title: "Welcome to Our Website"
   - HTML Tag: H1
   - Alignment: Center
3. **Style Tab**:
   - Text Color: White (#ffffff)
   - Typography: Font Size → 48px, Weight → Bold

### Step 4: Add a Text Editor
1. Drag the **Text Editor** widget below the heading
2. **Content Tab**: Type "We create beautiful websites that drive results."
3. **Style Tab**:
   - Text Color: Light gray (#cccccc)
   - Typography: Font Size → 20px
   - Alignment: Center

### Step 5: Add a Button
1. Drag the **Button** widget below the text
2. **Content Tab**: Text → "Get Started", Alignment → Center
3. **Style Tab**:
   - Background Color: a bright accent color (#e94560)
   - Border Radius: 25px (for rounded corners)
   - Padding: 15px top/bottom, 40px left/right

### Step 6: Save
Press **Ctrl + S** to save your work.

---

## Exercises

1. **Build the hero section** described above step by step.

2. **Create a 3-column section**: Add a section with 3 columns. In each column, add an Icon Box widget with a different icon, heading, and description (like a "features" or "services" section).

3. **Practice resizing columns**: Create a 2-column section and drag the divider to make it 30/70, then 70/30, then back to 50/50.

4. **Explore the Style tab**: Select any widget and experiment with every option in the Style tab. Change colors, fonts, borders, shadows. You can always Ctrl+Z to undo.

5. **Use the Navigator**: Open the Navigator (Ctrl+I) and use it to select, reorder, and rename elements. Get comfortable navigating your page structure this way.

6. **Practice padding and margin**: Select different elements and adjust their padding and margin. Observe how the layout changes.

---

## Key Takeaways

- Elementor uses a **Section → Column → Widget** hierarchy
- **Sections** are full-width rows, **Columns** divide them, **Widgets** are the content
- Every element has **3 tabs**: Content (what), Style (how it looks), Advanced (behavior)
- **Drag and resize** columns by pulling the divider between them
- **Padding** = space inside an element; **Margin** = space outside
- Use the **Navigator** (Ctrl+I) to manage complex page structures
- **Right-click** elements for quick actions (copy, paste, duplicate, delete)
- **Ctrl+S** saves, **Ctrl+Z** undoes

---

**Next Lesson:** [Lesson 15 - Typography, Colors, and Global Styles](lesson-15-global-styles.md)
