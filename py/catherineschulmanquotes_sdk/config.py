# CatherineSchulmanQuotes SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CatherineSchulmanQuotes",
            "slug": "catherine-schulman-quotes",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://shulmanquotes.vercel.app",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "episode": {},
                "episode_status": {},
                "quote": {},
            },
        },
        "entity": {
      "episode": {
        "fields": [
          {
            "format": "date",
            "name": "date",
            "short": "Release date of the episode",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Description or summary of the episode",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the episode",
            "type": "`$INTEGER`",
          },
          {
            "name": "program",
            "short": "Name of the program",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Title of the episode",
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "url",
            "short": "URL to the episode",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "episode",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/last/episodes/all",
                "segments": [
                  {
                    "lit": "last",
                  },
                  {
                    "lit": "episodes",
                  },
                  {
                    "lit": "all",
                  },
                ],
                "select": {
                  "$action": "all",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "last",
                  "episodes",
                  "all",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 3,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/episodes/zakladka/{id}",
                "segments": [
                  {
                    "lit": "episodes",
                  },
                  {
                    "lit": "zakladka",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "episodes",
                  "zakladka",
                  "{id}",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/episodes/zakladka/random",
                "segments": [
                  {
                    "lit": "episodes",
                  },
                  {
                    "lit": "zakladka",
                  },
                  {
                    "lit": "random",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "episodes",
                  "zakladka",
                  "random",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "episode_status": {
        "fields": [
          {
            "format": "date",
            "name": "lastEpisodeDate",
            "short": "Date of the last episode",
            "type": "`$STRING`",
          },
          {
            "name": "lastEpisodeId",
            "short": "ID of the last episode",
            "type": "`$INTEGER`",
          },
          {
            "name": "program",
            "short": "Name of the program",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "Current status of the program",
            "type": "`$STRING`",
          },
        ],
        "name": "episode_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/last/episodes/status",
                "segments": [
                  {
                    "lit": "last",
                  },
                  {
                    "lit": "episodes",
                  },
                  {
                    "lit": "status",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "last",
                  "episodes",
                  "status",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "quote": {
        "fields": [
          {
            "name": "author",
            "short": "Author of the quote",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "date",
            "short": "Date when the quote was said or published",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the quote",
            "type": "`$INTEGER`",
          },
          {
            "name": "source",
            "short": "Source or context of the quote",
            "type": "`$STRING`",
          },
          {
            "name": "text",
            "short": "The quote text",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "quote",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "дом",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/search",
                "segments": [
                  {
                    "lit": "search",
                  },
                ],
                "select": {
                  "exist": [
                    "q",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "search",
                ],
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": 3,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/quote/{id}",
                "segments": [
                  {
                    "lit": "quote",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "quote",
                  "{id}",
                ],
              },
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/quote/random",
                "segments": [
                  {
                    "lit": "quote",
                  },
                  {
                    "lit": "random",
                  },
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "quote",
                  "random",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
