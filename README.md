# SRM Innovations Hub

A modern React + TypeScript marketing website built with Vite, Tailwind CSS, and TanStack Start Router for server-side rendering and route-based pages.

## Overview

This repository contains a landing page website for SRM Innovations Hub. It uses:

- React 19 with TypeScript
- Vite for local development and production builds
- Tailwind CSS v4 for styling
- TanStack React Router for file-based routing
- TanStack Start + Nitro for server entry and Vercel deployment
- Radix UI wrappers and reusable UI primitives in `src/components/ui`

## Quick Start

```bash
npm install
npm run dev
```

### Build & Preview

```bash
npm run build
npm run preview
```

### Code quality

```bash
npm run lint
npm run format
```

## Project Structure

```text
.
├── bunfig.toml
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
├── public/
│   ├── robots.txt
│   ├── site.webmanifest
│   └── sitemap.xml
└── src/
    ├── assets/
    │   ├── AnimatedVideoBackground.tsx
    │   ├── CanvasParticles.tsx
    │   └── ...
    ├── components/
    │   ├── site/
    │   │   ├── CaseStudies.tsx
    │   │   ├── Contact.tsx
    │   │   ├── Ecosystem.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Founder.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Home.tsx
    │   │   ├── Mobile.tsx
    │   │   ├── Nav.tsx
    │   │   ├── Process.tsx
    │   │   ├── Products.tsx
    │   │   ├── Services.tsx
    │   │   ├── TechStack.tsx
    │   │   ├── Testimonials.tsx
    │   │   ├── Why.tsx
    │   │   ├── WorkflowShowcase.tsx
    │   │   └── navigation/
    │   │       ├── ProductMegaMenu.tsx
    │   │       ├── ServiceMegaMenu.tsx
    │   │       ├── product-data.ts
    │   │       └── service-data.ts
    │   └── ui/
    │       ├── accordion.tsx
    │       ├── alert-dialog.tsx
    │       ├── alert.tsx
    │       ├── aspect-ratio.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── breadcrumb.tsx
    │       ├── button.tsx
    │       ├── calendar.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── chart.tsx
    │       ├── checkbox.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── context-menu.tsx
    │       ├── dialog.tsx
    │       ├── drawer.tsx
    │       ├── dropdown-menu.tsx
    │       ├── hover-card.tsx
    │       ├── input-otp.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── navigation-menu.tsx
    │       ├── pagination.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── radio-group.tsx
    │       ├── resizable.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── slider.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toggle-group.tsx
    │       ├── toggle.tsx
    │       ├── tooltip.tsx
    │       └── ...
    ├── hooks/
    │   └── use-mobile.tsx
    ├── lib/
    │   ├── api/
    │   │   └── example.functions.ts
    │   ├── config.server.ts
    │   ├── error-capture.ts
    │   ├── error-page.ts
    │   ├── lovable-error-reporting.ts
    │   └── utils.ts
    ├── routes/
    │   ├── __root.tsx
    │   ├── about.tsx
    │   ├── case-studies.tsx
    │   ├── contact.tsx
    │   ├── cookie-policy.tsx
    │   ├── founders.tsx
    │   ├── index.tsx
    │   ├── privacy-policy.tsx
    │   ├── refund-policy.tsx
    │   ├── security-policy.tsx
    │   ├── terms-and-conditions.tsx
    │   ├── products/
    │   │   ├── auto-dealer-erp.tsx
    │   │   ├── crm.tsx
    │   │   ├── hrms.tsx
    │   │   └── wholesale-commerce.tsx
    │   └── services/
    │       ├── business-automation.tsx
    │       ├── custom-software.tsx
    │       ├── mobile-app-development.tsx
    │       ├── saas-development.tsx
    │       └── web-development.tsx
    ├── router.tsx
    ├── routeTree.gen.ts
    ├── server.ts
    ├── start.ts
    └── styles.css
```

## Folder Responsibilities

### Root files

- `package.json` - dependency and script definitions.
- `tsconfig.json` - TypeScript compiler settings and path alias `@/*` for `src/*`.
- `vite.config.ts` - Vite + Nitro configuration, including the TanStack Start server entry for Vercel.
- `vercel.json` - Vercel deployment settings.
- `bunfig.toml` - optional Bun runtime configuration for local/CI environments.
- `public/` - static assets delivered directly by Vite and Vercel.

### `src/routes/`

- `__root.tsx` - application shell. It defines global HTML `<head>` metadata, the root layout, error and 404 handling, and renders nested routes via `<Outlet />`.
- `index.tsx` - homepage route (`/`). It composes the landing page using site section components.
- Other route files under `src/routes/` map directly to URLs.
  - Example: `src/routes/about.tsx` → `/about`
  - Example: `src/routes/products/crm.tsx` → `/products/crm`
