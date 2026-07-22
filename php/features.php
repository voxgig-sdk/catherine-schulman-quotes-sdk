<?php
declare(strict_types=1);

// CatherineSchulmanQuotes SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CatherineSchulmanQuotesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CatherineSchulmanQuotesBaseFeature();
            case "test":
                return new CatherineSchulmanQuotesTestFeature();
            default:
                return new CatherineSchulmanQuotesBaseFeature();
        }
    }
}
