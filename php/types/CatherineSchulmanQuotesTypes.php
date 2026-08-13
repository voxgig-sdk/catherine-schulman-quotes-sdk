<?php
declare(strict_types=1);

// Typed models for the CatherineSchulmanQuotes SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Episode entity data model. */
class Episode
{
    public ?string $date = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $program = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for Episode#load. */
class EpisodeLoadMatch
{
    public ?int $id = null;
}

/** Request payload for Episode#list. */
class EpisodeListMatch
{
    public ?string $date = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $program = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** EpisodeStatus entity data model. */
class EpisodeStatus
{
    public ?string $lastEpisodeDate = null;
    public ?int $lastEpisodeId = null;
    public ?string $program = null;
    public ?string $status = null;
}

/** Request payload for EpisodeStatus#load. */
class EpisodeStatusLoadMatch
{
    public ?string $lastEpisodeDate = null;
    public ?int $lastEpisodeId = null;
    public ?string $program = null;
    public ?string $status = null;
}

/** Quote entity data model. */
class Quote
{
    public ?string $author = null;
    public ?string $date = null;
    public ?int $id = null;
    public ?string $source = null;
    public ?string $text = null;
}

/** Request payload for Quote#load. */
class QuoteLoadMatch
{
    public int $id;
}

/** Request payload for Quote#list. */
class QuoteListMatch
{
    public ?string $author = null;
    public ?string $date = null;
    public ?int $id = null;
    public ?string $source = null;
    public ?string $text = null;
}

