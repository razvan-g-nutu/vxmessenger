export declare type Abilities = any;
export declare type Limits = any;
export declare type Query = any;
export declare class CoreChat {
}
export declare type SourceSet = any;
export declare type TargetSet = any;
export declare type ChatConfig = any;
export declare type ChargeInfo = any;
export declare const ExitCode: {};
declare class ChatService {
    static chat: CoreChat;
    static getService(instanceId: string): ChatService;
    getChat(): Promise<any>;
    closeChat(): void;
    sendQueryResponse(): void;
}
export default ChatService;
