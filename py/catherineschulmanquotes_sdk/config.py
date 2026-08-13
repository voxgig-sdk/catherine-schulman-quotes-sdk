# CatherineSchulmanQuotes SDK configuration


def make_config():
    return {
        "main": {
            "name": "CatherineSchulmanQuotes",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "name": "date",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "program",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
        ],
        "name": "episode",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/last/episodes/all",
                "parts": [
                  "last",
                  "episodes",
                  "all",
                ],
                "select": {
                  "$action": "all",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 3,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/episodes/zakladka/{id}",
                "parts": [
                  "episodes",
                  "zakladka",
                  "{id}",
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/episodes/zakladka/random",
                "parts": [
                  "episodes",
                  "zakladka",
                  "random",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "episode_status": {
        "fields": [
          {
            "active": True,
            "name": "lastEpisodeDate",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "lastEpisodeId",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "program",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "status",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "episode_status",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/last/episodes/status",
                "parts": [
                  "last",
                  "episodes",
                  "status",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "quote": {
        "fields": [
          {
            "active": True,
            "name": "author",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "date",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "source",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "text",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "quote",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
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
                "parts": [
                  "search",
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": 3,
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                      "index$": 0,
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/quote/{id}",
                "parts": [
                  "quote",
                  "{id}",
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
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/quote/random",
                "parts": [
                  "quote",
                  "random",
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
