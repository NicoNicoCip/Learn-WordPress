# Lesson 31: SEO Fundamentals for WordPress

## Objectives
- Understand how search engines find and rank your site
- Optimize every page and post for search engines
- Use Yoast SEO effectively
- Implement technical SEO basics

---

## How Search Engines Work

### The Basic Process:
1. **Crawling** — Google sends "bots" to discover and scan your pages
2. **Indexing** — Google stores and categorizes your content
3. **Ranking** — Google decides where to show your pages in search results

### What Affects Rankings:
- **Content quality** — relevant, helpful, well-written content
- **Keywords** — the terms people search for match your content
- **Site speed** — faster sites rank higher
- **Mobile-friendly** — mobile-responsive design is required
- **Backlinks** — other sites linking to yours
- **Technical SEO** — proper site structure, sitemaps, clean URLs
- **User experience** — low bounce rate, good navigation

---

## On-Page SEO (Per Page/Post)

### For Every Page and Post, Optimize These:

#### 1. SEO Title (Title Tag)
The most important on-page SEO element:
- Appears as the clickable headline in Google results
- Keep it under **60 characters**
- Include your **target keyword** near the beginning
- Make it compelling — it determines if people click

**Examples:**
- Bad: "Home"
- Good: "Professional Web Design Services | Your Company"
- Bad: "About Us"
- Good: "About Our Agency — 10 Years of Award-Winning Design"

#### 2. Meta Description
The snippet shown below the title in Google results:
- Keep it under **155 characters**
- Include your target keyword naturally
- Write a compelling summary that encourages clicks
- Include a call to action

**Example:**
"We design stunning websites that drive results. 10+ years experience, 200+ projects completed. Get a free consultation today."

#### 3. URL Slug
The URL of the page:
- Keep it **short and descriptive**
- Include the main keyword
- Use hyphens between words
- Remove unnecessary words (a, the, and, etc.)

**Examples:**
- Bad: `yoursite.com/our-professional-web-design-services-for-small-businesses`
- Good: `yoursite.com/web-design-services`

#### 4. Headings (H1-H6)
- Use **one H1** per page (usually the main title)
- Use **H2** for major sections
- Use **H3** for sub-sections
- Include keywords naturally in headings
- Use a logical hierarchy (H1 → H2 → H3, never skip levels)

#### 5. Content
- Write **naturally** — don't stuff keywords
- Aim for **300+ words** on every page (more for blog posts)
- Use **keywords and related terms** naturally throughout
- Break up text with headings, lists, and images
- Internal linking — link to other pages on your site

#### 6. Images
- Use **descriptive file names** (web-design-example.jpg, not IMG_001.jpg)
- Write meaningful **alt text** for every image
- Include keywords in alt text where natural
- Compress images for fast loading

---

## Using Yoast SEO

### The Yoast Panel
When editing any post or page, scroll down to find the Yoast SEO panel:

### Focus Keyphrase
1. Enter the main keyword or phrase for this page
2. Yoast analyzes your content for that keyword
3. It checks: title, meta description, URL, headings, content, images

### SEO Analysis
Yoast shows colored dots:
- **Green** — good, optimized correctly
- **Orange** — could be improved
- **Red** — needs attention

Common recommendations:
- "The focus keyphrase doesn't appear in the SEO title"
- "The meta description is too short"
- "No internal links appear in this page"
- "Images on this page do not have alt attributes with the focus keyphrase"

### Readability Analysis
Checks how easy your content is to read:
- Sentence length (keep under 20 words on average)
- Paragraph length (keep under 150 words)
- Use of transition words ("however", "therefore", "in addition")
- Passive voice usage (minimize it)
- Subheading distribution (add headings every 300 words)

### Snippet Preview
Shows how your page will appear in Google:
1. Click **"Edit snippet"** in the Yoast panel
2. Customize the **SEO Title** and **Meta Description**
3. See a preview of the Google search result

