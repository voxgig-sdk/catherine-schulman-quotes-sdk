package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewEpisodeEntityFunc func(client *CatherineSchulmanQuotesSDK, entopts map[string]any) CatherineSchulmanQuotesEntity

var NewEpisodeStatusEntityFunc func(client *CatherineSchulmanQuotesSDK, entopts map[string]any) CatherineSchulmanQuotesEntity

var NewQuoteEntityFunc func(client *CatherineSchulmanQuotesSDK, entopts map[string]any) CatherineSchulmanQuotesEntity

