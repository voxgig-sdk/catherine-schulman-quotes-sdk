# EpisodeStatus entity test

import json
import os
import time

import pytest

from catherineschulmanquotes_sdk.utility.voxgig_struct import voxgig_struct as vs
from catherineschulmanquotes_sdk import CatherineSchulmanQuotesSDK
from catherineschulmanquotes_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestEpisodeStatusEntity:

    def test_should_create_instance(self):
        testsdk = CatherineSchulmanQuotesSDK.test(None, None)
        ent = testsdk.EpisodeStatus(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _episode_status_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "episode_status." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        episode_status_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.episode_status")))
        episode_status_ref01_data = None
        if len(episode_status_ref01_data_raw) > 0:
            episode_status_ref01_data = helpers.to_map(episode_status_ref01_data_raw[0][1])

        # LOAD
        episode_status_ref01_ent = client.EpisodeStatus(None)
        episode_status_ref01_match_dt0 = {}
        episode_status_ref01_data_dt0_loaded = episode_status_ref01_ent.load(episode_status_ref01_match_dt0, None)
        assert episode_status_ref01_data_dt0_loaded is not None



def _episode_status_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/episode_status/EpisodeStatusTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CatherineSchulmanQuotesSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["episode_status01", "episode_status02", "episode_status03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID": idmap,
        "CATHERINE_SCHULMAN_QUOTES_TEST_LIVE": "FALSE",
        "CATHERINE_SCHULMAN_QUOTES_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("CATHERINE_SCHULMAN_QUOTES_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
            },
            extra or {},
        ])
        client = CatherineSchulmanQuotesSDK(helpers.to_map(merged_opts))

    _live = env.get("CATHERINE_SCHULMAN_QUOTES_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CATHERINE_SCHULMAN_QUOTES_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
