# CatherineSchulmanQuotes TypeScript SDK Reference

Complete API reference for the CatherineSchulmanQuotes TypeScript SDK.


## CatherineSchulmanQuotesSDK

### Constructor

```ts
new CatherineSchulmanQuotesSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CatherineSchulmanQuotesSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CatherineSchulmanQuotesSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CatherineSchulmanQuotesSDK` instance in test mode.


### Instance Methods

#### `Episode(data?: object)`

Create a new `Episode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeEntity` instance.

#### `EpisodeStatus(data?: object)`

Create a new `EpisodeStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeStatusEntity` instance.

#### `Quote(data?: object)`

Create a new `Quote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `QuoteEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CatherineSchulmanQuotesSDK.test()`.

**Returns:** `CatherineSchulmanQuotesSDK` instance in test mode.


---

## EpisodeEntity

```ts
const episode = client.Episode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `description` | `string` | No |  |
| `id` | `number` | No |  |
| `program` | `string` | No |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `all` | `/last/episodes/all` | `client.Episode().list({ $action: 'all', ... })` |

An action returns that action's OWN response, which is not necessarily a
Episode record — check the API definition for its shape.

```ts
const result = await client.Episode().list({
  $action: 'all',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Episode().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Episode().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CatherineSchulmanQuotesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeStatusEntity

```ts
const episode_status = client.EpisodeStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `lastEpisodeDate` | `string` | No |  |
| `lastEpisodeId` | `number` | No |  |
| `program` | `string` | No |  |
| `status` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EpisodeStatus().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `CatherineSchulmanQuotesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## QuoteEntity

```ts
const quote = client.Quote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `string` | No |  |
| `date` | `string` | No |  |
| `id` | `number` | No |  |
| `source` | `string` | No |  |
| `text` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `random` | `/quote/random` | `client.Quote().load({ $action: 'random', ... })` |

An action returns that action's OWN response, which is not necessarily a
Quote record — check the API definition for its shape.

```ts
const result = await client.Quote().load({
  $action: 'random',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Quote().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Quote().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `QuoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `CatherineSchulmanQuotesSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new CatherineSchulmanQuotesSDK({
  feature: {
    test: { active: true },
  }
})
```

