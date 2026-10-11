import "server-only";

// Use the public production domain for canonical URLs, never a preview hostname.
const configuredUrl = process.env.PORTFOLIO_SITE_URL?.trim();
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const rawUrl =
  configuredUrl || (productionHost ? `https://${productionHost}` : undefined);

export const siteUrl = rawUrl ? new URL(rawUrl).origin : undefined;
export const allowIndexing =
  Boolean(siteUrl) &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
