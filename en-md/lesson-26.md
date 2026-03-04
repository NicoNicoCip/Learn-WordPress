# Lesson 26: Adding Products

## Objectives
- Add simple products with images, prices, and descriptions
- Understand product types (simple, variable, digital)
- Set up product categories and tags
- Configure inventory, shipping, and linked products

---

## Product Types in WooCommerce

| Type | What It Is | Example |
|------|-----------|---------|
| **Simple** | A single product with one price | A t-shirt in one size/color |
| **Variable** | A product with options (size, color) | A t-shirt with size and color choices |
| **Grouped** | A collection of related simple products | A set of related accessories |
| **External/Affiliate** | A product sold on another site | Amazon affiliate product |
| **Virtual** | A non-physical product (no shipping) | A consultation service |
| **Downloadable** | A digital product | An e-book, template, or software |

---

## Adding a Simple Product

### Step 1: Create the Product

1. Go to **Products → Add New**
2. Enter the **Product Name**: e.g., "Classic Blue T-Shirt"
3. Write a **Product Description** in the main editor (this appears in the full product page):
   ```
   Our Classic Blue T-Shirt is made from 100% organic cotton for
   ultimate comfort. Features a relaxed fit and durable stitching
   that lasts wash after wash.
   ```

### Step 2: Product Data Section

Below the editor, you'll see the **Product Data** panel. Make sure "Simple product" is selected.

#### General Tab
| Field | What to Enter |
|-------|-------------|
| **Regular Price** | The normal price (e.g., $29.99) |
| **Sale Price** | The discounted price (optional — e.g., $24.99) |
| **Sale dates** | Schedule when the sale starts/ends |

#### Inventory Tab
| Field | What to Enter |
|-------|-------------|
| **SKU** | Stock Keeping Unit — unique identifier (e.g., "BTS-001") |
| **Manage Stock** | Check to enable stock management |
| **Stock Quantity** | How many you have (e.g., 50) |
| **Allow Backorders** | Allow purchases when out of stock? |
| **Low Stock Threshold** | Get notified when stock drops below this |
| **Sold Individually** | Limit to 1 per order |

#### Shipping Tab
| Field | What to Enter |
|-------|-------------|
| **Weight** | Product weight (for shipping calculations) |
| **Dimensions** | Length × Width × Height |
| **Shipping Class** | Leave default unless you have custom shipping classes |

#### Linked Products Tab
| Field | What to Enter |
|-------|-------------|
| **Upsells** | Products shown on the product page ("You may also like") |
| **Cross-sells** | Products shown in the cart ("You might be interested in") |

#### Advanced Tab
| Field | What to Enter |
|-------|-------------|
| **Purchase Note** | Note sent to customer after purchase |
| **Menu Order** | Display order (lower numbers appear first) |
| **Enable Reviews** | Allow customer reviews on this product |

### Step 3: Short Description
On the right side (or below, depending on your screen), find **Product Short Description**:
- Write a brief 1-2 sentence description
- This appears next to the product image on the product page
- Example: "Comfortable 100% organic cotton t-shirt. Classic blue color. Available in all sizes."

### Step 4: Product Image
In the right sidebar:
1. Find **"Product Image"**
2. Click **"Set product image"**
3. Upload or select the **main product photo**
4. This is the primary image shown in the shop and on the product page

### Step 5: Product Gallery
Below the product image:
1. Click **"Add product gallery images"**
2. Upload or select **additional photos** (different angles, details, lifestyle shots)
3. These appear as thumbnails below the main image on the product page

### Step 6: Product Categories
In the right sidebar:
1. Find **"Product categories"**
2. Check an existing category or click **"+ Add new product category"**
3. Example categories: Clothing, T-Shirts, Accessories
4. You can create parent/child categories (Clothing → T-Shirts)

### Step 7: Product Tags
- Add tags like: `cotton`, `blue`, `t-shirt`, `casual`, `unisex`
- Tags help with search and filtering

### Step 8: Publish
Click **"Publish"** to make the product live.

---

## Adding a Variable Product

Variable products have options like size and color.

### Step 1: Create Product
1. Go to **Products → Add New**
2. Name: "Premium Cotton T-Shirt"
3. In Product Data, select **"Variable product"**

