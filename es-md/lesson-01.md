# Lección 01: ¿Qué es WordPress?

## Objetivos
- Entender qué es WordPress y por qué es el CMS más popular
- Aprender la diferencia entre WordPress.org y WordPress.com
- Comprender la arquitectura principal: temas, plugins, base de datos y wp-admin
- Conocer la terminología clave que usarás a lo largo de este curso

---

## ¿Qué es WordPress?

WordPress es un **Sistema de Gestión de Contenidos (CMS)** — un software que te permite crear, gestionar y publicar sitios web sin escribir código desde cero. Impulsa aproximadamente el 43% de todos los sitios web en internet (y más del 60% de todos los sitios con CMS), desde pequeños blogs hasta grandes sitios empresariales.

### ¿Por qué WordPress?
- **Gratuito y de código abierto** — sin costes de licencia
- **No requiere programación** para la mayoría de tareas (pero puedes personalizar con código si lo necesitas)
- **Enorme ecosistema** — miles de temas y plugins disponibles
- **Gran comunidad** — fácil encontrar ayuda, tutoriales y desarrolladores
- **Flexible** — puedes construir cualquier tipo de sitio web (blog, negocio, e-commerce, portfolio, etc.)

---

## WordPress.org vs WordPress.com

Esta es una fuente común de confusión para principiantes:

| | WordPress.org | WordPress.com |
|---|---|---|
| **Qué es** | Software gratuito que descargas y alojas tú mismo | Un servicio alojado gestionado por Automattic |
| **Coste** | Software gratuito (pagas por el hosting) | Nivel gratuito disponible, planes de pago para más funciones |
| **Control** | Control total — instala cualquier tema/plugin | Limitado — restricciones en planes gratuitos/básicos |
| **Personalización** | Ilimitada | Limitada a menos que tengas el plan Business (caro) |
| **Ideal para** | Sitios profesionales, trabajo para clientes, flexibilidad total | Blogs personales sencillos |

**Para tu trabajo, usarás WordPress.org** (autoalojado). Esto es lo que usan los profesionales y lo que enseña este curso.

---

## Arquitectura de WordPress

Piensa en WordPress como construir una casa:

### 1. El Núcleo (Los Cimientos)
El núcleo de WordPress es el software base. Se encarga de:
- Gestión de usuarios (inicio de sesión, roles, permisos)
- Almacenamiento de contenido (entradas, páginas, medios)
- El panel de administración
- La API REST

**Nunca modificas los archivos del núcleo.** Las actualizaciones se gestionan automáticamente.

### 2. Temas (El Aspecto)
Un tema controla cómo **se ve** tu sitio — diseño, colores, fuentes, estilos.

- Cada sitio WordPress tiene exactamente **un tema activo**
- Los temas proporcionan plantillas para diferentes tipos de página (inicio, entrada de blog, archivo, etc.)
- Puedes cambiar de tema sin perder tu contenido
- Usaremos **Hello Elementor** como nuestro tema base (minimalista, diseñado para trabajar con Elementor)

### 3. Plugins (Las Funcionalidades)
Los plugins añaden **funcionalidad** a tu sitio. Ejemplos:
- **Elementor** — constructor visual de páginas (diseño con arrastrar y soltar)
- **WooCommerce** — convierte tu sitio en una tienda online
- **Yoast SEO** — ayuda con la optimización para motores de búsqueda
- **Contact Form 7** — añade formularios de contacto

Puedes instalar tantos plugins como necesites (pero no te excedas — demasiados ralentizan tu sitio).

### 4. Base de Datos (El Almacenamiento)
WordPress usa una **base de datos MySQL** para almacenar:
- Todo tu contenido (entradas, páginas, comentarios)
- Cuentas de usuario y configuración
- Configuración de plugins y temas
- Configuración del sitio

Raramente interactúas con la base de datos directamente. WordPress la gestiona a través de wp-admin.

### 5. wp-admin (El Panel de Control)
El panel de administración de WordPress (accesible en `tusitio.com/wp-admin`) es donde:
- Creas y editas contenido
- Instalas temas y plugins
- Gestionas usuarios
- Configuras ajustes
- Todo lo administrativo

---

## Terminología Clave

| Término | Significado |
|---------|------------|
| **CMS** | Sistema de Gestión de Contenidos — software para gestionar el contenido de un sitio web |
| **Tema (Theme)** | Controla la apariencia visual/diseño de tu sitio |
| **Plugin** | Añade funcionalidad específica a tu sitio |
| **wp-admin** | El panel de administración (backend) de tu sitio WordPress |
| **Front-end** | Lo que los visitantes ven cuando visitan tu sitio |
| **Back-end** | El área de administración donde gestionas tu sitio |
| **Entrada (Post)** | Una entrada de blog (se muestra en orden cronológico inverso) |
| **Página (Page)** | Contenido estático (Acerca de, Contacto, Servicios — no tiene fecha) |
| **Widget** | Un pequeño bloque de contenido colocado en barras laterales o pies de página |
| **Menú** | Enlaces de navegación (normalmente en la cabecera/pie de página) |
| **Enlace permanente (Permalink)** | La URL permanente de una entrada o página |
| **Slug** | La versión amigable para URL de un título (ej., "mi-primera-entrada") |
| **Biblioteca de Medios** | Donde se almacenan todas las imágenes, vídeos y archivos subidos |
| **Shortcode** | Una etiqueta especial como `[gallery]` que incrusta funcionalidad |
| **WYSIWYG** | "What You See Is What You Get" (Lo que ves es lo que obtienes) — editor visual |

---

## Cómo se Muestra una Página de WordPress

Cuando alguien visita tu sitio, esto es lo que ocurre:

1. **El navegador envía una petición** a tu servidor web
2. **El núcleo de WordPress** recibe la petición
3. **Consulta la base de datos** para obtener el contenido solicitado
4. El **tema activo** proporciona la plantilla HTML
5. Los **plugins** añaden su funcionalidad (formularios, etiquetas SEO, etc.)
6. La **página completa** se envía de vuelta al navegador

Todo esto ocurre en milisegundos.

---

## Ejercicios

1. **Explora WordPress.org**: Visita https://wordpress.org/ y navega por los directorios de Temas y Plugins. Familiarízate con lo que hay disponible.

2. **Encuentra 5 sitios famosos** construidos con WordPress. (Pista: La Casa Blanca, TechCrunch, BBC America, Sony Music y muchos más usan WordPress.)

3. **Revisa la tabla de terminología** de arriba. Anota cualquier término que no te quede claro — cubriremos cada uno en profundidad a lo largo del curso.

---

## Puntos Clave

- WordPress es un CMS gratuito y de código abierto que impulsa más del 43% de la web
- **WordPress.org** (autoalojado) es lo que usan los profesionales — eso es lo que estamos aprendiendo
- La arquitectura tiene 4 partes principales: Núcleo, Temas, Plugins y Base de Datos
- **wp-admin** es tu panel de control para todo
- Los temas controlan la apariencia, los plugins añaden funcionalidad
- No necesitas programar para construir sitios profesionales con WordPress + Elementor

---

**Siguiente Lección:** [Lección 02 - Configuración de Local WP](lesson-02-local-setup.md)
