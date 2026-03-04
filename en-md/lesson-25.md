# Lesson 25: Installing WooCommerce + Initial Setup

## Objectives
- Install and activate WooCommerce
- Complete the setup wizard
- Understand the WooCommerce dashboard
- Configure essential store settings

---

## What is WooCommerce?

**WooCommerce** is a free WordPress plugin that turns your site into a full-featured online store. It's the most popular e-commerce platform in the world, powering over 25% of all online stores.

### What WooCommerce Adds:
- Product management (simple, variable, digital, grouped)
- Shopping cart and checkout
- Payment processing (Stripe, PayPal, and more)
- Shipping configuration
- Order management
- Customer accounts
- Tax calculations
- Coupons and discounts
- Inventory management
- Reports and analytics

---

## Installing WooCommerce

### Step 1: Install
1. Go to **Plugins → Add New Plugin**
2. Search for **"WooCommerce"**
3. Install and activate **"WooCommerce"** by Automattic

### Step 2: Setup Wizard
After activation, WooCommerce launches a setup wizard. Follow along:

**Store Details:**
- Country/Region
- Address
- Industry (choose what fits)
- Number of products (approximate)

**Product Types:**
- Physical products
- Digital downloads
- Subscriptions (requires paid extension)

**Business Details:**
- Choose which free features to install (you can skip most add-on suggestions)
- Be selective — don't install everything they suggest

**Theme:**
- Skip this — we're already using Hello Elementor
- Or choose "Continue with my active theme"

**Complete the wizard** and click "Go to Dashboard" or continue to WooCommerce Home.

---

## WooCommerce Dashboard

After setup, you'll see **WooCommerce** in the admin sidebar with these sub-items:

| Section | What It Does |
|---------|-------------|
| **Home** | Overview dashboard with setup tasks and store performance |
| **Orders** | View and manage customer orders |
| **Customers** | Customer list and details |
| **Coupons** | Create discount codes |
| **Reports** | Sales, customers, and stock reports |
| **Settings** | Configure all store settings |
| **Status** | System status, tools, and logs |
| **Extensions** | Browse and install WooCommerce extensions |

You'll also see **Products** added to the admin sidebar — this is where you manage your product catalog.

---

## Essential WooCommerce Settings

Go to **WooCommerce → Settings** and configure these tabs:

### General Tab
| Setting | Recommendation |
|---------|---------------|
| **Store Address** | Your business address |
| **Selling Location(s)** | "Sell to all countries" or specific countries |
| **Shipping Location(s)** | Where you ship to |
| **Enable taxes** | Check if you need to charge tax |
| **Currency** | Your local currency |

### Products Tab
| Setting | Recommendation |
|---------|---------------|
| **Shop Page** | Select the page WooCommerce uses as the shop |
| **Add to Cart behaviour** | "Redirect to the cart page after successful addition" — check if you want |
| **Weight Unit** | kg or lbs |
| **Dimensions Unit** | cm or in |
| **Enable Reviews** | Your choice — product reviews build trust |

### Accounts & Privacy Tab
| Setting | Recommendation |
|---------|---------------|
| **Guest checkout** | Allow — reduces friction (customers don't need an account to buy) |
| **Account creation** | Allow during checkout — gives customers the option |
| **Privacy Policy** | Link to your privacy policy page |

### Emails Tab
Configure what emails are sent and to whom:
- **New order** — notify admin of new orders
- **Processing order** — sent to customer when payment is received
- **Completed order** — sent when order is shipped/completed
- **Customer note** — when you add a note to their order

For each email, you can:
- Enable/disable it
- Change the recipient
- Customize the subject line
- Change the email template colors to match your brand

---

## WooCommerce Pages

WooCommerce automatically creates several pages:

| Page | Purpose |
|------|---------|
| **Shop** | Product listing page |
| **Cart** | Shopping cart |
| **Checkout** | Payment and shipping form |
| **My Account** | Customer account dashboard |

These pages contain **WooCommerce shortcodes** that display the appropriate content. Don't delete these shortcodes — you can add content around them.

### Checking Pages are Set Up:
1. Go to **WooCommerce → Settings → Advanced → Page Setup**
2. Verify each page is assigned:
   - Cart Page → "Cart"
   - Checkout Page → "Checkout"
   - My Account Page → "My Account"
   - Terms and Conditions → your terms page (create one if needed)

---

## Currency and Tax Basics

### Currency
- Set in WooCommerce → Settings → General
- Choose your **currency** and **currency position** (before/after amount)
- Set **decimal separator** and **thousand separator**

### Taxes (Basic Setup)
If you need to charge sales tax:
1. Go to **WooCommerce → Settings → General** → check **"Enable taxes"**
2. Go to the new **Tax** tab that appears
3. Under **Standard Rates**, click **"Insert Row"**
4. Enter your tax rate:
   - Country Code (e.g., "US")
   - State Code (e.g., "CA")
   - Rate % (e.g., "8.5")
   - Tax Name (e.g., "Sales Tax")
5. Click **"Save Changes"**

**For complex tax setups**, consider a tax plugin like:
- **WooCommerce Tax** (by Automattic) — automatic tax calculations
- **TaxJar** — automated sales tax for US

---

## Exercises

1. **Install WooCommerce**: Follow the installation steps and complete the setup wizard.

2. **Configure General settings**: Set your store address, currency, and selling locations.

3. **Check WooCommerce pages**: Verify that Shop, Cart, Checkout, and My Account pages exist and are correctly assigned.

4. **Configure email settings**: Go to WooCommerce → Settings → Emails and customize the email template colors to match your brand.

5. **Visit the shop page**: Go to your site's Shop page to see what it looks like (empty for now — we'll add products next).

6. **Enable guest checkout**: In WooCommerce → Settings → Accounts & Privacy, make sure guest checkout is allowed.

---

## Key Takeaways

- **WooCommerce** is free and turns WordPress into a full online store
- The **setup wizard** walks you through initial configuration
- **Essential settings**: currency, tax, shipping locations, checkout options
- WooCommerce creates **required pages** automatically (Shop, Cart, Checkout, My Account)
- Enable **guest checkout** to reduce friction for customers
- Configure **email notifications** so you and customers stay informed
- Set up **tax rates** if required for your location
- WooCommerce adds **Products** and **WooCommerce** sections to your admin sidebar

---

**Next Lesson:** [Lesson 26 - Adding Products](lesson-26-adding-products.md)