---

## Technical SEO

### XML Sitemap
Yoast automatically generates a sitemap:
- Located at: `yoursite.com/sitemap_index.xml`
- Lists all your pages, posts, and images
- Submit to Google Search Console when your site goes live

### Robots.txt
Controls which pages search engines can crawl:
- Yoast manages this automatically
- Access at: `yoursite.com/robots.txt`

### Canonical URLs
Prevents duplicate content issues:
- Yoast automatically adds canonical tags
- Tells search engines which version of a page is the "official" one

### Schema Markup (Structured Data)
Helps search engines understand your content:
- Yoast adds basic schema automatically
- Types: Article, Organization, Product, FAQ, etc.
- Can result in rich snippets in search results (stars, prices, FAQs)

---

## SEO Checklist for Every Page

Before publishing any page or post:

- [ ] **SEO Title** set and under 60 characters
- [ ] **Meta Description** set and under 155 characters
- [ ] **URL Slug** is short and includes the keyword
- [ ] **Focus Keyphrase** is set in Yoast
- [ ] **Yoast SEO score** is green (or at least orange)
- [ ] **H1 heading** is used once and includes the keyword
- [ ] **H2/H3 headings** are used for sections
- [ ] **Internal links** to other pages on your site
- [ ] **Images have alt text** with natural keyword inclusion
- [ ] **Content is 300+ words** (more for blog posts)
- [ ] **Readability score** is good (green or orange in Yoast)

---

## Local SEO (For Local Businesses)

If building sites for local businesses:

1. **Google Business Profile** — create/claim the business listing (most important)
2. **NAP Consistency** — Name, Address, Phone must be identical everywhere
3. **Local keywords** — include city/region in titles and content (e.g., "Web Design in Portland")
4. **Google Maps** — embed a map on the contact page
5. **Customer reviews** — encourage Google reviews
6. **Local schema** — add LocalBusiness structured data

---

## Content Strategy for SEO

### Blog Posts for Traffic
Regularly publishing helpful blog posts drives organic traffic:
1. **Research keywords** — find what your audience searches for
   - Use free tools: Google's "People also ask", AnswerThePublic, Ubersuggest
2. **Write helpful content** — answer questions your audience has
3. **Aim for 1,000-2,000 words** for blog posts
4. **Publish consistently** — weekly or bi-weekly
5. **Update old posts** — refresh content to keep it relevant

### Keyword Research (Basic)
1. Think about what your customers search for
2. Use Google — type a query and look at:
   - Autocomplete suggestions
   - "People also ask" boxes
   - "Related searches" at the bottom
3. These are real keywords people use — create content around them

---

## Exercises

1. **Optimize your homepage**: Set a focus keyphrase, write an SEO title and meta description. Get the Yoast score to green.

2. **Optimize your About page**: Same as above — keyphrase, title, description.

3. **Optimize a blog post**: Create a new blog post (500+ words) targeting a specific keyword. Follow the SEO checklist above.

4. **Add internal links**: On each page, add at least one link to another page on your site.

5. **Check your sitemap**: Visit `your-site.local/sitemap_index.xml` and see all the pages listed.

6. **Review all alt text**: Go through your Media Library and make sure every image has descriptive alt text.

---

## Key Takeaways

- SEO is about making your site **discoverable** and **relevant** to search engines
- **On-page SEO**: title, meta description, URL, headings, content, images
- **Yoast SEO** provides a checklist — aim for green scores on every page
- **SEO Title** is the most important single element (under 60 characters, include keyword)
- **Content quality** matters most — write helpful, well-structured content
- **Technical SEO** (sitemaps, canonical URLs, schema) is handled by Yoast automatically
- **Internal linking** helps search engines and users navigate your site
- **Blog consistently** to build organic traffic over time

---

**Next Lesson:** [Lesson 32 - Performance Optimization](lesson-32-performance.md)
