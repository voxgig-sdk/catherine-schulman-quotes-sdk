-- CatherineSchulmanQuotes SDK error

local CatherineSchulmanQuotesError = {}
CatherineSchulmanQuotesError.__index = CatherineSchulmanQuotesError


function CatherineSchulmanQuotesError.new(code, msg, ctx)
  local self = setmetatable({}, CatherineSchulmanQuotesError)
  self.is_sdk_error = true
  self.sdk = "CatherineSchulmanQuotes"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CatherineSchulmanQuotesError:error()
  return self.msg
end


function CatherineSchulmanQuotesError:__tostring()
  return self.msg
end


return CatherineSchulmanQuotesError
