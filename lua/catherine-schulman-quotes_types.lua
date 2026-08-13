-- Typed models for the CatherineSchulmanQuotes SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Episode
---@field date? string
---@field description? string
---@field id? number
---@field program? string
---@field title? string
---@field url? string

---@class EpisodeLoadMatch
---@field id? number

---@class EpisodeListMatch
---@field date? string
---@field description? string
---@field id? number
---@field program? string
---@field title? string
---@field url? string

---@class EpisodeStatus
---@field lastEpisodeDate? string
---@field lastEpisodeId? number
---@field program? string
---@field status? string

---@class EpisodeStatusLoadMatch
---@field lastEpisodeDate? string
---@field lastEpisodeId? number
---@field program? string
---@field status? string

---@class Quote
---@field author? string
---@field date? string
---@field id? number
---@field source? string
---@field text? string

---@class QuoteLoadMatch
---@field id number

---@class QuoteListMatch
---@field author? string
---@field date? string
---@field id? number
---@field source? string
---@field text? string

local M = {}

return M
