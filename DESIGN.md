---
name: Technical Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  grid-gutter: 24px
  grid-margin: 40px
  container-max: 1280px
---

## Brand & Style
The design system is engineered for a high-end, developer-centric portfolio. It balances technical rigor with a sophisticated aesthetic, prioritizing clarity, performance, and a "code-first" visual language. 

The style is **Modern Corporate** with **Glassmorphism** accents. It utilizes deep, layered backgrounds to create a sense of digital depth, while crisp edges and monospaced accents provide a professional, tool-like feel. The atmosphere is quiet and focused, punctuated by vibrant, high-energy interactive elements that signal innovation and mastery of the craft.

## Colors
The palette is built on a foundation of "Deep Space" neutrals—extremely dark slates and charcoals that reduce eye strain and provide a canvas for vibrant technical accents.

- **Primary (Electric Indigo):** Used for primary actions, active navigation states, and key highlights. It represents energy and the "electric" nature of modern frontend logic.
- **Secondary (Mint Green):** Reserved for success states, secondary metrics, and terminal-style labels. It provides a technical, "read-out" aesthetic.
- **Neutral/Surface:** A range of slates (from `#0F172A` to `#334155`) used to create structural hierarchy and card containers.
- **Accents:** Use low-opacity versions of the Primary and Secondary colors for background glows and subtle glassmorphic tints.

## Typography
Typography is the core of this design system's identity. **Geist** provides a geometric, sans-serif foundation for high readability and a modern "Vercel-adjacent" tech feel. **JetBrains Mono** is introduced for all metadata, technical specs, and code-like snippets to reinforce the developer persona.

- **Scale:** Use tight tracking on large headlines to create a high-fashion, editorial impact.
- **Contrast:** Combine large, bold Geist headlines with small, uppercase JetBrains Mono labels to create a clear informational hierarchy.
- **Technicality:** Whenever numerical data or technical specs are shown, always default to the label-code style.

## Layout & Spacing
The system utilizes a strict **12-column fluid grid** for desktop and a **4-column grid** for mobile. Precision is paramount; all spacing should be a multiple of the 8px base unit.

- **Margins:** Generous outer margins (40px+) ensure the content feels premium and uncrowded.
- **Grouping:** Use narrow gutters (24px) for related components to create tight, functional clusters (like tech-stack chips).
- **Breathing Room:** Large vertical gaps (160px) between major sections (Intro, Projects, Experience) signify a confidence in the work and allow the user to digest one concept at a time.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Minimalist Glassmorphism** rather than traditional shadows.

1.  **Base Layer:** The darkest shade (`#020617`), representing the canvas.
2.  **Surface Layer:** (`#0F172A`) for standard cards and containers.
3.  **Elevated/Overlay Layer:** (`#1E293B` at 80% opacity) with a 12px backdrop blur. This is used for navigation bars and modal overlays.
4.  **Accents:** Use 1px "ghost borders" (Slate at 20% opacity) to define shapes without adding visual weight. On hover, these borders should transition to the Primary Indigo color.

## Shapes
The shape language is "Soft-Technical." Low-radius corners (4px to 8px) are used to maintain a crisp, professional appearance that mimics the UI of an IDE or a high-end dashboard.

- **Standard Elements:** Buttons and inputs use the base 4px radius (`rounded`).
- **Cards:** Project and experience cards use an 8px radius (`rounded-lg`) to differentiate larger content containers.
- **Interactive:** Interactive chips or status indicators can utilize the 12px radius (`rounded-xl`) to feel more like tactile, pill-shaped objects.

## Components
Consistent styling across technical components reinforces the "Senior Developer" expertise.

- **Buttons:** 
  - *Primary:* Solid Indigo with white Geist Medium text. 
  - *Ghost:* 1px Slate border, JetBrains Mono text, Primary border on hover.
- **Code Cards:** Use a dark slate background with a 1px top-border gradient (Indigo to Mint). Add a "window control" trio (three small dots) in the top-left to mimic a terminal window.
- **Tech Chips:** Small, monospaced labels with a subtle secondary (Mint) background at 10% opacity and a 1px Mint border.
- **Input Fields:** Flat, dark background with a 1px border. Focus state should trigger a subtle Indigo outer glow and the border color change.
- **Navigation:** A fixed-top "Glass" bar. Links should be in JetBrains Mono, using a simple opacity change (0.6 to 1.0) for hover states.
- **Lists:** Experience lists should use a vertical "trace line" in Indigo that connects chronological nodes, evoking the feel of a Git graph.