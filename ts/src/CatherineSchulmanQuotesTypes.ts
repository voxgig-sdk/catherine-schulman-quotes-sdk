// Typed models for the CatherineSchulmanQuotes SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Episode {
  date?: string
  description?: string
  id?: number
  program?: string
  title?: string
  url?: string
}

export interface EpisodeLoadMatch {
  id?: number
}

export interface EpisodeListMatch {
  date?: string
  description?: string
  id?: number
  program?: string
  title?: string
  url?: string
}

export interface EpisodeStatus {
  last_episode_date?: string
  last_episode_id?: number
  program?: string
  status?: string
}

export interface EpisodeStatusLoadMatch {
  last_episode_date?: string
  last_episode_id?: number
  program?: string
  status?: string
}

export interface Quote {
  author?: string
  date?: string
  id?: number
  source?: string
  text?: string
}

export interface QuoteLoadMatch {
  id: number
}

export interface QuoteListMatch {
  author?: string
  date?: string
  id?: number
  source?: string
  text?: string
}

