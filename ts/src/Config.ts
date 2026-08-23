
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'CatherineSchulmanQuotes',
        slug: "catherine-schulman-quotes",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://shulmanquotes.vercel.app",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      episode: {
      },

      episode_status: {
      },

      quote: {
      },

    }
  }


  entity = {
    "episode": {
      "fields": [
        {
          "name": "date",
          "short": "Release date of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Description or summary of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the episode",
          "type": "`$INTEGER`"
        },
        {
          "name": "program",
          "short": "Name of the program",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the episode",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL to the episode",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "last",
                "episodes",
                "all"
              ],
              "select": {
                "$action": "all"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episodes/zakladka/{id}",
              "parts": [
                "episodes",
                "zakladka",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/episodes/zakladka/random",
              "parts": [
                "episodes",
                "zakladka",
                "random"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "episode_status": {
      "fields": [
        {
          "name": "lastEpisodeDate",
          "short": "Date of the last episode",
          "type": "`$STRING`"
        },
        {
          "name": "lastEpisodeId",
          "short": "ID of the last episode",
          "type": "`$INTEGER`"
        },
        {
          "name": "program",
          "short": "Name of the program",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Current status of the program",
          "type": "`$STRING`"
        }
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
              "parts": [
                "last",
                "episodes",
                "status"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "quote": {
      "fields": [
        {
          "name": "author",
          "short": "Author of the quote",
          "type": "`$STRING`"
        },
        {
          "name": "date",
          "short": "Date when the quote was said or published",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the quote",
          "type": "`$INTEGER`"
        },
        {
          "name": "source",
          "short": "Source or context of the quote",
          "type": "`$STRING`"
        },
        {
          "name": "text",
          "short": "The quote text",
          "type": "`$STRING`"
        }
      ],
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
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search",
              "parts": [
                "search"
              ],
              "select": {
                "exist": [
                  "q"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/quote/{id}",
              "parts": [
                "quote",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/quote/random",
              "parts": [
                "quote",
                "random"
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

