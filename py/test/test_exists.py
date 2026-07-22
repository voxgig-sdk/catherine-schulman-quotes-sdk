# ProjectName SDK exists test

import pytest
from catherineschulmanquotes_sdk import CatherineSchulmanQuotesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CatherineSchulmanQuotesSDK.test(None, None)
        assert testsdk is not None
