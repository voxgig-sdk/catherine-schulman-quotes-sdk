<?php
declare(strict_types=1);

// CatherineSchulmanQuotes SDK utility: prepare_body

class CatherineSchulmanQuotesPrepareBody
{
    public static function call(CatherineSchulmanQuotesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
