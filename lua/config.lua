-- CatherineSchulmanQuotes SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CatherineSchulmanQuotes",
      slug = "catherine-schulman-quotes",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://shulmanquotes.vercel.app",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["episode"] = {},
        ["episode_status"] = {},
        ["quote"] = {},
      },
    },
    entity = {
      ["episode"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["short"] = "Release date of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Description or summary of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the episode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "program",
            ["short"] = "Name of the program",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Title of the episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL to the episode",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "episode",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/last/episodes/all",
                ["parts"] = {
                  "last",
                  "episodes",
                  "all",
                },
                ["select"] = {
                  ["$action"] = "all",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 3,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episodes/zakladka/{id}",
                ["parts"] = {
                  "episodes",
                  "zakladka",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episodes/zakladka/random",
                ["parts"] = {
                  "episodes",
                  "zakladka",
                  "random",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["episode_status"] = {
        ["fields"] = {
          {
            ["name"] = "lastEpisodeDate",
            ["short"] = "Date of the last episode",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastEpisodeId",
            ["short"] = "ID of the last episode",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "program",
            ["short"] = "Name of the program",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Current status of the program",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "episode_status",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/last/episodes/status",
                ["parts"] = {
                  "last",
                  "episodes",
                  "status",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["quote"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["short"] = "Author of the quote",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "date",
            ["short"] = "Date when the quote was said or published",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the quote",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "source",
            ["short"] = "Source or context of the quote",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "text",
            ["short"] = "The quote text",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "quote",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "дом",
                      ["kind"] = "query",
                      ["name"] = "q",
                      ["orig"] = "q",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search",
                ["parts"] = {
                  "search",
                },
                ["select"] = {
                  ["exist"] = {
                    "q",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = 3,
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quote/{id}",
                ["parts"] = {
                  "quote",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quote/random",
                ["parts"] = {
                  "quote",
                  "random",
                },
                ["select"] = {
                  ["$action"] = "random",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
