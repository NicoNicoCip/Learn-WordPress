# Lesson 33: Taking a Site Live — Migration from Local to Hosting

## Objectives
- Understand the process of migrating a local WordPress site to live hosting
- Choose appropriate hosting for your needs
- Perform the migration using a plugin
- Complete the post-launch checklist

---

## Overview of the Launch Process

1. **Choose and set up hosting**
2. **Migrate your local site to the server**
3. **Configure domain and DNS**
4. **Test everything on the live server**
5. **Go live (point domain to the site)**
6. **Post-launch tasks**

---

## Step 1: Choose Hosting

### Hosting Types

| Type | Price | Best For | Examples |
|------|-------|----------|---------|
| **Shared Hosting** | $3-10/mo | Small personal sites, blogs | Bluehost, Hostinger |
| **Managed WordPress** | $15-40/mo | Business sites, client work | SiteGround, Cloudways |
| **Premium Managed** | $30-100+/mo | High-traffic, e-commerce | WP Engine, Kinsta |
| **VPS** | $20-80/mo | Developers who want control | DigitalOcean, Linode |

### What to Look For:
- **SSD storage** (faster than HDD)
- **Free SSL certificate** (HTTPS)
- **Daily backups** (included)
- **One-click WordPress install**
- **Staging environment** (for testing changes)
- **Good support** (24/7 chat or phone)
- **Uptime guarantee** (99.9%+)
- **Server location** near your audience

### Recommended for Beginners:
1. **SiteGround** — excellent support, staging, and speed
2. **Cloudways** — flexible, good performance, pay-as-you-go
3. **Bluehost** — budget-friendly, officially recommended by WordPress.org

---

## Step 2: Get a Domain Name

If you don't already have a domain:
1. Choose a registrar: **Namecheap**, **Google Domains**, **GoDaddy**, **Cloudflare Registrar**
2. Search for your desired domain
3. Register it (typically $10-15/year for .com)
4. **Don't buy extras** they try to upsell (privacy protection is often free now)

---

## Step 3: Migrate Your Site

### Method 1: All-in-One WP Migration (Easiest)

This is the simplest migration method:

**On your local site (export):**
1. Install **"All-in-One WP Migration"** plugin
2. Go to **All-in-One WP Migration → Export**
3. Click **"Export To"** → **"File"**
4. Wait for the export to complete
5. Download the `.wpress` file

**On your live hosting (import):**
1. Install WordPress on your hosting (most hosts have one-click install)
2. Log into the new WordPress admin
3. Install **"All-in-One WP Migration"** plugin
4. Go to **All-in-One WP Migration → Import**
5. Upload the `.wpress` file from your local export
6. Wait for import to complete
7. Follow the prompts (it will replace everything on the live site)
8. Log in again with your **local site's credentials** (the import replaces users too)

**Note:** The free version has a file size limit (~256MB-512MB depending on version). For larger sites:
- Use the "Unlimited Extension" ($69 one-time)
- Or use Method 2 below

### Method 2: Duplicator (For Larger Sites)

1. Install **"Duplicator"** plugin on your local site
2. Go to **Duplicator → Packages → Create New**
3. Follow the wizard to create a package (archive + installer)
4. Download both the **archive.zip** and **installer.php** files
5. Upload both files to your live hosting's root directory (via FTP or file manager)
6. Navigate to `yourdomain.com/installer.php` in your browser
7. Follow the installation wizard:
   - Enter your live site's database credentials (from your hosting panel)
   - Set the new URL
   - Complete the migration
8. Delete installer.php and archive.zip from the server after migration

### Method 3: Manual Migration (Advanced)

For developers or when plugins don't work:

**Export database:**
1. In Local WP, go to the Database tab → Open Adminer
2. Export the database as SQL

**Upload files:**
1. Connect to your hosting via FTP (FileZilla) or file manager
2. Upload the entire `wp-content` folder
3. Upload `wp-config.php` (then edit database credentials)

**Import database:**
1. Create a database on your hosting (via cPanel → MySQL)
2. Import your SQL file via phpMyAdmin

**Update URLs:**
1. Run a search-and-replace on the database:
   - Old URL: `http://learning-wordpress.local`
   - New URL: `https://yourdomain.com`
   - Use the "Better Search Replace" plugin for this

---

## Step 4: Post-Migration Configuration

### Update URLs
Make sure all URLs point to the live domain:
1. Go to **Settings → General**
2. Verify **WordPress Address** and **Site Address** are your live domain
3. Both should use `https://` (not `http://`)

