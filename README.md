# HISHOT 2026 - ORBIT

![HISHOT 2026](public/logo/LOGOHISHOT.svg)

## About HISHOT 2026

HISHOT 2026 is an annual event organized by HIMTI BINUS University that focuses on **Cloud Technology and Digital Infrastructure**. With the theme “ **ORBIT: Optimizing Resource for Building Infrastructure and Technology**”, HISHOT 2026 features a series of seminars, workshops, and study tours, offering both onsite and online experiences.

This website serves as the main platform for participants to learn about the events, register, and access important information about HISHOT 2026.

## Getting Started

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd Hishot
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open your browser and navigate to the local server address (typically `http://localhost:5173`)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with hot reload.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Preview the production build locally.

### `npm run lint`

Runs ESLint to check code quality and identify issues.

## Project Structure

```
HISHOT-2026/
├── .github/
│   └── workflows/
│       ├── deploy-pipeline.yml
│       └── deploy-vps.yml
├── public/
│   ├── Icons/              # Kumpulan gambar dan ikon hiasan
│   ├── logo/               # Logo BINUS, HIMTI, dan HISHOT
│   ├── Speaker/            # Foto pembicara
│   └── Sponsor/            # Logo sponsor
├── src/
│   ├── components/         # Komponen UI React
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── HishotFAQ.jsx
│   │   ├── HiShotHero.jsx
│   │   ├── SecureOpportunity.jsx
│   │   ├── SpecialThanks.jsx
│   │   └── trailer.jsx
│   ├── App.css
│   ├── App.jsx             # Komponen utama aplikasi
│   ├── index.css
│   └── main.jsx            # Entry point aplikasi
├── Dockerfile             
├── eslint.config.js
├── index.html
├── nginx.conf              
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js      # Konfigurasi Tailwind CSS
└── vite.config.js          # Konfigurasi Vite

```

---


For more information, visit our website or follow our social media channels.

<p>
  <a href="https://instagram.com/hishot_2026">
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" width="30" height="30" align="center" style="filter: invert(1);" />
  </a>
  <span> : hishot_2026</span>
</p>

<p>
  <a href="https://hishot.himtibinus.or.id/">
    <img src="public/logo/LOGOHISHOT.svg" width="30" height="30" align="center" />
  </a>
  <span> : Hishot 2026</span>
</p>