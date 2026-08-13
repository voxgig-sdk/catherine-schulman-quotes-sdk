# frozen_string_literal: true

# Typed models for the CatherineSchulmanQuotes SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Episode entity data model.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] program
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Episode = Struct.new(
  :date,
  :description,
  :id,
  :program,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Episode#load.
#
# @!attribute [rw] id
#   @return [Integer, nil]
EpisodeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Episode#list.
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] program
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
EpisodeListMatch = Struct.new(
  :date,
  :description,
  :id,
  :program,
  :title,
  :url,
  keyword_init: true
)

# EpisodeStatus entity data model.
#
# @!attribute [rw] lastEpisodeDate
#   @return [String, nil]
#
# @!attribute [rw] lastEpisodeId
#   @return [Integer, nil]
#
# @!attribute [rw] program
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
EpisodeStatus = Struct.new(
  :lastEpisodeDate,
  :lastEpisodeId,
  :program,
  :status,
  keyword_init: true
)

# Request payload for EpisodeStatus#load.
#
# @!attribute [rw] lastEpisodeDate
#   @return [String, nil]
#
# @!attribute [rw] lastEpisodeId
#   @return [Integer, nil]
#
# @!attribute [rw] program
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
EpisodeStatusLoadMatch = Struct.new(
  :lastEpisodeDate,
  :lastEpisodeId,
  :program,
  :status,
  keyword_init: true
)

# Quote entity data model.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
Quote = Struct.new(
  :author,
  :date,
  :id,
  :source,
  :text,
  keyword_init: true
)

# Request payload for Quote#load.
#
# @!attribute [rw] id
#   @return [Integer]
QuoteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Quote#list.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] source
#   @return [String, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
QuoteListMatch = Struct.new(
  :author,
  :date,
  :id,
  :source,
  :text,
  keyword_init: true
)

