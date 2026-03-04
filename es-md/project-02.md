# Proyecto 02: Construir un Sitio de Blog/Revista

## Descripcion General
Construye un sitio de blog o revista en linea centrado en el contenido. Este proyecto hace hincapie en la organizacion de contenidos, la funcionalidad del blog y la experiencia del lector.

**Tiempo estimado:** 2-4 horas

---

## El Encargo

**Cliente:** "TechPulse" — un blog de noticias y opinion sobre tecnologia que cubre gadgets, software y estilo de vida digital.

**Requisitos:**
- Diseno centrado en el blog, optimizado para la lectura
- Categorias de contenido bien organizadas
- Pagina de inicio atractiva con articulos destacados y recientes
- Secciones de biografia del autor
- Suscripcion al newsletter

---

## Paginas a Construir

### 1. Pagina de Inicio (Estilo Blog)
**Contenido a incluir:**
- Cabecera con logotipo del sitio y navegacion
- Seccion de entrada destacada/hero (ultima entrada con imagen grande)
- Cuadricula de entradas recientes (6-8 entradas en una cuadricula de 2 o 3 columnas)
- Barra lateral con:
  - Sobre el blog (texto breve)
  - Lista de categorias
  - Formulario de suscripcion al newsletter
- "Cargar mas" o paginacion

**Enfoque con Elementor:** Usa shortcodes de producto o construye manualmente:
- Seccion hero con la informacion de la ultima entrada (actualizada manualmente)
- Usa `[recent_posts]` o construye un diseno personalizado

### 2. Pagina Sobre Nosotros
**Contenido a incluir:**
- Sobre la publicacion
- El equipo editorial (3 redactores con biografias y enlaces sociales)
- Informacion de contacto
- Llamada a la accion "Escribe para nosotros"

### 3. Pagina de Contacto
**Contenido a incluir:**
- Formulario de contacto (Nombre, Email, Asunto, Mensaje)
- Nota "Proponer un Articulo" para posibles colaboradores
- Enlaces a redes sociales

### 4. Paginas de Categoria (Autogeneradas)
WordPress las crea automaticamente. Asegurate de que se vean bien:
- Configurando las categorias correctamente
- Anadiendo descripciones a las categorias
- Probando el diseno de la pagina de archivo

---

## Entradas de Blog a Crear

Crea al menos **8 entradas de blog** en estas categorias:

### Categorias:
1. **Gadgets y Equipos** (3 entradas)
2. **Software y Apps** (3 entradas)
3. **Estilo de Vida Digital** (2 entradas)

### Entradas de Ejemplo:

**Gadgets y Equipos:**
1. "Los Mejores Auriculares Inalambricos de 2026: Nuestro Top 5"
   - Mas de 500 palabras, imagen destacada, tabla comparativa
   - Tags: earbuds, wireless, audio, reviews

2. "Experiencia Practica: La Ultima Revolucion en Camaras de Smartphones"
   - Mas de 400 palabras, multiples imagenes
   - Tags: smartphone, camera, photography, review

3. "Imprescindibles del Hogar Inteligente: Lo Que Realmente Necesitas"
   - Mas de 400 palabras, formato de lista con imagenes
   - Tags: smart-home, IoT, automation

**Software y Apps:**
4. "10 Apps de Productividad Que Realmente Cambiaron Mi Flujo de Trabajo"
   - Mas de 600 palabras, capturas de pantalla, formato de lista
   - Tags: productivity, apps, workflow, tools

5. "Herramientas de IA Que Todo el Mundo Deberia Conocer"
   - Mas de 500 palabras, lista categorizada
   - Tags: AI, tools, technology, machine-learning

6. "El Auge de las Plataformas No-Code: Construye Sin Programar"
   - Mas de 400 palabras
   - Tags: no-code, development, platforms, tools

**Estilo de Vida Digital:**
7. "Desintoxicacion Digital: Como Desconectar Sin Perderte Nada"
   - Mas de 400 palabras, formato de consejos
   - Tags: wellness, digital-detox, tips, lifestyle

8. "Configuracion para Trabajo Remoto: Construyendo la Oficina en Casa Perfecta"
   - Mas de 500 palabras, lista de equipamiento, imagenes
   - Tags: remote-work, home-office, productivity, setup

### Requisitos de las Entradas:
- Cada entrada debe tener: **titulo, imagen destacada, contenido (mas de 300 palabras), categoria, 3-5 tags, extracto**
- Usar **encabezados (H2, H3)** para estructurar el contenido
- Incluir **al menos una imagen** en el cuerpo
- Configurar el **titulo y meta descripcion de Yoast SEO**
- Usar **enlaces internos** (enlazar entre tus entradas)

---

## Especificaciones de Diseno

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| Azul Electrico | `#0066ff` | Enlaces, acentos |
| Azul Marino Oscuro | `#1a1a2e` | Cabeceras, fondos oscuros |
| Gris Claro | `#f4f4f5` | Fondo, tarjetas |
| Texto Oscuro | `#222222` | Texto del cuerpo |
| Gris Medio | `#666666` | Texto secundario, pies de foto |

### Fuentes
- **Titulares:** Inter o Roboto (Moderna, limpia)
- **Cuerpo:** Source Serif Pro o Georgia (Comoda para la lectura)

### Fotografia
- Usar Unsplash/Pexels para imagenes relacionadas con tecnologia
- Terminos de busqueda: technology, laptop, smartphone, coding, workspace, gadgets

---

## Requisitos Tecnicos

- [ ] Mas de 8 entradas de blog con categorias y etiquetas adecuadas
- [ ] Navegacion funcional por categorias en el menu
- [ ] La pagina de inicio muestra entradas destacadas y recientes
- [ ] Todas las entradas tienen imagenes destacadas y extractos
- [ ] Titulos SEO y meta descripciones en todas las entradas
- [ ] El formulario de contacto funciona
- [ ] Diseno adaptable a moviles
- [ ] Formulario de suscripcion al newsletter
- [ ] Enlaces internos entre entradas relacionadas
- [ ] Tipografia limpia y legible

---

## Desafios Extra

1. Anadir un widget de **"Entradas Populares"** en la barra lateral
2. Crear una **pagina 404 personalizada** con navegacion util
3. Anadir **cajas de biografia del autor** al final de cada entrada
4. Implementar una seccion de **entradas relacionadas** al final de cada entrada (plugin: "Related Posts for WordPress")
5. Anadir **botones para compartir en redes sociales** en las entradas (plugin: "Social Warfare" o "AddToAny")
6. Crear una pagina **"Empieza Aqui"** o **"Lo Mejor De"** enlazando a tus mejores entradas

---

## Criterios de Evaluacion

| Criterio | Verificacion |
|----------|--------------|
| Existen mas de 8 entradas de blog con formato adecuado | |
| Las categorias y etiquetas estan bien organizadas | |
| La pagina de inicio muestra contenido reciente/popular | |
| Las entradas son faciles de leer (tipografia, espaciado, encabezados) | |
| La navegacion incluye categorias | |
| Todas las entradas tienen imagenes destacadas | |
| El SEO esta configurado en todas las entradas | |
| Adaptable a moviles | |
| Existe formulario de suscripcion al newsletter | |
| Los enlaces internos conectan entradas relacionadas | |
