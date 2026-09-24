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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "Release date of the episode",
            "format": "date",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Description or summary of the episode",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the episode",
          },
          {
            "name": "program",
            "title": "Program",
            "type": "`$STRING`",
            "short": "Name of the program",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Title of the episode",
          },
          {
            "name": "url",
            "title": "Url",
            "type": "`$STRING`",
            "short": "URL to the episode",
            "format": "uri",
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
                "parts": [
                  "last",
                  "episodes",
                  "all",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "all",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "episodes",
                  "zakladka",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 3,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
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
                "parts": [
                  "episodes",
                  "zakladka",
                  "random",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "name": "lastEpisodeDate",
            "title": "Last Episode Date",
            "type": "`$STRING`",
            "short": "Date of the last episode",
            "format": "date",
          },
          {
            "name": "lastEpisodeId",
            "title": "Last Episode Id",
            "type": "`$INTEGER`",
            "short": "ID of the last episode",
          },
          {
            "name": "program",
            "title": "Program",
            "type": "`$STRING`",
            "short": "Name of the program",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the program",
          },
        ],
        "name": "episode_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "last",
                  "episodes",
                  "status",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
            "title": "Author",
            "type": "`$STRING`",
            "short": "Author of the quote",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "Date when the quote was said or published",
            "format": "date",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the quote",
          },
          {
            "name": "source",
            "title": "Source",
            "type": "`$STRING`",
            "short": "Source or context of the quote",
          },
          {
            "name": "text",
            "title": "Text",
            "type": "`$STRING`",
            "short": "The quote text",
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
                "kind": "http",
                "method": "GET",
                "orig": "/search",
                "segments": [
                  {
                    "lit": "search",
                  },
                ],
                "parts": [
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "дом",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "q",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
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
                "parts": [
                  "quote",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                      "example": 3,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
              {
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
                "parts": [
                  "quote",
                  "random",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {
                  "$action": "random",
                },
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
