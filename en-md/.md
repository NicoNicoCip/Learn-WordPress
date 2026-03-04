# Project 3: Build a Simple WooCommerce Store

## Overview
Build a complete e-commerce store with WooCommerce. This project brings together everything from the course, especially Modules 3, 4, and 5.

**Estimated time:** 4-6 hours

---

## The Brief

**Client:** "Evergreen Goods" — an online shop selling eco-friendly, sustainable home products (reusable bags, bamboo products, natural cleaning supplies, etc.).

**Requirements:**
- Clean, professional online store
- Product catalog with categories
- Shopping cart and checkout
- Payment processing (Stripe test mode)
- Shipping configuration
- About the brand story
- Contact page

---

## Pages to Build

### 1. Home Page (Shop Landing)
**Sections to include:**
- Hero banner: "Sustainable Living Made Simple" with a lifestyle image
- Featured product categories (3-4 category cards with images)
- Featured/bestselling products (4 products)
- Brand story teaser (image + text + "Learn More" button)
- "Why Choose Us" section (3-4 icon boxes: Eco-Friendly, Free Shipping Over $50, Satisfaction Guaranteed, Sustainable Packaging)
- Newsletter signup
- Customer testimonials (3 reviews)

### 2. Shop Page (WooCommerce)
- Product catalog with sidebar filters
- Category navigation
- Well-styled product cards
- Pagination

### 3. About Page
**Content to include:**
- Brand story and mission
- Sustainability commitment (with icons/stats)
- "Our Impact" numbers (trees saved, plastic reduced, etc.)
- Team section

### 4. Contact Page
**Content to include:**
- Contact form (Name, Email, Subject, Message)
- Customer service info (email, phone, hours)
- FAQ accordion (shipping, returns, sizing)
- Social media links

### 5. Blog Page
- 3 blog posts about sustainability:
  1. "10 Easy Swaps for a More Sustainable Kitchen"
  2. "How to Reduce Plastic in Your Daily Routine"
  3. "The Truth About Greenwashing: What to Look For"

### 6. Additional WooCommerce Pages
These are auto-generated but need to work:
- Cart page
- Checkout page
- My Account page

---

## Products to Create

Create at least **12 products** across 4 categories:

### Category: Kitchen & Dining (3 products)

**Product 1: Bamboo Utensil Set (Simple)**
- Price: $24.99
- Description: Set of 5 bamboo utensils — spatula, spoon, fork, knife, and chopsticks
- SKU: BUS-001
- Image: bamboo utensils photo

**Product 2: Beeswax Food Wraps (Variable)**
- Variations: Small ($12.99), Medium ($16.99), Large ($19.99), Variety Pack ($29.99)
- Description: Reusable food wraps to replace plastic wrap
- SKU: BFW-001
- Image: beeswax wraps photo

**Product 3: Reusable Produce Bags Set (Simple)**
- Price: $15.99, Sale Price: $12.99
- Description: Set of 6 mesh produce bags for grocery shopping
- SKU: RPB-001

### Category: Personal Care (3 products)

**Product 4: Bamboo Toothbrush 4-Pack (Simple)**
- Price: $9.99
- SKU: BT-001

**Product 5: Shampoo Bar (Variable)**
- Variations: Lavender ($11.99), Peppermint ($11.99), Unscented ($10.99)
- SKU: SB-001

**Product 6: Natural Deodorant (Variable)**
- Variations: Citrus, Cedar, Unscented — all $13.99
- SKU: ND-001

### Category: Home Cleaning (3 products)

**Product 7: All-Purpose Cleaner Concentrate (Simple)**
- Price: $14.99
- Description: Makes 10 bottles of all-purpose cleaner
- SKU: APC-001

**Product 8: Reusable Cleaning Cloths 5-Pack (Simple)**
- Price: $18.99
- SKU: RCC-001

**Product 9: Laundry Detergent Sheets (Simple)**
- Price: $16.99
- Description: 60 sheets, plastic-free packaging
- SKU: LDS-001

### Category: On-the-Go (3 products)

**Product 10: Stainless Steel Water Bottle (Variable)**
- Variations: 500ml ($22.99), 750ml ($27.99), 1L ($32.99)
- Colors: Matte Black, Forest Green, Ocean Blue
- SKU: SWB-001

**Product 11: Organic Cotton Tote Bag (Simple)**
- Price: $14.99
- SKU: OCT-001

