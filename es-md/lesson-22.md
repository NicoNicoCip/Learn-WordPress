# Lección 22: Plugins Imprescindibles — SEO, Seguridad, Copias de Seguridad, Caché

## Objetivos
- Instalar y configurar los plugins esenciales que todo sitio WordPress necesita
- Configurar SEO básico con Yoast o RankMath
- Configurar los fundamentos de seguridad
- Configurar plugins de copias de seguridad y caché

---

## El Stack de Plugins Esenciales

Todo sitio WordPress profesional necesita cubrir estas categorías:

| Categoría | Plugin Recomendado (Gratuito) | Alternativa |
|-----------|------------------------------|-------------|
| **SEO** | Yoast SEO | RankMath |
| **Seguridad** | Wordfence | Sucuri, iThemes Security |
| **Copias de Seguridad** | UpdraftPlus | All-in-One WP Migration |
| **Caché/Velocidad** | WP Super Cache | W3 Total Cache, LiteSpeed Cache |
| **Anti-Spam** | Akismet | Antispam Bee |

---

## 1. Plugin de SEO — Yoast SEO

SEO (Search Engine Optimization - Optimización para Motores de Búsqueda) ayuda a que tu sitio aparezca en los resultados de búsqueda de Google.

### Instalación
1. **Plugins → Add New** → busca "Yoast SEO"
2. Instala y activa

### Configuración Inicial
Yoast tiene un asistente de configuración:
1. Después de activar, ve a **Yoast SEO → First-time configuration**
2. Sigue los pasos:
   - **Site representation**: Organización o Persona
   - **Social profiles**: Añade tus URLs de redes sociales
   - **Search appearance**: Configuración de visibilidad
3. Completa todos los pasos

### Funciones Principales

**Análisis SEO (por entrada/página):**
Al editar una entrada o página, desplázate hasta el **panel de Yoast SEO**:
- **Focus Keyphrase**: Introduce la palabra clave principal para esta página
- **SEO Analysis**: Muestra un semáforo (verde/amarillo/rojo) con recomendaciones específicas
- **Readability Analysis**: Verifica si tu texto es fácil de leer
- **Snippet Preview**: Muestra cómo se verá tu página en los resultados de búsqueda de Google

**Qué optimizar en cada página:**
- **SEO Title** — el título que se muestra en los resultados de búsqueda (incluye tu palabra clave)
- **Meta Description** — la descripción que se muestra en los resultados de búsqueda (150-160 caracteres)
- **Focus Keyphrase** — la palabra clave principal por la que quieres posicionarte
- **URL Slug** — mantenlo corto e incluye la palabra clave

### Configuración Importante de Yoast
Ve a **Yoast SEO → Settings**:
- **Site Features**: Habilita/deshabilita funciones como XML sitemaps
- **Content Types**: Configura los ajustes SEO predeterminados para entradas y páginas
- **Taxonomies**: SEO para categorías y etiquetas

### XML Sitemap
Yoast genera automáticamente un **sitemap** — un archivo que indica a los motores de búsqueda todas tus páginas:
- Visualízalo en: `tusitio.com/sitemap_index.xml`
- Envíalo a Google Search Console (cuando tu sitio esté en producción)

---

## 2. Plugin de Seguridad — Wordfence

### Instalación
1. **Plugins → Add New** → busca "Wordfence"
2. Instala y activa **"Wordfence Security"**
3. Introduce tu dirección de email cuando te lo pida

### Funciones Principales

**Firewall:**
- Bloquea el tráfico malicioso antes de que llegue a WordPress
- Ve a **Wordfence → Firewall** para ver el estado
- Inicialmente en "Learning Mode" — cambiará a "Enabled" después de una semana

**Escáner de Malware:**
- Ve a **Wordfence → Scan**
- Haz clic en **"Start New Scan"**
- Verifica los archivos del núcleo, temas y plugins en busca de malware o modificaciones

**Seguridad de Inicio de Sesión:**
- **Límite de intentos de inicio de sesión** — bloquea ataques de fuerza bruta
- **Autenticación de Dos Factores** — añade una capa extra de seguridad al inicio de sesión
- Ve a **Wordfence → Login Security** para configurar

### Configuración Recomendada de Wordfence
1. Habilita la **protección contra fuerza bruta** (activada por defecto)
2. Configura **notificaciones por email** para alertas de seguridad críticas
3. Habilita **2FA** para cuentas de administrador (Wordfence → Login Security → Two-Factor Authentication)

### Buenas Prácticas de Seguridad (Más Allá de los Plugins)
- **Usa contraseñas fuertes** — nunca `admin` o `password123`
- **No uses "admin" como nombre de usuario** en sitios en producción
- **Mantén actualizados el núcleo de WordPress, temas y plugins**
- **Elimina temas y plugins sin usar**
- **Usa SSL (HTTPS)** — Local WP puede habilitarlo con el certificado "Trust"

---

## 3. Plugin de Copias de Seguridad — UpdraftPlus

Las copias de seguridad son tu red de seguridad. Si algo sale mal, puedes restaurar.

### Instalación
1. **Plugins → Add New** → busca "UpdraftPlus"
2. Instala y activa **"UpdraftPlus WordPress Backup Plugin"**

### Configurar Copias de Seguridad

