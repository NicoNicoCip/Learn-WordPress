# Lesson 01: What is WordPress?

## Objectives
- Understand what WordPress is and why it's the most popular CMS
- Learn the difference between WordPress.org and WordPress.com
- Understand the core architecture: themes, plugins, database, and wp-admin
- Know the key terminology you'll use throughout this course

---

## What is WordPress?

WordPress is a **Content Management System (CMS)** — software that lets you create, manage, and publish websites without writing code from scratch. It powers over 40% of all websites on the internet, from small blogs to major enterprise sites.

### Why WordPress?
- **Free and open-source** — no licensing costs
- **No coding required** for most tasks (but you can customize with code if needed)
- **Massive ecosystem** — thousands of themes and plugins available
- **Huge community** — easy to find help, tutorials, and developers
- **Flexible** — can build any type of website (blog, business, e-commerce, portfolio, etc.)

---

## WordPress.org vs WordPress.com

This is a common source of confusion for beginners:

| | WordPress.org | WordPress.com |
|---|---|---|
| **What it is** | Free software you download and host yourself | A hosted service run by Automattic |
| **Cost** | Free software (you pay for hosting) | Free tier available, paid plans for features |
| **Control** | Full control — install any theme/plugin | Limited — restrictions on free/lower plans |
| **Customization** | Unlimited | Limited unless on expensive Business plan |
| **Best for** | Professional sites, client work, full flexibility | Simple personal blogs |

**For your job, you'll be using WordPress.org** (self-hosted). This is what professionals use and what this course teaches.

---

## WordPress Architecture

Think of WordPress like building a house:

### 1. The Core (Foundation)
WordPress core is the base software. It handles:
- User management (login, roles, permissions)
- Content storage (posts, pages, media)
- The admin dashboard
- The REST API

**You never modify core files.** Updates are handled automatically.

### 2. Themes (The Look)
A theme controls how your site **looks** — layout, colors, fonts, styling.

- Every WordPress site has exactly **one active theme**
- Themes provide templates for different page types (homepage, blog post, archive, etc.)
- You can switch themes without losing your content
- We'll use **Hello Elementor** as our base theme (minimal, designed to work with Elementor)

### 3. Plugins (The Features)
Plugins add **functionality** to your site. Examples:
- **Elementor** — visual page builder (drag-and-drop design)
- **WooCommerce** — turns your site into an online store
- **Yoast SEO** — helps with search engine optimization
- **Contact Form 7** — adds contact forms

You can install as many plugins as you need (but don't overdo it — too many slow your site down).

### 4. Database (The Storage)
WordPress uses a **MySQL database** to store:
- All your content (posts, pages, comments)
- User accounts and settings
- Plugin and theme settings
- Site configuration

You rarely interact with the database directly. WordPress handles it through wp-admin.

### 5. wp-admin (The Control Panel)
The WordPress admin dashboard (accessed at `yoursite.com/wp-admin`) is where you:
- Create and edit content
- Install themes and plugins
- Manage users
- Configure settings
- Everything administrative

---

## Key Terminology

| Term | Meaning |
|------|---------|
| **CMS** | Content Management System — software for managing website content |
| **Theme** | Controls the visual appearance/layout of your site |
| **Plugin** | Adds specific functionality to your site |
| **wp-admin** | The admin dashboard (backend) of your WordPress site |
| **Front-end** | What visitors see when they visit your site |
| **Back-end** | The admin area where you manage your site |
| **Post** | A blog entry (displayed in reverse chronological order) |
| **Page** | Static content (About, Contact, Services — doesn't have a date) |
| **Widget** | A small block of content placed in sidebars or footers |
| **Menu** | Navigation links (usually in the header/footer) |
| **Permalink** | The permanent URL of a post or page |
| **Slug** | The URL-friendly version of a title (e.g., "my-first-post") |
| **Media Library** | Where all uploaded images, videos, and files are stored |
| **Shortcode** | A special tag like `[gallery]` that embeds functionality |
| **WYSIWYG** | "What You See Is What You Get" — visual editor |

---

## How a WordPress Page Gets Displayed

When someone visits your site, here's what happens:

1. **Browser sends a request** to your web server
2. **WordPress core** receives the request
3. It **queries the database** for the requested content
4. The **active theme** provides the HTML template
5. **Plugins** add their functionality (forms, SEO tags, etc.)
6. The **complete page** is sent back to the browser

All of this happens in milliseconds.

---

## Exercises

1. **Explore WordPress.org**: Visit https://wordpress.org/ and browse the Themes and Plugins directories. Get a feel for what's available.

2. **Find 5 famous sites** built with WordPress. (Hint: The White House, TechCrunch, BBC America, Sony Music, and many more use WordPress.)

3. **Review the terminology table** above. Write down any terms that are unclear — we'll cover each one in depth throughout the course.

---

## Key Takeaways

- WordPress is a free, open-source CMS that powers 40%+ of the web
- **WordPress.org** (self-hosted) is what professionals use — that's what we're learning
- The architecture has 4 main parts: Core, Themes, Plugins, and Database
- **wp-admin** is your control panel for everything
- Themes control appearance, plugins add functionality
- You don't need to code to build professional sites with WordPress + Elementor

---

**Next Lesson:** [Lesson 02 - Setting Up Local WP](lesson-02-local-setup.md)