**Product 12: Reusable Coffee Cup (Variable)**
- Variations: 350ml ($18.99), 450ml ($21.99)
- SKU: RCC-002

### Product Requirements:
- Every product must have: **title, description, short description, price, SKU, category, product image, and 2+ gallery images**
- At least **3 products should be Variable** (with size/color/scent options)
- At least **2 products should be On Sale** (with sale price)
- Mark **4 products as Featured**

---

## Store Configuration

### Shipping Zones:

**Zone 1: Domestic**
- Free Shipping for orders over $50
- Flat Rate: $7.99 (Standard Shipping)

**Zone 2: International**
- Flat Rate: $19.99

### Payment:
- Stripe (test mode)
- PayPal (optional)

### Taxes:
- Set up at least one tax rate for your region

### Store Policies:
- Shipping Policy page
- Return/Refund Policy page
- Privacy Policy page

---

## Design Specifications

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Forest Green | `#2d6a4f` | Primary, buttons |
| Sage Green | `#95d5b2` | Accents, highlights |
| Warm Cream | `#fefae0` | Light backgrounds |
| Dark Charcoal | `#1b1b1b` | Text |
| White | `#ffffff` | Cards, backgrounds |
| Amber | `#e09f3e` | Sale badges, CTAs |

### Fonts
- **Headings:** Raleway (Clean, modern)
- **Body:** Nunito or Lato (Friendly, readable)

### Photography
- Unsplash/Pexels search: eco friendly products, sustainable living, bamboo products, zero waste, natural home

---

## Technical Requirements

- [ ] WooCommerce installed and configured
- [ ] 12+ products with proper details, images, and categories
- [ ] Variable products with working variations
- [ ] Featured products displayed on homepage
- [ ] Sale products showing sale badges
- [ ] Shipping zones configured (domestic + international)
- [ ] Free shipping for orders over $50
- [ ] Stripe payment gateway in test mode
- [ ] Complete a test purchase successfully
- [ ] Contact form works
- [ ] Blog has 3 posts
- [ ] Mobile responsive
- [ ] SEO configured on all pages
- [ ] All product images optimized
- [ ] Store notice active ("Free shipping on orders over $50!")

---

## Bonus Challenges

1. Add a **"New Arrivals"** section to the homepage
2. Create **product category images** and use `[product_categories]` shortcode
3. Add **cross-sell products** to the cart page
4. Create a **coupon code** (e.g., WELCOME10 for 10% off first order)
5. Add a **size guide** or **FAQ** accordion on product pages
6. Create a **"Sustainability Impact"** page with counters (trees saved, plastic reduced)
7. Set up **email template branding** (WooCommerce → Settings → Emails → customize colors/header)

---

## Testing Checklist

Before considering this project complete:

- [ ] Browse the shop and filter by category
- [ ] View a simple product page — all info displays correctly
- [ ] View a variable product — variations work (selecting size changes price)
- [ ] Add items to cart — cart updates correctly
- [ ] Update quantities in cart — total recalculates
- [ ] Remove an item from cart — works correctly
- [ ] Proceed to checkout — all fields display
- [ ] Complete a test purchase with Stripe test card (4242 4242 4242 4242)
- [ ] Order confirmation page shows
- [ ] Order appears in WooCommerce → Orders
- [ ] Order notification email is sent
- [ ] Free shipping applies when cart total exceeds $50
- [ ] Sale products show discounted prices with strikethrough on original
- [ ] Shop page looks good on mobile
- [ ] Product pages look good on mobile
- [ ] Cart and checkout work on mobile

---

## Evaluation Criteria

| Criteria | Check |
|----------|-------|
| 12+ products with complete details and images | |
| Variable products work correctly | |
| Shop page is well-organized with categories | |
| Complete purchase flow works (test mode) | |
| Shipping is properly configured | |
| Homepage showcases products effectively | |
| Design is cohesive and professional | |
| Mobile responsive throughout | |
| SEO configured on all pages | |
| Contact form and blog are functional | |
| Store notice and promotions are visible | |
| All links and navigation work | |

---

## Congratulations!

If you've completed all three practice projects, you have hands-on experience with:
- Business/corporate WordPress sites
- Blog/content-focused sites
- E-commerce stores with WooCommerce

These are the three most common types of WordPress sites you'll build professionally. You're ready to start building real client sites!
