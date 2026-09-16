# CatherineSchulmanQuotes SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CatherineSchulmanQuotesFeatures
  def self.make_feature(name)
    case name
    when "base"
      CatherineSchulmanQuotesBaseFeature.new
    when "ratelimit"
      CatherineSchulmanQuotesRatelimitFeature.new
    when "retry"
      CatherineSchulmanQuotesRetryFeature.new
    when "test"
      CatherineSchulmanQuotesTestFeature.new
    when "timeout"
      CatherineSchulmanQuotesTimeoutFeature.new
    else
      CatherineSchulmanQuotesBaseFeature.new
    end
  end
end
