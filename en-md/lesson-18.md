# Lesson 18: Building a Contact Page with Forms

## Objectives
- Build a professional Contact page layout
- Install and configure a contact form plugin
- Add a form to your page using Elementor
- Include maps, contact info, and business hours

---

## Contact Page Structure

A good contact page includes:
1. **Page header** — title and brief invitation
2. **Contact form** — the main feature
3. **Contact details** — phone, email, address
4. **Map** — embedded Google Map
5. **Business hours** (if applicable)

---

## Setting Up a Contact Form Plugin

Elementor Free doesn't include a form widget (that's an Elementor Pro feature). We'll use a free form plugin.

### Option 1: WPForms Lite (Recommended for beginners)

1. Go to **Plugins → Add New Plugin**
2. Search for **"WPForms"**
3. Install and activate **"WPForms Lite"**
4. After activation, you'll see **WPForms** in the sidebar

### Creating a Contact Form with WPForms

1. Go to **WPForms → Add New**
2. Name it "Contact Form"
3. Select the **"Simple Contact Form"** template
4. The form builder opens with pre-configured fields:
   - Name
   - Email
   - Comment or Message
5. Customize if needed:
   - **Drag fields** to reorder
   - **Click a field** to edit its label, placeholder, and requirements
   - **Add fields** from the left panel (Phone, Subject, etc.)
6. Click **Settings** in the left panel:
   - **General**: Form name, submit button text, confirmation message
   - **Notifications**: Set the email address where submissions are sent (your email)
   - **Confirmations**: What the user sees after submitting (success message or redirect)
7. Click **"Save"**

### Adding WPForms to Elementor

**Method 1: Shortcode**
1. In WPForms, go to your form, find the shortcode (looks like `[wpforms id="123"]`)
2. In Elementor, add a **Shortcode** widget
3. Paste the shortcode

**Method 2: WPForms Widget (if available)**
1. In Elementor, search for "WPForms" in the widget panel
2. Drag the WPForms widget onto your page
3. Select your form from the dropdown

### Option 2: Contact Form 7 (Alternative)

1. Install and activate **"Contact Form 7"** plugin
2. Go to **Contact → Add New**
3. Configure your form fields
4. Copy the shortcode
5. In Elementor, use a **Shortcode** widget and paste it

---

## Building the Contact Page

### Section 1: Page Header

1. **Add a Section** — 1 column
2. Background: Primary color or subtle gradient
3. Min Height: 250px, Vertical Align: Middle
4. Padding: 60px top and bottom

5. **Heading:** "Get in Touch", H1, Center, White, 44px
6. **Text Editor:** "We'd love to hear from you. Send us a message and we'll respond as soon as possible.", Center, Light text

---

### Section 2: Form + Contact Info (2 Columns)

1. **Add a Section** — 2 columns (60/40 or 65/35)
2. Background: White
3. Padding: 80px top and bottom

**Column 1 (Form — wider):**
- **Heading:** "Send Us a Message", H3
- **WPForms widget** or **Shortcode widget** with your form

**Column 2 (Contact Info — narrower):**

Add these widgets:

**Heading:** "Contact Information", H3

**Icon List** widget (or individual Icon Box widgets):
- Phone icon + "(555) 123-4567"
- Email icon + "info@example.com"
- Location icon + "123 Business St, City, ST 12345"

**Heading:** "Business Hours", H4
**Text Editor:**
```
Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 10:00 AM - 2:00 PM
Sunday: Closed
```

**Social Icons** widget:
- Add icons for Facebook, Twitter/X, LinkedIn, Instagram
- Style them to match your brand colors

---

### Section 3: Map

1. **Add a Section** — 1 column
2. Padding: 0 (no padding — let the map go edge to edge)

**Google Maps widget:**
- Drag the **Google Maps** widget onto the section
- Enter the address in the Location field
- Set Zoom level (14-16 is good for a single location)
- Set Height: 400px

**Note:** Google Maps may require an API key for extended use. For local development, it usually works without one.

**Alternative — Embed a Map:**
1. Go to Google Maps in your browser
2. Search for an address
3. Click Share → Embed a map
4. Copy the iframe code
5. In Elementor, add an **HTML** widget and paste the embed code

---

### Section 4: FAQ Section (Optional)

Common questions people might have before contacting you:

1. **Add a Section** — 1 column
2. Background: Light (#f8f9fa)
3. Padding: 80px top and bottom

4. **Heading:** "Frequently Asked Questions", H2, Center

5. **Accordion** widget:
   - Item 1: "What is your typical response time?" → "We respond to all inquiries within 24 business hours."
   - Item 2: "Do you offer free consultations?" → "Yes! We offer a free 30-minute consultation to discuss your project."
   - Item 3: "What areas do you serve?" → "We work with clients worldwide. All our services can be delivered remotely."

---

## Styling the Contact Form

WPForms and Contact Form 7 forms can be styled with CSS. Add this to the Customizer's Additional CSS (or in a Custom CSS widget in Elementor Pro):

### Basic Form Styling (WPForms):
```css
/* Input fields */
.wpforms-form input[type="text"],
.wpforms-form input[type="email"],
.wpforms-form textarea {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 12px 15px;
    font-size: 16px;
    width: 100%;
}

/* Focus state */
.wpforms-form input:focus,
.wpforms-form textarea:focus {
    border-color: #1abc9c; /* your accent color */
    outline: none;
    box-shadow: 0 0 5px rgba(26, 188, 156, 0.3);
}

/* Submit button */
.wpforms-form button[type="submit"] {
    background-color: #e74c3c; /* your accent color */
    color: #ffffff;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.wpforms-form button[type="submit"]:hover {
    background-color: #c0392b; /* darker on hover */
}
```

---

## Testing Your Form

### In Local WP:
- Local WP includes **Mailhog** — a tool that catches emails sent by WordPress locally
- In Local, click the **"Tools"** tab → **"Open Mailhog"**
- Submit a test form and check Mailhog for the email

### Checklist:
- [ ] All required fields show validation errors when empty
- [ ] Form submits successfully with a confirmation message
- [ ] Email arrives with all submitted data
- [ ] Form looks good on mobile
- [ ] Submit button is clearly visible

---

## Exercises

1. **Install WPForms Lite**: Install and activate the plugin.

2. **Create a contact form**: Use the Simple Contact Form template. Add a Phone Number field and a Subject dropdown.

3. **Build the contact page**: Follow the layout above — header, form + contact info, map, and FAQ.

4. **Style the form**: Add custom CSS to make the form match your site's design.

5. **Test the form**: Submit a test entry. Check Mailhog (in Local WP) or the WPForms Entries page to confirm it works.

6. **Check on mobile**: Preview the contact page on mobile and make sure the 2-column layout stacks properly.

---

## Key Takeaways

- Use **WPForms Lite** (free) or **Contact Form 7** (free) for contact forms in Elementor Free
- A good contact page has: **form + contact details + map**
- Use a **2-column layout**: wider column for the form, narrower for contact info
- **Test your form** — use Local WP's Mailhog to verify emails are sent
- **Style forms with CSS** to match your site design
- An **FAQ section** can answer common questions and reduce unnecessary inquiries
- Always include **multiple ways to contact** — form, email, phone, social media

---

**Next Lesson:** [Lesson 19 - Templates, Saving, and Reusing Designs](lesson-19-templates.md)
