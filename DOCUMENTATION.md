# Nexus Digital - Ultimate Technical & Functional Documentation

Nexus Digital is a high-performance, premium agency platform designed for high-end digital marketing and SaaS consulting. This documentation provides an exhaustive breakdown of every feature, component, and technical implementation within the application.

---

## 🚀 1. Installation & Deployment Guide

Follow these steps to set up the project in any standard Node.js environment.

### Prerequisites
- **Node.js**: v18.0.0 or higher.
- **npm**: v9.0.0 or higher (or equivalent yarn/pnpm).
- **Modern Browser**: Supports CSS Layering and ESModules.

### Local Setup
1. **Clone & Enter**:
   ```bash
   cd nexus-digital
   ```
2. **Dependency Installation**:
   Installs all core libraries including React 19, Motion, and Tailwind 4.
   ```bash
   npm install
   ```
3. **Execution**:
   ```bash
   npm run dev
   ```
   Access the local preview at `http://localhost:3000`.

### Production Lifecycle
1. **Compilation**:
   Optimizes code, strips types, and minifies assets.
   ```bash
   npm run build
   ```
2. **Verification**:
   Ensures the build has no type errors or broken imports.
   ```bash
   npm run lint
   ```

---

## 🏗 2. Core Architecture & Tech Stack

The application is built on a "Brutalist-Modernist" stack, prioritizing performance and extreme visual contrast.

### Framework: React 19 (Vite)
- **State Management**: Selective use of `useState` and `useEffect` for UI states (Navbar transparency, dropdowns).
- **Routing**: `react-router-dom` v7 handling 6 unique entry points.
- **Scroll Restoration**: A custom hook architecture in `App.tsx` that resets the viewport to top-of-page on every route change, overcoming standard SPA scroll persistence bugs.

### Styling: Tailwind CSS 4
- **Modern Pattern**: Uses the zero-config `@import "tailwindcss"` engine.
- **Theme Engine**: Defined via standard CSS variables in `index.css`, allowing for "Dark Mode" by default.
- **Utility First**: 100% of styling is handled via utility classes, removing the need for CSS-in-JS or external stylesheets.

---

## 📄 3. Exhaustive Page Guide

### 🏠 Home Page (`/src/pages/Home.tsx`)
*The primary landing experience.*
- **Hero Section**: Features a dual-action CTA. The "CONSULTATION" button links externally to Telegram, while "See Services" performs an internal smooth-route to the services page.
- **Stats Bar**: A visual data representation showing "250% Growth" and "500k+ Leads" to establish instant social proof.
- **Service Preview**: A subset of core features meant to tease deeper navigation.
- **Unified Testimonials**: Features a liquid background animation and a specific `id="testimonials"` for global anchor linking.

### 💼 Services Page (`/src/pages/ServicesPage.tsx`)
*The technical backbone.*
- **Data-Driven Cards**: All services (Digital Marketing, SaaS Strategy, AI & Automation) are mapped from a centralized array, ensuring design consistency.
- **Category System**: Each service is tagged with a "Category" label for user orientation.
- **Interactive Layers**: Hovering over any service triggers a `scale-105` transformation and opacity shift on the background image.

### 🛒 Ecommerce Page (`/src/pages/Ecommerce.tsx`)
*The niche-specific funnel.*
- **Focus Areas**: Dedicated sections for Inventory Management, Performance Marketing, and Conversion Rate Optimization (CRO).
- **High-Density UI**: Uses image-over-black layouts to maintain a premium feel.

### ✍️ Blog / Insights (`/src/pages/Blog.tsx`)
*The authority hub.*
- **Article Grid**: A responsive grid that adjusts from 1 to 2 columns based on screen width.
- **Post Metadata**: Displays Date, Author (Nexus Team/Admin), and calculated Read Time.
- **Category Badges**: Visual indicators (Design, Strategy, Consulting) for content filtering.

### 📞 Contact Page (`/src/pages/Contact.tsx`)
*The final conversion step.*
- **Refined Contact Info**: High-visibility email (`nexuspersonal168@gmail.com`) and Telegram links.
- **Geographic Branding**: "Based in Cambodia - Serving Clients Globally" reinforces the agency's remote-first but localized identity.

---

## 🧩 4. Component Deep-Dive

### Navbar (`Navbar.tsx`)
*The most complex functional component.*
- **Scroll Listener**: Monitors `window.scrollY`. The navbar transitions from transparent to a blur-black background (`bg-black/90`) once the user scrolls past 20px.
- **Stateful Dropdowns**: Manages `activeDropdown` state to show/hide "Services" and "Company" menus on hover (Desktop) or click (Mobile).
- **Mobile Overlay**: A full-screen `motion.div` menu with staggered link animations for a high-end feel on smaller devices.

### Hero (`Hero.tsx`)
*Re-usable high-impact layout.*
- **Functional CTA**: Includes internal `Link` components from `react-router-dom` to ensure zero-latency navigation.
- **Motion Stagger**: Text elements use `initial={{ opacity: 0, y: 20 }}` to animate into view sequentially.

### Testimonials (`Testimonials.tsx`)
- **Liquid FX**: Uses a custom `motion.div` with a high-blur filter to create a moving "lava lamp" effect behind client quotes.
- **Global Anchor**: This component is the target for all "Clients" links site-wide.

---

## 🎨 5. Design & Interaction System

### Visual Identity
- **Primary Color**: Red-600 (`#DC2626`) - Used for high-priority CTA buttons and active link indicator.
- **Secondary Color**: White at 40% opacity - Used for secondary text to create visual depth.
- **Background**: Hex `#050505` (Custom deep black) for 100% OLED contrast.

### Interaction Patterns
- **Standard Button**: 100% width on mobile, auto-width on desktop.
- **Hover States**: Every interactive card uses a `transition-all duration-300` to smoothly shift borders and background colors.
- **Typography**: Uses extreme font weights (Black/900) for headers and tight letter spacing (`tracking-widest`) for navigation.

---

## 🔧 6. Maintenance & Customization

### Updating Global CTA
To update the Telegram link across the entire platform:
1. Open `Navbar.tsx` and find the `href="https://t.me/DanLP18"` link.
2. Open `Hero.tsx` and `Contact.tsx`, updating the same URL.

### Adding a New Service
1. Locate the `serviceList` array in `ServicesPage.tsx`.
2. Add a new object with `title`, `desc`, `icon`, and `category`. The UI will automatically generate a new card.

### Changing Theme Colors
1. Modify `src/index.css`.
2. Replace Tailwind utility instances of `red-600` with your new brand color (e.g., `blue-600`) using a global search and replace.

---

## 📈 7. Performance Optimization
- **Image Referrer**: All external images use `referrerPolicy="no-referrer"` to prevent block-listing.
- **Lucide Icons**: Tree-shaken icons to ensure only the necessary SVGs are included in the final bundle.
- **Motion Layouts**: Hardware-accelerated animations using CSS transforms instead of layout-shifting properties.
