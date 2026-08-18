# Typed models for the CatherineSchulmanQuotes SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Episode(TypedDict, total=False):
    date: str
    description: str
    id: int
    program: str
    title: str
    url: str


class EpisodeLoadMatch(TypedDict):
    id: int


class EpisodeListMatch(TypedDict, total=False):
    date: str
    description: str
    id: int
    program: str
    title: str
    url: str


class EpisodeStatus(TypedDict, total=False):
    lastEpisodeDate: str
    lastEpisodeId: int
    program: str
    status: str


class EpisodeStatusLoadMatch(TypedDict, total=False):
    lastEpisodeDate: str
    lastEpisodeId: int
    program: str
    status: str


class Quote(TypedDict, total=False):
    author: str
    date: str
    id: int
    source: str
    text: str


class QuoteLoadMatch(TypedDict):
    id: int


class QuoteListMatch(TypedDict, total=False):
    author: str
    date: str
    id: int
    source: str
    text: str
