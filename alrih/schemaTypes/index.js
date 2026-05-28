// schemaTypes/index.js
// Central registry of all Sanity schema types.
// Import each schema here and add it to the schemaTypes array.
// sanity.config.js picks this array up automatically.

import { project } from './project'

// Add more schema imports here as the studio grows, e.g.:
// import { teamMember } from './teamMember'
// import { service }    from './service'

export const schemaTypes = [
  project,
]
