# Especificación de Requerimientos Técnicos y Funcionales: Sitio Web Pinturerías MultiColor

Este documento define las pautas de diseño, la estructura de la información y las funcionalidades de la nueva Landing Page institucional para **Pinturerías MultiColor**. El objetivo es brindar una vitrina digital informativa y herramientas de estimación sin gestión de stock nativa.

---

## 1. Lineamientos de Diseño y UI (Interfaz de Usuario)

*   **Fondo General:** 100% Blanco (`#FFFFFF`) en todas las secciones para lograr un estilo ultra limpio, minimalista y moderno.
*   **Acentos de Color:** Uso sutil de la paleta de colores oficial del logotipo de MultiColor aplicado exclusivamente en:
    *   Botones de acción (CTAs).
    *   Iconos informativos.
    *   Bordes de tarjetas y destacados de títulos.
*   **Navegación:** Estructura *Single Page* (Landing Page única) con menú superior de anclajes dinámicos y scroll suave (*smooth scroll*). No cuenta con buscador de productos general interno.
*   **Acceso al Catálogo Externo:** Se debe implementar un botón flotante y un acceso muy destacado en la cabecera (Header) con el texto: **"Visitar nuestro Catálogo Completo"**, el cual redirigirá al catálogo online externo que ya posee la empresa con su respectivo buscador y stock.

---

## 2. Estructura de Secciones (De arriba a abajo)

### Sección 1: Portada (Hero)
*   **Contenido:** Imagen limpia de presentación, propuesta de valor institucional.
*   **Acción:** Botón que desplaza al usuario hacia los rubros comerciales.

### Sección 2: Carrusel de Marcas Distribuidas
*   **Componente:** Faja horizontal interactiva de desplazamiento continuo infinito (modo *loop* automático).
*   **Contenido:** Logotipos de marcas líderes aliadas (ej. Sherwin-Williams, etc.).

### Sección 3: Catálogo Visual de Grandes Rubros
Muestra estática de las tres líneas comerciales principales de la empresa. Cada una funcionará como muestra visual informativa (sin botones individuales por producto):
1.  **Línea Hogar y Obra:** Pinturas, látex, impermeabilizantes y acabados.
2.  **Construcción en Seco:** Placas de yeso estándar, perfiles, masillas y fijaciones.
3.  **PVC:** Tablas alveolares y molduras de terminación.

### Sección 4: Promociones y Beneficios
*   **Financiaciones:** Espacio visual tipo grilla para destacar planes de cuotas, bancos adheridos y tarjetas de crédito locales.
*   **Ofertas Vigentes:** Tarjetas con las promociones y combos del mes (precios u ofertas por tiempo limitado).

### Sección 5: Módulo de Cálculo Profesional Unificado (Pintura, Durlock y PVC)
Interfaz interactiva dividida por pestañas (*Tabs*) que hereda la lógica matemática del sistema del cliente:

*   **Pestaña 1: Cálculo de Pintura (Línea Hogar)**
    *   *Inputs:* Ancho de la pared/ambiente (m) y Largo/Alto (m).
    *   *Lógica:* Calcular los metros cuadrados ($m^2$). Aplicar una regla estándar de rendimiento donde **1 Litro rinde entre 10 y 12 $m^2$ por mano**, calculando por defecto **2 manos de pintura**.
*   **Pestaña 2: Construcción en Seco (Durlock)**
    *   *Inputs (según archivo base):* Ancho y Largo de la habitación. Selector de Tipo de Aplicación (Cieloraso, Revestimiento, Tabique Simple, etc.).
    *   *Lógica:* Derivación automática de superficie y perímetro para aplicar los coeficientes configurados para placas (1.2x2.4m o desmontables 0.61x0.61m), perfiles (soleras/montantes de 2.6m), masilla, cinta y tornillos.
*   **Pestaña 3: Revestimientos en PVC**
    *   *Inputs (según archivo base):* Ancho y Largo de la habitación. Selector de Ancho de Placa PVC (200mm / 250mm) y Sentido de Colocación (Auto-optimizar, Paralelo al Ancho, Paralelo al Largo).
    *   *Lógica:* Cálculo de tablas enteras, molduras perimetrales (F, U) y perfiles de soporte galvanizados.

*   **Acción Comercial de la Calculadora (WhatsApp Inteligente):**
    Una vez que la calculadora genera el "Listado de Materiales" (sea de pintura o de construcción), se habilitará un selector de sucursal. Al hacer clic en **"Enviar listado para cotización"**, la web compilará el resultado en un texto automático para enviar por WhatsApp.
    *   *Ejemplo de mensaje:* `"Hola MultiColor, calculé mis materiales en la web para un ambiente de 4m x 3.5m. Necesito cotización para la sucursal de [Santiago/La Banda] de lo siguiente: 5 Litros de Látex, 6 Placas de Yeso, 8 Montantes..."`

### Sección 6: Feed de Instagram Automatizado
*   **Componente:** Integración mediante un Widget externo optimizado.
*   **Funcionalidad:** Renderizar en formato cuadrícula las últimas publicaciones del perfil de Instagram de MultiColor. Debe actualizarse de forma automática cada vez que se suba nuevo contenido a la red social.

### Sección 7: Red de Sucursales y Enrutamiento Inteligente
Fichas de contacto bien diferenciadas para evitar confusiones de mostrador:
*   **Sucursal Santiago del Estero:** Dirección física (Av. Rivadavia), mapa de Google Maps embebido, horarios y botón directo a su propio WhatsApp.
*   **Sucursal La Banda:** Dirección física (Calle Bolivia), mapa de Google Maps embebido, horarios y botón directo a su propio WhatsApp.

---

## 3. Requerimientos Técnicos del Módulo Calculador (Herencia de Código)

El desarrollador frontend deberá reutilizar y adaptar el comportamiento del formulario HTML provisto:
*   `name="system"` (radios para intercambiar vistas entre `durlock` y `pvc`).
*   `id="project-type"` (selector dinámico de la aplicación).
*   Estructura de contenedores `#durlock-inputs` y `#pvc-inputs` con alternancia de clases `.hidden`.
*   Conservar el esquema de la tabla de resultados (`class="results-table-header"`) mostrando: *Material*, *Cálculo Preciso* y *Cantidad Sugerida de Compra (Redondeo Comercial)*.