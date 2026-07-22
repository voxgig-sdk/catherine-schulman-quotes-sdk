
import { Context } from './Context'


class CatherineSchulmanQuotesError extends Error {

  isCatherineSchulmanQuotesError = true

  sdk = 'CatherineSchulmanQuotes'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CatherineSchulmanQuotesError
}

