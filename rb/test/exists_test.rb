# CatherineSchulmanQuotes SDK exists test

require "minitest/autorun"
require_relative "../CatherineSchulmanQuotes_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CatherineSchulmanQuotesSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
