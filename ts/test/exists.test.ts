
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CatherineSchulmanQuotesSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CatherineSchulmanQuotesSDK.test()
    equal(null !== testsdk, true)
  })

})
