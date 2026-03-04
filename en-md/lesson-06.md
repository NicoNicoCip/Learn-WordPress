# Lesson 06: The Media Library

## Objectives
- Upload and manage images, files, and media in WordPress
- Understand image sizes and optimization
- Use the media library effectively
- Learn best practices for file naming and organization

---

## What is the Media Library?

The Media Library is where WordPress stores all uploaded files:
- Images (JPG, PNG, GIF, WebP, SVG with plugins)
- Documents (PDF, DOC, XLSX)
- Audio (MP3, WAV, OGG)
- Video (MP4, MOV, AVI)

Access it at **Media → Library** in the sidebar.

---

## Uploading Media

### Method 1: Media Library Page
1. Go to **Media → Add New Media File**
2. Drag and drop files onto the upload area, or click **"Select Files"**
3. You can upload multiple files at once

### Method 2: While Editing Content
1. In the block editor, add an **Image** block (type `/image`)
2. Choose **"Upload"**, **"Media Library"**, or **"Insert from URL"**
3. The file is uploaded to the Media Library automatically

### Method 3: Drag and Drop
- While editing a post/page, drag an image directly from your desktop into the editor
- WordPress creates an Image block and uploads the file automatically

---

## The Media Library Interface

### Grid View (default)
- Shows thumbnails of all media
- Click any item to see details and edit
- Filter by type (Images, Audio, Video, Documents) or date

### List View
- Switch with the icon in the top-left
- Shows more details: file name, author, date, attached to
- Better for managing many files

### Media Details Panel
Click any media item to see:
- **Preview** of the image
- **Title** — the display name (editable)
- **Caption** — displayed below the image on the front-end
- **Alt Text** — important for accessibility and SEO (describes the image)
- **Description** — longer description (rarely displayed)
- **File URL** — the direct link to the file
- **Uploaded to** — which post/page this media is attached to
- **File size and dimensions**

---

## Image Sizes in WordPress

When you upload an image, WordPress automatically creates **multiple sizes**:

| Size | Default Dimensions | Purpose |
|------|-------------------|---------|
| **Thumbnail** | 150 × 150 px | Small preview, cropped square |
| **Medium** | 300 × 300 px max | In-content images |
| **Medium Large** | 768 px wide | Responsive images |
| **Large** | 1024 × 1024 px max | Full-width content images |
| **Full** | Original size | Full resolution |

### Configuring Default Sizes
1. Go to **Settings → Media**
2. Adjust the dimensions for Thumbnail, Medium, and Large
3. **Recommendation:** Leave defaults unless you have a specific reason to change them

### Why Multiple Sizes?
- WordPress serves the **appropriate size** based on where the image is displayed
- A thumbnail in a sidebar doesn't need a 4000px image
- This improves **page load speed** significantly

---

## Image Best Practices

### Before Uploading

1. **Resize images before uploading**
   - A 5000×3000 photo from your camera is way too large
   - For most websites, images shouldn't exceed **2000px wide**
   - Hero/banner images: 1920px wide is standard
   - In-content images: 1200px wide is usually enough

2. **Choose the right format**
   | Format | Best For |
   |--------|---------|
   | **JPG/JPEG** | Photos, images with many colors |
   | **PNG** | Graphics with transparency, screenshots, logos |
   | **WebP** | Modern format — smaller files, good quality (not all browsers support it) |
   | **SVG** | Logos and icons (requires a plugin to upload) |
   | **GIF** | Simple animations |

3. **Compress images**
   - Use free tools before uploading:
     - **TinyPNG** (tinypng.com) — drag-and-drop compression
     - **Squoosh** (squoosh.app) — Google's image optimizer
   - Or install a WordPress plugin (covered in Module 4)

4. **Name files descriptively**
   - Bad: `IMG_20240315_001.jpg`, `screenshot.png`
   - Good: `blue-widget-product-photo.jpg`, `team-office-photo.jpg`
   - Use hyphens, not spaces or underscores
   - This helps with SEO — search engines read file names

### After Uploading

5. **Always set Alt Text**
   - Describes the image for screen readers (accessibility)
   - Used by search engines (SEO)
   - Example: "Team members working together in the office"
   - Don't stuff keywords — describe what you actually see

6. **Set a Title**
   - WordPress uses the filename as the default title
   - Change it to something readable

---

