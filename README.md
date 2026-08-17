# WebResume

A responsive, data-driven portfolio and resume site for Cooper Motyer. It presents professional experience, selected projects, and a short personal profile through a small React single-page application.

[View the live site](https://cjmot.github.io/WebResume/)

## Highlights

- Dedicated pages for the profile, experience, and project portfolio
- Detail routes generated from typed experience and project data
- Featured content surfaced automatically on the home page
- Responsive navigation and layouts for mobile and desktop
- Static production build suitable for Cloudflare Pages
- Automated deployment from the `main` branch with GitHub Actions

## Built with

- [React](https://react.dev/) and [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 22 or newer
- npm (included with Node.js)

### Run locally

```bash
git clone https://github.com/cjmot/WebResume.git
cd WebResume
npm ci
npm run dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000. |
| `npm run build` | Type-check the application and create a production build in `dist/`. |
| `npm run lint` | Check TypeScript and React files with ESLint. |
| `npm run preview` | Serve the production build locally for a final review. |

## Project structure

```text
src/
├── components/         # Shared navigation and detail views
├── data/               # Profile, experience, and project content
├── routes/             # Top-level pages
├── App.tsx             # Router and generated detail routes
├── index.css           # Tailwind layers and global styles
├── main.tsx            # Application entry point
└── types.ts            # Shared content types
```

## Updating the portfolio

Most portfolio content is separated from the presentation components:

- Edit `src/data/profile.ts` to update the name, summary, links, biography, or strengths.
- Add or edit entries in `src/data/experiences.ts` for work and education.
- Add or edit entries in `src/data/projects.ts` for portfolio projects.

Experience and project entries use the interfaces in `src/types.ts`. Each entry needs a unique `route` value; the app uses it to generate the corresponding detail URL. Set `featured: true` to make an item eligible for the home page. The home page shows up to two featured experiences and three featured projects.

## Deployment

The workflow in `.github/workflows/ci.yml` builds and deploys the site to Cloudflare Pages whenever a commit reaches `main`.

### One-time setup

1. Create a Cloudflare Pages project.
2. In GitHub, add these repository secrets:
	- `CLOUDFLARE_API_TOKEN`
	- `CLOUDFLARE_ACCOUNT_ID`
	- `CLOUDFLARE_PROJECT_NAME`
3. Ensure the Cloudflare API token has permission to deploy Pages projects.

Client-side routing is handled through `public/_redirects`, which rewrites all paths to `index.html`.

To verify a production build locally:

```bash
npm run build
npm run preview
```

Deploy command:

```bash
git push origin main
```
