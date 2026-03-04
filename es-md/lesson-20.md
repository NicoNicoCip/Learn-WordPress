# Lección 20: Diseño Responsivo — Vistas Móvil y Tablet

## Objetivos
- Entender los principios del diseño responsivo
- Usar el modo de edición responsiva de Elementor
- Ajustar diseños, tipografía y espaciado para diferentes dispositivos
- Ocultar/mostrar elementos por dispositivo
- Probar y depurar problemas responsivos

---

## ¿Qué es el Diseño Responsivo?

El diseño responsivo significa que tu sitio web **se adapta para verse bien en todos los tamaños de pantalla** — escritorio, tablet y teléfono móvil. Más del 60% del tráfico web viene de dispositivos móviles, así que esto no es opcional.

### Breakpoints de Elementor

| Dispositivo | Ancho por Defecto |
|-------------|-------------------|
| Escritorio | 1025px y superior |
| Tablet | 768px - 1024px |
| Móvil | Hasta 767px |

Elementor te permite personalizar tu diseño para cada breakpoint de forma independiente.

---

## Cambiar Entre Vistas de Dispositivo

### En Elementor:
1. Haz clic en el **icono de modo responsivo** en la parte inferior del panel izquierdo (parece un monitor/dispositivo)
2. O presiona **Ctrl + Shift + M**
3. Elige **Desktop**, **Tablet** o **Mobile**

### Qué Cambia Por Dispositivo:
El canvas se redimensiona para mostrar cómo se ve tu página en ese dispositivo. Cuando estás en vista tablet o móvil:
- Un **icono de dispositivo** aparece junto a los ajustes que se pueden ajustar por dispositivo
- Los cambios que hagas en vista tablet/móvil **solo se aplican a ese tamaño de dispositivo**
- Los ajustes de escritorio son el valor por defecto — tablet y móvil heredan del escritorio a menos que se sobreescriban

---

## Cómo Elementor Gestiona la Responsividad

### Comportamiento Automático
Elementor gestiona muchas cosas automáticamente:
- Las **secciones de múltiples columnas** se apilan verticalmente en móvil (3 columnas se convierten en 3 filas)
- El **texto se reduce** ligeramente
- Las **imágenes se redimensionan** para ajustarse a la pantalla
- El **padding y los márgenes** permanecen a menos que los cambies

### Lo Que Necesitas Ajustar Manualmente
A pesar del comportamiento auto-responsivo, a menudo necesitarás ajustar:
- **Tamaños de fuente** — los encabezados de escritorio son demasiado grandes en móvil
- **Padding/márgenes** — el espaciado de escritorio suele ser demasiado generoso en móvil
- **Orden de columnas** — a veces quieres un orden de apilamiento diferente en móvil
- **Elementos ocultos** — algunos elementos no funcionan en móvil (imágenes decorativas grandes)
- **Tamaños de botón** — pueden necesitar ser de ancho completo en móvil

---

## Ajustar Tipografía Por Dispositivo

### El Icono de Dispositivo
Muchos ajustes de Elementor muestran un pequeño **icono de dispositivo** junto a ellos. Esto significa que el ajuste puede tener diferentes valores por dispositivo.

### Ejemplo: Tamaño de Encabezado Responsivo

1. Selecciona un widget Heading
2. Ve a **Style → Typography → Size**
3. Haz clic en el **icono de dispositivo** junto al campo Size
4. Establece diferentes tamaños:
   - **Escritorio**: 48px
   - **Tablet**: 36px
   - **Móvil**: 28px

### Tamaños de Fuente Recomendados:

| Elemento | Escritorio | Tablet | Móvil |
|----------|-----------|--------|-------|
| H1 | 42-52px | 32-40px | 28-34px |
| H2 | 32-40px | 26-32px | 24-28px |
| H3 | 24-30px | 20-26px | 18-22px |
| Texto body | 16-18px | 16px | 15-16px |
| Texto botón | 16px | 15px | 14-15px |

---

## Ajustar Espaciado Por Dispositivo

### Padding y Margin

1. Selecciona una sección, columna o widget
2. Ve a **Advanced → Margin** o **Advanced → Padding**
3. Haz clic en el **icono de dispositivo** para establecer diferentes valores por dispositivo

### Ejemplo: Padding de Sección
- **Escritorio**: 80px arriba y abajo
- **Tablet**: 60px arriba y abajo
- **Móvil**: 40px arriba y abajo

Esto evita que las secciones móviles tengan demasiado espacio vacío.

---

## Comportamiento de Columnas en Móvil

### Apilamiento por Defecto
Por defecto, las columnas en una sección de múltiples columnas **se apilan verticalmente** en móvil. Una sección de 3 columnas se convierte en:
```
Escritorio:  [Col 1] [Col 2] [Col 3]
Móvil:       [Col 1]
             [Col 2]
             [Col 3]
```

### Invertir Orden de Columnas
A veces quieres la imagen debajo del texto (o viceversa) en móvil:

1. Selecciona la **Sección**
2. Ve a la pestaña **Advanced**
3. Cambia a vista **Mobile**
4. Encuentra **"Reverse Columns"** → Establece a Yes

### Ajustar Ancho de Columna en Tablet
Las columnas pueden ser demasiado estrechas en tablet. Puedes ajustar:
1. Selecciona una columna
2. Cambia a vista **Tablet**
3. Ve a Content → **Column Width**
4. Establécelo a 50% (así 3 columnas se convierten en 2+1) o 100% (se apila como móvil)

---

## Ocultar/Mostrar Elementos Por Dispositivo

Algunos elementos funcionan en escritorio pero no en móvil (o viceversa):

