<?php
declare(strict_types=1);

// CatherineSchulmanQuotes SDK exists test

require_once __DIR__ . '/../catherineschulmanquotes_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CatherineSchulmanQuotesSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
