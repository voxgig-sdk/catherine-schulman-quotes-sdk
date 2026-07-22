# CatherineSchulmanQuotes SDK utility: make_context

from core.context import CatherineSchulmanQuotesContext


def make_context_util(ctxmap, basectx):
    return CatherineSchulmanQuotesContext(ctxmap, basectx)
