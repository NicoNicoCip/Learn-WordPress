# Lesson 24: Image Optimization and Performance Plugins

## Objectives
- Understand how images affect site performance
- Install and configure an image optimization plugin
- Learn lazy loading and modern image formats
- Use performance testing tools

---

## Why Image Optimization Matters

Images are typically the **largest files** on any web page:
- An unoptimized homepage can be 5-10MB (mostly images)
- An optimized homepage can be under 1MB
- **Faster sites rank higher on Google** and convert more visitors
- **53% of mobile users leave** if a page takes over 3 seconds to load

---

## Image Optimization Strategies

### 1. Resize Before Uploading
- Camera photos: typically 4000-6000px wide — **way too large**
- Maximum recommended width:
  - Full-width heroes: **1920px**
  - Content images: **1200px**
  - Thumbnails: **300-400px**
- Tools: Photoshop, GIMP, Canva, or online tools like Squoosh

### 2. Choose the Right Format

| Format | Best For | File Size |
|--------|---------|-----------|
| **JPEG** | Photos, complex images | Small-medium |
| **PNG** | Graphics with transparency, screenshots | Larger |
| **WebP** | Everything (modern replacement for JPEG/PNG) | Smallest |
| **SVG** | Logos, icons, illustrations | Tiny (vector) |
| **AVIF** | Next-gen format (limited support) | Very small |

**WebP** is the best general-purpose format — 25-35% smaller than JPEG with similar quality.

### 3. Compress Images
- **Lossy compression**: Reduces quality slightly for much smaller files (usually unnoticeable)
- **Lossless compression**: Reduces file size without quality loss (smaller savings)
- Online tools: TinyPNG, Squoosh, ShortPixel online

### 4. Lazy Loading
- **Lazy loading** means images below the viewport (not visible on screen) only load when the user scrolls to them
- Reduces initial page load time dramatically
- WordPress has **built-in lazy loading** (since version 5.5) for images
- Elementor also supports lazy loading

---

## Image Optimization Plugin — Smush

### Installation
1. **Plugins → Add New** → search "Smush"
2. Install and activate **"Smush — Lazy Load Images, Optimize & Compress Images"**

### Configuration

1. Go to **Smush → Dashboard** (or follow the setup wizard)

2. **Bulk Smush**:
   - Click **"Bulk Smush Now"** to optimize all existing images
   - Free version compresses up to 50 images at a time
   - Repeat until all images are done

3. **Settings to configure**:

**Automatic Optimization:**
- Enable **"Automatically optimize new uploads"** — every image you upload from now on will be compressed automatically

**Lazy Loading:**
- Go to **Smush → Lazy Load**
- Enable lazy loading for images
- This defers loading of off-screen images

**Resize Original Images:**
- Enable **"Resize full size images"**
- Set max width to **2560px** (or 1920px)
- This automatically resizes oversized uploads

### Alternative Plugin: ShortPixel

ShortPixel is another excellent option:
- Offers **WebP conversion** on the free tier
- Aggressive compression with good quality
- 100 free image credits per month

### Alternative Plugin: Imagify

By the WP Rocket team:
- Easy to use
- WebP conversion
- 20MB free per month

---

## Other Performance Plugins

### WP Super Cache (Already Installed)
We set this up in Lesson 22. It caches pages for faster delivery.

### Additional Performance Tips

**Minification:**
Some plugins can minify your CSS and JavaScript (remove whitespace and comments to reduce file sizes):
- **Autoptimize** (free) — minifies and combines CSS/JS files
- Be cautious: minification can sometimes break page layouts

**CDN (Content Delivery Network):**
A CDN stores copies of your site's files on servers worldwide, serving content from the server closest to the visitor:
- **Cloudflare** (free tier available) — CDN + security + performance
- Usually configured through your hosting provider
- Not needed for local development, but important for live sites

---

## Testing Performance

### Tools

**Google PageSpeed Insights** (for live sites):
- URL: https://pagespeed.web.dev/
- Tests both mobile and desktop
- Gives a score 0-100 and specific recommendations
- Can't test local sites — only live URLs

**GTmetrix** (for live sites):
- URL: https://gtmetrix.com/
- Detailed performance report with waterfall charts
- Shows exactly which files are slow

**Chrome DevTools (works locally):**
1. Open your site in Chrome
2. Press **F12** → **Network** tab
3. Refresh the page
4. See every file loaded, its size, and load time
5. Look at the **bottom bar** for total page size and load time

**Lighthouse (built into Chrome):**
1. Press **F12** → **Lighthouse** tab
2. Click **"Analyze page load"**
3. Get scores for Performance, Accessibility, Best Practices, SEO

---

## Performance Checklist

### Images:
- [ ] All images are properly sized (not larger than needed)
- [ ] Images are compressed (Smush or similar)
- [ ] Lazy loading is enabled
- [ ] Use WebP format where possible

### Plugins:
- [ ] Caching is enabled (WP Super Cache)
- [ ] No unused plugins installed
- [ ] All plugins are up to date

### General:
- [ ] Remove unused themes
- [ ] Use a lightweight theme (Hello Elementor)
- [ ] Minimize the number of fonts loaded (2 max)
- [ ] Don't use too many external scripts (social widgets, chat widgets, etc.)

---

## Exercises

1. **Install Smush**: Install, activate, and run a bulk optimization on all existing images.

2. **Enable lazy loading**: Configure Smush to lazy load images.

3. **Enable auto-optimization**: Turn on automatic optimization for future uploads.

4. **Test with DevTools**: Open your homepage in Chrome, press F12, go to the Network tab, and note the total page size. Screenshot or write down the number.

5. **Run Lighthouse**: Use Chrome's Lighthouse tab to test your local site. Note your Performance, Accessibility, and SEO scores.

6. **Optimize a large image**: Find a large photo online (3000px+), upload it to WordPress without optimization, note the size. Then delete it, resize and compress it first, and upload again. Compare the sizes.

---

## Key Takeaways

- Images are usually the **#1 cause of slow websites**
- **Resize images before uploading** — max 1920px wide for heroes, 1200px for content
- **Install an optimization plugin** (Smush, ShortPixel, or Imagify) to auto-compress
- **Enable lazy loading** — only load images when they're visible on screen
- **WebP format** is 25-35% smaller than JPEG — use it when possible
- **Test performance** with Chrome DevTools Lighthouse and Network tab
- Combined with caching (WP Super Cache), image optimization makes the biggest performance difference
- **Don't over-optimize** — good enough is good enough, don't spend hours chasing the last few kilobytes

---

**Next Module:** [Module 5 - WooCommerce Basics](../Module-05-WooCommerce/lesson-25-woocommerce-setup.md)
