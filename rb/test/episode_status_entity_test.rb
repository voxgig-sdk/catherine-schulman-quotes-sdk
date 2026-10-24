# EpisodeStatus entity test

require "minitest/autorun"
require "json"
require_relative "../CatherineSchulmanQuotes_sdk"
require_relative "runner"

class EpisodeStatusEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = CatherineSchulmanQuotesSDK.test(nil, nil)
    ent = testsdk.EpisodeStatus(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = CatherineSchulmanQuotesConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = CatherineSchulmanQuotesSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.EpisodeStatus(nil).load({ "lastEpisodeDate" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = episode_status_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "episode_status." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    episode_status_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.episode_status")))
    episode_status_ref01_data = nil
    if episode_status_ref01_data_raw.length > 0
      episode_status_ref01_data = Helpers.to_map(episode_status_ref01_data_raw[0][1])
    end

    # LOAD
    episode_status_ref01_ent = client.EpisodeStatus(nil)
    episode_status_ref01_match_dt0 = {}
    episode_status_ref01_data_dt0_loaded = episode_status_ref01_ent.load(episode_status_ref01_match_dt0, nil)
    assert !episode_status_ref01_data_dt0_loaded.nil?

  end
end

def episode_status_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "episode_status", "EpisodeStatusTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CatherineSchulmanQuotesSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["episode_status01", "episode_status02", "episode_status03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID" => idmap,
    "CATHERINE_SCHULMAN_QUOTES_TEST_LIVE" => "FALSE",
    "CATHERINE_SCHULMAN_QUOTES_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CATHERINE_SCHULMAN_QUOTES_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
      },
      extra || {},
    ])
    client = CatherineSchulmanQuotesSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CATHERINE_SCHULMAN_QUOTES_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CATHERINE_SCHULMAN_QUOTES_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
