import { EpisodeEntity } from './entity/EpisodeEntity';
import { EpisodeStatusEntity } from './entity/EpisodeStatusEntity';
import { QuoteEntity } from './entity/QuoteEntity';
export type * from './CatherineSchulmanQuotesTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CatherineSchulmanQuotesEntityBase } from './CatherineSchulmanQuotesEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CatherineSchulmanQuotesSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Episode(entopts?: Record<string, any>): EpisodeEntity;
    EpisodeStatus(entopts?: Record<string, any>): EpisodeStatusEntity;
    Quote(entopts?: Record<string, any>): QuoteEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CatherineSchulmanQuotesSDK;
    tester(testopts?: any, sdkopts?: any): CatherineSchulmanQuotesSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CatherineSchulmanQuotesSDK;
export { stdutil, config, BaseFeature, CatherineSchulmanQuotesEntityBase, CatherineSchulmanQuotesSDK, SDK, };
