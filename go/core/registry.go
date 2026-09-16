package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewEpisodeEntityFunc func(client *CatherineSchulmanQuotesSDK, entopts map[string]any) CatherineSchulmanQuotesEntity

var NewEpisodeStatusEntityFunc func(client *CatherineSchulmanQuotesSDK, entopts map[string]any) CatherineSchulmanQuotesEntity

var NewQuoteEntityFunc func(client *CatherineSchulmanQuotesSDK, entopts map[string]any) CatherineSchulmanQuotesEntity

