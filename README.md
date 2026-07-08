# Portfolio React + GSAP + React Bits Style

Website portfolio pribadi modern, interaktif, responsif, dan siap dikembangkan.

## Stack

- React.js + Vite
- GSAP + @gsap/react
- CSS modern
- Komponen interaktif bergaya React Bits:
  - `Aurora`
  - `SpotlightCard`
  - `MagnetButton`

> Catatan: React Bits pada umumnya dipakai dengan cara copy-paste component atau install per component lewat shadcn/jsrepo. Di project ini, efek interaktif dibuat sebagai komponen lokal agar langsung bisa jalan setelah `npm install`.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka URL yang muncul di terminal, biasanya:

```bash
http://localhost:5173
```

## Build Production

```bash
npm run build
npm run preview
```

## Struktur Folder

```bash
portfolio-react-gsap-reactbits/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Experience.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── Projects.jsx
    │   └── Skills.jsx
    ├── data/
    │   └── portfolio.js
    ├── hooks/
    │   └── useSectionReveal.js
    └── react-bits/
        ├── Aurora.jsx
        ├── MagnetButton.jsx
        └── SpotlightCard.jsx
```

## Kustomisasi Cepat

Edit data portfolio di:

```bash
src/data/portfolio.js
```

Ganti nama, headline, daftar skill, project, experience, dan social media sesuai kebutuhan.
