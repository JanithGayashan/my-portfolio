# Janith Gayashan — Portfolio

A personal AI engineering portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Run locally

Use Node.js 22 or later.

1. Run `npm ci`.
2. Copy `.env.example` to `.env.local` and configure the public production URL when available.
3. Run `npm run dev`.
4. Open [localhost:3000](http://localhost:3000).

The homepage and résumé work without the Python backend. Existing project demos use the separate `portfolio-backend` FastAPI application. The floating chatbot is intentionally not mounted while its implementation is being reviewed.

## Configuration

- `PORTFOLIO_SITE_URL`: the full public production URL, including `https://`. It supplies canonical links and sitemap URLs. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is used when this value is absent.
- `NEXT_PUBLIC_API_URL`: the existing chat service's backend URL. The Projects section and loan demo have not been changed in this update.
- Variables beginning with `NEXT_PUBLIC_` are visible in the browser. Keep credentials on the backend and out of the frontend repository.

Preview deployments are marked `noindex`. When no production URL is configured, the local build also stays unindexed and does not publish a sitemap containing a guessed domain. Confirm the production domain before deployment.

## Content and résumé

Edit `src/data/profile.ts` to update the name, biography, professional profiles, education, experience, and skills consistently.

The hero and contact section open the owner's original PDF at `/Janith_CV.pdf` in a new tab. The legacy `/resume` address permanently redirects to that PDF; it no longer generates a résumé from the portfolio data. To update the CV, replace `public/Janith_CV.pdf` with the new PDF under the same filename, verify it, and deploy through the normal branch workflow. This file is publicly downloadable, so only publish contact and reference details you intend to share.

## Quality checks

- `npm run lint`: ESLint with the matching Next.js configuration.
- `npm run typecheck`: generate Next.js route types and validate TypeScript.
- `npm run build`: optimized production build.
- `npm run check`: lint, type-check, and build locally.
- `npm start`: serve the production build.

GitHub Actions runs linting, route-type generation, TypeScript checking, and a build for pull requests targeting `main` and for pushes to `main`. It does not deploy or require backend credentials.

The verified production dependency audit (`npm audit --omit=dev`) reports zero vulnerabilities. The full audit still reports nine development-tooling findings in the existing Tailwind 3 and glob/parser dependency chain. The proposed automatic fix includes a Tailwind 4 migration, so it is deferred to a separate change with styling regression checks. The existing unused-variable lint warning in `Projects.tsx` is also deferred with that section's review.

## Contribution workflow

Create a branch from `main`, make and verify changes, then push the working branch and open a pull request. Merge reviewed changes through GitHub. Configure the repository's `main` ruleset separately to require pull requests and the frontend checks; adding this workflow does not activate branch protection automatically.

## Frontend structure

- `src/app/`: homepage, résumé, global layout, and metadata routes.
- `src/components/`: navigation and portfolio sections.
- `src/data/profile.ts`: shared professional content.
- `src/lib/site.ts`: canonical domain and indexing configuration.
- `public/`: images and static assets.

The Projects section, project detail pages, and loan demo are reserved for a separate review.
