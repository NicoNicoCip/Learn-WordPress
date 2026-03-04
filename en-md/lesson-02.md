# Lesson 02: Setting Up Local WP + Creating Your First Site

## Objectives
- Install Local WP on your computer
- Create your first local WordPress site
- Log into wp-admin for the first time
- Understand the Local WP interface

---

## What is Local WP?

**Local** (formerly Local by Flywheel) is a free desktop application that creates a complete WordPress development environment on your computer. It bundles everything WordPress needs:
- Web server (Apache or Nginx)
- PHP (the programming language WordPress uses)
- MySQL (the database)

No complicated setup required — it handles everything with a few clicks.

### Why Local WP instead of XAMPP/WAMP?
- **One-click site creation** — no manual configuration
- **Built specifically for WordPress** — optimized experience
- **Easy to manage multiple sites** — each project gets its own environment
- **Live Links** — share your local site temporarily with clients (built-in)
- **Free** — no cost for the features you need

---

## Step 1: Download and Install Local WP

1. Go to **https://localwp.com/**
2. Click **"Download for Free"**
3. Select your platform (Windows)
4. Fill in the form (you can use any email) and download
5. Run the installer:
   - Accept the license agreement
   - Choose installation location (default is fine)
   - Wait for installation to complete
6. Launch Local WP

### First Launch
When you first open Local, it may:
- Ask you to create a free Local account (optional — you can skip this)
- Request firewall permissions — **allow** these (it needs to run a local web server)
- Show a welcome screen — click through it

---

## Step 2: Create Your First WordPress Site

1. Click the big **"+ Create a new site"** button (or the + icon in the bottom-left)
2. Select **"Create a new site"** (not "Create from Blueprint")
3. Enter your site name: **"Learning WordPress"**
   - Local will automatically generate a domain like `learning-wordpress.local`
   - Click **"Continue"**

4. Choose your environment:
   - Select **"Preferred"** (this uses the recommended PHP and MySQL versions)
   - Click **"Continue"**

5. Set up WordPress credentials:
   - **WordPress Username:** `admin`
   - **WordPress Password:** `admin` (this is local-only, so a simple password is fine)
   - **WordPress Email:** your email (or any email — it's local)
   - Click **"Add Site"**

6. Wait for Local to set everything up (this takes 1-2 minutes)

---

## Step 3: Explore the Local WP Interface

Once your site is created, you'll see the **site dashboard** in Local:

### Top Section
- **Site name** and local URL (e.g., `learning-wordpress.local`)
- **Stop/Start** button — starts or stops the local server for this site
- **Site status indicator** — green means running

### Overview Tab
- **Site Domain** — the URL to access your site
- **SSL** — you can enable HTTPS (click "Trust" to add the certificate)
- **Web Server** — Apache or Nginx
- **PHP Version** — the PHP version being used
- **Database** — MySQL or MariaDB version

### Important Buttons
- **"Open Site"** — opens your site's front-end in the browser (what visitors see)
- **"WP Admin"** — opens the WordPress admin dashboard (where you manage everything)
- **"Open Site Folder"** — opens the file system where WordPress files are stored

### Other Tabs
- **Database** — access to Adminer (a database management tool)
- **Tools** — Mailhog (catches emails sent by WordPress locally)

---

## Step 4: Log Into WordPress for the First Time

1. Make sure your site is **running** (green status in Local)
2. Click **"WP Admin"** button in Local
3. Your browser will open the WordPress login page
4. Enter your credentials:
   - Username: `admin`
   - Password: `admin`
5. Click **"Log In"**

**Congratulations!** You're now in the WordPress admin dashboard.

### Bookmark These URLs
- **Your site:** `http://learning-wordpress.local/`
- **Admin dashboard:** `http://learning-wordpress.local/wp-admin/`

---

## Step 5: Quick Tour of What You See

Don't worry about understanding everything yet — we'll cover each part in detail. For now, just notice:

### The Left Sidebar (Admin Menu)
This is your main navigation. You'll see:
- **Dashboard** — overview and welcome screen
- **Posts** — blog posts
- **Media** — images and files
- **Pages** — static pages
- **Comments** — blog comments
- **Appearance** — themes, menus, widgets
- **Plugins** — installed plugins
- **Users** — user accounts
- **Tools** — import/export
- **Settings** — site configuration

### The Top Bar (Admin Bar)
- Links to visit your site
- Quick links to create new content
- Your user profile

---

## Step 6: Visit Your Site

1. In wp-admin, hover over your site name in the top-left of the admin bar
2. Click **"Visit Site"**
3. You'll see the default WordPress site with a default theme

It won't look like much yet — that's normal! We'll transform it into a professional site throughout this course.

---

## Managing Your Site in Local WP

### Stopping and Starting
- You don't need to keep your site running all the time
- Click **"Stop Site"** when you're done working
- Click **"Start Site"** when you want to work again
- Your content and settings are preserved between sessions

### Creating Additional Sites
- You can create as many sites as you want
- Each gets its own WordPress installation and database
- Useful for practice projects later in this course

### Where Are the Files?
Click **"Open Site Folder"** in Local to see:
```
your-site/
├── app/          ← WordPress installation lives here
│   └── public/   ← The actual WordPress files
│       ├── wp-admin/       ← Admin dashboard files (don't edit)
│       ├── wp-content/     ← YOUR stuff: themes, plugins, uploads
│       │   ├── themes/     ← Theme files
│       │   ├── plugins/    ← Plugin files
│       │   └── uploads/    ← Media you upload
│       ├── wp-includes/    ← Core WordPress files (don't edit)
│       └── wp-config.php   ← Database connection settings
├── conf/         ← Server configuration
└── logs/         ← Error logs
```

**Important:** The only folder you'll ever work in is `wp-content/`. Never edit files in `wp-admin/` or `wp-includes/`.

---

## Troubleshooting

### "Site won't start"
- Try restarting Local WP
- Check if another program is using port 80 (like Skype or IIS)
- In Local, go to Preferences and try changing the router mode

### "Can't access the site in the browser"
- Make sure the site is running (green indicator in Local)
- Try flushing your DNS: open Command Prompt and run `ipconfig /flushdns`
- Try a different browser

### "Forgot the admin password"
- In Local, right-click the site → "Open Site Shell"
- Run: `wp user update admin --user_pass=admin`

---

## Exercises

1. **Create your site**: Follow the steps above to install Local WP and create a "Learning WordPress" site.

2. **Log in to wp-admin**: Access the dashboard and click through each item in the left sidebar — just to see what's there. Don't change anything yet.

3. **Visit your site**: View the front-end and note what the default theme looks like.

4. **Find the files**: Click "Open Site Folder" and navigate to the `wp-content` folder. Look at the `themes` and `plugins` folders to see what's installed by default.

5. **Stop and restart**: Practice stopping your site and starting it again to confirm everything works.

---

## Key Takeaways

- **Local WP** is the easiest way to run WordPress on your computer
- Create sites with just a few clicks — no server configuration needed
- Access your site at `http://your-site-name.local/`
- Access admin at `http://your-site-name.local/wp-admin/`
- The `wp-content` folder is where themes, plugins, and uploads live
- Never edit files in `wp-admin/` or `wp-includes/`
- Stop your site when you're not using it, start it when you are

---

**Next Lesson:** [Lesson 03 - The WordPress Dashboard Tour](lesson-03-dashboard-tour.md)
