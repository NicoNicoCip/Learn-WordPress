# Lección 02: Configuración de Local WP + Creación de Tu Primer Sitio

## Objetivos
- Instalar Local WP en tu ordenador
- Crear tu primer sitio WordPress local
- Iniciar sesión en wp-admin por primera vez
- Entender la interfaz de Local WP

---

## ¿Qué es Local WP?

**Local** (anteriormente Local by Flywheel) es una aplicación de escritorio gratuita que crea un entorno de desarrollo WordPress completo en tu ordenador. Incluye todo lo que WordPress necesita:
- Servidor web (Apache o Nginx)
- PHP (el lenguaje de programación que usa WordPress)
- MySQL (la base de datos)

No requiere configuración complicada — lo gestiona todo con unos pocos clics.

### ¿Por qué Local WP en lugar de XAMPP/WAMP?
- **Creación de sitios con un clic** — sin configuración manual
- **Diseñado específicamente para WordPress** — experiencia optimizada
- **Fácil gestión de múltiples sitios** — cada proyecto tiene su propio entorno
- **Live Links** — comparte tu sitio local temporalmente con clientes (integrado)
- **Gratuito** — sin coste para las funciones que necesitas

---

## Paso 1: Descargar e Instalar Local WP

1. Ve a **https://localwp.com/**
2. Haz clic en **"Download for Free"**
3. Selecciona tu plataforma (Windows)
4. Rellena el formulario (puedes usar cualquier email) y descarga
5. Ejecuta el instalador:
   - Acepta el acuerdo de licencia
   - Elige la ubicación de instalación (la predeterminada está bien)
   - Espera a que se complete la instalación
6. Abre Local WP

### Primer Inicio
Cuando abras Local por primera vez, puede que:
- Te pida crear una cuenta gratuita de Local (opcional — puedes omitirlo)
- Solicite permisos de firewall — **permítelos** (necesita ejecutar un servidor web local)
- Muestre una pantalla de bienvenida — haz clic para continuar

---

## Paso 2: Crear Tu Primer Sitio WordPress

1. Haz clic en el botón grande **"+ Create a new site"** (o el icono + en la esquina inferior izquierda)
2. Selecciona **"Create a new site"** (no "Create from Blueprint")
3. Introduce el nombre de tu sitio: **"Learning WordPress"**
   - Local generará automáticamente un dominio como `learning-wordpress.local`
   - Haz clic en **"Continue"**

4. Elige tu entorno:
   - Selecciona **"Preferred"** (esto usa las versiones recomendadas de PHP y MySQL)
   - Haz clic en **"Continue"**

5. Configura las credenciales de WordPress:
   - **WordPress Username:** `admin`
   - **WordPress Password:** `admin` (esto es solo local, así que una contraseña simple está bien)
   - **WordPress Email:** tu email (o cualquier email — es local)
   - Haz clic en **"Add Site"**

6. Espera a que Local configure todo (tarda 1-2 minutos)

---

## Paso 3: Explorar la Interfaz de Local WP

Una vez creado tu sitio, verás el **panel del sitio** en Local:

### Sección Superior
- **Nombre del sitio** y URL local (ej., `learning-wordpress.local`)
- Botón **Stop/Start** — inicia o detiene el servidor local para este sitio
- **Indicador de estado del sitio** — verde significa que está en funcionamiento

### Pestaña Overview
- **Site Domain** — la URL para acceder a tu sitio
- **SSL** — puedes habilitar HTTPS (haz clic en "Trust" para añadir el certificado)
- **Web Server** — Apache o Nginx
- **PHP Version** — la versión de PHP en uso
- **Database** — versión de MySQL o MariaDB

### Botones Importantes
- **"Open Site"** — abre el front-end de tu sitio en el navegador (lo que ven los visitantes)
- **"WP Admin"** — abre el panel de administración de WordPress (donde gestionas todo)
- **"Open Site Folder"** — abre la carpeta del sistema de archivos donde se almacenan los archivos de WordPress

### Otras Pestañas
- **Database** — acceso a Adminer (herramienta de gestión de bases de datos)
- **Tools** — Mailhog (captura los emails enviados por WordPress localmente)

---

## Paso 4: Iniciar Sesión en WordPress por Primera Vez

1. Asegúrate de que tu sitio esté **en funcionamiento** (estado verde en Local)
2. Haz clic en el botón **"WP Admin"** en Local
3. Tu navegador abrirá la página de inicio de sesión de WordPress
4. Introduce tus credenciales:
   - Username: `admin`
   - Password: `admin`
5. Haz clic en **"Log In"**

**¡Enhorabuena!** Ya estás en el panel de administración de WordPress.

### Guarda Estas URLs en Marcadores
- **Tu sitio:** `http://learning-wordpress.local/`
- **Panel de administración:** `http://learning-wordpress.local/wp-admin/`

---

## Paso 5: Recorrido Rápido de lo que Ves

