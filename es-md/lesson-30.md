# Lección 30: Copias de Seguridad y Buenas Prácticas de Seguridad

## Objetivos
- Implementar una estrategia completa de copias de seguridad
- Fortalecer la seguridad de WordPress más allá de los plugins
- Saber qué hacer cuando las cosas salen mal
- Crear una rutina de mantenimiento

---

## Estrategia de Copias de Seguridad

### La Regla 3-2-1
- **3** copias de tus datos
- **2** tipos de almacenamiento diferentes (local + nube)
- **1** copia de seguridad fuera del sitio (almacenamiento en la nube)

### Qué Se Respalda

Una copia de seguridad completa de WordPress incluye:
1. **Base de datos** — todo el contenido, configuración, usuarios y datos de plugins
2. **wp-content/uploads/** — todos los archivos multimedia
3. **wp-content/themes/** — tu tema activo
4. **wp-content/plugins/** — todos los plugins
5. **wp-config.php** — conexión a la base de datos y claves de seguridad
6. **.htaccess** — configuración del servidor

### Programación de Copias de Seguridad (Recomendada)

| Qué | Con Qué Frecuencia | Por Qué |
|-----|-------------------|---------|
| **Base de datos** | Diaria | El contenido cambia frecuentemente |
| **Archivos** | Semanal | Los archivos cambian con menos frecuencia |
| **Copia completa** | Antes de cualquier actualización importante | Red de seguridad para actualizaciones |
| **Copia completa** | Antes de cualquier cambio importante | Cambio de tema, migración, etc. |

### Configurar UpdraftPlus (Configurado en la Lección 22)

Revisa tu configuración de UpdraftPlus:
1. Ve a **Settings → UpdraftPlus Backups → Settings**
2. Verifica la programación: Base de datos = Diaria, Archivos = Semanal
3. Verifica que el almacenamiento remoto está conectado (Google Drive, Dropbox, etc.)
4. Retención: Mantén al menos 3-5 copias de seguridad

### Copia de Seguridad Manual Antes de Actualizaciones
1. Ve a **Settings → UpdraftPlus Backups**
2. Haz clic en **"Backup Now"**
3. Marca tanto "Include your database" como "Include your files"
4. Espera a que se complete antes de proceder con las actualizaciones

### Restaurar desde una Copia de Seguridad
Si algo se rompe:
1. Ve a **Settings → UpdraftPlus Backups**
2. Desplázate hasta **"Existing Backups"**
3. Haz clic en **"Restore"** en la copia que quieras
4. Selecciona los componentes a restaurar
5. Haz clic en **"Restore"**

---

## Fortalecimiento de Seguridad de WordPress

### Más Allá de Wordfence (Lección 22), aquí hay medidas de seguridad adicionales:

### 1. Mantén Todo Actualizado
La causa #1 de hackeos de WordPress es el software desactualizado:
- **Núcleo de WordPress** — actualiza rápidamente
- **Plugins** — actualiza en el día de la publicación (después de hacer copia de seguridad)
- **Temas** — actualiza cuando estén disponibles
- **Versión de PHP** — usa la última versión compatible

### 2. Credenciales Fuertes
- Usa **contraseñas únicas y fuertes** para cada cuenta
- Usa un **gestor de contraseñas** (Bitwarden, 1Password, LastPass)
- Nunca uses: admin, password, 123456, tu nombre, tu cumpleaños
- Habilita la **Autenticación de Dos Factores** en todas las cuentas de admin

### 3. Limitar Intentos de Inicio de Sesión
Wordfence hace esto por defecto. Opciones adicionales:
- Renombrar la URL de inicio de sesión (plugin: WPS Hide Login)
- CAPTCHA en formularios de inicio de sesión

### 4. Permisos de Archivos
En un servidor en producción, establece los permisos correctos:
```
Directorios: 755
Archivos: 644
wp-config.php: 440 o 400
```
(Tu proveedor de hosting normalmente se encarga de esto. Local WP lo gestiona automáticamente.)

### 5. Deshabilitar la Edición de Archivos
Prevén los editores de temas/plugins en el admin:
Añade a `wp-config.php`:
```php
define('DISALLOW_FILE_EDIT', true);
```
Esto elimina el Theme Editor y Plugin Editor del admin — si un hacker obtiene acceso de admin, no podrá inyectar código a través del editor.

### 6. SSL/HTTPS
- **Siempre usa HTTPS** en sitios en producción
- La mayoría de hosts proporcionan certificados SSL gratuitos (Let's Encrypt)
- En Local WP, puedes habilitar SSL haciendo clic en "Trust" en los ajustes del sitio
- Después de habilitar SSL, actualiza: Settings → General → cambia ambas URLs a `https://`

### 7. Cabeceras de Seguridad
Tu hosting o un plugin de seguridad puede añadir cabeceras HTTP:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

---

## Qué Hacer Cuando te Hackean

Si sospechas que tu sitio ha sido comprometido:

### Pasos Inmediatos:
1. **No entres en pánico** — la mayoría de hackeos son reparables
2. **Pon el sitio offline** (modo mantenimiento) si es posible
3. **Escanea con Wordfence** — ejecuta un escaneo completo
4. **Cambia todas las contraseñas** — WordPress admin, base de datos, FTP, hosting
5. **Busca cuentas de admin desconocidas** — elimina las que no reconozcas
6. **Busca archivos modificados** — el escaneo de Wordfence los resalta
7. **Restaura desde una copia de seguridad limpia** — si el hackeo es extenso
8. **Actualiza todo** — núcleo, plugins, temas a las últimas versiones
9. **Revisa y elimina** plugins y temas sin usar
10. **Solicita una revisión** a Google si tu sitio fue marcado

### Resumen de Prevención:
- Actualiza regularmente
- Usa contraseñas fuertes + 2FA
- Haz copias de seguridad frecuentemente
- Usa un plugin de seguridad (Wordfence)
- Solo instala plugins/temas de fuentes confiables

---

## Rutina de Mantenimiento

### Tareas Semanales
- [ ] Verifica actualizaciones de WordPress, plugins y temas
- [ ] Revisa comentarios pendientes (aprobar, spam o papelera)
- [ ] Revisa los resultados del escaneo de Wordfence
- [ ] Verifica que las copias de seguridad se completaron correctamente

### Tareas Mensuales
- [ ] Revisa datos de analítica/tráfico
- [ ] Prueba todos los formularios para asegurarte de que siguen funcionando
- [ ] Busca enlaces rotos (usa un plugin gratuito de comprobación de enlaces o herramienta online)
- [ ] Revisa y optimiza la base de datos (UpdraftPlus tiene una opción para esto)
- [ ] Prueba la velocidad del sitio (Chrome Lighthouse)
- [ ] Revisa las cuentas de usuario — elimina las que no se necesiten

### Tareas Trimestrales
- [ ] Prueba completa de copia de seguridad manual — restaura una copia en un sitio de prueba para verificar que funciona
- [ ] Revisa la configuración de seguridad
- [ ] Verifica el rendimiento SEO
- [ ] Revisa y limpia medios sin usar
- [ ] Actualiza la política de privacidad si es necesario

---

## Ejercicios

1. **Verifica tu programación de copias de seguridad**: Revisa la configuración de UpdraftPlus y asegúrate de que las copias automáticas están configuradas.

2. **Crea una copia de seguridad manual**: Ejecuta una copia de seguridad completa ahora y verifica que se completó.

3. **Practica una restauración**: Si tienes un sitio de prueba, intenta restaurar desde una copia de seguridad para confirmar que el proceso funciona.

4. **Auditoría de seguridad**:
   - Verifica que Wordfence está activo y configurado
   - Verifica que todos los usuarios tienen contraseñas seguras
   - Elimina cuentas de usuario innecesarias
   - Busca actualizaciones disponibles

5. **Crea una checklist de mantenimiento**: Copia la rutina de mantenimiento de arriba y guárdala en algún lugar donde la veas regularmente.

---

## Puntos Clave

- Sigue la **regla de copias de seguridad 3-2-1**: 3 copias, 2 tipos de almacenamiento, 1 fuera del sitio
- Haz copia de seguridad **antes de cada actualización o cambio importante**
- La **medida de seguridad #1** es mantener todo actualizado
- Usa **contraseñas únicas y fuertes** + **2FA** en todas las cuentas de admin
- **Deshabilita la edición de archivos** en wp-config.php en sitios en producción
- Si te hackean: escanea, cambia contraseñas, restaura desde copia de seguridad, actualiza todo
- Establece una **rutina de mantenimiento regular** — semanal, mensual, trimestral

---

**Siguiente Lección:** [Lección 31 - Fundamentos de SEO para WordPress](lesson-31-seo-fundamentals.md)