- `routeTree.gen.ts` is an auto-generated route registry for TanStack Router. Do not edit it.

### `src/components/site/`

This folder contains page sections and page-specific components used on the home page and top-level pages.

- `Nav.tsx` - main navigation bar shared across pages.
- `Footer.tsx` - site footer.
- `Hero.tsx`, `Ecosystem.tsx`, `Products.tsx`, `WorkflowShowcase.tsx`, `Mobile.tsx`, `Services.tsx`, `TechStack.tsx`, `Process.tsx`, `Why.tsx`, `Founder.tsx`, `CaseStudies.tsx`, `Testimonials.tsx`, `Contact.tsx` - homepage sections.
- `navigation/` contains the mega menu data and layout components used by navigation.

### `src/components/ui/`

Reusable UI primitives and Radix wrapper components. These components power form controls, navigation, dialogs, buttons, and layout patterns used across the application.

### `src/lib/`

Utility and server support code:

- `config.server.ts` - server-side configuration values.
- `error-capture.ts` - captures runtime errors for SSR.
- `error-page.ts` - renders the static error screen for server failures.
- `lovable-error-reporting.ts` - custom error reporting integration.
- `utils.ts` - shared helper utilities.
- `api/example.functions.ts` - example backend function API.

### `src/server.ts`

Main server entry file for Vercel. It loads the TanStack React Start server entry and handles uncaught SSR failures.

### `src/start.ts`

Creates the TanStack Start instance with request middleware, including a generic error-capture middleware used for production SSR.

### `src/router.tsx`

Configures the TanStack React Router instance.

- Creates a `QueryClient` for React Query.
- Uses `routeTree` from `src/routeTree.gen.ts`.
- Enables scroll restoration and route preloading.

## Routing

The application uses file-based routing through TanStack React Router. The route file names correspond directly to URL paths. Example mapping:

| Route file | URL path |
| --- | --- |
| `src/routes/index.tsx` | `/` |
| `src/routes/about.tsx` | `/about` |
| `src/routes/case-studies.tsx` | `/case-studies` |
| `src/routes/contact.tsx` | `/contact` |
| `src/routes/founders.tsx` | `/founders` |
| `src/routes/privacy-policy.tsx` | `/privacy-policy` |
| `src/routes/refund-policy.tsx` | `/refund-policy` |
| `src/routes/security-policy.tsx` | `/security-policy` |
| `src/routes/terms-and-conditions.tsx` | `/terms-and-conditions` |
| `src/routes/cookie-policy.tsx` | `/cookie-policy` |
| `src/routes/services/web-development.tsx` | `/services/web-development` |
| `src/routes/services/saas-development.tsx` | `/services/saas-development` |
| `src/routes/services/mobile-app-development.tsx` | `/services/mobile-app-development` |
| `src/routes/services/custom-software.tsx` | `/services/custom-software` |
| `src/routes/services/business-automation.tsx` | `/services/business-automation` |
| `src/routes/products/auto-dealer-erp.tsx` | `/products/auto-dealer-erp` |
| `src/routes/products/crm.tsx` | `/products/crm` |
| `src/routes/products/hrms.tsx` | `/products/hrms` |
| `src/routes/products/wholesale-commerce.tsx` | `/products/wholesale-commerce` |

## Component Connections

- `src/routes/index.tsx` imports site sections from `src/components/site/` and renders them inside the homepage layout.
- `src/routes/about.tsx` uses `Nav` and `Footer` from `src/components/site/`, plus shared UI components such as `Button` from `src/components/ui/button.tsx`.
- Navigation menus in `src/components/site/navigation` feed the primary header and route links.
- `src/components/ui/*` exports reusable wrappers around Tailwind and Radix UI controls, used by all route pages.

## Build and Deployment

This app is built with Vite and deployed with Vercel using a Nitro preset.

- `vite.config.ts` applies `@lovable.dev/vite-tanstack-config` and `nitro({ preset: 'vercel' })`.
- `src/server.ts` is the edge/server entry for SSR.
- `public/` assets are served as static files by Vercel.

## Notes

- `src/routeTree.gen.ts` is generated by TanStack Router. Do not modify directly.
- `src/routes/__root.tsx` is the global route shell and must preserve `<Outlet />` for nested page rendering.
- The TypeScript alias `@/*` resolves to `./src/*`.

## Recommended next steps

- Add new pages under `src/routes/` for new URLs.
- Add reusable pieces to `src/components/site/` or `src/components/ui/` when a component is shared across pages.
- Keep page-specific UI in `src/components/site/` and generic primitives in `src/components/ui/`.
