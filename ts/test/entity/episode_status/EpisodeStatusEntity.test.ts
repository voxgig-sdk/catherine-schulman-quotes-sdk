

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('EpisodeStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CATHERINE_SCHULMAN_QUOTES_TEST_LIVE=TRUE.
  afterEach(liveDelay('CATHERINE_SCHULMAN_QUOTES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CatherineSchulmanQuotesSDK.test()
    const ent = testsdk.EpisodeStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CATHERINE_SCHULMAN_QUOTES_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"lastEpisodeDate":{"a":true,"fo":"date","h":"Last Episode Date","n":"lastEpisodeDate","r":false,"sh":"Date of the last episode","t":"`$STRING`","key$":"lastEpisodeDate","index$":0},"lastEpisodeId":{"a":true,"h":"Last Episode Id","n":"lastEpisodeId","r":false,"sh":"ID of the last episode","t":"`$INTEGER`","key$":"lastEpisodeId","index$":1},"program":{"a":true,"h":"Program","n":"program","r":false,"sh":"Name of the program","t":"`$STRING`","key$":"program","index$":2},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Current status of the program","t":"`$STRING`","key$":"status","index$":3}},"name":"episode_status","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /last/episodes/status","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/last/episodes/status","q":{},"r":{},"s":[{"lit":"last"},{"lit":"episodes"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"episode_status","name__orig":"episode_status","Name":"EpisodeStatus","name_":"episode_status","name-":"episode-status","NAME":"EPISODE_STATUS","index$":1}, {"active":true,"entity":"episode_status","key$":"BasicEpisodeStatusFlow","kind":"basic","name":"BasicEpisodeStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"episode_status_ref01","srcdatavar":"episode_status_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-episode_status_ref01"}}],"index$":0}]}, 'EpisodeStatus', {"GET /last/episodes/status":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_status_ref01_data = Object.values(setup.data.existing.episode_status)[0] as any

    // LOAD
    const episode_status_ref01_ent = client.EpisodeStatus()
    const episode_status_ref01_match_dt0: any = {}
    const episode_status_ref01_data_dt0 = (await episode_status_ref01_ent.load(episode_status_ref01_match_dt0)).data()
    assert(null != episode_status_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/episode_status/EpisodeStatusTestData.json')

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
    ['episode_status01','episode_status02','episode_status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID': idmap,
    'CATHERINE_SCHULMAN_QUOTES_TEST_LIVE': 'FALSE',
    'CATHERINE_SCHULMAN_QUOTES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID']

  const live = 'TRUE' === env.CATHERINE_SCHULMAN_QUOTES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CATHERINE_SCHULMAN_QUOTES_TEST_EPISODE_STATUS_ENTID']
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
  
