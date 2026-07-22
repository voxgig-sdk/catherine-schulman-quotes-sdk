# CatherineSchulmanQuotes SDK utility: make_context
require_relative '../core/context'
module CatherineSchulmanQuotesUtilities
  MakeContext = ->(ctxmap, basectx) {
    CatherineSchulmanQuotesContext.new(ctxmap, basectx)
  }
end
