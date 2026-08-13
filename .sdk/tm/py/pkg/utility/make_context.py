# CatherineSchulmanQuotes SDK utility: make_context

from projectname_sdk.core.context import CatherineSchulmanQuotesContext


def make_context_util(ctxmap, basectx):
    return CatherineSchulmanQuotesContext(ctxmap, basectx)