### Enable SSL/HTTPS
1. Your host should provide a free SSL certificate
2. Activate it through your hosting panel
3. Install **"Really Simple SSL"** plugin for easy HTTPS configuration
4. Or manually update URLs in Settings → General

### Update Permalinks
1. Go to **Settings → Permalinks**
2. Click **"Save Changes"** (even without changing anything)
3. This refreshes the rewrite rules for the new server

### Disable "Discourage Search Engines"
1. Go to **Settings → Reading**
2. **Uncheck** "Discourage search engines from indexing this site"
3. Save changes — this is critical for Google to find your site!

---

## Step 5: Go-Live Checklist

### Before Announcing the Site:

**Content:**
- [ ] All pages have real content (no lorem ipsum)
- [ ] All images are present and loading
- [ ] All links work (no broken links)
- [ ] Contact forms submit correctly
- [ ] Phone numbers and emails are correct
- [ ] Footer information is accurate
- [ ] Privacy policy and terms pages exist

**Functionality:**
- [ ] All forms work and send emails to the right address
- [ ] WooCommerce checkout works (if applicable)
- [ ] Payment processing works in live mode (disable test mode!)
- [ ] Email notifications are being received
- [ ] Social media links work
- [ ] Search functionality works

**Technical:**
- [ ] SSL/HTTPS is active (padlock icon in browser)
- [ ] "Discourage search engines" is unchecked
- [ ] Permalinks are set to "Post name"
- [ ] Favicon is set
- [ ] Site loads in under 3 seconds
- [ ] Mobile responsive — tested on real devices
- [ ] Caching is enabled
- [ ] Backups are scheduled
- [ ] Security plugin is active

**SEO:**
- [ ] Every page has an SEO title and meta description (Yoast)
- [ ] XML sitemap is accessible (`/sitemap_index.xml`)
- [ ] Google Search Console is set up (submit sitemap)
- [ ] Google Analytics is installed (if desired)
- [ ] Alt text on all images

---

## Step 6: Post-Launch Tasks

### Submit to Google
1. Go to **Google Search Console** (https://search.google.com/search-console)
2. Add your site property
3. Verify ownership (DNS, HTML file, or Google Analytics)
4. Submit your sitemap: `yourdomain.com/sitemap_index.xml`

### Set Up Google Analytics (Optional)
1. Create a **Google Analytics 4** account
2. Get your tracking code
3. Install it via:
   - Yoast SEO (limited integration)
   - A plugin like "Site Kit by Google"
   - Or directly in your theme's header

### Monitor
- Check Google Search Console for crawl errors
- Monitor site uptime (UptimeRobot — free)
- Review analytics data weekly
- Keep up with the maintenance routine (Lesson 30)

---

## Staging Environments

### What is Staging?
A staging site is a **copy of your live site** used for testing changes before applying them to the live site.

### Why Use Staging:
- Test plugin updates before they break your live site
- Build new pages without visitors seeing unfinished work
- Test design changes safely

### How to Set Up:
- Most managed hosts offer **one-click staging** (SiteGround, WP Engine, Kinsta)
- Or use the **WP Staging** plugin (free version available)
- Make changes on staging → test → push to live

---

## Exercises

1. **Research hosting**: Visit SiteGround, Cloudways, and Bluehost. Compare their WordPress hosting plans and pricing.

2. **Practice export**: Install "All-in-One WP Migration" on your local site and export it. Note the file size.

3. **Create the go-live checklist**: Copy the go-live checklist from this lesson and customize it for your needs.

4. **Check everything locally**: Go through the go-live checklist on your local site. Fix anything that's not ready.

5. **Set up Google Search Console**: Create an account (you'll need it for any live site).

---

## Key Takeaways

- **Choose hosting** that matches your needs (SiteGround, Cloudways recommended for beginners)
- **All-in-One WP Migration** is the easiest way to migrate local → live
- After migration: update URLs, enable SSL, refresh permalinks, uncheck "discourage search engines"
- Use the **go-live checklist** to ensure nothing is missed
- Submit your sitemap to **Google Search Console** after launch
- Set up **Google Analytics** to track visitors
- Use **staging environments** for testing changes on live sites
- **Back up before every major change** — including the migration itself

---

**Congratulations!** You've completed the WordPress Learning Course. Head to the [Practice Projects](../Projects/) to put everything together!