No te preocupes por entenderlo todo ahora — cubriremos cada parte en detalle. Por ahora, simplemente observa:

### La Barra Lateral Izquierda (Menú de Administración)
Es tu navegación principal. Verás:
- **Dashboard** — pantalla de resumen y bienvenida
- **Posts** — entradas del blog
- **Media** — imágenes y archivos
- **Pages** — páginas estáticas
- **Comments** — comentarios del blog
- **Appearance** — temas, menús, widgets
- **Plugins** — plugins instalados
- **Users** — cuentas de usuario
- **Tools** — importar/exportar
- **Settings** — configuración del sitio

### La Barra Superior (Admin Bar)
- Enlaces para visitar tu sitio
- Accesos rápidos para crear contenido nuevo
- Tu perfil de usuario

---

## Paso 6: Visitar Tu Sitio

1. En wp-admin, pasa el ratón sobre el nombre de tu sitio en la esquina superior izquierda de la barra de administración
2. Haz clic en **"Visit Site"**
3. Verás el sitio WordPress predeterminado con un tema por defecto

Todavía no tendrá mucho aspecto — ¡es normal! Lo transformaremos en un sitio profesional a lo largo de este curso.

---

## Gestión de Tu Sitio en Local WP

### Detener e Iniciar
- No necesitas mantener tu sitio en funcionamiento todo el tiempo
- Haz clic en **"Stop Site"** cuando termines de trabajar
- Haz clic en **"Start Site"** cuando quieras volver a trabajar
- Tu contenido y configuración se conservan entre sesiones

### Crear Sitios Adicionales
- Puedes crear tantos sitios como quieras
- Cada uno tiene su propia instalación de WordPress y base de datos
- Útil para proyectos de práctica más adelante en este curso

### ¿Dónde Están los Archivos?
Haz clic en **"Open Site Folder"** en Local para ver:
```
your-site/
├── app/          ← La instalación de WordPress está aquí
│   └── public/   ← Los archivos reales de WordPress
│       ├── wp-admin/       ← Archivos del panel de administración (no editar)
│       ├── wp-content/     ← TU contenido: temas, plugins, subidas
│       │   ├── themes/     ← Archivos de temas
│       │   ├── plugins/    ← Archivos de plugins
│       │   └── uploads/    ← Medios que subes
│       ├── wp-includes/    ← Archivos del núcleo de WordPress (no editar)
│       └── wp-config.php   ← Configuración de conexión a la base de datos
├── conf/         ← Configuración del servidor
└── logs/         ← Registros de errores
```

**Importante:** La única carpeta en la que trabajarás es `wp-content/`. Nunca edites archivos en `wp-admin/` o `wp-includes/`.

---

## Solución de Problemas

### "El sitio no arranca"
- Intenta reiniciar Local WP
- Comprueba si otro programa está usando el puerto 80 (como Skype o IIS)
- En Local, ve a Preferences e intenta cambiar el modo de router

### "No puedo acceder al sitio en el navegador"
- Asegúrate de que el sitio esté en funcionamiento (indicador verde en Local)
- Intenta limpiar tu DNS: abre el Símbolo del sistema y ejecuta `ipconfig /flushdns`
- Prueba con otro navegador

### "Olvidé la contraseña de administrador"
- En Local, haz clic derecho en el sitio → "Open Site Shell"
- Ejecuta: `wp user update admin --user_pass=admin`

---

## Ejercicios

1. **Crea tu sitio**: Sigue los pasos anteriores para instalar Local WP y crear un sitio "Learning WordPress".

2. **Inicia sesión en wp-admin**: Accede al panel de administración y haz clic en cada elemento de la barra lateral izquierda — solo para ver qué hay. No cambies nada todavía.

3. **Visita tu sitio**: Mira el front-end y observa cómo se ve el tema predeterminado.

4. **Encuentra los archivos**: Haz clic en "Open Site Folder" y navega hasta la carpeta `wp-content`. Mira las carpetas `themes` y `plugins` para ver qué hay instalado por defecto.

5. **Detener y reiniciar**: Practica deteniendo tu sitio y volviéndolo a iniciar para confirmar que todo funciona.

---

## Puntos Clave

- **Local WP** es la forma más sencilla de ejecutar WordPress en tu ordenador
- Crea sitios con solo unos clics — sin necesidad de configurar servidores
- Accede a tu sitio en `http://nombre-de-tu-sitio.local/`
- Accede al panel de administración en `http://nombre-de-tu-sitio.local/wp-admin/`
- La carpeta `wp-content` es donde se encuentran los temas, plugins y archivos subidos
- Nunca edites archivos en `wp-admin/` o `wp-includes/`
- Detén tu sitio cuando no lo estés usando, inícialo cuando lo necesites

---

**Siguiente Lección:** [Lección 03 - El Recorrido por el Dashboard de WordPress](lesson-03.md)
