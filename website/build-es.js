/**
 * build-es.js — Converts all Spanish markdown lessons to HTML pages
 * Run: node build-es.js
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
// Lesson / page definitions (Spanish)
// ===========================
const pages = [
  // Módulo 1
  { id: 'lesson-01', file: '../es-md/lesson-01.md', short: '01. Qué es WordPress' },
  { id: 'lesson-02', file: '../es-md/lesson-02.md', short: '02. Configuración Local' },
  { id: 'lesson-03', file: '../es-md/lesson-03.md', short: '03. Tour del Panel' },
  { id: 'lesson-04', file: '../es-md/lesson-04.md', short: '04. Entradas vs Páginas' },
  { id: 'lesson-05', file: '../es-md/lesson-05.md', short: '05. Categorías, Etiquetas y Taxonomías' },
  { id: 'lesson-06', file: '../es-md/lesson-06.md', short: '06. La Biblioteca de Medios' },
  { id: 'lesson-07', file: '../es-md/lesson-07.md', short: '07. Ajustes de WordPress' },
  // Módulo 2
  { id: 'lesson-08', file: '../es-md/lesson-08.md', short: '08. Entender los Temas' },
  { id: 'lesson-09', file: '../es-md/lesson-09.md', short: '09. Instalar un Tema' },
  { id: 'lesson-10', file: '../es-md/lesson-10.md', short: '10. Menús y Navegación' },
  { id: 'lesson-11', file: '../es-md/lesson-11.md', short: '11. Widgets y Barras Laterales' },
  { id: 'lesson-12', file: '../es-md/lesson-12.md', short: '12. El Personalizador' },
  // Módulo 3
  { id: 'lesson-13', file: '../es-md/lesson-13.md', short: '13. Instalar Elementor' },
  { id: 'lesson-14', file: '../es-md/lesson-14.md', short: '14. Secciones, Columnas y Widgets' },
  { id: 'lesson-15', file: '../es-md/lesson-15.md', short: '15. Estilos Globales' },
  { id: 'lesson-16', file: '../es-md/lesson-16.md', short: '16. Construir una Página de Inicio' },
  { id: 'lesson-17', file: '../es-md/lesson-17.md', short: '17. Página Acerca de' },
  { id: 'lesson-18', file: '../es-md/lesson-18.md', short: '18. Página de Contacto' },
  { id: 'lesson-19', file: '../es-md/lesson-19.md', short: '19. Plantillas y Reutilización' },
  { id: 'lesson-20', file: '../es-md/lesson-20.md', short: '20. Diseño Responsivo' },
  // Módulo 4
  { id: 'lesson-21', file: '../es-md/lesson-21.md', short: '21. Entender los Plugins' },
  { id: 'lesson-22', file: '../es-md/lesson-22.md', short: '22. Plugins Esenciales' },
  { id: 'lesson-23', file: '../es-md/lesson-23.md', short: '23. Formularios de Contacto' },
  { id: 'lesson-24', file: '../es-md/lesson-24.md', short: '24. Optimización de Imágenes' },
  // Módulo 5
  { id: 'lesson-25', file: '../es-md/lesson-25.md', short: '25. Configurar WooCommerce' },
  { id: 'lesson-26', file: '../es-md/lesson-26.md', short: '26. Añadir Productos' },
  { id: 'lesson-27', file: '../es-md/lesson-27.md', short: '27. Pagos y Envíos' },
  { id: 'lesson-28', file: '../es-md/lesson-28.md', short: '28. Diseño de la Tienda' },
  // Módulo 6
  { id: 'lesson-29', file: '../es-md/lesson-29.md', short: '29. Usuarios y Roles' },
  { id: 'lesson-30', file: '../es-md/lesson-30.md', short: '30. Copias de Seguridad' },
  { id: 'lesson-31', file: '../es-md/lesson-31.md', short: '31. Fundamentos de SEO' },
  { id: 'lesson-32', file: '../es-md/lesson-32.md', short: '32. Rendimiento' },
  { id: 'lesson-33', file: '../es-md/lesson-33.md', short: '33. Publicar el Sitio' },
  // Proyectos
  { id: 'project-01', file: '../es-md/project-01.md', short: 'Proyecto 1: Sitio Web Empresarial' },
  { id: 'project-02', file: '../es-md/project-02.md', short: 'Proyecto 2: Blog / Revista' },
  { id: 'project-03', file: '../es-md/project-03.md', short: 'Proyecto 3: Tienda E-Commerce' },
];

// Module grouping for the sidebar (Spanish)
const modules = [
  { title: 'Resumen del Curso', items: [{ id: 'index', short: 'Inicio' }] },
  { title: 'Módulo 1: Fundamentos', items: pages.slice(0, 7) },
  { title: 'Módulo 2: Temas', items: pages.slice(7, 12) },
  { title: 'Módulo 3: Elementor', items: pages.slice(12, 20) },
  { title: 'Módulo 4: Plugins', items: pages.slice(20, 24) },
  { title: 'Módulo 5: WooCommerce', items: pages.slice(24, 28) },
  { title: 'Módulo 6: Gestión', items: pages.slice(28, 33) },
  { title: 'Proyectos Prácticos', items: pages.slice(33) },
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
// Generate full HTML page (Spanish)
// ===========================
function buildPage({ id, title, bodyHtml, prevLink, nextLink }) {
  const sidebar = buildSidebar(id);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escHtml(title)} — Curso WordPress</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

  <header>
    <button class="hamburger" aria-label="Alternar menú">&#9776;</button>
    <a href="index.html" class="logo">Curso WordPress</a>
    <div class="header-right">
      <div class="lang-switcher">
        <a href="../en/${id}.html">EN</a>
        <span>|</span>
        <a href="../es/${id}.html" class="active">ES</a>
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
  const match = md.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Sin título';
}

function convertMarkdown(md) {
  let processed = md;

  // Replace links like [Lección 02...](lesson-02-local-setup.md) with lesson-02.html
  processed = processed.replace(/\]\((?:\.\.\/[^)]*\/)?lesson-(\d+)[^)]*\.md\)/g, '](lesson-$1.html)');
  processed = processed.replace(/\]\((?:\.\.\/[^)]*\/)?project-(\d+)[^)]*\.md\)/g, '](project-$1.html)');

  // Convert markdown to HTML
  let html = marked.parse(processed);

  return html;
}

// ===========================
// Main build
// ===========================
function main() {
  const outDir = path.join(__dirname, 'es');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // All items in order for prev/next navigation
  const allItems = [{ id: 'index', short: 'Inicio' }, ...pages];

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

    const allIdx = i + 1;
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

  console.log(`\nBuilt ${count} Spanish lesson/project pages in ${outDir}`);
  console.log('(index.html was created manually — not overwritten)\n');
}

main();
