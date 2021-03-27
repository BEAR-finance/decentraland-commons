export interface LogLevels {
    trace: boolean;
    debug: boolean;
    warn: boolean;
    log: boolean;
    error: boolean;
}
export declare class Log {
    name: string;
    protected logLevels: LogLevels;
    constructor(name?: string, logLevels?: LogLevels);
    debug(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    error(...args: any[]): void;
    trace(...args: any[]): void;
    msg(priority: keyof LogLevels, message?: any, ...extras: any[]): void;
    getLogLevels(overrides: LogLevels): LogLevels;
}
