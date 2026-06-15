# CV - Enzo Andrea Asplanatti

Repositorio con CV profesional en HTML, CSS y JavaScript, preparado para:

- visualizar en navegador;
- alternar entre español e inglés;
- exportar a PDF en formato A4;
- publicar como GitHub Pages;
- editar contenido técnico de forma simple.

## Estructura

```txt
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

## Cómo abrirlo localmente

Opción simple: abrir `index.html` directamente en el navegador.

Opción recomendada con servidor local:

```bash
npx serve .
```

Después entrar a la URL local que indique la terminal.

## Exportar a PDF

1. Abrir el CV en el navegador.
2. Elegir idioma con el botón `EN` / `ES`.
3. Presionar `Exportar PDF` o usar `Ctrl + P`.
4. Elegir destino `Guardar como PDF`.
5. Configurar:
   - Tamaño: A4
   - Márgenes: Ninguno o predeterminados mínimos
   - Escala: 100%
   - Gráficos de fondo: Activado

## Publicar en GitHub Pages

1. Subir este proyecto a un repositorio de GitHub.
2. Ir a `Settings` → `Pages`.
3. En `Build and deployment`, seleccionar:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
4. Guardar.

GitHub va a generar una URL pública para ver el CV online.

## Datos pendientes de ajustar

- Reemplazar `LinkedIn: Enzo Asplanatti` por el link exacto del perfil.
- Confirmar el nombre exacto del título intermedio universitario.
- Agregar URL real de GitHub si se quiere usar como enlace clickeable.
- Agregar portfolio cuando esté creado.

## Recomendación

Para postulaciones ATS muy estrictas, conviene tener también una versión simple en PDF/Word sin diseño complejo. Para enviar por LinkedIn, email o portfolio, esta versión visual es más fuerte.
