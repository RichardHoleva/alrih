// src/lib/sanityClient.js
// Configured Sanity client used by every hook and query in the React app.
// projectId and dataset must match alrih/sanity.config.js exactly.

import { createClient } from '@sanity/client'
import imageUrlBuilder  from '@sanity/image-url'

export const client = createClient({
  projectId: 'ix3wxzuy',
  dataset:   'production',
  // useCdn: true — serve reads from the Sanity CDN edge cache (faster, free).
  // Switch to false only if you need real-time data on every request.
  useCdn:    true,
  // apiVersion: pin to a date so Sanity never silently breaks your queries
  // when they release a new API version.
  apiVersion: '2024-01-01',
})

// ─── Image URL helper ────────────────────────────────────────────────────────
// Usage:  urlFor(project.coverImage).width(800).url()
// Sanity stores images as references; this converts them to a real CDN URL.

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
