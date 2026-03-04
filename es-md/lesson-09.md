# Lección 09: Instalar y Configurar un Theme (Hello Elementor)

## Objetivos
- Instalar y activar el theme Hello Elementor
- Configurar los ajustes básicos del theme
- Comprender la activación y desactivación de themes
- Eliminar themes no utilizados

---

## Instalar Hello Elementor

Hello Elementor es el **theme oficial creado por el equipo de Elementor**. Está diseñado para ser un lienzo en blanco que permite que Elementor haga todo el trabajo pesado en cuanto al diseño.

### Paso 1: Instalar el Theme

1. Ve a **Appearance → Themes**
2. Haz clic en **"Add New Theme"** en la parte superior
3. En el cuadro de búsqueda, escribe **"Hello Elementor"**
4. Encuentra el theme de "Starter Templates" / equipo de Elementor
5. Haz clic en **"Install"**
6. Espera a que se complete la instalación

### Paso 2: Activar el Theme

1. Después de la instalación, haz clic en **"Activate"**
2. Tu sitio ahora usa Hello Elementor

### Paso 3: Visita Tu Sitio

1. Ve al front-end de tu sitio (`http://learning-wordpress.local/`)
2. Observa que se ve muy minimalista — casi vacío
3. **Esto es intencional** — Hello Elementor es un lienzo en blanco para Elementor

---

## Comprender Lo Que Acaba de Ocurrir

Cuando activaste Hello Elementor:
- El **theme anterior fue desactivado** (pero no eliminado)
- Las plantillas de Hello Elementor se usan ahora para mostrar tu contenido
- Tu **contenido no cambió** — todas las entradas, páginas y configuraciones están intactas
- La **apariencia cambió** porque el nuevo theme tiene estilos diferentes

---

## Configuración del Theme

Hello Elementor es intencionalmente minimalista, pero tiene algunos ajustes básicos.

### A Través del Personalizador

1. Ve a **Appearance → Customize** (o visita tu sitio y haz clic en "Customize" en la barra de administración)
2. El Personalizador se abre con una vista previa en vivo

Secciones disponibles en Hello Elementor:
- **Site Identity** — Logo, título del sitio, eslogan, icono del sitio (favicon)
- **Menus** — Ubicaciones de los menús de navegación
- **Homepage Settings** — Lo mismo que Settings → Reading
- **Additional CSS** — Añadir código CSS personalizado

### Configurar la Identidad del Sitio

1. En el Personalizador, haz clic en **"Site Identity"**
2. **Logo**: Haz clic en "Select Logo" para subir el logo de tu sitio
   - Recomendado: Sube un PNG con transparencia
   - Tamaño sugerido: 200-300px de ancho
3. **Site Title**: El nombre de tu sitio (también se configura en Settings → General)
4. **Tagline**: La descripción de tu sitio
5. **Site Icon (Favicon)**: El pequeño icono que aparece en las pestañas del navegador
   - Sube una imagen cuadrada de al menos 512×512 píxeles
   - El formato PNG funciona mejor
6. Haz clic en **"Publish"** para guardar los cambios

---

## Gestionar Themes

### Ver Themes Instalados
- Ve a **Appearance → Themes**
- Tu theme activo se muestra primero
- Los demás themes instalados (inactivos) se muestran debajo

### Eliminar Themes No Utilizados
Mantén tu sitio limpio — elimina los themes que no vayas a usar:

1. Ve a **Appearance → Themes**
2. Haz clic en un theme **inactivo**
3. Haz clic en **"Delete"** en la esquina inferior derecha de la ventana de detalles del theme
4. Confirma la eliminación

**Mantén al menos un theme de respaldo** (como Twenty Twenty-Five) por si tu theme activo tiene problemas.

**Regla general:** Mantén tu theme activo + un theme predeterminado de WordPress. Elimina el resto.

### Actualizar Themes
Los themes reciben actualizaciones para correcciones de seguridad, correcciones de errores y nuevas funciones:
1. Ve a **Dashboard → Updates**
2. Si hay actualizaciones de themes disponibles, se listarán aquí
3. Selecciona los themes a actualizar y haz clic en **"Update Themes"**
4. Alternativamente, verás una notificación en la página de Themes

---

## Instalar Themes desde Archivos ZIP

Algunos themes premium no están en el directorio de WordPress. Descargas un archivo ZIP del desarrollador:

1. Ve a **Appearance → Themes → Add New Theme**
2. Haz clic en **"Upload Theme"** en la parte superior
3. Haz clic en **"Choose File"** y selecciona el archivo ZIP
4. Haz clic en **"Install Now"**
5. Después de la instalación, haz clic en **"Activate"**

---

## Qué Hace Especial a Hello Elementor

| Característica | Beneficio |
|----------------|-----------|
| **Ultra-ligero** | Solo ~6KB de CSS, el theme de carga más rápida |
| **Sin opiniones de estilo** | No impone fuentes, colores ni diseños — Elementor controla todo |
| **Creado por el equipo de Elementor** | Compatibilidad perfecta garantizada |
| **Soporte de cabecera/pie de página** | Funciona con el Theme Builder de Elementor Pro (o alternativas gratuitas como el plugin "Header Footer Elementor") |
| **Actualizaciones regulares** | Mantenido por el equipo de Elementor |

### Cuándo Hello Elementor Podría No Ser Suficiente

Hello Elementor es intencionalmente básico. Si necesitas funciones sin Elementor Pro:
- **Cabecera/pie de página personalizado sin un constructor de páginas** → Considera Astra o GeneratePress
- **Opciones de diseño integradas** → Considera Astra (tiene un constructor de cabecera gratuito)
- **Demos de sitios pre-construidos** → Considera Astra + el plugin Starter Templates

Para este curso, Hello Elementor es perfecto ya que estamos aprendiendo Elementor para el diseño.

---

## Ejercicios

1. **Instala y activa Hello Elementor**: Sigue los pasos anteriores.

2. **Configura la Identidad del Sitio**: En el Personalizador, añade un título del sitio, eslogan y favicon. Puedes usar cualquier imagen cuadrada pequeña como favicon.

3. **Elimina themes no utilizados**: Elimina cualquier theme que no vayas a usar, manteniendo Hello Elementor y un theme predeterminado como respaldo.

4. **Previsualiza antes de activar**: Instala otro theme (como Astra) — usa "Live Preview" para ver cómo se ve, pero no lo actives. Luego vuelve a Hello Elementor.

5. **Comprueba actualizaciones**: Ve a Dashboard → Updates y verifica si hay actualizaciones de themes disponibles.

---

## Puntos Clave

- **Hello Elementor** es el theme ideal para usuarios de Elementor — ligero y diseñado como un lienzo en blanco
- Instala themes desde la administración: **Appearance → Themes → Add New**
- **Activa** para empezar a usar un theme; el contenido se conserva al cambiar
- Usa el **Personalizador** para ajustes básicos (logo, favicon, identidad del sitio)
- **Elimina los themes no utilizados** para mantener tu sitio limpio y seguro
- Mantén **un theme de respaldo** (un theme predeterminado de WordPress) instalado
- Los themes premium se pueden instalar desde archivos ZIP

---

**Siguiente Lección:** [Lección 10 - Menús y Navegación](lesson-10-menus-navigation.md)
