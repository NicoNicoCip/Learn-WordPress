# Lesson 28: Designing a Shop Page with Elementor

## Objectives
- Customize the WooCommerce shop page appearance
- Use Elementor widgets for product display
- Create a compelling product showcase
- Understand the limitations of Elementor Free with WooCommerce

---

## WooCommerce + Elementor: What's Possible

### With Elementor Free:
- Add WooCommerce shortcodes via Shortcode widget
- Design custom content around the shop
- Create landing pages that feature products
- Style the shop with custom CSS

### With Elementor Pro:
- Full WooCommerce Builder — design product pages, shop pages, cart, and checkout
- WooCommerce-specific widgets (Products, Product Categories, Cart, etc.)
- Complete visual control over every WooCommerce page

### Free Alternatives to Elementor Pro for WooCommerce:
- **ShopEngine** — free WooCommerce builder for Elementor
- **JetWooBuilder** (by Jetalements) — adds WooCommerce widgets
- **Products widgets** come with some themes (like Astra)

---

## Customizing the Shop Page (Free Method)

### Method 1: WooCommerce Shortcodes in Elementor

WooCommerce provides shortcodes to display products:

| Shortcode | What It Shows |
|-----------|-------------|
| `[products limit="8" columns="4"]` | Latest 8 products in 4 columns |
| `[products category="t-shirts"]` | Products from a specific category |
| `[featured_products limit="4"]` | Featured products only |
| `[sale_products limit="4"]` | Products on sale |
| `[best_selling_products limit="4"]` | Best sellers |
| `[recent_products limit="8"]` | Most recently added |
| `[product_categories]` | Product category grid |

#### Using Shortcodes in Elementor:
1. Open a page in Elementor
2. Add a **Shortcode** widget
3. Paste one of the shortcodes above
4. The products will display on the page

### Method 2: Create a Custom Shop Landing Page

Instead of relying on the default shop page, create a custom page that showcases your products beautifully:

#### Section 1: Shop Hero
1. **Add a Section** — 1 column
2. Background: Your brand color or product image with overlay
3. Min Height: 400px, Vertical Align: Middle

4. **Heading**: "Our Products" or "Shop the Collection"
5. **Text Editor**: "Discover quality products designed for you."

#### Section 2: Featured Categories
1. **Add a Section** — 3 or 4 columns
2. Background: White
3. Padding: 80px top and bottom

4. **Section Heading** (above columns): "Shop by Category", H2, Center

In each column:
- **Image** widget: Upload a category image
- **Heading** (H4): Category name
- **Button**: "Shop Now" → link to the category archive page
- Example: `http://learning-wordpress.local/product-category/clothing/`

#### Section 3: Featured Products
1. **Add a Section** — 1 column
2. Padding: 80px top and bottom

3. **Heading**: "Featured Products", H2, Center
4. **Shortcode** widget: `[featured_products limit="4" columns="4"]`

#### Section 4: On Sale
1. **Add a Section** — 1 column
2. Background: Light (#f8f9fa)
3. Padding: 80px top and bottom

4. **Heading**: "On Sale", H2, Center
5. **Shortcode** widget: `[sale_products limit="4" columns="4"]`

#### Section 5: New Arrivals
1. **Add a Section** — 1 column
2. Padding: 80px top and bottom

3. **Heading**: "New Arrivals", H2, Center
4. **Shortcode** widget: `[recent_products limit="8" columns="4"]`

#### Section 6: CTA Banner
1. **Add a Section** — 1 column
2. Background: Accent color or promotional image
3. Min Height: 300px, Vertical Align: Middle

4. **Heading**: "Free Shipping on Orders Over $50", White, Center
5. **Button**: "Shop Now" → link to shop page

---

## Styling WooCommerce Elements with CSS

The default WooCommerce product display can be styled to match your site:

### Product Card Styling
Add to **Appearance → Customize → Additional CSS**:

```css
/* Product card */
.woocommerce ul.products li.product {
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
}

/* Hover effect */
.woocommerce ul.products li.product:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* Product title */
.woocommerce ul.products li.product .woocommerce-loop-product__title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
}

/* Price */
.woocommerce ul.products li.product .price {
    color: #e74c3c;
    font-size: 18px;
    font-weight: 700;
}

/* Sale badge */
.woocommerce span.onsale {
    background-color: #e74c3c;
    color: #fff;
    border-radius: 50%;
    padding: 5px 10px;
}

/* Add to cart button */
.woocommerce ul.products li.product .button {
    background-color: #2c3e50;
    color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
}

.woocommerce ul.products li.product .button:hover {
    background-color: #1abc9c;
}

/* Product image */
.woocommerce ul.products li.product img {
    border-radius: 8px;
}
```

---

## WooCommerce Customizer Settings

Some shop appearance settings are in the WordPress Customizer:

1. Go to **Appearance → Customize → WooCommerce** (this section appears after installing WooCommerce)

Available settings:
- **Store Notice**: Display a site-wide notice (e.g., "Free shipping this week!")
- **Product Catalog**: Products per row, rows per page, default sorting
- **Product Images**: Thumbnail cropping and gallery behavior
- **Checkout**: Checkout page layout options

### Key Settings to Configure:
- **Products per row**: 3 or 4 (default is 4)
- **Rows per page**: 3-4 rows (so 12-16 products per page)
- **Catalog image cropping**: Uncropped, 1:1 square, or custom ratio

---

## Making Products Stand Out

### Mark Products as Featured
1. Go to **Products → All Products**
2. Click the **star icon** next to a product to mark it as featured
3. Featured products appear in `[featured_products]` shortcodes

### Adding Sale Prices
1. Edit a product
2. Set a **Sale Price** lower than the Regular Price
3. A "Sale!" badge appears automatically on the product

### Product Ordering
In **Appearance → Customize → WooCommerce → Product Catalog**:
- Default sorting: Popularity, Rating, Newness, Price (low/high)

---

## Exercises

1. **Create a custom shop landing page**: Build a page with hero, featured categories, featured products, sale items, and a CTA banner using Elementor.

2. **Use WooCommerce shortcodes**: Add at least 3 different product shortcodes to your custom shop page.

3. **Style the products**: Add custom CSS to improve the product card appearance (hover effects, button styles, etc.).

4. **Configure product catalog**: Go to Appearance → Customize → WooCommerce → Product Catalog and set products per row and rows per page.

5. **Feature some products**: Mark 3-4 products as "Featured" and display them on your shop page.

6. **Add a store notice**: In the Customizer, add a store-wide notice (e.g., "Free shipping on orders over $50!").

---

## Key Takeaways

- Elementor Free uses **WooCommerce shortcodes** to display products
- Create a **custom shop landing page** with hero, categories, featured products, and CTAs
- **Style products with CSS** to match your brand (hover effects, buttons, badges)
- Use the **WooCommerce Customizer settings** for catalog layout (products per row, sorting)
- **Mark products as Featured** to highlight them with the `[featured_products]` shortcode
- Elementor Pro (or free alternatives like ShopEngine) gives full WooCommerce visual control
- The **store notice** is great for promotions visible across the entire site

---

**Next Module:** [Module 6 - Site Management & Launch](../Module-06-Management/lesson-29-users-roles.md)
