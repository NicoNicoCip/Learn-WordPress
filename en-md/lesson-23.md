# Lesson 23: Contact Forms — WPForms & Contact Form 7

## Objectives
- Create different types of forms beyond basic contact
- Configure form notifications and confirmations
- Add conditional logic to forms
- Embed forms in Elementor pages

---

## Beyond the Basic Contact Form

In Lesson 18, we set up a basic contact form. Now let's explore more form types and advanced features.

### Common Form Types:
- **Contact form** — name, email, message (already built)
- **Quote request form** — service selection, budget, timeline
- **Newsletter signup** — just email (or name + email)
- **Feedback/survey form** — rating, multiple choice, text areas
- **Job application form** — personal info, resume upload, cover letter
- **Event registration** — name, email, number of attendees, dietary requirements

---

## WPForms: Building Advanced Forms

### Creating a Quote Request Form

1. Go to **WPForms → Add New**
2. Name: "Request a Quote"
3. Start with a **Blank Form** (or the Suggestion Form template)

4. **Add fields** by dragging from the left panel:
   - **Name** (Single Line Text or Name field)
   - **Email** (Email field)
   - **Phone** (Phone field)
   - **Dropdown**: "What service are you interested in?"
     - Options: Web Design, SEO, E-Commerce, Marketing, Other
   - **Number Slider or Dropdown**: "Estimated Budget"
     - Options: Under $1,000; $1,000-$5,000; $5,000-$10,000; $10,000+
   - **Dropdown**: "Timeline"
     - Options: ASAP, 1-2 months, 3-6 months, No rush
   - **Paragraph Text**: "Tell us about your project"

5. **Configure each field:**
   - Click a field to edit its label, placeholder, and whether it's required
   - Mark Name, Email, and Service as **Required**

6. Click **"Save"**

### Configuring Notifications

1. In the form builder, click **Settings → Notifications**
2. **Send To Email Address**: Your email (or `{admin_email}`)
3. **Email Subject**: "New Quote Request from {field_id='1'}" (use Smart Tags)
4. **From Email**: `{field_id='2'}` (the submitter's email)
5. **Reply-To**: `{field_id='2'}`
6. **Message**: `{all_fields}` (includes all form data)

### Confirmation Settings

1. Go to **Settings → Confirmations**
2. Choose **Confirmation Type**:
   - **Message** — display a thank-you message on the same page
   - **Show Page** — redirect to a thank-you page
   - **Go to URL** — redirect to any URL
3. For most forms, use a **Message**: "Thank you for your request! We'll get back to you within 24 hours."

---

## Contact Form 7 (Alternative)

Contact Form 7 is the other major free form plugin. It uses a different approach — HTML-like markup.

### Creating a Form in CF7

1. Go to **Contact → Add New**
2. The form uses markup tags:

```
<label>Your Name (required)
    [text* your-name]</label>

<label>Your Email (required)
    [email* your-email]</label>

<label>Subject
    [text your-subject]</label>

<label>Your Message
    [textarea your-message]</label>

[submit "Send"]
```

### CF7 vs WPForms

| Feature | WPForms Lite | Contact Form 7 |
|---------|-------------|----------------|
| **Builder** | Visual drag-and-drop | HTML-like markup |
| **Ease of use** | Easier for beginners | Requires understanding markup |
| **Templates** | Yes | No (starts blank) |
| **Entry storage** | Yes (view submissions in WP) | No (email only, unless you add a plugin) |
| **Styling** | Basic built-in | Requires custom CSS |
| **Add-ons** | Many (paid) | Many (free) |

**Recommendation:** Use **WPForms** if you're a beginner. Use **CF7** if you're comfortable with code and want more free flexibility.

---

## Embedding Forms in Elementor

### Method 1: WPForms Widget
- In Elementor, search for "WPForms" in the widget panel
- Drag it onto your page
- Select your form from the dropdown

### Method 2: Shortcode
- Copy the form shortcode from WPForms or CF7
- In Elementor, add a **Shortcode** widget
- Paste the shortcode

### Method 3: Block (in Gutenberg)
- When using the WordPress block editor (not Elementor), add a WPForms or CF7 block

---

## Styling Forms to Match Your Site

### WPForms CSS Customization

Add to **Appearance → Customize → Additional CSS**:

```css
/* Form container */
.wpforms-container {
    max-width: 600px;
}

/* Labels */
.wpforms-field-label {
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
}

/* Input fields */
.wpforms-field input,
.wpforms-field textarea,
.wpforms-field select {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 16px;
    transition: border-color 0.3s;
}

/* Focus state */
.wpforms-field input:focus,
.wpforms-field textarea:focus,
.wpforms-field select:focus {
    border-color: #1abc9c;
    outline: none;
}

/* Submit button */
.wpforms-submit-container button {
    background: #e74c3c;
    color: #fff;
    padding: 14px 40px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
}

.wpforms-submit-container button:hover {
    background: #c0392b;
}
```

---

## Form Best Practices

### Design:
- Keep forms **as short as possible** — fewer fields = more submissions
- Mark required fields clearly
- Use **placeholder text** to guide users
- Make the submit button **prominent** and descriptive ("Get Your Quote" not just "Submit")

### User Experience:
- Show a **clear confirmation** after submission
- Set up a **thank-you page** for better tracking (you can track conversions in analytics)
- Use **field validation** — show errors immediately, not after submission

### Technical:
- **Test every form** before going live
- Set up **email notifications** to the right recipient
- Use **spam protection** (reCAPTCHA, honeypot fields)
- In Local WP, check **Mailhog** to verify emails are being sent

---

## Exercises

1. **Create a Quote Request form**: Build the form described above with service dropdown, budget, and timeline.

2. **Create a Newsletter signup**: Build a simple form with just Name and Email fields. Style the submit button to say "Subscribe".

3. **Configure notifications**: Set up email notifications for your Quote Request form with proper subject line and reply-to address.

4. **Style your forms**: Add custom CSS to make your forms match your site's design.

5. **Test all forms**: Submit test entries for each form. Check that emails are received (use Mailhog in Local WP).

6. **Create a thank-you page**: Make a simple page that says "Thank you! We'll be in touch soon." Configure your form to redirect there after submission.

---

## Key Takeaways

- **WPForms** is the easiest form builder for beginners (drag and drop)
- Create different form types: contact, quote request, newsletter, survey
- Configure **notifications** (who receives the email) and **confirmations** (what the user sees)
- Embed forms in Elementor using the **WPForms widget** or **Shortcode widget**
- **Style forms with CSS** to match your site design
- Keep forms **short** — every extra field reduces submissions
- Always **test forms** before going live
- Use **spam protection** (honeypot, reCAPTCHA) on all public forms

---

**Next Lesson:** [Lesson 24 - Image Optimization and Performance](lesson-24-image-optimization.md)
