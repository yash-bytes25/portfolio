# Yaswanth — Immersive 3D Developer Portfolio

A bespoke, scroll-driven 3D developer portfolio for **Yaswanth** (B.Tech Computer Science & Engineering, SRKR Engineering College). Designed with a **Chrome / Cinematic** visual identity, architectural negative space, and a persistent procedural 3D sculpture orchestrated by React Three Fiber and GSAP ScrollTrigger.

---

## 🏛️ Design & Engineering Direction

- **Aesthetic**: Chrome / Cinematic — Deep charcoal and pitch black (`#060608`), reflective liquid metal, razor-sharp studio specular rim lighting, and film grain overlay.
- **Avoided**: Generic purple gradients, excessive glassmorphism, floating skill bubbles, generic SaaS cards, and purposeless animations.
- **Editorial Typography**: Large scale architectural typography powered by **Syne**, **Space Grotesk**, and **JetBrains Mono**.
- **Persistent 3D Centerpiece**: A custom abstract gyroscopic metallic sculpture that morphs continuously across five distinct phases without re-mounting or re-rendering React DOM trees.

---

## 🌌 3D Sculpture Scroll Progression

1. **Section 1 — Introduction (Hero)**:
   - Unified abstract metallic sculpture rotating slowly with idle breathing motion.
   - Responds with subtle organic parallax to cursor movement.
2. **Section 2 — Engineering Journey**:
   - Sculpture tilts along its primary axis and **kinetically deconstructs/separates** into segmented orbital rings and an exposed internal geometric core.
3. **Section 3 — Selected Projects**:
   - Transforms into a structured architectural form that smoothly shifts position across project viewports to balance editorial case cards.
4. **Section 4 — Skills & Learning**:
   - Object develops a **technical holographic wireframe lattice** with glowing edge geometry, coordinate rings, and orbiting data shards.
5. **Section 5 — Contact**:
   - Resolves into a simplified, refined, continuous platinum loop resting calmly at the center.

---

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, Vite
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animation Engine**: GSAP, GSAP `ScrollTrigger`
- **Styling**: Tailwind CSS, PostCSS, Custom Chrome utilities
- **Icons**: Lucide React

---

## 📂 Project Architecture

```
├── public/
│   └── favicon.svg             # Custom metallic monogram favicon
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Scene.tsx          # Persistent full-screen R3F Canvas
│   │   │   ├── Sculpture.tsx      # Procedural multi-part chrome kinetic sculpture
│   │   │   ├── StudioLighting.tsx # Cinematic multi-point studio lighting & HDR probe
│   │   │   └── scrollState.ts     # Mutable state store for 60fps lerp without React re-renders
│   │   └── dom/
│   │       ├── Navbar.tsx         # Minimal editorial navbar with mobile navigation drawer
│   │       ├── HeroSection.tsx    # Hero section with large typography & core statement
│   │       ├── JourneySection.tsx # Engineering Journey, SRKR academic context & milestones
│   │       ├── ProjectsSection.tsx# KisanSetu (SIH), Inkloom AI, SafeCampus & Hackathons
│   │       ├── SkillsSection.tsx  # Domain-driven technical matrix & learning philosophy
│   │       ├── ContactSection.tsx # Direct transmission channel, email copy, GitHub, LinkedIn
│   │       └── GrainOverlay.tsx   # Film grain shader overlay & radial vignette
│   ├── data/
│   │   └── portfolioData.ts       # Accurate data for Yaswanth (strictly adhering to user facts)
│   ├── hooks/
│   │   └── useScrollExperience.ts # GSAP ScrollTrigger timeline orchestrator
│   ├── types/
│   │   └── index.ts               # Strict TypeScript interfaces
│   ├── App.tsx                    # Master layout composition
│   ├── index.css                  # Tailored chrome styling & hairline borders
│   └── main.tsx                   # React root entry
├── index.html                     # Preloaded Google Fonts (Syne, Space Grotesk, JetBrains Mono)
├── tailwind.config.js             # Chrome palette & typography config
├── tsconfig.json                  # Strict TypeScript configuration
└── package.json
```

---

## 🚀 Running Locally

### Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Production Build
```bash
npm run build
```
Generates production-optimized static assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

