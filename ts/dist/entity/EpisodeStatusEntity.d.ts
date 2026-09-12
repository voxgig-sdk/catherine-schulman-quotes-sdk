import { CatherineSchulmanQuotesEntityBase } from '../CatherineSchulmanQuotesEntityBase';
import type { CatherineSchulmanQuotesSDK } from '../CatherineSchulmanQuotesSDK';
import type { Control } from '../types';
import type { EpisodeStatus, EpisodeStatusLoadMatch } from '../CatherineSchulmanQuotesTypes';
declare class EpisodeStatusEntity extends CatherineSchulmanQuotesEntityBase<EpisodeStatus> {
    constructor(client: CatherineSchulmanQuotesSDK, entopts: any);
    make(this: EpisodeStatusEntity): EpisodeStatusEntity;
    load(this: any, reqmatch?: EpisodeStatusLoadMatch, ctrl?: Control): Promise<EpisodeStatusEntity>;
}
export { EpisodeStatusEntity };
