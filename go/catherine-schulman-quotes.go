package voxgigcatherineschulmanquotessdk

import (
	"github.com/voxgig-sdk/catherine-schulman-quotes-sdk/go/core"
	"github.com/voxgig-sdk/catherine-schulman-quotes-sdk/go/entity"
	"github.com/voxgig-sdk/catherine-schulman-quotes-sdk/go/feature"
	_ "github.com/voxgig-sdk/catherine-schulman-quotes-sdk/go/utility"
)

// Type aliases preserve external API.
type CatherineSchulmanQuotesSDK = core.CatherineSchulmanQuotesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CatherineSchulmanQuotesEntity = core.CatherineSchulmanQuotesEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CatherineSchulmanQuotesError = core.CatherineSchulmanQuotesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewEpisodeEntityFunc = func(client *core.CatherineSchulmanQuotesSDK, entopts map[string]any) core.CatherineSchulmanQuotesEntity {
		return entity.NewEpisodeEntity(client, entopts)
	}
	core.NewEpisodeStatusEntityFunc = func(client *core.CatherineSchulmanQuotesSDK, entopts map[string]any) core.CatherineSchulmanQuotesEntity {
		return entity.NewEpisodeStatusEntity(client, entopts)
	}
	core.NewQuoteEntityFunc = func(client *core.CatherineSchulmanQuotesSDK, entopts map[string]any) core.CatherineSchulmanQuotesEntity {
		return entity.NewQuoteEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCatherineSchulmanQuotesSDK = core.NewCatherineSchulmanQuotesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCatherineSchulmanQuotesSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CatherineSchulmanQuotesSDK  { return NewCatherineSchulmanQuotesSDK(nil) }
func Test() *CatherineSchulmanQuotesSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
