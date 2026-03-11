---
name: frontend-development
description: Guides the end-to-end development of modern, production-grade frontend web applications. Use when scaffolding apps, building UI components, or implementing striking web interfaces.
---

# Frontend Development Skill

When working on frontend application development, apply the following guidelines, structure, and instructions to ensure a distinctive, high-quality, and robust result. This skill combines structural best practices with exceptional design quality.

## When to use this skill

- Generating a new web application or frontend project from scratch.
- Building sophisticated UI components, pages, or complex layouts.
- Applying styling, aesthetics, or full visual makeovers to existing web interfaces.
- Defining a project's design system, frontend architecture, and interactivity.

## How to use it

Follow a progressive workflow: from planning the technical stack and aesthetic direction, to foundational styling, and finally component implementation and polish.

### 1. Technology Stack & Setup

- **Frameworks**: Identify the right tool for the job. Use standard HTML/JS/CSS, or frameworks like Next.js, Vite, or React depending on the user's explicit needs.
- **Scaffolding**: If generating a new project using CLI tools (like `npx create-vite`), use non-interactive mode. Always run with `--help` first to select the right flags, and use `-y` to auto-approve package installations.
- **Styling Approach**: Default to vanilla CSS and CSS variables for absolute control over the design system. Avoid utility-first frameworks (like TailwindCSS) unless explicitly requested.

### 2. Design Thinking & Aesthetics

Before coding, commit to a BOLD, unmistakable aesthetic direction. Avoid generic, cookie-cutter "AI" aesthetics at all costs.

- **Theme & Character**: Pick an intentional style (e.g., minimalist, brutalist, neo-morphism, retro-futuristic, editorial,Dark Neo-morphism). Implement it with precision. 
- **Typography**: Select beautiful, distinctive fonts (often from Google Fonts). Avoid overused defaults like Arial or standard sans-serifs. Pair a memorable display font with a highly legible body font.
- **Color Palettes**: Utilize curated, harmonious colors (prefer HSL values or hex codes). Dominant baseline colors with stark, vibrant accents perform better than evenly distributed, timid palettes. Create robust dark modes.
- **Spatial Composition**: Use Flexbox and CSS Grid. Don't be afraid of generous negative space, deliberate density, asymmetry, or overlapping layers.

### 3. Implementation Workflow

Follow this systematic approach when building:

1. **Foundation**: Start by defining CSS variables (colors, typography, spacing) in a global style file (e.g., `index.css`). based on user requirements use tailwindcss.
2. **Structure**: Build semantic HTML outlining the Document Object Model (`<main>`, `<section>`, `<nav>`, `<aside>`). Ensure elements have unique and descriptive IDs.
3. **Componentization**: Build reusable components that strictly consume your established CSS variables. Do not use ad-hoc inline styles.
4. **Refinement**: Add contextual background details—like subtle gradient meshes, noise overlays, or geometric patterns—to create depth. 

### 4. Motion & Interactivity

The frontend interface must feel dynamic and alive:

- **Micro-interactions**: Implement smooth CSS transitions for hover, focus, and active states. 
- **Page Loads**: Orchestrate high-impact load sequences. Use `animation-delay` to stagger the entrance of different DOM elements, creating a sense of delight and polish.
- **Performance**: Ensure UI animations use GPU-accelerated properties (`transform`, `opacity`) for smooth 60fps rendering.

### 5. SEO & Accessibility Best Practices

Every frontend application must be structurally sound and accessible out of the box:
- Use standard HTML5 semantic elements.
- Ensure only one `<h1>` per page with a proper, logical heading hierarchy (`<h2>`, `<h3>`).
- Provide alternative text (`alt`) on all images.
- Ensure keyboard navigability and clear focus rings for interactive elements.

## Review checklist

Before concluding the frontend development task, verify the result against these markers:

1. **Aesthetic Quality**: Is it visually striking? Does it avoid feeling like a generic template?
2. **Responsiveness**: Does the layout gracefully adapt from mobile viewports to ultra-wide desktop monitors?
3. **Code Cleanliness**: Are styles centralized and component-driven? 
4. **Interactivity**: Has motion been applied to make the UI feel engaging?
