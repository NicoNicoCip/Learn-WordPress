/**
 * build.js — Converts all markdown lessons to HTML pages
 * Run: node build.js
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configure marked for clean output
marked.setOptions({
  gfm: true,
  breaks: false,
});

// ===========================
// Lesson / page definitions
// ===========================
const pages = [
  // Module 1
  { id: 'lesson-01', file: '../en-md/lesson-01.md', short: '01. What is WordPress?' },
  { id: 'lesson-02', file: '../en-md/lesson-02.md', short: '02. Setting Up Local WP' },
  { id: 'lesson-03', file: '../en-md/lesson-03.md', short: '03. The Dashboard Tour' },
  { id: 'lesson-04', file: '../en-md/lesson-04.md', short: '04. Posts vs Pages' },
  { id: 'lesson-05', file: '../en-md/lesson-05.md', short: '05. Categories, Tags & Taxonomies' },
  { id: 'lesson-06', file: '../en-md/lesson-06.md', short: '06. The Media Library' },
  { id: 'lesson-07', file: '../en-md/lesson-07.md', short: '07. WordPress Settings' },
  // Module 2
  { id: 'lesson-08', file: '../en-md/lesson-08.md', short: '08. Understanding Themes' },
  { id: 'lesson-09', file: '../en-md/lesson-09.md', short: '09. Installing a Theme' },
  { id: 'lesson-10', file: '../en-md/lesson-10.md', short: '10. Menus & Navigation' },
  { id: 'lesson-11', file: '../en-md/lesson-11.md', short: '11. Widgets & Sidebars' },
  { id: 'lesson-12', file: '../en-md/lesson-12.md', short: '12. The Customizer' },
  // Module 3
  { id: 'lesson-13', file: '../en-md/lesson-13.md', short: '13. Installing Elementor' },
  { id: 'lesson-14', file: '../en-md/lesson-14.md', short: '14. Sections, Columns & Widgets' },
  { id: 'lesson-15', file: '../en-md/lesson-15.md', short: '15. Global Styles' },
  { id: 'lesson-16', file: '../en-md/lesson-16.md', short: '16. Building a Homepage' },
  { id: 'lesson-17', file: '../en-md/lesson-17.md', short: '17. Building an About Page' },
  { id: 'lesson-18', file: '../en-md/lesson-18.md', short: '18. Contact Page & Forms' },
  { id: 'lesson-19', file: '../en-md/lesson-19.md', short: '19. Templates & Reuse' },
  { id: 'lesson-20', file: '../en-md/lesson-20.md', short: '20. Responsive Design' },
  // Module 4
  { id: 'lesson-21', file: '../en-md/lesson-21.md', short: '21. Understanding Plugins' },
  { id: 'lesson-22', file: '../en-md/lesson-22.md', short: '22. Must-Have Plugins' },
  { id: 'lesson-23', file: '../en-md/lesson-23.md', short: '23. Contact Forms' },
  { id: 'lesson-24', file: '../en-md/lesson-24.md', short: '24. Image Optimization' },
  // Module 5
  { id: 'lesson-25', file: '../en-md/lesson-25.md', short: '25. WooCommerce Setup' },
  { id: 'lesson-26', file: '../en-md/lesson-26.md', short: '26. Adding Products' },
  { id: 'lesson-27', file: '../en-md/lesson-27.md', short: '27. Payments & Shipping' },
  { id: 'lesson-28', file: '../en-md/lesson-28.md', short: '28. Shop Page Design' },
  // Module 6
  { id: 'lesson-29', file: '../en-md/lesson-29.md', short: '29. Users & Roles' },
  { id: 'lesson-30', file: '../en-md/lesson-30.md', short: '30. Backups & Security' },
  { id: 'lesson-31', file: '../en-md/lesson-31.md', short: '31. SEO Fundamentals' },
  { id: 'lesson-32', file: '../en-md/lesson-32.md', short: '32. Performance' },
  { id: 'lesson-33', file: '../en-md/lesson-33.md', short: '33. Going Live' },
  // Projects
  { id: 'project-01', file: '../en-md/project-01.md', short: 'Project 1: Business Website' },
  { id: 'project-02', file: '../en-md/project-02.md', short: 'Project 2: Blog / Magazine' },
  { id: 'project-03', file: '../en-md/project-03.md', short: 'Project 3: E-Commerce Store' },
];

// Module grouping for the sidebar
const modules = [
  { title: 'Course Overview', items: [{ id: 'index', short: 'Home' }] },
  { title: 'Module 1: Fundamentals', items: pages.slice(0, 7) },
  { title: 'Module 2: Themes', items: pages.slice(7, 12) },
  { title: 'Module 3: Elementor', items: pages.slice(12, 20) },
  { title: 'Module 4: Plugins', items: pages.slice(20, 24) },
  { title: 'Module 5: WooCommerce', items: pages.slice(24, 28) },
  { title: 'Module 6: Management', items: pages.slice(28, 33) },
  { title: 'Practice Projects', items: pages.slice(33) },
];

// ===========================
// Generate sidebar HTML
// ===========================
function buildSidebar(activeId) {
  let html = '';
  for (const mod of modules) {
    html += '    <div class="module">\n';
    html += `      <h3>${escHtml(mod.title)}</h3>\n`;
    html += '      <ul>\n';
    for (const item of mod.items) {
      const cls = item.id === activeId ? ' class="active"' : '';
      html += `        <li${cls}><a href="${item.id}.html">${escHtml(item.short)}</a></li>\n`;
    }
    html += '      </ul>\n';
    html += '    </div>\n';
  }
  return html;
}

// ===========================
// Generate full HTML page
// ===========================
function buildPage({ id, title, bodyHtml, prevLink, nextLink }) {
  const sidebar = buildSidebar(id);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escHtml(title)} — WordPress Learning</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

  <header>
    <button class="hamburger" aria-label="Toggle menu">&#9776;</button>
    <a href="index.html" class="logo">WordPress Learning</a>
    <div class="header-right">
      <div class="lang-switcher">
        <a href="../en/${id}.html" class="active">EN</a>
        <span>|</span>
        <a href="../es/${id}.html">ES</a>
      </div>
    </div>
  </header>

  <div class="sidebar-overlay"></div>

  <nav class="sidebar">
${sidebar}  </nav>

  <main class="content">
${bodyHtml}
    <nav class="lesson-nav">
      ${prevLink ? `<a href="${prevLink.id}.html" class="prev">&larr; ${escHtml(prevLink.short)}</a>` : '<span></span>'}
      ${nextLink ? `<a href="${nextLink.id}.html" class="next">${escHtml(nextLink.short)} &rarr;</a>` : '<span></span>'}
    </nav>
  </main>

  <script src="../js/main.js"></script>
</body>
</html>
`;
}

// ===========================
// Helpers
// ===========================
function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function extractTitle(md) {
  // Get the first # heading
  const match = md.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

function convertMarkdown(md) {
  // Remove the first H1 line (we'll use it as the page <h1> via marked)
  // Actually, keep it — marked will convert it to <h1> which is what we want.
  // But we want H1 only for the main title, and H2+ for sections.
  // The markdown already uses # for lesson title (which becomes h1),
  // ## for sections (h2), ### for subsections (h3). Perfect.

  // Fix internal lesson links: convert markdown lesson links to .html links
  let processed = md;

  // Replace links like [Lesson 02...](lesson-02-local-setup.md) with lesson-02.html
  processed = processed.replace(/\]\((?:\.\.\/[^)]*\/)?lesson-(\d+)[^)]*\.md\)/g, '](lesson-$1.html)');
  processed = processed.replace(/\]\((?:\.\.\/[^)]*\/)?project-(\d+)[^)]*\.md\)/g, '](project-$1.html)');

  // Convert markdown to HTML
  let html = marked.parse(processed);

  // Clean up: the "Next Lesson" / "Next Module" links at the bottom of each md
  // are already converted to <a> tags by marked. They'll work.

  return html;
}

// ===========================
// Main build
// ===========================
function main() {
  const outDir = path.join(__dirname, 'en');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // All items in order for prev/next navigation
  const allItems = [{ id: 'index', short: 'Home' }, ...pages];

  let count = 0;

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const mdPath = path.join(__dirname, page.file);

    if (!fs.existsSync(mdPath)) {
      console.error(`  SKIP: ${mdPath} not found`);
      continue;
    }

    const md = fs.readFileSync(mdPath, 'utf-8');
    const title = extractTitle(md);
    const bodyHtml = convertMarkdown(md);

    // prev/next: allItems[0] is index, allItems[1] is lesson-01, etc.
    const allIdx = i + 1; // offset by 1 because index is at position 0
    const prevItem = allIdx > 0 ? allItems[allIdx - 1] : null;
    const nextItem = allIdx < allItems.length - 1 ? allItems[allIdx + 1] : null;

    const html = buildPage({
      id: page.id,
      title,
      bodyHtml,
      prevLink: prevItem,
      nextLink: nextItem,
    });

    const outPath = path.join(outDir, `${page.id}.html`);
    fs.writeFileSync(outPath, html, 'utf-8');
    count++;
  }

  console.log(`\nBuilt ${count} lesson/project pages in ${outDir}`);
  console.log('(index.html was created manually — not overwritten)\n');
}

main();
