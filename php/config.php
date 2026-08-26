<?php
declare(strict_types=1);

// CatherineSchulmanQuotes SDK configuration

class CatherineSchulmanQuotesConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CatherineSchulmanQuotes",
                "slug" => "catherine-schulman-quotes",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://shulmanquotes.vercel.app",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "episode" => [],
                    "episode_status" => [],
                    "quote" => [],
                ],
            ],
            "entity" => [
        'episode' => [
          'fields' => [
            [
              'name' => 'date',
              'short' => 'Release date of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Description or summary of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the episode',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'program',
              'short' => 'Name of the program',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL to the episode',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'episode',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/last/episodes/all',
                  'parts' => [
                    'last',
                    'episodes',
                    'all',
                  ],
                  'select' => [
                    '$action' => 'all',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 3,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes/zakladka/{id}',
                  'parts' => [
                    'episodes',
                    'zakladka',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes/zakladka/random',
                  'parts' => [
                    'episodes',
                    'zakladka',
                    'random',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'episode_status' => [
          'fields' => [
            [
              'name' => 'lastEpisodeDate',
              'short' => 'Date of the last episode',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lastEpisodeId',
              'short' => 'ID of the last episode',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'program',
              'short' => 'Name of the program',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the program',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'episode_status',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/last/episodes/status',
                  'parts' => [
                    'last',
                    'episodes',
                    'status',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'quote' => [
          'fields' => [
            [
              'name' => 'author',
              'short' => 'Author of the quote',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'date',
              'short' => 'Date when the quote was said or published',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the quote',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'source',
              'short' => 'Source or context of the quote',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'text',
              'short' => 'The quote text',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'quote',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'дом',
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/search',
                  'parts' => [
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'q',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 3,
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/quote/{id}',
                  'parts' => [
                    'quote',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/quote/random',
                  'parts' => [
                    'quote',
                    'random',
                  ],
                  'select' => [
                    '$action' => 'random',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CatherineSchulmanQuotesFeatures::make_feature($name);
    }
}
