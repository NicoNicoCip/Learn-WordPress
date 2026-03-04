# Lesson 30: Backups and Security Best Practices

## Objectives
- Implement a complete backup strategy
- Harden WordPress security beyond plugins
- Know what to do when things go wrong
- Create a maintenance routine

---

## Backup Strategy

### The 3-2-1 Rule
- **3** copies of your data
- **2** different storage types (local + cloud)
- **1** offsite backup (cloud storage)

### What Gets Backed Up

A complete WordPress backup includes:
1. **Database** — all content, settings, users, and plugin data
2. **wp-content/uploads/** — all media files
3. **wp-content/themes/** — your active theme
4. **wp-content/plugins/** — all plugins
5. **wp-config.php** — database connection and security keys
6. **.htaccess** — server configuration

### Backup Schedule (Recommended)

| What | How Often | Why |
|------|-----------|-----|
| **Database** | Daily | Content changes frequently |
| **Files** | Weekly | Files change less often |
| **Full backup** | Before any major update | Safety net for updates |
| **Full backup** | Before any major change | Theme switch, migration, etc. |

### Setting Up UpdraftPlus (Configured in Lesson 22)

Review your UpdraftPlus settings:
1. Go to **Settings → UpdraftPlus Backups → Settings**
2. Verify schedule: Database = Daily, Files = Weekly
3. Verify remote storage is connected (Google Drive, Dropbox, etc.)
4. Retention: Keep at least 3-5 backups

### Manual Backup Before Updates
1. Go to **Settings → UpdraftPlus Backups**
2. Click **"Backup Now"**
3. Check both "Include your database" and "Include your files"
4. Wait for completion before proceeding with updates

### Restoring from a Backup
If something breaks:
1. Go to **Settings → UpdraftPlus Backups**
2. Scroll to **"Existing Backups"**
3. Click **"Restore"** on the backup you want
4. Select components to restore
5. Click **"Restore"**

---

## WordPress Security Hardening

### Beyond Wordfence (Lesson 22), here are additional security measures:

### 1. Keep Everything Updated
The #1 cause of WordPress hacks is outdated software:
- **WordPress core** — update promptly
- **Plugins** — update within a day of release (after backing up)
- **Themes** — update when available
- **PHP version** — use the latest supported version

### 2. Strong Credentials
- Use **unique, strong passwords** for every account
- Use a **password manager** (Bitwarden, 1Password, LastPass)
- Never use: admin, password, 123456, your name, your birthday
- Enable **Two-Factor Authentication** on all admin accounts

### 3. Limit Login Attempts
Wordfence does this by default. Additional options:
- Rename the login URL (plugin: WPS Hide Login)
- CAPTCHA on login forms

### 4. File Permissions
On a live server, set proper file permissions:
```
Directories: 755
Files: 644
wp-config.php: 440 or 400
```
(Your hosting provider usually handles this. Local WP manages it automatically.)

### 5. Disable File Editing
Prevent theme/plugin editors in the admin:
Add to `wp-config.php`:
```php
define('DISALLOW_FILE_EDIT', true);
```
This removes the Theme Editor and Plugin Editor from the admin — if a hacker gets admin access, they can't inject code through the editor.

### 6. SSL/HTTPS
- **Always use HTTPS** on live sites
- Most hosts provide free SSL certificates (Let's Encrypt)
- In Local WP, you can enable SSL by clicking "Trust" in the site settings
- After enabling SSL, update: Settings → General → change both URLs to `https://`

### 7. Security Headers
Your hosting or a security plugin can add HTTP headers:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

---

## What to Do When Hacked

If you suspect your site has been compromised:

### Immediate Steps:
1. **Don't panic** — most hacks are fixable
2. **Take the site offline** (maintenance mode) if possible
3. **Scan with Wordfence** — run a full scan
4. **Change all passwords** — WordPress admin, database, FTP, hosting
5. **Check for unknown admin accounts** — delete any you don't recognize
6. **Check for modified files** — Wordfence scan highlights these
7. **Restore from a clean backup** — if the hack is extensive
8. **Update everything** — core, plugins, themes to latest versions
9. **Review and remove** unused plugins and themes
10. **Request a review** from Google if your site was flagged

### Prevention Recap:
- Update regularly
- Use strong passwords + 2FA
- Back up frequently
- Use a security plugin (Wordfence)
- Only install plugins/themes from trusted sources

---

## Maintenance Routine

### Weekly Tasks
- [ ] Check for WordPress, plugin, and theme updates
- [ ] Review pending comments (approve, spam, or trash)
- [ ] Check Wordfence scan results
- [ ] Verify backups completed successfully

### Monthly Tasks
- [ ] Review analytics/traffic data
- [ ] Test all forms to make sure they still work
- [ ] Check for broken links (use a free broken link checker plugin or online tool)
- [ ] Review and optimize the database (UpdraftPlus has an option for this)
- [ ] Test site speed (Chrome Lighthouse)
- [ ] Review user accounts — remove any that aren't needed

### Quarterly Tasks
- [ ] Full manual backup test — restore a backup on a test site to verify it works
- [ ] Review security settings
- [ ] Check SEO performance
- [ ] Review and clean up unused media
- [ ] Update privacy policy if needed

---

## Exercises

1. **Verify your backup schedule**: Check UpdraftPlus settings and make sure automatic backups are configured.

2. **Create a manual backup**: Run a full backup right now and verify it completed.

3. **Practice a restore**: If you have a test site, try restoring from a backup to confirm the process works.

4. **Security audit**:
   - Check that Wordfence is active and configured
   - Verify all users have strong passwords
   - Delete any unnecessary user accounts
   - Check for available updates

5. **Create a maintenance checklist**: Copy the maintenance routine above and save it somewhere you'll see it regularly.

---

## Key Takeaways

- Follow the **3-2-1 backup rule**: 3 copies, 2 storage types, 1 offsite
- Back up **before every major update or change**
- The **#1 security measure** is keeping everything updated
- Use **strong, unique passwords** + **2FA** on all admin accounts
- **Disable file editing** in wp-config.php on live sites
- If hacked: scan, change passwords, restore from backup, update everything
- Set up a **regular maintenance routine** — weekly, monthly, quarterly

---

**Next Lesson:** [Lesson 31 - SEO Fundamentals for WordPress](lesson-31-seo-fundamentals.md)
