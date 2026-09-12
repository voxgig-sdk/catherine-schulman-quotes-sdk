export interface Episode {
    date?: string;
    description?: string;
    id?: number;
    program?: string;
    title?: string;
    url?: string;
}
export interface EpisodeLoadMatch {
    id: number;
}
export interface EpisodeListMatch {
    date?: string;
    description?: string;
    id?: number;
    program?: string;
    title?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface EpisodeStatus {
    lastEpisodeDate?: string;
    lastEpisodeId?: number;
    program?: string;
    status?: string;
}
export interface EpisodeStatusLoadMatch {
    lastEpisodeDate?: string;
    lastEpisodeId?: number;
    program?: string;
    status?: string;
}
export interface Quote {
    author?: string;
    date?: string;
    id?: number;
    source?: string;
    text?: string;
}
export interface QuoteLoadMatch {
    id: number;
    $action?: string;
    [action: string]: any;
}
export interface QuoteListMatch {
    q: string;
}
