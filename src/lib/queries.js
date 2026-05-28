// src/lib/queries.js
// GROQ queries for fetching Sanity data.
// GROQ is Sanity's query language — it looks a lot like a mix of SQL and JSONPath.

// ─── All projects (listing page) ────────────────────────────────────────────
// Fetches only the fields the project card actually needs (lighter payload).
// Orders by Sanity creation date ascending so older projects come first.

export const ALL_PROJECTS_QUERY = `
  *[_type == "project"] | order(_createdAt asc) {
    _id,
    titleEn,
    titleSk,
    "slug": slug.current,
    category,
    year,
    location,
    coverImage { alt, asset }
  }
`

// ─── Single project (detail page) ───────────────────────────────────────────
// Receives $slug as a GROQ parameter: client.fetch(query, { slug: 'family-cottage' })
// The [0] at the end unwraps the single result from the array.

export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    titleEn,
    titleSk,
    "slug": slug.current,
    category,
    year,
    location,
    client,
    coverImage {
      alt,
      asset
    },
    gallery[] {
      alt,
      asset
    },
    area,
    aboutHeadingPreEn,
    aboutHeadingEmEn,
    aboutHeadingPreSk,
    aboutHeadingEmSk,
    descriptionEn,
    descriptionSk
  }
`