### Step 2: Set Up Attributes

1. Go to the **Attributes** tab in Product Data
2. Click **"Add new"** (or select an existing attribute)
3. Create an attribute:
   - **Name**: "Size"
   - **Values**: S | M | L | XL (separate with ` | `)
   - Check **"Used for variations"**
   - Click **"Save attributes"**
4. Add another attribute:
   - **Name**: "Color"
   - **Values**: Blue | Black | White
   - Check **"Used for variations"**
   - Click **"Save attributes"**

### Step 3: Create Variations

1. Go to the **Variations** tab
2. Click **"Generate variations"** (this creates all combinations: S/Blue, S/Black, M/Blue, etc.)
3. Click **"OK"** to confirm

### Step 4: Configure Each Variation

1. Click on a variation to expand it (e.g., "Size: S, Color: Blue")
2. Set:
   - **Regular Price** (required!) — e.g., $29.99
   - **Sale Price** — optional
   - **SKU** — optional but recommended (e.g., "PCT-S-BLU")
   - **Stock** — optional per-variation stock
   - **Image** — upload a specific image for this variation
3. Repeat for all variations (or set the same price for all)

**Tip:** To set the same price for all variations, use "Set regular prices" from the dropdown at the top of the Variations section.

### Step 5: Publish

---

## Adding a Digital/Downloadable Product

For e-books, templates, software, etc.

1. Create a new product
2. Select **"Simple product"**
3. Check **"Virtual"** (no shipping) and **"Downloadable"**
4. New fields appear:

| Field | What to Enter |
|-------|-------------|
| **Downloadable files** | Click "Add File" → upload the file or enter URL |
| **Download limit** | How many times the customer can download (blank = unlimited) |
| **Download expiry** | How many days the download link stays active |

5. Set the price, description, and image as normal
6. Publish

---

## Managing Products

### Product List
Go to **Products → All Products** to see all your products:
- **Filter** by category, type, or stock status
- **Bulk edit** — select multiple products and change category, price, stock status, etc.
- **Quick Edit** — edit basic details inline without opening the full editor

### Product Statuses
| Status | Meaning |
|--------|---------|
| **Published** | Live and visible in the shop |
| **Draft** | Not visible — work in progress |
| **Pending** | Awaiting review |
| **Private** | Only visible to admins |

### Duplicating Products
- Hover over a product in the list → click **"Duplicate"**
- A copy is created as a draft — edit the details and publish
- Great for creating similar products quickly

---

## Product Organization

### Categories
- Create meaningful categories: Clothing, Electronics, Home & Garden
- Use hierarchy: Clothing → Men's → T-Shirts
- Manage at **Products → Categories**
- Add descriptions and images to categories (some themes display these)

### Tags
- More specific than categories
- Useful for filtering and search
- Manage at **Products → Tags**

---

## Exercises

1. **Add 3 simple products**: Create three different products with:
   - Title, description, short description
   - Price (and a sale price on at least one)
   - Product image + 2 gallery images
   - Category and tags
   - SKU and stock quantity

2. **Create a variable product**: Add a product with at least 2 attributes (e.g., Size and Color) and generate variations with individual prices.

3. **Create a digital product**: Add a downloadable product (use any PDF or image file as the download).

4. **Set up product categories**: Create a hierarchy with at least one parent and two child categories. Assign your products to them.

5. **View the shop page**: Visit your Shop page to see your products displayed. Try clicking through to a product page.

6. **Test the cart**: Add a product to the cart from the shop page. View the cart. Try changing quantities.

---

## Key Takeaways

- **Simple products** are single items with one price
- **Variable products** have options (size, color) with separate variations
- **Virtual/Downloadable** products don't require shipping
- Every product needs: **title, price, description, image, and category**
- The **Product Image** is the main photo; **Gallery** images show additional angles
- Use **SKUs** for inventory tracking
- **Product categories** create your shop's organizational structure
- Use **"Duplicate"** to quickly create similar products
- Check your **Shop page** and **product pages** after adding products to verify everything looks right

---

**Next Lesson:** [Lesson 27 - Payment Gateways and Shipping](lesson-27-payments-shipping.md)
