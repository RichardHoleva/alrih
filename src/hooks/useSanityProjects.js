// src/hooks/useSanityProjects.js
// Fetches all projects from Sanity for the listing / filter page.

import { useEffect, useState } from 'react'
import { client }              from '../lib/sanityClient'
import { ALL_PROJECTS_QUERY }  from '../lib/queries'

export function useSanityProjects() {
  const [projects, setProjects] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)

  useEffect(() => {
    client
      .fetch(ALL_PROJECTS_QUERY)
      .then(data => {
        setProjects(data ?? [])
        setLoading(false)
      })
      .catch(err => {
        console.error('[Sanity] Failed to fetch projects:', err)
        setError(err)
        setLoading(false)
      })
  }, []) // empty array → run once when the component mounts

  return { projects, loading, error }
}