## Working with Images in the Editor

### Adding an Image Block
1. Type `/image` or click "+" and select Image
2. Upload, select from Media Library, or insert from URL
3. The image appears in your content

### Image Block Settings

**Block Toolbar** (above the image):
- **Alignment** — left, center, right, wide, full-width
- **Link** — link the image to its media file, attachment page, or custom URL
- **Replace** — swap the image
- **Crop** — crop the image

**Block Settings** (right sidebar):
- **Alt Text** — set or edit the alt text
- **Image Size** — choose Thumbnail, Medium, Large, or Full
- **Image Dimensions** — set custom width/height
- **Border Radius** — round the corners

### Gallery Block
For displaying multiple images:
1. Type `/gallery` and select Gallery
2. Upload or select multiple images
3. Arrange them in a grid
4. Set columns (1-8) in the block settings

### Cover Block
For images with text overlay:
1. Type `/cover` and select Cover
2. Upload or select a background image
3. Type text on top of the image
4. Adjust overlay color and opacity

---

## Organizing Media

WordPress doesn't have folders in the Media Library by default. Here's how to stay organized:

### Built-in Options
- **Search** — use the search bar to find media by filename or title
- **Filter by date** — dropdown to filter by month/year
- **Filter by type** — Images, Audio, Video, Documents

### File Naming Convention
Since there are no folders, use a naming convention:
```
[type]-[subject]-[detail].jpg

Examples:
hero-homepage-banner.jpg
team-john-smith-headshot.jpg
product-blue-widget-front.jpg
blog-wordpress-tips-featured.jpg
icon-phone-contact.png
```

### Plugin Option
If you need folders, plugins like **FileBird** or **Real Media Library** add folder management to the Media Library. We'll cover plugins in Module 4.

---

## Editing Images in WordPress

WordPress has a basic built-in image editor:

1. Go to **Media → Library**
2. Click an image to open it
3. Click **"Edit Image"** below the preview

### Available Editing Tools:
- **Crop** — select an area and crop
- **Rotate** — rotate left or right
- **Flip** — flip horizontal or vertical
- **Scale** — resize the image (only make smaller, not larger)

### Apply Changes To:
- **All image sizes** — changes all generated sizes
- **Thumbnail only** — only changes the thumbnail
- **All except thumbnail** — changes everything but the thumbnail

**Note:** For more advanced editing, use an external tool (Canva, Photoshop, GIMP) and re-upload.

---

## File Upload Limits

### Default Limits
- WordPress has a maximum upload size (usually 32MB-128MB depending on your host)
- In Local WP, this is configurable

### Checking Your Limit
1. Go to **Media → Add New Media File**
2. Below the upload area, you'll see "Maximum upload file size: XXX MB"

### Increasing the Limit (if needed)
In Local WP:
1. Open Site Shell from Local
2. Find the `php.ini` file
3. Change `upload_max_filesize` and `post_max_size`

On most hosting, contact your host or edit `.htaccess`.

---

## Exercises

1. **Upload 5 images**: Find 5 free stock images (try unsplash.com or pexels.com). Name them descriptively before uploading. Upload them to the Media Library.

2. **Set Alt Text**: For each uploaded image, click it in the Media Library and write a descriptive alt text.

3. **Add images to content**: Edit one of your pages or posts and add images using the Image block. Try different alignments (left, center, wide).

4. **Create a Gallery**: Create a new page called "Gallery" and add a Gallery block with 4+ images. Try changing the number of columns.

5. **Try the Cover block**: Add a Cover block to your homepage with a background image and text overlay.

6. **Edit an image**: Select an image in the Media Library and try the built-in editor — crop it, then undo the change.

---

## Key Takeaways

- The **Media Library** stores all your uploads (images, documents, audio, video)
- WordPress creates **multiple sizes** of each uploaded image automatically
- **Optimize images before uploading** — resize and compress them
- **Always set Alt Text** — it's critical for accessibility and SEO
- Use **descriptive file names** with hyphens (e.g., `team-photo-office.jpg`)
- Common image blocks: **Image**, **Gallery**, **Cover**
- WordPress has a basic built-in image editor for crops and rotations
- Use a consistent **naming convention** to keep your Media Library organized

---

**Next Lesson:** [Lesson 07 - WordPress Settings Deep Dive](lesson-07-settings.md)
