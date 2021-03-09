interface ILogger {
    error: (text: string, details?: any) => void;
    warning: (text: string, details?: any) => void;
    debug: (text: string, details?: any) => void;
    trace: (text: string, details?: any) => void;
}
/** Exported loggers */
export declare const chat: ILogger;
export declare const player: ILogger;
export declare const saga: ILogger;
export declare const component: ILogger;
export {};
