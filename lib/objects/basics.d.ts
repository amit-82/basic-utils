export declare type UnknownObject = Record<string | number | symbol, unknown>;
export declare type StringNumberObject = string | number | UnknownObject;
export declare function isObject(target: unknown): boolean;
export declare function getNestedValueByKey(target: UnknownObject | null | undefined, key: string): any;
