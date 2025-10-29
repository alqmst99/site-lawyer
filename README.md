# Law Firm Website – Practice Areas Carousel

Este proyecto es parte de un sitio web institucional para un estudio jurídico.  
Incluye un **carrusel infinito de áreas de práctica**, desarrollado con **HTML, TailwindCSS y JavaScript puro**, optimizado para **rendimiento, diseño responsivo y animaciones fluidas**.

---

## Estructura del proyecto

├── assets/
│ ├── image/
│ │ ├── practice-1.png
│ │ ├── practice-2.png
│ │ ├── practice-3.png
│ │ └── practice-4.png
├── css/
│ └── style.css
├── index.html
└── README.md

yaml
Copiar código

---

## Características principales

- **Carrusel infinito** con duplicación de imágenes para lograr un bucle sin fin.
- **Animación fluida** usando `@keyframes scrollCarousel` y `transform: translateX()`.
- **Diseño adaptativo (responsive)** mediante clases de Tailwind (`lg`, `md`, etc.).
- **Efecto hover** para mostrar el nombre de la especialización sobre cada imagen.
- **Optimización visual** para pantallas grandes y medianas.
- Código simple, limpio y escalable para añadir nuevas áreas o imágenes.

---

## Tecnologías utilizadas

- HTML5  
- TailwindCSS  
- JavaScript (vanilla)  
- CSS3 Animations

---

## Cómo ejecutar el proyecto

1. Cloná este repositorio:
   ```bash
   git clone https://github.com/tuusuario/nombre-del-repo.git
Entrá al directorio del proyecto:

bash
Copiar código
cd nombre-del-repo
Abrí el archivo index.html en tu navegador o servilo localmente con:

bash
Copiar código
npx serve
(o usá la extensión “Live Server” de VS Code).

## Personalización
Para cambiar los nombres de las especializaciones, editá el texto dentro de cada contenedor de imagen en el index.html.

Si querés ajustar la velocidad del carrusel, modificá la duración de la animación:

css
Copiar código
.carousel-track {
    animation: scrollCarousel 30s linear infinite;
}
Si querés un desplazamiento perfectamente continuo, duplicá exactamente las mismas imágenes en el orden original.

##  Autor
Nahuel Pierini
Desarrollador Web Fullstack – FStail Solution

## Licencia
Este proyecto está bajo la licencia MIT.
Podés usarlo, modificarlo y distribuirlo libremente, siempre citando la fuente.

## Notas adicionales
Asegurate de optimizar tus imágenes antes de subirlas al repositorio.

El carrusel fue diseñado para mantener FPS estables en dispositivos móviles.

Evitá usar librerías externas para animación, el efecto está hecho 100% en CSS.
