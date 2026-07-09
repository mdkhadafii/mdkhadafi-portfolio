# Portfolio React + GSAP + React Bits Style

Website portfolio pribadi modern, interaktif, responsif, dan siap dikembangkan.

## Stack

- React.js + Vite
- GSAP + @gsap/react
- CSS modern
- Komponen interaktif bergaya React Bits:
  - `BlobCursor`
  - `LogoLoop`
  - `MagnetButton`
  - `PixelBlast`
  - `ProfileCard`
  - `ProfileMotionCard`
  - `SplitRevealText`
  - `SpotlightCard`
  - `TypingText`

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

## Contact Form

Form contact memakai Netlify Forms. Submission bisa dilihat di dashboard Netlify pada menu Forms.

Kalau ingin pesan juga masuk ke inbox email, buka dashboard Netlify, pilih site ini, lalu aktifkan email notification untuk form `contact`.

## Struktur Folder

```bash
portfolio-react-gsap-reactbits/
|-- index.html
|-- package.json
|-- README.md
`-- src/
    |-- App.jsx
    |-- main.jsx
    |-- styles.css
    |-- assets/
    |   |-- profile/
    |   `-- tech/
    |-- components/
    |   |-- common/
    |   |   |-- Preloader.jsx
    |   |   `-- index.js
    |   |-- layout/
    |   |   |-- Footer.jsx
    |   |   |-- Navbar.jsx
    |   |   `-- index.js
    |   |-- react-bits/
    |   |   |-- BlobCursor.jsx
    |   |   |-- LogoLoop.jsx
    |   |   |-- MagnetButton.jsx
    |   |   |-- PixelBlast.jsx
    |   |   |-- ProfileCard.jsx
    |   |   |-- SpotlightCard.jsx
    |   |   `-- index.js
    |   `-- sections/
    |       |-- About.jsx
    |       |-- Contact.jsx
    |       |-- Experience.jsx
    |       |-- Hero.jsx
    |       |-- Projects.jsx
    |       |-- Skills.jsx
    |       |-- StackLoop.jsx
    |       `-- index.js
    |-- features/
    |   `-- portfolio/
    |       |-- data/
    |       |   `-- portfolio.js
    |       `-- index.js
    `-- hooks/
        `-- useSectionReveal.js
```

## Panduan Maintenance

- `components/layout`: komponen layout global seperti navbar dan footer.
- `components/sections`: section utama halaman portfolio.
- `components/common`: komponen umum yang tidak spesifik ke section.
- `components/react-bits`: komponen efek/interaksi reusable.
- `features/portfolio`: data dan logic khusus portfolio.
- `assets/profile`: tempat menyimpan foto profil.
- `assets/tech`: logo tech stack.

## Kustomisasi Cepat

Edit data portfolio di:

```bash
src/features/portfolio/data/portfolio.js
```

Ganti nama, headline, daftar skill, project, experience, social media, dan foto profil sesuai kebutuhan.
