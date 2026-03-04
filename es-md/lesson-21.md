# Lección 21: Entender los Plugins

## Objetivos
- Entender qué son los plugins de WordPress y cómo funcionan
- Saber cómo encontrar, instalar, activar y actualizar plugins
- Evaluar plugins por calidad y seguridad
- Gestionar tu colección de plugins

---

## ¿Qué Son los Plugins?

Los plugins son **complementos de software** que extienden la funcionalidad de WordPress. Pueden añadir casi cualquier cosa:
- Formularios de contacto
- Herramientas SEO
- E-commerce (tiendas online completas)
- Funciones de seguridad
- Optimización de rendimiento
- Integración con redes sociales
- Sistemas de copias de seguridad
- Y miles más

Piensa en los plugins como **aplicaciones para tu sitio web** — igual que instalas apps en tu teléfono para añadir funciones.

---

## Encontrar e Instalar Plugins

### Método 1: Directorio de Plugins de WordPress (En el Admin)

1. Ve a **Plugins → Add New Plugin**
2. **Busca** lo que necesitas (ej., "contact form" o "SEO")
3. Explora los resultados y evalúa las opciones
4. Haz clic en **"Install Now"**
5. Haz clic en **"Activate"**

### Método 2: Subir un Archivo ZIP

Para plugins que no están en el directorio (plugins premium):
1. Ve a **Plugins → Add New Plugin**
2. Haz clic en **"Upload Plugin"** en la parte superior
3. Elige el archivo ZIP
4. Haz clic en **"Install Now"**
5. Activa después de la instalación

---

## Evaluar Plugins

Antes de instalar cualquier plugin, verifica estos factores:

### Criterios Obligatorios

| Factor | Qué Buscar | Señal de Alerta |
|--------|-----------|-----------------|
| **Última Actualización** | En los últimos 6 meses | Hace más de 1 año |
| **Instalaciones Activas** | 10,000+ para plugins establecidos | Muy pocas instalaciones |
| **Calificación** | 4+ estrellas | Por debajo de 3.5 estrellas |
| **Versión de WordPress** | "Tested up to" la versión actual de WP | No probado con la versión actual |
| **Soporte** | El desarrollador responde a los hilos de soporte | Muchas solicitudes de soporte sin responder |
| **Reseñas** | Lee las reseñas recientes en busca de problemas | Múltiples reportes de bugs o conflictos |

### Leer la Página del Plugin
Cuando haces clic en un plugin en el directorio, verifica:
- **Description** — ¿hace lo que necesitas?
- **Screenshots** — ve cómo se ve
- **FAQ** — respuestas a preguntas frecuentes
- **Changelog** — historial de actualizaciones (muestra desarrollo activo)
- **Reviews** — experiencias reales de usuarios
- **Support** — hilos resueltos vs sin resolver

---

## Gestionar Plugins

### Activar y Desactivar

- Los **plugins activos** se ejecutan en tu sitio y afectan su comportamiento
- Los **plugins inactivos** están instalados pero no se ejecutan
- Ve a **Plugins → Installed Plugins** para ver todos los plugins

| Acción | Qué Hace |
|--------|----------|
| **Activate** | Enciende el plugin — empieza a ejecutarse |
| **Deactivate** | Apaga el plugin — deja de ejecutarse pero sigue instalado |
| **Delete** | Elimina los archivos del plugin completamente |

### Actualizar Plugins

Los plugins necesitan actualizaciones regulares para correcciones de seguridad y nuevas funciones:

1. Ve a **Dashboard → Updates** para ver las actualizaciones disponibles
2. O busca la insignia de notificación en **Plugins** en la barra lateral
3. Selecciona los plugins a actualizar → haz clic en **"Update Plugins"**
4. O habilita **actualizaciones automáticas** por plugin (Plugins → Installed Plugins → clic en "Enable auto-updates" junto a un plugin)

