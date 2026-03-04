# Lección 33: Publicar un Sitio — Migración de Local a Hosting

## Objetivos
- Entender el proceso de migrar un sitio WordPress local a hosting en producción
- Elegir el hosting apropiado para tus necesidades
- Realizar la migración usando un plugin
- Completar la checklist post-lanzamiento

---

## Resumen del Proceso de Lanzamiento

1. **Elegir y configurar el hosting**
2. **Migrar tu sitio local al servidor**
3. **Configurar dominio y DNS**
4. **Probar todo en el servidor en producción**
5. **Salir en producción (apuntar el dominio al sitio)**
6. **Tareas post-lanzamiento**

---

## Paso 1: Elegir Hosting

### Tipos de Hosting

| Tipo | Precio | Ideal Para | Ejemplos |
|------|--------|-----------|----------|
| **Hosting Compartido** | 3-10€/mes | Sitios personales pequeños, blogs | Bluehost, Hostinger |
| **WordPress Gestionado** | 15-40€/mes | Sitios de negocio, trabajo para clientes | SiteGround, Cloudways |
| **Premium Gestionado** | 30-100€+/mes | Alto tráfico, e-commerce | WP Engine, Kinsta |
| **VPS** | 20-80€/mes | Desarrolladores que quieren control | DigitalOcean, Linode |

### Qué Buscar:
- **Almacenamiento SSD** (más rápido que HDD)
- **Certificado SSL gratuito** (HTTPS)
- **Copias de seguridad diarias** (incluidas)
- **Instalación de WordPress con un clic**
- **Entorno de staging** (para probar cambios)
- **Buen soporte** (chat o teléfono 24/7)
- **Garantía de uptime** (99.9%+)
- **Ubicación del servidor** cerca de tu audiencia

### Recomendados para Principiantes:
1. **SiteGround** — excelente soporte, staging y velocidad
2. **Cloudways** — flexible, buen rendimiento, pago por uso
3. **Bluehost** — económico, oficialmente recomendado por WordPress.org

---

## Paso 2: Obtener un Nombre de Dominio

Si aún no tienes un dominio:
1. Elige un registrador: **Namecheap**, **Squarespace Domains**, **GoDaddy**, **Cloudflare Registrar**
2. Busca el dominio que deseas
3. Regístralo (típicamente 10-15€/año para .com)
4. **No compres extras** que intenten venderte (la protección de privacidad suele ser gratuita ahora)

---

## Paso 3: Migrar Tu Sitio

### Método 1: All-in-One WP Migration (El Más Fácil)

Este es el método de migración más sencillo:

**En tu sitio local (exportar):**
1. Instala el plugin **"All-in-One WP Migration"**
2. Ve a **All-in-One WP Migration → Export**
3. Haz clic en **"Export To"** → **"File"**
4. Espera a que se complete la exportación
5. Descarga el archivo `.wpress`

**En tu hosting en producción (importar):**
1. Instala WordPress en tu hosting (la mayoría tienen instalación con un clic)
2. Inicia sesión en el nuevo admin de WordPress
3. Instala el plugin **"All-in-One WP Migration"**
4. Ve a **All-in-One WP Migration → Import**
5. Sube el archivo `.wpress` de tu exportación local
6. Espera a que se complete la importación
7. Sigue las instrucciones (reemplazará todo en el sitio en producción)
8. Inicia sesión de nuevo con las **credenciales de tu sitio local** (la importación reemplaza los usuarios también)

**Nota:** La versión gratuita tiene un límite de tamaño de archivo (~256MB-512MB dependiendo de la versión). Para sitios más grandes:
- Usa la "Unlimited Extension" ($69 pago único)
- O usa el Método 2 a continuación

### Método 2: Duplicator (Para Sitios Más Grandes)

1. Instala el plugin **"Duplicator"** en tu sitio local
2. Ve a **Duplicator → Packages → Create New**
3. Sigue el asistente para crear un paquete (archivo + instalador)
4. Descarga tanto el archivo **archive.zip** como **installer.php**
5. Sube ambos archivos al directorio raíz de tu hosting (vía FTP o administrador de archivos)
6. Navega a `tudominio.com/installer.php` en tu navegador
7. Sigue el asistente de instalación:
   - Introduce las credenciales de la base de datos de tu sitio en producción (desde tu panel de hosting)
   - Establece la nueva URL
   - Completa la migración
8. Elimina installer.php y archive.zip del servidor después de la migración

### Método 3: Migración Manual (Avanzado)

Para desarrolladores o cuando los plugins no funcionan:

**Exportar base de datos:**
1. En Local WP, ve a la pestaña Database → Open Adminer
2. Exporta la base de datos como SQL

**Subir archivos:**
1. Conéctate a tu hosting vía FTP (FileZilla) o administrador de archivos
2. Sube toda la carpeta `wp-content`
3. Sube `wp-config.php` (luego edita las credenciales de la base de datos)

**Importar base de datos:**
1. Crea una base de datos en tu hosting (vía cPanel → MySQL)
2. Importa tu archivo SQL vía phpMyAdmin

**Actualizar URLs:**
1. Ejecuta un buscar y reemplazar en la base de datos:
   - URL antigua: `http://learning-wordpress.local`
   - URL nueva: `https://tudominio.com`
   - Usa el plugin "Better Search Replace" para esto

---

## Paso 4: Configuración Post-Migración

### Actualizar URLs
Asegúrate de que todas las URLs apuntan al dominio en producción:
1. Ve a **Settings → General**
2. Verifica que **WordPress Address** y **Site Address** son tu dominio en producción
3. Ambos deben usar `https://` (no `http://`)

