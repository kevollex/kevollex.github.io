# Kevin Herrera Oropeza Portfolio

Public portfolio for Kevin Herrera Oropeza, Systems Engineer and Software
Developer. The site presents professional profile information, selected
projects, technical skills and public contact details.

## Purpose

This project is designed as a public portfolio website with a focused selection
of frontend and full stack work. It highlights professional experience,
technical projects and a case study for a Vocational Guidance Platform while
respecting confidentiality requirements for private source code, operational
data and screenshots.

## Stack

- React
- TypeScript
- Vite
- CSS
- React Router

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

## Deployment

Deployment is prepared for GitHub Pages using the workflow at
`.github/workflows/deploy-pages.yml`.

The workflow runs on pushes to `main` and can also be started manually from
GitHub Actions. It installs dependencies with `npm ci`, runs linting, builds the
site and deploys the generated `dist` directory through GitHub Pages.

Expected public URL:

```text
https://kevollex.github.io
```