### Actualizaciones Automáticas
- **Recomendado para:** Plugins de seguridad, plugins utilitarios pequeños
- **No recomendado para:** Plugins principales (Elementor, WooCommerce) — estos a veces pueden causar problemas, así que actualiza manualmente y prueba
- Habilita por plugin en la lista de Installed Plugins

---

## Buenas Prácticas con Plugins

### Sí:
- **Investiga antes de instalar** — verifica calificaciones, reseñas e historial de actualizaciones
- **Mantén los plugins actualizados** — los plugins desactualizados son riesgos de seguridad
- **Elimina plugins inactivos** — no dejes plugins sin usar instalados
- **Prueba después de actualizar** — verifica tu sitio después de actualizar plugins
- **Haz copia de seguridad antes de actualizaciones importantes** — especialmente para plugins críticos

### No:
- **No instales demasiados plugins** — cada uno añade código y puede ralentizar tu sitio
- **No instales plugins de fuentes no confiables** — los plugins premium "nulled" (pirateados) a menudo contienen malware
- **No instales plugins que hagan lo mismo** — elige un plugin de SEO, un plugin de caché, etc.
- **No ignores las notificaciones de actualización** — los parches de seguridad son críticos

### ¿Cuántos Plugins Son Demasiados?
No hay un número mágico, pero estas son las guías:
- **10-20 plugins** es normal para un sitio empresarial típico
- **20-30** es común para sitios con muchas funciones
- **30+** debería revisarse — ¿realmente necesitas todos?
- Se trata más de **calidad** que de cantidad — los plugins bien programados tienen un impacto mínimo en el rendimiento

---

## Solución de Problemas con Plugins

### Problemas Comunes:

**"El sitio se rompe después de instalar un plugin"**
1. Desactiva el plugin
2. Si no puedes acceder a wp-admin, usa FTP/administrador de archivos para renombrar la carpeta del plugin en `wp-content/plugins/`

**"Los plugins entran en conflicto entre sí"**
1. Desactiva todos los plugins
2. Reactiva uno a la vez para encontrar el plugin en conflicto
3. Verifica si hay una actualización que corrija el conflicto
4. Si no, busca un plugin alternativo

**"El sitio está lento después de añadir plugins"**
1. Usa una herramienta de prueba de velocidad (GTmetrix, Google PageSpeed Insights)
2. Desactiva plugins uno a la vez y vuelve a probar para encontrar el lento
3. Considera alternativas más ligeras

---

## Ejercicios

1. **Explora el directorio de plugins**: Ve a Plugins → Add New y explora los plugins "Popular" y "Recommended". Lee las descripciones de los 10 principales.

2. **Evalúa un plugin**: Busca "SEO" y compara los 3 mejores resultados. Mira calificaciones, instalaciones, última actualización y reseñas. ¿Cuál elegirías?

3. **Revisa tus plugins instalados**: Ve a Plugins → Installed Plugins. Anota cuáles están activos e inactivos. Elimina cualquier plugin inactivo que no necesites.

4. **Habilita actualizaciones automáticas**: Para cualquier plugin relacionado con la seguridad, habilita las actualizaciones automáticas.

5. **Busca actualizaciones**: Ve a Dashboard → Updates y actualiza cualquier plugin que lo necesite.

---

## Puntos Clave

- Los plugins añaden **funcionalidad** a WordPress — como aplicaciones para tu sitio
- Instala desde **Plugins → Add New** o sube archivos ZIP
- **Evalúa con cuidado**: verifica calificaciones, fecha de actualización, instalaciones y reseñas
- **Mantén los plugins actualizados** — los plugins desactualizados son vulnerabilidades de seguridad
- **Elimina los plugins sin usar** — no dejes plugins inactivos instalados
- **No te excedas instalando** — 10-20 plugins es típico, la calidad importa más que la cantidad
- **Nunca instales plugins "nulled"** — a menudo contienen malware
- **Prueba tu sitio** después de cada actualización de plugin

---

**Siguiente Lección:** [Lección 22 - Plugins Imprescindibles](lesson-22-must-have-plugins.md)
