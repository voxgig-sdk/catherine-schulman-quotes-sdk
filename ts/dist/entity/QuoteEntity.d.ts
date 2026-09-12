import { CatherineSchulmanQuotesEntityBase } from '../CatherineSchulmanQuotesEntityBase';
import type { CatherineSchulmanQuotesSDK } from '../CatherineSchulmanQuotesSDK';
import type { Control } from '../types';
import type { Quote, QuoteLoadMatch, QuoteListMatch } from '../CatherineSchulmanQuotesTypes';
declare class QuoteEntity extends CatherineSchulmanQuotesEntityBase<Quote> {
    constructor(client: CatherineSchulmanQuotesSDK, entopts: any);
    make(this: QuoteEntity): QuoteEntity;
    load(this: any, reqmatch?: QuoteLoadMatch, ctrl?: Control): Promise<QuoteEntity>;
    list(this: any, reqmatch?: QuoteListMatch, ctrl?: Control): Promise<QuoteEntity[]>;
}
export { QuoteEntity };
