# Lesson 32: Performance Optimization

## Objectives
- Measure your site's current performance
- Optimize for speed using proven techniques
- Configure caching and minification
- Understand CDNs and their role

---

## Why Performance Matters

- **53% of mobile users leave** if a page takes more than 3 seconds to load
- **Google uses page speed** as a ranking factor
- **Every 1-second delay** reduces conversions by 7%
- Fast sites provide a better user experience

### Performance Targets:
| Metric | Target |
|--------|--------|
| **Page load time** | Under 3 seconds |
| **Total page size** | Under 2MB (ideally under 1MB) |
| **Number of requests** | Under 50 |
| **Largest Contentful Paint (LCP)** | Under 2.5 seconds |
| **First Input Delay (FID)** | Under 100ms |
| **Cumulative Layout Shift (CLS)** | Under 0.1 |

---

## Measuring Performance

### Tools:

**Chrome Lighthouse (works locally):**
1. Open your site in Chrome
2. Press **F12** → **Lighthouse** tab
3. Select "Performance" category
4. Click **"Analyze page load"**
5. Review the score (0-100) and specific recommendations

**Chrome DevTools Network Tab (works locally):**
1. Press **F12** → **Network** tab
2. Refresh the page
3. Look at the bottom bar: total requests, transferred size, load time
4. Sort by size to find the largest files

**Google PageSpeed Insights (live sites only):**
- URL: https://pagespeed.web.dev/
- Tests both mobile and desktop
- Based on real-world Chrome user data

**GTmetrix (live sites only):**
- URL: https://gtmetrix.com/
- Detailed waterfall chart showing every resource loaded

---

## The Performance Optimization Stack

### 1. Hosting (Live Sites)
Your hosting provider has the biggest impact on speed:
- **Budget hosting** ($3-5/mo): Slow, shared resources
- **Managed WordPress hosting** ($15-30/mo): Optimized for WordPress (SiteGround, Cloudways, Kinsta)
- **Premium hosting** ($30+/mo): Fastest, best support (WP Engine, Kinsta, Flywheel)

**Recommendation:** For client sites, use at minimum SiteGround or Cloudways.

### 2. Caching (Already Set Up)
WP Super Cache (Lesson 22) handles this. Review:
- **Page caching**: Serves pre-generated HTML instead of processing PHP
- **Browser caching**: Tells browsers to store static files locally
- **Object caching**: Caches database queries (requires server-level support)

### 3. Image Optimization (Already Set Up)
Smush or similar (Lesson 24) handles this:
- Compress all images
- Lazy loading
- Proper image sizing
- WebP format when possible

### 4. Minification
Reduces file sizes by removing whitespace, comments, and unnecessary characters:

**Install Autoptimize** (free plugin):
1. **Plugins → Add New** → search "Autoptimize"
2. Install and activate
3. Go to **Settings → Autoptimize**
4. Check:
   - **Optimize JavaScript Code**
   - **Optimize CSS Code**
   - **Optimize HTML Code**
5. Save and test your site

**Warning:** Minification can sometimes break things (especially JavaScript). If your site looks or works differently after enabling:
1. Try disabling JavaScript optimization first
2. If that fixes it, keep JS optimization off
3. CSS and HTML optimization rarely cause issues

### 5. Database Optimization
Over time, your database accumulates unnecessary data:
- Post revisions
- Spam comments
- Transient options
- Orphaned metadata

**Using WP-Optimize** (free plugin):
1. Install and activate **WP-Optimize**
2. Go to **WP-Optimize → Database**
3. Check the optimizations you want to run:
   - Clean all post revisions
   - Clean all auto-draft posts
   - Clean spam and trashed comments
   - Remove expired transient options
4. Click **"Run all selected optimizations"**

### 6. Reduce HTTP Requests
Each file (CSS, JS, image, font) requires a separate HTTP request:
- Combine CSS/JS files (Autoptimize does this)
- Use fewer plugins (each adds CSS/JS)
- Use icon fonts or SVGs instead of image icons
- Limit external scripts (analytics, chat widgets, social buttons)

### 7. Font Optimization
Google Fonts can slow your site:
- Use at most **2 font families**
- Load only the **weights you need** (400, 600, 700 — not all weights)
- Consider using **system fonts** for fastest loading:
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  ```

---

## CDN (Content Delivery Network)

### What is a CDN?
A CDN stores copies of your site's static files (images, CSS, JS) on servers around the world. Visitors get served from the nearest server.

### Benefits:
- Faster load times for visitors far from your server
- Reduces load on your hosting server
- Provides DDoS protection
- Better global performance

### Cloudflare (Free Option):
1. Create a free account at https://www.cloudflare.com/
2. Add your domain
3. Update your domain's nameservers to Cloudflare
4. Cloudflare provides:
   - Free CDN
   - Free SSL
   - Basic DDoS protection
   - Performance optimization tools

**Note:** CDN configuration happens at the hosting/DNS level, not within WordPress.

---

## Elementor Performance Tips

Elementor adds overhead. Minimize it:

1. **Don't use too many sections** — combine where possible
2. **Use Elementor's built-in icons** instead of images for icons
3. **Avoid excessive animations** — they require extra JavaScript
4. **Use the "Improved CSS Loading"** experiment:
   - Elementor → Settings → Experiments → Improved CSS Loading → Active
5. **Don't use too many Google Fonts** — pick 1-2 and stick with them
6. **Optimize Elementor's CSS output**:
   - Elementor → Settings → Advanced → CSS Print Method → Internal Embedding

---

## Performance Checklist

### Quick Wins (Do These First):
- [ ] Enable caching (WP Super Cache)
- [ ] Optimize all images (Smush)
- [ ] Enable lazy loading
- [ ] Enable minification (Autoptimize)
- [ ] Use only 2 fonts max
- [ ] Remove unused plugins and themes

### Medium Effort:
- [ ] Optimize database (WP-Optimize)
- [ ] Reduce number of plugins
- [ ] Defer non-critical JavaScript
- [ ] Optimize Elementor settings

### Advanced (For Live Sites):
- [ ] Use a CDN (Cloudflare)
- [ ] Choose fast hosting
- [ ] Enable object caching (if hosting supports it)
- [ ] Implement critical CSS
- [ ] Use WebP images

---

## Exercises

1. **Run a Lighthouse test**: Test your homepage with Chrome Lighthouse. Note your Performance score and the specific recommendations.

2. **Install Autoptimize**: Enable CSS, JS, and HTML optimization. Clear cache and test your site.

3. **Check page size**: Use Chrome DevTools Network tab to see your homepage's total size and number of requests.

4. **Optimize the database**: Install WP-Optimize and clean up revisions, drafts, and spam.

5. **Reduce fonts**: Check how many Google Fonts you're loading. Reduce to 2 maximum.

6. **Before/after comparison**: Note your Lighthouse score before optimizations, apply all optimizations, clear cache, and test again. Document the improvement.

---

## Key Takeaways

- **Page load under 3 seconds** is the target
- The biggest factors: **hosting, caching, images, and minification**
- **Measure before and after** to see improvement
- Use **Lighthouse** (Chrome DevTools) for local testing
- **Caching** (WP Super Cache) serves pre-generated pages
- **Image optimization** (Smush) often provides the biggest improvement
- **Minification** (Autoptimize) reduces CSS/JS/HTML file sizes
- **CDN** (Cloudflare) improves speed for global visitors
- Fewer plugins = faster site
- 2 fonts maximum for best performance

---

**Next Lesson:** [Lesson 33 - Taking a Site Live](lesson-33-going-live.md)
