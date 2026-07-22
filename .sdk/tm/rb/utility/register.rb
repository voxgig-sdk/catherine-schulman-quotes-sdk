# CatherineSchulmanQuotes SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CatherineSchulmanQuotesUtility.registrar = ->(u) {
  u.clean = CatherineSchulmanQuotesUtilities::Clean
  u.done = CatherineSchulmanQuotesUtilities::Done
  u.make_error = CatherineSchulmanQuotesUtilities::MakeError
  u.feature_add = CatherineSchulmanQuotesUtilities::FeatureAdd
  u.feature_hook = CatherineSchulmanQuotesUtilities::FeatureHook
  u.feature_init = CatherineSchulmanQuotesUtilities::FeatureInit
  u.fetcher = CatherineSchulmanQuotesUtilities::Fetcher
  u.make_fetch_def = CatherineSchulmanQuotesUtilities::MakeFetchDef
  u.make_context = CatherineSchulmanQuotesUtilities::MakeContext
  u.make_options = CatherineSchulmanQuotesUtilities::MakeOptions
  u.make_request = CatherineSchulmanQuotesUtilities::MakeRequest
  u.make_response = CatherineSchulmanQuotesUtilities::MakeResponse
  u.make_result = CatherineSchulmanQuotesUtilities::MakeResult
  u.make_point = CatherineSchulmanQuotesUtilities::MakePoint
  u.make_spec = CatherineSchulmanQuotesUtilities::MakeSpec
  u.make_url = CatherineSchulmanQuotesUtilities::MakeUrl
  u.param = CatherineSchulmanQuotesUtilities::Param
  u.prepare_auth = CatherineSchulmanQuotesUtilities::PrepareAuth
  u.prepare_body = CatherineSchulmanQuotesUtilities::PrepareBody
  u.prepare_headers = CatherineSchulmanQuotesUtilities::PrepareHeaders
  u.prepare_method = CatherineSchulmanQuotesUtilities::PrepareMethod
  u.prepare_params = CatherineSchulmanQuotesUtilities::PrepareParams
  u.prepare_path = CatherineSchulmanQuotesUtilities::PreparePath
  u.prepare_query = CatherineSchulmanQuotesUtilities::PrepareQuery
  u.result_basic = CatherineSchulmanQuotesUtilities::ResultBasic
  u.result_body = CatherineSchulmanQuotesUtilities::ResultBody
  u.result_headers = CatherineSchulmanQuotesUtilities::ResultHeaders
  u.transform_request = CatherineSchulmanQuotesUtilities::TransformRequest
  u.transform_response = CatherineSchulmanQuotesUtilities::TransformResponse
}
