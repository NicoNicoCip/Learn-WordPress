# Lesson 17: Building an About Page

## Objectives
- Design a professional About page using Elementor
- Learn the Image Box and Team Member patterns
- Practice 2-column layouts for image + text combinations
- Create a visually engaging storytelling page

---

## About Page Structure

A good About page typically includes:

1. **Page Header** — title and brief intro
2. **Our Story** — company history/background with images
3. **Mission & Values** — what you stand for
4. **Meet the Team** — team member profiles
5. **CTA** — what to do next

---

## Section 1: Page Header

1. **Add a Section** — 1 column
2. **Section Settings:**
   - Style: Background → your primary color or a hero image with dark overlay
   - Content: Min Height → 300px, Vertical Align → Middle
   - Advanced: Padding → 60px top and bottom

3. **Add a Heading:** "About Us"
   - H1, Center, White, 48px

4. **Add a Text Editor:** "Learn about our journey, our mission, and the team behind it all."
   - Center, Light text, 18px

---

## Section 2: Our Story

1. **Add a Section** — 2 columns (50/50)
2. **Section Settings:**
   - Style: Background → White
   - Advanced: Padding → 80px top and bottom

**Column 1 (Image):**
- Add an **Image** widget
- Upload a relevant image (office, workspace, product)
- Style: Border Radius → 8px, Box Shadow → subtle shadow

**Column 2 (Text):**
- **Heading:** "Our Story", H2, left aligned
- **Divider:** 15% width, accent color, 3px weight
- **Text Editor:** Write 2-3 paragraphs about the company's history
  ```
  Founded in 2020, we started with a simple mission: to help small
  businesses thrive online. What began as a two-person team working
  from a home office has grown into a full-service digital agency.

  Over the years, we've had the privilege of working with over 200
  businesses, from local startups to established enterprises. Each
  project has taught us something new and driven us to keep improving.
  ```

### Adding a Second Story Section (Reversed Layout)

1. **Add another 2-column section** below
2. This time, put the **text in Column 1** and **image in Column 2**
3. This creates visual variety with an alternating layout

**Tip:** Alternating image-left/image-right creates a zigzag pattern that guides the eye down the page.

---

## Section 3: Mission & Values

1. **Add a Section** — 1 column (for the heading)
2. Style: Background → light gray (#f8f9fa)
3. Padding: 80px top, 20px bottom

4. **Add Heading:** "Our Mission & Values", H2, Center

5. **Add another section below** — 3 columns (still light gray background)
6. Padding: 20px top, 80px bottom

In each column, add an **Icon Box**:

**Column 1:**
- Icon: `fa-bullseye` (target)
- Title: "Our Mission"
- Description: "To deliver digital solutions that help businesses grow and succeed online."
- Alignment: Center

**Column 2:**
- Icon: `fa-eye` (eye)
- Title: "Our Vision"
- Description: "A world where every business has access to professional, effective digital tools."
- Alignment: Center

**Column 3:**
- Icon: `fa-heart` (heart)
- Title: "Our Values"
- Description: "Quality, transparency, innovation, and putting our clients first in everything we do."
- Alignment: Center

---

## Section 4: Meet the Team

### Section Heading

1. **Add a Section** — 1 column
2. Background: White
3. Padding: 80px top, 20px bottom

4. **Heading:** "Meet the Team", H2, Center
5. **Text Editor:** "The talented people behind our success", Center, Gray

### Team Grid

1. **Add a Section** — 3 or 4 columns
2. Padding: 20px top, 80px bottom

For each team member, add these widgets in a column:

**Image:**
- Upload a headshot (square photos work best)
- Style: Border Radius → 50% (makes it a circle)
- Or Border Radius → 8px (rounded square)
- Alignment: Center

**Heading:**
- "Jane Smith", H4, Center, 20px

**Text Editor:**
- "Founder & CEO", Center, gray text, 14px
- Optionally add a brief bio below

**Social Icons:**
- Add Social Icons widget
- Add LinkedIn, Twitter/X icons
- Style: Size → 16px, Color → gray, Hover → accent color
- Alignment: Center

### Repeat for each team member (3-4 members).

---

## Section 5: Company Stats (Optional)

Between the team section and the CTA, you might add a stats bar:

1. **Add a Section** — 4 columns
2. Background: Your primary or accent color
3. Padding: 40px top and bottom

Add **Counter** widgets:
- "200+ Projects Completed"
- "50+ Happy Clients"
- "10 Years Experience"
- "15 Team Members"
- Color: White for all numbers and titles

---

## Section 6: CTA Section

1. **Add a Section** — 1 column
2. Background: Light (#f8f9fa) or your accent color
3. Min Height: 250px, Vertical Align: Middle
4. Padding: 60px top and bottom

5. **Heading:** "Let's Work Together"
   - H2, Center, 36px

6. **Text Editor:** "Have a project in mind? We'd love to hear about it."
   - Center, 18px

7. **Button:** "Contact Us" → `/contact`
   - Center aligned, styled to match your design

---

## Design Tips for About Pages

### Visual Rhythm
- Alternate between **image-left/text-right** and **text-left/image-right** sections
- Alternate between **white** and **light gray** section backgrounds
- This creates visual rhythm and keeps the page interesting

### Personality
- Use **real photos** when possible (not stock photos)
- Write in a **warm, conversational tone**
- Show your **team's personality** — people connect with people

### Keep It Scannable
- Use **headings** to break up content
- Keep paragraphs **short** (3-4 sentences max)
- Use **bullet points** for lists of values or services
- Add **visual elements** (icons, dividers, images) to break up text walls

---

## Exercises

1. **Build the complete About page** following the sections above.

2. **Use real or fictional content**: Write actual About page content for a real or imaginary business. Make it feel authentic.

3. **Add team members**: Create at least 3 team member cards with circular photos, names, titles, and social icons.

4. **Try the zigzag layout**: Create two image+text sections where the image alternates between left and right.

5. **Style consistently**: Make sure all headings, text, and colors match your global styles from Lesson 15.

6. **Preview on mobile**: Check how the 2-column and 3-column layouts stack on mobile (they should automatically stack vertically).

---

## Key Takeaways

- About pages tell your story — make them **personal and engaging**
- Use **2-column layouts** for image + text combinations
- **Alternate image position** (left/right) for visual variety
- **Circular images** (border-radius: 50%) work great for team headshots
- Alternate section backgrounds between **white and light gray** for visual rhythm
- Keep text **scannable** — short paragraphs, headings, icons
- Always end with a **CTA section** — guide the visitor to their next step

---

**Next Lesson:** [Lesson 18 - Building a Contact Page with Forms](lesson-18-contact-page.md)
