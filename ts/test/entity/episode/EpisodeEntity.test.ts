

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CatherineSchulmanQuotesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('EpisodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CATHERINE_SCHULMAN_QUOTES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CATHERINE_SCHULMAN_QUOTES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CatherineSchulmanQuotesSDK.test()
    const ent = testsdk.Episode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CATHERINE_SCHULMAN_QUOTES_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"date","req":false,"short":"Release date of the episode","type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"short":"Description or summary of the episode","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the episode","type":"`$INTEGER`","index$":2},{"active":true,"name":"program","req":false,"short":"Name of the program","type":"`$STRING`","index$":3},{"active":true,"name":"title","req":false,"short":"Title of the episode","type":"`$STRING`","index$":4},{"active":true,"format":"uri","name":"url","req":false,"short":"URL to the episode","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"episode","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /last/episodes/all","json":"{\"operationId\":\"getLastEpisodesAll\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"date\":{\"description\":\"Release date of the episode\",\"format\":\"date\",\"type\":\"string\"},\"description\":{\"description\":\"Description or summary of the episode\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the episode\",\"example\":3,\"type\":\"integer\"},\"program\":{\"description\":\"Name of the program\",\"example\":\"zakladka\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the episode\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the episode\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"List of latest episodes from all programs\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/last/episodes/all","segments":[{"lit":"last"},{"lit":"episodes"},{"lit":"all"}],"select":{"$action":"all"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":3,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /episodes/zakladka/{id}","json":"{\"operationId\":\"getEpisodeById\",\"parameters\":[{\"description\":\"The unique identifier of the episode\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":3,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"date\":{\"description\":\"Release date of the episode\",\"format\":\"date\",\"type\":\"string\"},\"description\":{\"description\":\"Description or summary of the episode\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the episode\",\"example\":3,\"type\":\"integer\"},\"program\":{\"description\":\"Name of the program\",\"example\":\"zakladka\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the episode\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the episode\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The requested episode\"},\"404\":{\"description\":\"Episode not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episodes/zakladka/{id}","segments":[{"lit":"episodes"},{"lit":"zakladka"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /episodes/zakladka/random","json":"{\"operationId\":\"getRandomEpisode\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"date\":{\"description\":\"Release date of the episode\",\"format\":\"date\",\"type\":\"string\"},\"description\":{\"description\":\"Description or summary of the episode\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the episode\",\"example\":3,\"type\":\"integer\"},\"program\":{\"description\":\"Name of the program\",\"example\":\"zakladka\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the episode\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the episode\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"A random episode\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episodes/zakladka/random","segments":[{"lit":"episodes"},{"lit":"zakladka"},{"lit":"random"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":0}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"episode_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"episode_ref01","srcdatavar":"episode_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_ref01"}}],"index$":1}]}, 'Episode')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_ref01_data = Object.values(setup.data.existing.episode)[0] as any

    // LIST
    const episode_ref01_ent = client.Episode()
    const episode_ref01_match: any = {}

    const episode_ref01_list = (await episode_ref01_ent.list(episode_ref01_match)).map((e: any) => e.data())


    // LOAD
    const episode_ref01_match_dt0: any = {}
    episode_ref01_match_dt0.id = episode_ref01_data.id
    const episode_ref01_data_dt0 = (await episode_ref01_ent.load(episode_ref01_match_dt0)).data()
    assert(episode_ref01_data_dt0.id === episode_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/episode/EpisodeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CatherineSchulmanQuotesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['episode01','episode02','episode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_ENTID': idmap,
    'CATHERINE_SCHULMAN_QUOTES_TEST_LIVE': 'FALSE',
    'CATHERINE_SCHULMAN_QUOTES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_ENTID']

  const live = 'TRUE' === env.CATHERINE_SCHULMAN_QUOTES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CatherineSchulmanQuotesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CATHERINE_SCHULMAN_QUOTES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
