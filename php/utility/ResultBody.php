<?php
declare(strict_types=1);

// CatherineSchulmanQuotes SDK utility: result_body

class CatherineSchulmanQuotesResultBody
{
    public static function call(CatherineSchulmanQuotesContext $ctx): ?CatherineSchulmanQuotesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
