# Lección 29: Usuarios y Roles — Gestionar el Acceso

## Objetivos
- Entender los roles de usuario y capacidades de WordPress
- Crear y gestionar cuentas de usuario
- Asignar roles apropiados a miembros del equipo y clientes
- Configurar los ajustes del perfil de usuario

---

## Roles de Usuario de WordPress

WordPress tiene un sistema de roles integrado que controla lo que cada usuario puede hacer:

| Rol | Qué Pueden Hacer | Ideal Para |
|-----|-----------------|------------|
| **Administrator** | Todo — control total del sitio | Propietario del sitio, desarrollador principal |
| **Editor** | Gestionar y publicar todo el contenido (entradas, páginas, comentarios) | Gestor de contenidos, redactor senior |
| **Author** | Escribir y publicar solo sus propias entradas | Colaborador del blog, miembro del equipo |
| **Contributor** | Escribir entradas pero no pueden publicar (requiere aprobación de editor/admin) | Escritores invitados, becarios |
| **Subscriber** | Solo pueden gestionar su propio perfil | Visitantes registrados, suscriptores de newsletter |

### Roles de WooCommerce (Añadidos por WooCommerce)
| Rol | Qué Pueden Hacer |
|-----|-----------------|
| **Shop Manager** | Gestionar productos, pedidos, cupones y clientes (sin ajustes del sitio) |
| **Customer** | Realizar pedidos y gestionar su cuenta |

---

## Gestionar Usuarios

### Crear un Nuevo Usuario

1. Ve a **Users → Add New User**
2. Rellena:
   - **Username** (obligatorio) — no se puede cambiar después
   - **Email** (obligatorio) — debe ser único
   - **First Name / Last Name** — información de visualización
   - **Website** — opcional
   - **Password** — usa "Generate Password" para una contraseña segura
   - **Role** — selecciona el rol apropiado
3. Marca **"Send the new user an email about their account"** si quieres notificarle
4. Haz clic en **"Add New User"**

### Editar Usuarios

1. Ve a **Users → All Users**
2. Pasa el cursor sobre un usuario → haz clic en **"Edit"**
3. Puedes cambiar: nombre, email, rol, contraseña, biografía, foto de perfil

### Eliminar Usuarios

1. Ve a **Users → All Users**
2. Pasa el cursor sobre un usuario → haz clic en **"Delete"**
3. Elige qué hacer con su contenido:
   - **Delete all content** — elimina permanentemente sus entradas/páginas
   - **Attribute all content to** — transfiere su contenido a otro usuario
4. **Siempre atribuye el contenido** para evitar perder entradas/páginas

---

## Guía de Selección de Roles

### Para Sitios de Clientes
Al construir sitios para clientes, piensa qué acceso necesitan:

| Necesidad del Cliente | Asignar Rol |
|----------------------|-------------|
| "Solo necesito actualizar las entradas del blog" | Author o Editor |
| "Necesito gestionar todo el contenido y las páginas" | Editor |
| "Necesito control total del sitio" | Administrator |
| "Necesito gestionar la tienda online" | Shop Manager |
| "Mi personal necesita escribir entradas para aprobación" | Contributor |

### El Principio de Mínimo Privilegio
Da a los usuarios el **rol mínimo que necesitan**. Esto previene:
- Cambios accidentales en la configuración del sitio
- Eliminación de contenido importante
- Instalación de plugins inseguros
- Modificación del contenido de otros usuarios

**Ejemplo:** Un redactor de contenido no necesita acceso de Administrator. Dale el rol de Author o Editor.

---

## Configuración de tu Perfil

Ve a **Users → Profile** para configurar tu propia cuenta:

### Configuración Importante:

| Ajuste | Qué Hace |
|--------|----------|
| **Visual Editor** | Habilitar/deshabilitar el editor visual de entradas |
| **Admin Color Scheme** | Cambiar los colores del panel de administración |
| **Keyboard Shortcuts** | Habilitar atajos para moderación de comentarios |
| **Toolbar** | Mostrar/ocultar la barra de admin en el front-end |
| **Display Name** | Cómo aparece tu nombre públicamente |
| **Email** | Tu email de inicio de sesión y notificaciones |
| **New Password** | Cambiar tu contraseña |
| **Application Passwords** | Crear contraseñas para apps/APIs |

### Gravatar (Foto de Perfil)
WordPress usa **Gravatar** (Globally Recognized Avatar) para las fotos de perfil:
1. Ve a https://gravatar.com/
2. Crea una cuenta con el mismo email que tu cuenta de WordPress
3. Sube una foto de perfil
4. Aparece automáticamente en WordPress

---

## Buenas Prácticas de Seguridad para Usuarios

1. **No uses "admin" como nombre de usuario** en sitios en producción — es lo primero que prueban los atacantes
2. **Usa contraseñas seguras** — WordPress genera contraseñas fuertes, úsalas
3. **Habilita la Autenticación de Dos Factores** — usa la función 2FA de Wordfence
4. **Limita las cuentas de Administrator** — solo 1-2 admins por sitio
5. **Elimina cuentas sin usar** — borra las cuentas de personas que ya no necesitan acceso
6. **No compartas credenciales de inicio de sesión** — cada persona debe tener su propia cuenta
7. **Revisa la lista de usuarios regularmente** — busca cuentas desconocidas o sospechosas

---

## Ejercicios

1. **Revisa tu perfil**: Ve a Users → Profile. Establece tu nombre de visualización, revisa tu preferencia de esquema de colores del admin y actualiza tu biografía.

2. **Crea usuarios de prueba**: Crea un usuario para cada rol principal (Editor, Author, Contributor, Subscriber). Usa direcciones de email de prueba.

3. **Inicia sesión como diferentes roles**: Cierra sesión, inicia sesión como el usuario Editor y anota qué puede y qué no puede hacer. Repite con Author. Observa las diferencias en la barra lateral del admin.

4. **Elimina un usuario de prueba**: Elimina el usuario Subscriber. Elige atribuir su contenido a tu cuenta de admin.

5. **Revisa la seguridad**: Verifica que ninguna cuenta use contraseñas débiles. Considera habilitar 2FA en tu cuenta de admin.

---

## Puntos Clave

- WordPress tiene 5 roles por defecto: **Administrator, Editor, Author, Contributor, Subscriber**
- WooCommerce añade **Shop Manager** y **Customer**
- Sigue el **principio de mínimo privilegio** — da el acceso mínimo necesario
- **No uses "admin" como nombre de usuario** en sitios en producción
- Cada persona debe tener **su propia cuenta** — nunca compartas inicios de sesión
- **Atribuye el contenido** al eliminar usuarios para evitar perder entradas/páginas
- Revisa tu lista de usuarios regularmente y elimina las cuentas sin usar

---

**Siguiente Lección:** [Lección 30 - Copias de Seguridad y Buenas Prácticas de Seguridad](lesson-30-backups-security.md)
