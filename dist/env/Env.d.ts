export declare class Env {
    static isDevelopment(): boolean;
    static isProduction(): boolean;
    static isTest(): boolean;
    static getName(): unknown;
    static get<T>(name: string, fallback?: T): string | T;
    protected loaded: boolean;
    constructor();
    isLoaded(): boolean;
    load(options?: {
        path?: string;
        values?: any;
    }): void;
    isDevelopment(): boolean;
    isProduction(): boolean;
    isTest(): boolean;
    get<T>(name: string, fallback?: T): string | T;
    parse(envString: string): {
        [env: string]: string;
    };
}
