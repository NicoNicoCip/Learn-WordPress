# Lesson 27: Payment Gateways and Shipping Configuration

## Objectives
- Set up payment methods (Stripe, PayPal)
- Configure shipping zones and rates
- Understand flat rate, free shipping, and calculated shipping
- Set up a test/sandbox payment environment

---

## Payment Gateways

A payment gateway processes credit card and online payments. WooCommerce supports many options.

### Built-in Payment Methods

Go to **WooCommerce → Settings → Payments**:

| Method | Description | Fee |
|--------|------------|-----|
| **Direct bank transfer (BACS)** | Customer pays via bank transfer | No fee |
| **Check payments** | Customer sends a check | No fee |
| **Cash on delivery (COD)** | Customer pays when delivered | No fee |

These are basic — for online payments, you need Stripe or PayPal.

### Setting Up Stripe (Recommended)

Stripe is the most popular payment processor — accepts credit cards, Apple Pay, Google Pay.

1. Go to **Plugins → Add New** → search **"WooCommerce Stripe Payment Gateway"**
2. Install and activate
3. Go to **WooCommerce → Settings → Payments**
4. Find **"Stripe - Credit Card"** → click **"Manage"**
5. Check **"Enable Stripe"**
6. **Test Mode**: Enable test mode first (for development)
7. **API Keys**:
   - Create a Stripe account at https://stripe.com/
   - Go to Stripe Dashboard → Developers → API Keys
   - Copy your **Test Publishable Key** and **Test Secret Key**
   - Paste them in WooCommerce
8. Save changes

### Test Mode Credit Card Numbers
When Stripe is in test mode, use these fake card numbers:
| Card Number | Result |
|-------------|--------|
| `4242 4242 4242 4242` | Successful payment |
| `4000 0000 0000 0002` | Declined card |
| `4000 0000 0000 3220` | 3D Secure authentication required |
- Use any future expiry date (e.g., 12/28)
- Use any 3-digit CVC (e.g., 123)

### Setting Up PayPal

1. Go to **WooCommerce → Settings → Payments**
2. Find **"PayPal"** → click **"Manage"** (or install WooCommerce PayPal Payments plugin)
3. Check **"Enable PayPal"**
4. Enter your **PayPal email address**
5. Enable **sandbox mode** for testing
6. Save changes

### Choosing Payment Methods
For a typical store, offer:
- **Stripe** — for credit/debit card payments
- **PayPal** — many customers prefer PayPal
- **Both** — giving customers choice increases conversion

---

## Shipping Configuration

### Understanding Shipping Zones

Shipping zones are geographic areas with specific shipping methods and rates.

Example:
- **Zone 1: Local** (your city) → Free shipping or flat rate $5
- **Zone 2: Domestic** (rest of country) → Flat rate $10
- **Zone 3: International** → Flat rate $25
- **Default** (everywhere else) → No shipping or high flat rate

### Setting Up Shipping Zones

1. Go to **WooCommerce → Settings → Shipping**
2. Click **"Add shipping zone"**

**Create Zone 1: Domestic Shipping**
1. **Zone Name**: "United States" (or your country)
2. **Zone Regions**: Select your country from the dropdown
3. Click **"Add shipping method"**
4. Choose a method:

### Shipping Methods

| Method | How It Works |
|--------|-------------|
| **Flat Rate** | Fixed price (e.g., $10 for any order) |
| **Free Shipping** | No shipping charge (can require minimum order) |
| **Local Pickup** | Customer picks up at your location (no charge) |

#### Configuring Flat Rate:
1. After adding "Flat Rate", click **"Edit"** (under the method)
2. Set:
   - **Cost**: The shipping price (e.g., `10.00`)
   - You can use formulas: `10 + (2 * [qty])` = $10 base + $2 per item
3. Save

#### Configuring Free Shipping:
1. Add "Free Shipping" method
2. Edit it:
   - **Requires**: Choose a condition:
     - A valid free shipping coupon
     - A minimum order amount (e.g., $50)
     - Either a coupon or minimum amount
   - Set the **minimum order amount** if applicable
3. Save

#### Adding Multiple Methods per Zone:
A zone can have multiple methods. Customers choose at checkout.

**Common setup:**
- Free Shipping (for orders over $50)
- Flat Rate $7.99 (standard shipping)
- Flat Rate $14.99 (express shipping — name it "Express Shipping")

### Creating International Shipping

1. Add another shipping zone: "International"
2. Zone Regions: Select countries or "Everywhere else"
3. Add a Flat Rate method with a higher price

### Shipping Classes

For products that need different shipping rates (heavy items, fragile items):

1. Go to **WooCommerce → Settings → Shipping → Shipping Classes**
2. Click **"Add shipping class"**
3. Create classes like:
   - "Heavy Items" (slug: heavy-items)
   - "Fragile" (slug: fragile)
4. When editing flat rate in a shipping zone, you can set different costs per shipping class

### No Shipping (for Digital Products)

If you sell digital/virtual products, they don't need shipping:
- Mark them as **"Virtual"** in the product editor
- WooCommerce automatically skips shipping for virtual products

---

## Order Management

### Viewing Orders
Go to **WooCommerce → Orders** to see all orders.

### Order Statuses

| Status | Meaning |
|--------|---------|
| **Pending payment** | Order placed but payment not confirmed |
| **Processing** | Payment received, order being prepared |
| **On hold** | Awaiting action (bank transfer not yet received) |
| **Completed** | Order fulfilled and delivered |
| **Cancelled** | Cancelled by admin or customer |
| **Refunded** | Payment refunded |
| **Failed** | Payment failed |

### Processing an Order
1. Click on an order to view details
2. Review order items, shipping address, and payment info
3. Add **order notes** (visible to customer or private)
4. Change status to **"Completed"** when the order is shipped
5. Click **"Update"**

---

## Testing the Complete Purchase Flow

### Test Checkout Steps:
1. Make sure **Stripe test mode** is enabled
2. Visit your shop page
3. Add a product to the cart
4. Go to the cart → proceed to checkout
5. Fill in billing details (use fake info)
6. Enter the test card: `4242 4242 4242 4242`
7. Use any future expiry and any CVC
8. Place the order
9. Check that:
   - Order confirmation page appears
   - Order appears in WooCommerce → Orders
   - Email notification is sent (check Mailhog in Local WP)

---

## Exercises

1. **Set up Stripe in test mode**: Install the Stripe plugin, create a Stripe account, and configure with test API keys.

2. **Create shipping zones**: Set up at least two zones — domestic (your country) and international. Add flat rate shipping to each.

3. **Configure free shipping**: Add a free shipping method for orders over $50 in your domestic zone.

4. **Test a purchase**: Complete a test purchase using the test credit card number. Go through the entire flow from shop to order confirmation.

5. **Process the test order**: Find the test order in WooCommerce → Orders. Add a note and change the status to Completed.

6. **Check emails**: Verify that order notification emails were sent (use Mailhog in Local WP).

---

## Key Takeaways

- **Stripe** (credit cards) and **PayPal** are the essential payment gateways
- Always use **test/sandbox mode** during development
- **Shipping zones** define geographic areas with specific shipping methods
- Common shipping methods: **Flat Rate**, **Free Shipping** (with minimum order), **Local Pickup**
- Use **shipping classes** for products that need different rates
- **Virtual products** skip shipping automatically
- Test the **complete purchase flow** before going live
- Order statuses track the lifecycle: Pending → Processing → Completed

---

**Next Lesson:** [Lesson 28 - Designing a Shop Page with Elementor](lesson-28-shop-design.md)
