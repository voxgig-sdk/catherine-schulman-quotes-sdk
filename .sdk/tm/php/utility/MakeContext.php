<?php
declare(strict_types=1);

// CatherineSchulmanQuotes SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CatherineSchulmanQuotesMakeContext
{
    public static function call(array $ctxmap, ?CatherineSchulmanQuotesContext $basectx): CatherineSchulmanQuotesContext
    {
        return new CatherineSchulmanQuotesContext($ctxmap, $basectx);
    }
}
