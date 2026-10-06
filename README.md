# Lucifer's Portfolio

A responsive, single-page personal portfolio built with React, Vite, and Tailwind CSS. Personal content is kept in one place so it can be updated without editing the section components.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it locally with `npm run preview`.

## Add your information

Edit [`src/data/portfolioData.js`](src/data/portfolioData.js). It is the local development and outage fallback, so keep it in sync with the API response shape:

- `heroData`: name, title, short bio, CV URL, optional `photoUrl`, and social profile URLs.
- `aboutData`: one or more short paragraphs about you.
- `skillsData`: skills to display (each item needs a `name`; `icon` and `color` are optional).
- `projectsData`: projects with a unique `slug`, `title`, `description`, optional `technologies`, `image`, `link`, and `github`.
- `educationData`: education or experience entries with a `degree` or `title`, plus optional `year`, `period`, `status`, and `description`.
- `servicesData`, `testimonialsData`, and `contactData`: optional service cards, testimonials, email, and location.

Sections for empty lists and links are hidden so unfinished demo content is not presented as real. The hero portrait uses `heroData.photoUrl`; About and Contact use their own `photoUrl` fields and optimized images. The original photos remain in `src/assets/` if you need them. The local brand logo and CV file are imported from `src/assets/logo.jfif` and `src/assets/Wai_Yan_Min_CV.pdf`.

## API data source

The root route loads portfolio data through `src/services/portfolioService.js`. Without an API URL it uses the local data. To connect a backend, copy `.env.example` to `.env.local` and set `VITE_API_BASE_URL` to the backend origin. The frontend requests `GET {VITE_API_BASE_URL}/api/portfolio` and accepts either the portfolio object directly or `{ "data": <portfolio object> }`.

The response object must contain `heroData`, `aboutData` (with a `paragraphs` array), `contactData`, and arrays named `skillsData`, `educationData`, `projectsData`, `servicesData`, and `testimonialsData`. Optional image fields use the bundled local files when omitted. If the request fails, times out, or has an invalid shape, the site logs the issue and falls back to local data. API URLs are public browser configuration; never put credentials or private keys in `VITE_*` variables.

## Available scripts

- `npm run dev` — start the development server.
- `npm run build` — create the production bundle in `dist/`.
- `npm run preview` — preview the production bundle locally.
- `npm run lint` — run Oxlint.
