# Soltar para Renacer 2027 — Landing Page

Landing page del retiro holístico **"Soltar para Renacer 2027"** (Posada Bagbazindio, Todasana, La Guaira — 4, 5 y 6 de diciembre de 2026).

## Tecnologías

- **Vite 8** — servidor de desarrollo y build
- **React 19 + TypeScript** — interfaz
- **Tailwind CSS 4** — estilos
- **motion** — animaciones · **lucide-react** — íconos

## Requisitos

- [Node.js](https://nodejs.org) 20 o superior

## Ejecutar en local (modo desarrollo)

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Generar la versión estática (HTML/CSS/JS)

```bash
npm run build
```

El resultado queda en la carpeta `dist/`: **HTML plano listo para cualquier hosting** (GitHub Pages, XAMPP, Netlify, etc.). Las rutas son relativas, así que funciona también dentro de subcarpetas.

Para previsualizar el build en local:

```bash
npm run preview
```

O copia el contenido de `dist/` a la carpeta `htdocs` de XAMPP y ábrelo desde `http://localhost/...`.

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub (rama `main`).
2. En el repositorio: **Settings → Pages → Source → GitHub Actions**.
3. El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) compila y publica automáticamente en cada push a `main`.

## Estructura

```
├── index.html              # Punto de entrada (lo procesa Vite)
├── public/assets/aistudio/ # Logos e imágenes estáticas
├── src/
│   ├── App.tsx             # Composición de la landing
│   ├── components/         # Secciones (Hero, Planes, FAQ, etc.)
│   ├── data/retreatData.ts # Contenido y rutas de imágenes
│   └── assets/images/      # Fotos del retiro
└── vite.config.ts
```
