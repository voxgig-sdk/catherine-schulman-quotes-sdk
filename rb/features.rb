# CatherineSchulmanQuotes SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CatherineSchulmanQuotesFeatures
  def self.make_feature(name)
    case name
    when "base"
      CatherineSchulmanQuotesBaseFeature.new
    when "test"
      CatherineSchulmanQuotesTestFeature.new
    else
      CatherineSchulmanQuotesBaseFeature.new
    end
  end
end