### Para Ocultar un Elemento en Dispositivos Específicos:

1. Selecciona el elemento (sección, columna o widget)
2. Ve a la pestaña **Advanced**
3. Encuentra la sección **Responsive**
4. Activa **"Hide On Desktop"**, **"Hide On Tablet"** o **"Hide On Mobile"**

### Usos Comunes:
- **Ocultar imágenes decorativas en móvil** — ocupan espacio valioso
- **Mostrar un menú simplificado en móvil** — ocultar el mega menú de escritorio
- **Ocultar diseños complejos de múltiples columnas** y mostrar una versión móvil simplificada
- **Mostrar un botón "Llamar Ahora" solo en móvil** — los visitantes pueden tocar para llamar

### Ejemplo: Botón de Llamada Solo en Móvil
1. Crea un widget Button: "Toca para Llamar" con enlace `tel:+34912345678`
2. Ve a Advanced → Responsive → Hide on Desktop → Yes
3. El botón solo aparece en móvil

---

## Imágenes Responsivas

### Tamaño de Imágenes
Las imágenes se redimensionan automáticamente para ajustarse a su contenedor, pero podrías querer:
1. Seleccionar el widget Image
2. Cambiar a vista **Mobile**
3. Ajustar el **Width** (ej., 80% en vez de 100%)
4. Cambiar **Alignment** si es necesario

### Imágenes de Fondo
Para secciones con imágenes de fondo:
1. Selecciona la sección
2. Cambia a vista **Mobile**
3. Ve a Style → Background
4. Ajusta **Position** (prueba Center Center)
5. Ajusta **Size** (Cover normalmente funciona, pero prueba Custom si es necesario)
6. Considera usar una **imagen diferente para móvil** (una versión orientada verticalmente)

---

## Consideraciones Mobile-First

### Objetivos Táctiles
- Los botones deberían tener al menos **44px de alto** en móvil (directriz de Apple)
- Los enlaces deberían tener suficiente espaciado para que los dedos no toquen el equivocado
- Haz los botones de **ancho completo** en móvil cuando sea apropiado

### Prioridad de Contenido
- Pon el contenido más importante primero en móvil
- Elimina contenido secundario que satura la experiencia móvil
- Mantén los formularios simples — menos campos en móvil

### Navegación
- El menú hamburguesa (☰) es estándar en móvil
- Asegúrate de que los elementos del menú son tocables y legibles
- Considera reducir los elementos del menú en móvil

---

## Probar el Diseño Responsivo

### En Elementor:
1. Cambia entre vistas Desktop, Tablet y Mobile
2. Desplázate por toda la página en cada vista
3. Comprueba que nada se desborda, se superpone o se ve apretado

### En el Navegador (Más Preciso):
1. Guarda y publica tu página
2. Ábrela en Chrome
3. Presiona **F12** para abrir DevTools
4. Haz clic en el icono de **Toggle Device Toolbar** (o presiona **Ctrl + Shift + M**)
5. Selecciona diferentes dispositivos del desplegable (iPhone, iPad, etc.)
6. O arrastra los bordes del viewport para probar cualquier ancho

### Checklist Responsivo:
- [ ] Los encabezados son legibles en móvil (ni demasiado grandes, ni demasiado pequeños)
- [ ] El texto no se extiende más allá de los bordes de la pantalla
- [ ] Las imágenes se redimensionan y no se desbordan
- [ ] Los botones son lo suficientemente grandes para tocar
- [ ] El espaciado se ve proporcional en todos los dispositivos
- [ ] Los diseños de múltiples columnas se apilan limpiamente en móvil
- [ ] No hay scroll horizontal en móvil
- [ ] Los formularios son usables en móvil
- [ ] Los mapas se muestran correctamente

---

## Ejercicios

1. **Revisa tu página de inicio en móvil**: Cambia a vista móvil y desplázate por tu página de inicio. Anota todo lo que necesita arreglarse.

2. **Ajusta tamaños de encabezado**: Establece tipografía responsiva para todos tus encabezados — diferentes tamaños para escritorio, tablet y móvil.

3. **Arregla el padding de secciones**: Reduce el padding en móvil para todas las secciones (40px en vez de 80px).

4. **Oculta un elemento**: Encuentra un elemento decorativo en tu página de inicio y ocúltalo en móvil.

5. **Crea un elemento solo para móvil**: Crea un botón "Llamar Ahora" que solo aparezca en dispositivos móviles.

6. **Prueba en el navegador**: Usa Chrome DevTools para probar tus páginas en diferentes tamaños de dispositivo. Comprueba iPhone, iPad y un tamaño de teléfono Android pequeño.

7. **Arregla todos los problemas responsivos**: Revisa tu página de inicio, página Acerca de y página de Contacto en vista móvil y arregla cada problema que encuentres.

---

## Puntos Clave

- Más del 60% de los visitantes están en móvil — **el diseño responsivo es obligatorio**
- Elementor te permite establecer **diferentes valores por dispositivo** (haz clic en el icono de dispositivo)
- Las columnas **se apilan automáticamente** en móvil, pero puede que necesites ajustar
- **Reduce tamaños de fuente** y **espaciado** en móvil
- **Oculta elementos** que no funcionan en móvil (Advanced → Responsive)
- **Los botones deben ser amigables al toque** — al menos 44px de alto
- Prueba tanto en el **modo responsivo de Elementor COMO en Chrome DevTools**
- Correcciones comunes: encabezados más pequeños, menos padding, columnas apiladas, elementos decorativos ocultos

---

**Siguiente Módulo:** [Módulo 4 - Plugins Esenciales](lesson-21-understanding-plugins.md)
