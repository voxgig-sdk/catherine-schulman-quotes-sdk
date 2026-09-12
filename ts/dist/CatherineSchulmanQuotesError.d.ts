import { Context } from './Context';
declare class CatherineSchulmanQuotesError extends Error {
    isCatherineSchulmanQuotesError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { CatherineSchulmanQuotesError };
