
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CatherineSchulmanQuotesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CatherineSchulmanQuotesSDK.test()
    equal(testsdk instanceof CatherineSchulmanQuotesSDK, true,
      'CatherineSchulmanQuotesSDK.test() must return a client synchronously')
  })

})
