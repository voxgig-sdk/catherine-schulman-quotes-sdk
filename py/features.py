# CatherineSchulmanQuotes SDK feature factory

from feature.base_feature import CatherineSchulmanQuotesBaseFeature
from feature.test_feature import CatherineSchulmanQuotesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CatherineSchulmanQuotesBaseFeature(),
        "test": lambda: CatherineSchulmanQuotesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