1. Ve a **Settings → UpdraftPlus Backups**
2. Haz clic en la pestaña **"Settings"**
3. Configura:
   - **Schedule**: Elige la frecuencia de las copias
     - Archivos: Semanal (o Diario para sitios activos)
     - Base de datos: Diario
   - **Retain**: Cuántas copias mantener (3-5 está bien)
   - **Remote Storage**: Dónde almacenar las copias
     - Google Drive (recomendado — gratuito)
     - Dropbox
     - Amazon S3
     - Email (solo para sitios pequeños)
4. Haz clic en **"Save Changes"**

### Crear una Copia de Seguridad Manual

1. Ve a **Settings → UpdraftPlus Backups**
2. Haz clic en **"Backup Now"**
3. Marca tanto "Include your database" como "Include your files"
4. Haz clic en **"Backup Now"**
5. Espera a que se complete

### Restaurar desde una Copia de Seguridad

1. Ve a **Settings → UpdraftPlus Backups**
2. En **"Existing Backups"**, encuentra la copia que quieres
3. Haz clic en **"Restore"**
4. Selecciona qué restaurar (plugins, temas, uploads, base de datos, etc.)
5. Haz clic en **"Restore"**

### Cuándo Hacer Copias de Seguridad
- **Antes de actualizar** el núcleo de WordPress, temas o plugins
- **Antes de hacer cambios importantes** en tu sitio
- **Automáticamente** de forma programada (configúralo y olvídate)

---

## 4. Plugin de Caché — WP Super Cache

La caché hace que tu sitio **cargue más rápido** almacenando versiones pre-generadas de tus páginas.

### Cómo Funciona la Caché
Sin caché: Cada visitante → PHP procesa → Consultas a base de datos → Página generada → Enviada al navegador
Con caché: Cada visitante → Página pre-generada servida → Mucho más rápido

### Instalación
1. **Plugins → Add New** → busca "WP Super Cache"
2. Instala y activa

### Configuración

1. Ve a **Settings → WP Super Cache**
2. En la pestaña **Easy**:
   - Selecciona **"Caching On"**
   - Haz clic en **"Update Status"**
3. Esa es la configuración mínima — la caché básica ya está activa

### Configuración Avanzada (Opcional)
En la pestaña **Advanced**:
- **Cache Delivery Method**: Simple (recomendado para la mayoría de sitios)
- **Miscellaneous**:
  - Marca "Don't cache pages for known users" (los usuarios logueados ven contenido en vivo)
  - Marca "Cache rebuild" (sirve la caché antigua mientras reconstruye)
- Haz clic en **"Update Status"**

### Cuándo Limpiar la Caché
Limpia la caché cuando:
- Actualizas contenido y no ves los cambios
- Actualizas temas o plugins
- Cambias la configuración del sitio

**Para limpiar:** Settings → WP Super Cache → clic en "Delete Cache"

---

## 5. Anti-Spam — Akismet

Si tu sitio tiene comentarios o formularios, necesitas protección anti-spam.

### Instalación
- Akismet viene **pre-instalado** con WordPress
- Ve a **Plugins → Installed Plugins** → Activa Akismet
- Necesitarás una **clave API** (gratuita para sitios personales, de pago para comerciales)
- Sigue el asistente de configuración para obtener tu clave

### Qué Hace
- Verifica automáticamente comentarios y envíos de formularios en busca de spam
- Filtra los comentarios spam para que no tengas que revisarlos manualmente
- Funciona con WPForms, Contact Form 7 y otros plugins de formularios populares

---

## Resumen de Instalación de Plugins

Instala estos plugins en este orden:

1. **Yoast SEO** — para optimización en motores de búsqueda
2. **Wordfence Security** — para seguridad y firewall
3. **UpdraftPlus** — para copias de seguridad
4. **WP Super Cache** — para rendimiento
5. **Akismet** — para protección contra spam

Total: 5 plugins esenciales. Combinados con Elementor, WPForms y Hello Elementor, son 8 plugins — un stack eficiente y ligero.

---

## Ejercicios

1. **Instala los 5 plugins esenciales** listados arriba.

2. **Configura Yoast SEO**: Ejecuta el asistente de primera configuración. Luego edita tu página de inicio y establece una focus keyphrase, SEO title y meta description.

3. **Ejecuta un escaneo de Wordfence**: Ve a Wordfence → Scan y ejecuta un escaneo. Revisa los resultados.

4. **Configura UpdraftPlus**: Configura copias de seguridad automáticas y crea una copia manual.

5. **Habilita WP Super Cache**: Activa la caché usando la pestaña Easy.

6. **Revisa tu lista de plugins**: Ve a Plugins → Installed Plugins. Deberías tener solo los plugins que necesitas — elimina cualquiera que venga pre-instalado y no quieras (como "Hello Dolly").

---

## Puntos Clave

- Todo sitio WordPress necesita: **SEO, Seguridad, Copias de Seguridad, Caché, Anti-Spam**
- **Yoast SEO**: Establece SEO title y meta description en cada página
- **Wordfence**: Proporciona firewall, escaneo de malware y protección de inicio de sesión
- **UpdraftPlus**: Programa copias de seguridad automáticas en almacenamiento en la nube
- **WP Super Cache**: Activa la caché para cargas de página más rápidas
- **Akismet**: Filtra comentarios spam y envíos de formularios
- Mantén tu stack de plugins esenciales **ligero** — 5-8 plugins esenciales es ideal
- **Haz copia de seguridad antes de hacer cambios** — siempre ten una red de seguridad

---

**Siguiente Lección:** [Lección 23 - Formularios de Contacto](lesson-23-contact-forms.md)
