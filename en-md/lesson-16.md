# Lesson 16: Building a Homepage from Scratch

## Objectives
- Build a complete professional homepage with Elementor
- Learn the common sections every homepage needs
- Practice combining widgets, styling, and layout techniques
- Create a real, portfolio-worthy page

---

## Homepage Anatomy

Most professional homepages follow this structure:

1. **Hero Section** — big headline, description, CTA button
2. **Services/Features** — what you offer (3-4 icon boxes)
3. **About Section** — brief intro with image
4. **Social Proof** — testimonials, client logos, or stats
5. **Call to Action (CTA)** — final push to contact/sign up
6. **Footer** — contact info, links, copyright

Let's build each one.

---

## Before You Start

1. Open your "Home" page in Elementor
2. If it has content from before, select all and delete (or start with a fresh page)
3. Make sure your **global colors and fonts** are set up (Lesson 15)
4. In the bottom-left **Settings (gear icon)**, set:
   - **Page Layout**: Elementor Full Width (no sidebar, no header/footer from theme)
   - Or **Elementor Canvas** (completely blank — no header/footer at all)
   - For now, use **Elementor Full Width**

---

## Section 1: Hero Section

The hero is the first thing visitors see. Make it count.

### Build It:

1. **Add a Section** — single column
2. **Section Settings:**
   - Content Tab: Height → Min Height → `600px`, Vertical Align → Middle
   - Style Tab: Background → Classic → upload a relevant image (or use a solid color)
   - Style Tab: Background Overlay → Color: black (#000000), Opacity: 0.5 (this darkens the image so text is readable)
   - Advanced Tab: Padding → 80px top and bottom

3. **Add a Heading widget:**
   - Content: "Build Your Dream Website"
   - HTML Tag: H1
   - Alignment: Center
   - Style: Color → White, Size → 52px, Weight → Bold

4. **Add a Text Editor widget:**
   - Content: "We design and develop stunning websites that convert visitors into customers."
   - Style: Color → White (#f0f0f0), Size → 20px, Alignment → Center
   - Advanced: Max Width → 700px (set in Advanced → Layout → Width → Max Width), Align Self → Center

5. **Add a Button widget:**
   - Content: Text → "Get Started", Link → `/contact`, Alignment → Center
   - Style: Background → your accent color, Typography → 16px SemiBold, Padding → 15px top/bottom 40px left/right, Border Radius → 30px
   - Style (Hover): Background → slightly darker shade

6. **Add a Spacer** between heading and text (20px) and between text and button (30px) if needed.

---

## Section 2: Services/Features

Showcase what you offer in a clean grid.

### Build It:

1. **Add a Section** — 3 columns (equal width)
2. **Section Settings:**
   - Style: Background → light color (#f8f9fa)
   - Advanced: Padding → 80px top and bottom

3. **Above the columns, add a centered heading:**
   - First, add a section with 1 column above this one
   - Or add a heading to the first column, spanning full width
   - Better approach: Create a 1-column section first for the heading, then a 3-column section below

**Heading Section (1 column):**
- Heading: "Our Services"
- Tag: H2, Center aligned
- Style: Your primary color, 36px
- Below it, add a Text Editor: "What we can do for you", center aligned, gray text
- Add a Divider widget: Width → 10%, Alignment → Center (creates a small accent line)

**Services Section (3 columns):**
In each column, add an **Icon Box** widget:

**Column 1:**
- Icon: Choose a web design icon (e.g., `fa-laptop-code`)
- Title: "Web Design"
- Description: "Beautiful, responsive websites that look great on every device."
- Style: Icon Color → your accent color, Alignment → Center

**Column 2:**
- Icon: `fa-search` or similar
- Title: "SEO Optimization"
- Description: "Rank higher on Google and drive organic traffic to your site."
- Style: Same as Column 1

**Column 3:**
- Icon: `fa-shopping-cart` or similar
- Title: "E-Commerce"
- Description: "Full-featured online stores that make selling easy."
- Style: Same as Column 1

---

## Section 3: About Section

An image + text layout that introduces your company.

### Build It:

1. **Add a Section** — 2 columns (50/50)
2. **Section Settings:**
   - Style: Background → White
   - Advanced: Padding → 80px top and bottom

**Column 1 (Image):**
- Add an **Image** widget
- Upload a team photo or office image
- Style: Border Radius → 10px (slightly rounded corners)

**Column 2 (Content):**
- Add a **Heading**: "About Our Company", H2, left aligned
- Add a **Divider**: Width → 15%, color → accent color, Weight → 3px
- Add a **Text Editor**: A couple paragraphs about the company
- Add a **Button**: "Learn More" → links to `/about`, your secondary color

---

## Section 4: Social Proof (Testimonials)

Build trust with customer testimonials.

### Build It:

1. **Add a Section** — 3 columns
2. **Section Settings:**
   - Style: Background → your primary/dark color
   - Advanced: Padding → 80px top and bottom

**Add a heading section above (1 column):**
- Heading: "What Our Clients Say", H2, Center, White text

**In each column, add a Testimonial widget:**

**Testimonial 1:**
- Content: "They transformed our online presence. Our sales increased by 40% in the first month."
- Name: "Sarah Johnson"
- Title: "CEO, TechStartup Inc."
- Image: Upload a placeholder headshot
- Style: Text Color → White/Light gray, Name Color → White

**Testimonial 2 & 3:** Similar structure with different content.

**Alternative (without Testimonial widget):**
Use Icon Box or Text Editor with a quote icon for a custom look.

---

## Section 5: Stats/Counter Section (Optional)

Impressive numbers build credibility.

### Build It:

1. **Add a Section** — 4 columns
2. **Section Settings:**
   - Style: Background → accent color (or gradient)
   - Advanced: Padding → 60px top and bottom

In each column, add a **Counter** widget:
- Column 1: Number → 250, Title → "Projects Completed", Color → White
- Column 2: Number → 50, Title → "Happy Clients", Color → White
- Column 3: Number → 10, Title → "Years Experience", Color → White
- Column 4: Number → 15, Title → "Team Members", Color → White

---

## Section 6: Call to Action (CTA)

The final push to get visitors to act.

### Build It:

1. **Add a Section** — 1 column
2. **Section Settings:**
   - Content: Height → Min Height → 300px, Vertical Align → Middle
   - Style: Background → your primary color or a subtle gradient
   - Advanced: Padding → 60px top and bottom

3. **Add a Heading**: "Ready to Start Your Project?"
   - Center aligned, White, H2, 36px

4. **Add a Text Editor**: "Let's discuss your ideas and create something amazing together."
   - Center, Light gray text

5. **Add a Button**: "Contact Us" → `/contact`
   - White background, your primary text color
   - Or: transparent background with white border (outline/ghost button)
   - Border Radius → 30px

---

## Final Touches

### Check Spacing
- Scroll through the entire page
- Make sure spacing between sections is consistent (80px padding is a good standard)
- Ensure no sections feel too cramped or too spread out

### Check Alignment
- Headlines should be consistently sized
- Body text should be the same size throughout
- Colors should match your global palette

### Save and Preview
1. Press **Ctrl + S** to save
2. Click the **eye icon** (Preview Changes) at the bottom of the panel
3. Or right-click → Preview in new tab

---

## Exercises

1. **Build the complete homepage**: Follow all 6 sections above step by step.

2. **Customize the content**: Replace placeholder text with content relevant to a real or fictional business.

3. **Experiment with backgrounds**: Try different section backgrounds — solid colors, gradients, and images with overlays.

4. **Add hover effects**: On buttons and icon boxes, configure hover color changes.

5. **Check responsive**: Click the responsive mode button and check how your homepage looks on tablet and mobile. Fix anything that doesn't look right (we'll cover responsive design in detail in Lesson 20).

6. **Save as Template**: Click the section handle → Save as Template on your best section. You can reuse it on other pages later.

---

## Key Takeaways

- A professional homepage has a clear structure: Hero → Services → About → Social Proof → CTA
- **Start from the top and work down** — build section by section
- Use **consistent spacing** (80px section padding is a good default)
- **Background overlays** make text readable over images (dark overlay + white text)
- Use **global colors** everywhere — click the globe icon instead of picking colors manually
- The **Counter widget** is great for impressive statistics
- Always **preview your page** after building — check for spacing, alignment, and readability
- **Save sections as templates** to reuse on other pages

---

**Next Lesson:** [Lesson 17 - Building an About Page with Responsive Design](lesson-17-about-page.md)
