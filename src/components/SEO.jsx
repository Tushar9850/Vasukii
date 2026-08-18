import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Vasukii";
const SITE_URL = "https://vasukii-m6hf.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/vasukii-logo.png`;

/**
 * Drop this at the top of any page component to control that page's
 * <title>, meta description, canonical URL, Open Graph and Twitter tags.
 *
 *   <SEO
 *     title="Shop Plants & Pots"
 *     description="Browse fragrant, lucky, medicinal, indoor and fruit plants..."
 *     path="/shop"
 *   />
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd = null,
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Rooted in Lucknow`;
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE };
