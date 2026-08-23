# CatherineSchulmanQuotes SDK configuration

module CatherineSchulmanQuotesConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "CatherineSchulmanQuotes",
        "slug" => "catherine-schulman-quotes",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://shulmanquotes.vercel.app",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "episode" => {},
          "episode_status" => {},
          "quote" => {},
        },
      },
      "entity" => {
        "episode" => {
          "fields" => [
            {
              "name" => "date",
              "short" => "Release date of the episode",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Description or summary of the episode",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the episode",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "program",
              "short" => "Name of the program",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "short" => "Title of the episode",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "short" => "URL to the episode",
              "type" => "`$STRING`",
            },
          ],
          "name" => "episode",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/last/episodes/all",
                  "parts" => [
                    "last",
                    "episodes",
                    "all",
                  ],
                  "select" => {
                    "$action" => "all",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 3,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes/zakladka/{id}",
                  "parts" => [
                    "episodes",
                    "zakladka",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/episodes/zakladka/random",
                  "parts" => [
                    "episodes",
                    "zakladka",
                    "random",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "episode_status" => {
          "fields" => [
            {
              "name" => "lastEpisodeDate",
              "short" => "Date of the last episode",
              "type" => "`$STRING`",
            },
            {
              "name" => "lastEpisodeId",
              "short" => "ID of the last episode",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "program",
              "short" => "Name of the program",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "short" => "Current status of the program",
              "type" => "`$STRING`",
            },
          ],
          "name" => "episode_status",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/last/episodes/status",
                  "parts" => [
                    "last",
                    "episodes",
                    "status",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "quote" => {
          "fields" => [
            {
              "name" => "author",
              "short" => "Author of the quote",
              "type" => "`$STRING`",
            },
            {
              "name" => "date",
              "short" => "Date when the quote was said or published",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the quote",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "source",
              "short" => "Source or context of the quote",
              "type" => "`$STRING`",
            },
            {
              "name" => "text",
              "short" => "The quote text",
              "type" => "`$STRING`",
            },
          ],
          "name" => "quote",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "дом",
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/search",
                  "parts" => [
                    "search",
                  ],
                  "select" => {
                    "exist" => [
                      "q",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 3,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/quote/{id}",
                  "parts" => [
                    "quote",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/quote/random",
                  "parts" => [
                    "quote",
                    "random",
                  ],
                  "select" => {
                    "$action" => "random",
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CatherineSchulmanQuotesFeatures.make_feature(name)
  end
end
