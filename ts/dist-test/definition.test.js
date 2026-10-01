"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "list",
        "method": "GET",
        "path": "/last/episodes/all",
        "action": "all",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 3,
                "title": "x",
                "program": "zakladka",
                "date": "2026-01-01",
                "url": "x",
                "description": "x"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "load",
        "method": "GET",
        "path": "/episodes/zakladka/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": 3
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 3,
            "title": "x",
            "program": "zakladka",
            "date": "2026-01-01",
            "url": "x",
            "description": "x"
        },
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "load",
        "method": "GET",
        "path": "/episodes/zakladka/random",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 3,
            "title": "x",
            "program": "zakladka",
            "date": "2026-01-01",
            "url": "x",
            "description": "x"
        },
        "idField": "id"
    },
    {
        "entity": "episode_status",
        "accessor": "EpisodeStatus",
        "op": "load",
        "method": "GET",
        "path": "/last/episodes/status",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "program": "x",
            "lastEpisodeId": 1,
            "lastEpisodeDate": "2026-01-01",
            "status": "active"
        },
        "idField": "id"
    },
    {
        "entity": "quote",
        "accessor": "Quote",
        "op": "list",
        "method": "GET",
        "path": "/search",
        "args": [],
        "select": {
            "q": "дом"
        },
        "headers": [],
        "query": [
            "q"
        ],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 3,
                "text": "Политика — это искусство возможного",
                "author": "Catherine Schulman",
                "source": "Закладка",
                "date": "2026-01-01"
            }
        ],
        "idField": "id"
    },
    {
        "entity": "quote",
        "accessor": "Quote",
        "op": "load",
        "method": "GET",
        "path": "/quote/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": 3
            }
        ],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 3,
            "text": "Политика — это искусство возможного",
            "author": "Catherine Schulman",
            "source": "Закладка",
            "date": "2026-01-01"
        },
        "idField": "id"
    },
    {
        "entity": "quote",
        "accessor": "Quote",
        "op": "load",
        "method": "GET",
        "path": "/quote/random",
        "action": "random",
        "args": [],
        "select": {},
        "headers": [],
        "query": [],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 3,
            "text": "Политика — это искусство возможного",
            "author": "Catherine Schulman",
            "source": "Закладка",
            "date": "2026-01-01"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map