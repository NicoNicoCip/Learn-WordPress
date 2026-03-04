# Lesson 29: Users and Roles — Managing Access

## Objectives
- Understand WordPress user roles and capabilities
- Create and manage user accounts
- Assign appropriate roles to team members and clients
- Configure user profile settings

---

## WordPress User Roles

WordPress has a built-in role system that controls what each user can do:

| Role | What They Can Do | Best For |
|------|-----------------|----------|
| **Administrator** | Everything — full site control | Site owner, lead developer |
| **Editor** | Manage and publish all content (posts, pages, comments) | Content manager, senior writer |
| **Author** | Write and publish their own posts only | Blog contributor, team member |
| **Contributor** | Write posts but cannot publish (requires editor/admin approval) | Guest writers, interns |
| **Subscriber** | Can only manage their own profile | Registered site visitors, newsletter subscribers |

### WooCommerce Roles (Added by WooCommerce)
| Role | What They Can Do |
|------|-----------------|
| **Shop Manager** | Manage products, orders, coupons, and customers (no site settings) |
| **Customer** | Place orders and manage their account |

---

## Managing Users

### Creating a New User

1. Go to **Users → Add New User**
2. Fill in:
   - **Username** (required) — can't be changed later
   - **Email** (required) — must be unique
   - **First Name / Last Name** — display information
   - **Website** — optional
   - **Password** — use "Generate Password" for a strong one
   - **Role** — select the appropriate role
3. Check **"Send the new user an email about their account"** if you want to notify them
4. Click **"Add New User"**

### Editing Users

1. Go to **Users → All Users**
2. Hover over a user → click **"Edit"**
3. You can change: name, email, role, password, bio, profile picture

### Deleting Users

1. Go to **Users → All Users**
2. Hover over a user → click **"Delete"**
3. Choose what to do with their content:
   - **Delete all content** — permanently removes their posts/pages
   - **Attribute all content to** — transfers their content to another user
4. **Always attribute content** to avoid losing posts/pages

---

## Role Selection Guide

### For Client Sites
When building sites for clients, think about what access they need:

| Client Need | Assign Role |
|-------------|-------------|
| "I just need to update blog posts" | Author or Editor |
| "I need to manage all content and pages" | Editor |
| "I need full control of the site" | Administrator |
| "I need to manage the online store" | Shop Manager |
| "My staff need to write posts for approval" | Contributor |

### The Principle of Least Privilege
Give users the **minimum role they need**. This prevents:
- Accidental changes to site settings
- Deletion of important content
- Installation of insecure plugins
- Modification of other users' content

**Example:** A content writer doesn't need Administrator access. Give them Author or Editor.

---

## Your Profile Settings

Go to **Users → Profile** to configure your own account:

### Important Settings:

| Setting | What It Does |
|---------|-------------|
| **Visual Editor** | Enable/disable the visual post editor |
| **Admin Color Scheme** | Change the admin dashboard colors |
| **Keyboard Shortcuts** | Enable comment moderation shortcuts |
| **Toolbar** | Show/hide the admin bar on the front-end |
| **Display Name** | How your name appears publicly |
| **Email** | Your login and notification email |
| **New Password** | Change your password |
| **Application Passwords** | Create passwords for apps/APIs to use |

### Gravatar (Profile Picture)
WordPress uses **Gravatar** (Globally Recognized Avatar) for profile pictures:
1. Go to https://gravatar.com/
2. Create an account with the same email as your WordPress account
3. Upload a profile photo
4. It automatically appears in WordPress

---

## Security Best Practices for Users

1. **Don't use "admin" as a username** on live sites — it's the first thing attackers try
2. **Use strong passwords** — WordPress generates strong ones, use them
3. **Enable Two-Factor Authentication** — use Wordfence's 2FA feature
4. **Limit Administrator accounts** — only 1-2 admins per site
5. **Remove unused accounts** — delete accounts for people who no longer need access
6. **Don't share login credentials** — each person should have their own account
7. **Review user list regularly** — check for unknown or suspicious accounts

---

## Exercises

1. **Check your profile**: Go to Users → Profile. Set your display name, check your admin color scheme preference, and update your bio.

2. **Create test users**: Create one user for each main role (Editor, Author, Contributor, Subscriber). Use test email addresses.

3. **Log in as different roles**: Log out, log in as the Editor user, and note what they can and can't do. Repeat with Author. Notice the differences in the admin sidebar.

4. **Delete a test user**: Delete the Subscriber user. Choose to attribute their content to your admin account.

5. **Review security**: Check that no accounts use weak passwords. Consider enabling 2FA on your admin account.

---

## Key Takeaways

- WordPress has 5 default roles: **Administrator, Editor, Author, Contributor, Subscriber**
- WooCommerce adds **Shop Manager** and **Customer**
- Follow the **principle of least privilege** — give minimum necessary access
- **Don't use "admin" as username** on live sites
- Each person should have **their own account** — never share logins
- **Attribute content** when deleting users to avoid losing posts/pages
- Review your user list regularly and remove unused accounts

---

**Next Lesson:** [Lesson 30 - Backups and Security Best Practices](lesson-30-backups-security.md)
