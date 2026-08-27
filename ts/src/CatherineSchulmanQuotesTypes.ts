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
  id: number
}

export interface EpisodeListMatch {
  date?: string
  description?: string
  id?: number
  program?: string
  title?: string
  url?: string

  // Selects a custom action instead of the plain list:
  //   'all'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EpisodeStatus {
  lastEpisodeDate?: string
  lastEpisodeId?: number
  program?: string
  status?: string
}

export interface EpisodeStatusLoadMatch {
  lastEpisodeDate?: string
  lastEpisodeId?: number
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

  // Selects a custom action instead of the plain load:
  //   'random'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface QuoteListMatch {
  q: string
}

