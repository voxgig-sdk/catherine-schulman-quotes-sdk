import { CatherineSchulmanQuotesEntityBase } from '../CatherineSchulmanQuotesEntityBase';
import type { CatherineSchulmanQuotesSDK } from '../CatherineSchulmanQuotesSDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch, EpisodeListMatch } from '../CatherineSchulmanQuotesTypes';
declare class EpisodeEntity extends CatherineSchulmanQuotesEntityBase<Episode> {
    constructor(client: CatherineSchulmanQuotesSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
