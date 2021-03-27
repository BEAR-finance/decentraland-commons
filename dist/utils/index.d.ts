export interface KeyedObject {
    [key: string]: any;
}
export declare function promisify<T>(fn: any): (...args: any[]) => Promise<T>;
export declare function sleep(ms: number): Promise<number>;
export declare function isEmptyObject(obj: any): boolean;
export declare function omit<T>(obj: KeyedObject, keys: string[]): T;
export declare function mapOmit<T>(array: KeyedObject[], keys: string[]): T[];
export declare function pick<T>(obj: KeyedObject, keys: string[]): T;
