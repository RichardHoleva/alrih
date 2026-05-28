// src/hooks/useSanityProject.js
// Fetches a single project from Sanity by its slug (used on the detail page).

import { useEffect, useState } from 'react'
import { client }               from '../lib/sanityClient'
import { PROJECT_BY_SLUG_QUERY } from '../lib/queries'

// Pass null as slug to skip fetching (e.g. when using hardcoded data instead).
export function useSanityProject(slug) {
  const [project, setProject] = useState(null)
  const [loading,  setLoading]  = useState(!!slug) // only loading if slug provided
  const [error,    setError]    = useState(null)

  useEffect(() => {
    // If no slug given, there is nothing to fetch
    if (!slug) {
      setProject(null)
      setLoading(false)
      return
    }

    setLoading(true)

    client
      .fetch(PROJECT_BY_SLUG_QUERY, { slug })
      .then(data => {
        setProject(data ?? null)
        setLoading(false)
      })
      .catch(err => {
        console.error(`[Sanity] Failed to fetch project "${slug}":`, err)
        setError(err)
        setLoading(false)
      })
  }, [slug]) // re-fetch whenever the slug in the URL changes

  return { project, loading, error }
}
