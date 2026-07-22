<?php
declare(strict_types=1);

// CatherineSchulmanQuotes SDK utility: result_headers

class CatherineSchulmanQuotesResultHeaders
{
    public static function call(CatherineSchulmanQuotesContext $ctx): ?CatherineSchulmanQuotesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