### Habilitar SSL/HTTPS
1. Tu host debe proporcionar un certificado SSL gratuito
2. Actívalo a través de tu panel de hosting
3. Instala el plugin **"Really Simple SSL"** para una configuración HTTPS fácil
4. O actualiza manualmente las URLs en Settings → General

### Actualizar Permalinks
1. Ve a **Settings → Permalinks**
2. Haz clic en **"Save Changes"** (incluso sin cambiar nada)
3. Esto refresca las reglas de reescritura para el nuevo servidor

### Deshabilitar "Discourage Search Engines"
1. Ve a **Settings → Reading**
2. **Desmarca** "Discourage search engines from indexing this site"
3. Guarda los cambios — ¡esto es crítico para que Google encuentre tu sitio!

---

## Paso 5: Checklist de Lanzamiento

### Antes de Anunciar el Sitio:

**Contenido:**
- [ ] Todas las páginas tienen contenido real (sin lorem ipsum)
- [ ] Todas las imágenes están presentes y cargando
- [ ] Todos los enlaces funcionan (sin enlaces rotos)
- [ ] Los formularios de contacto envían correctamente
- [ ] Los números de teléfono y emails son correctos
- [ ] La información del pie de página es precisa
- [ ] Existen las páginas de política de privacidad y términos

**Funcionalidad:**
- [ ] Todos los formularios funcionan y envían emails a la dirección correcta
- [ ] El checkout de WooCommerce funciona (si aplica)
- [ ] El procesamiento de pagos funciona en modo real (¡desactiva el modo de prueba!)
- [ ] Se están recibiendo las notificaciones por email
- [ ] Los enlaces de redes sociales funcionan
- [ ] La funcionalidad de búsqueda funciona

**Técnico:**
- [ ] SSL/HTTPS está activo (icono de candado en el navegador)
- [ ] "Discourage search engines" está desmarcado
- [ ] Los Permalinks están en "Post name"
- [ ] El favicon está configurado
- [ ] El sitio carga en menos de 3 segundos
- [ ] Responsive en móvil — probado en dispositivos reales
- [ ] La caché está habilitada
- [ ] Las copias de seguridad están programadas
- [ ] El plugin de seguridad está activo

**SEO:**
- [ ] Cada página tiene un SEO title y meta description (Yoast)
- [ ] El XML sitemap es accesible (`/sitemap_index.xml`)
- [ ] Google Search Console está configurado (enviar sitemap)
- [ ] Google Analytics está instalado (si se desea)
- [ ] Alt text en todas las imágenes

---

## Paso 6: Tareas Post-Lanzamiento

### Enviar a Google
1. Ve a **Google Search Console** (https://search.google.com/search-console)
2. Añade la propiedad de tu sitio
3. Verifica la propiedad (DNS, archivo HTML o Google Analytics)
4. Envía tu sitemap: `tudominio.com/sitemap_index.xml`

### Configurar Google Analytics (Opcional)
1. Crea una cuenta de **Google Analytics 4**
2. Obtén tu código de seguimiento
3. Instálalo vía:
   - Yoast SEO (integración limitada)
   - Un plugin como "Site Kit by Google"
   - O directamente en el header de tu tema

### Monitorear
- Revisa Google Search Console para errores de rastreo
- Monitorea el uptime del sitio (UptimeRobot — gratuito)
- Revisa los datos de analítica semanalmente
- Mantén la rutina de mantenimiento (Lección 30)

---

## Entornos de Staging

### ¿Qué es Staging?
Un sitio de staging es una **copia de tu sitio en producción** usada para probar cambios antes de aplicarlos al sitio real.

### Por Qué Usar Staging:
- Probar actualizaciones de plugins antes de que rompan tu sitio en producción
- Construir nuevas páginas sin que los visitantes vean trabajo inacabado
- Probar cambios de diseño de forma segura

### Cómo Configurar:
- La mayoría de hosts gestionados ofrecen **staging con un clic** (SiteGround, WP Engine, Kinsta)
- O usa el plugin **WP Staging** (versión gratuita disponible)
- Haz cambios en staging → prueba → envía a producción

---

## Ejercicios

1. **Investiga hosting**: Visita SiteGround, Cloudways y Bluehost. Compara sus planes y precios de hosting WordPress.

2. **Practica la exportación**: Instala "All-in-One WP Migration" en tu sitio local y expórtalo. Anota el tamaño del archivo.

3. **Crea la checklist de lanzamiento**: Copia la checklist de lanzamiento de esta lección y personalízala para tus necesidades.

4. **Revisa todo localmente**: Repasa la checklist de lanzamiento en tu sitio local. Arregla todo lo que no esté listo.

5. **Configura Google Search Console**: Crea una cuenta (la necesitarás para cualquier sitio en producción).

---

## Puntos Clave

- **Elige hosting** que se ajuste a tus necesidades (SiteGround, Cloudways recomendados para principiantes)
- **All-in-One WP Migration** es la forma más fácil de migrar de local a producción
- Después de la migración: actualiza URLs, habilita SSL, refresca permalinks, desmarca "discourage search engines"
- Usa la **checklist de lanzamiento** para asegurarte de que no se olvida nada
- Envía tu sitemap a **Google Search Console** después del lanzamiento
- Configura **Google Analytics** para rastrear visitantes
- Usa **entornos de staging** para probar cambios en sitios en producción
- **Haz copia de seguridad antes de cada cambio importante** — incluyendo la migración misma

---

**¡Felicidades!** Has completado el Curso de WordPress. ¡Ve a los [Proyectos Prácticos](project-01.html) para poner todo en práctica!
