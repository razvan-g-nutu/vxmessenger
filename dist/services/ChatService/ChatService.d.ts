import { Abilities, ChargeInfo, Chat as CoreChat, ChatConfig, ExitCode, Limits, Query, SourceSet, TargetSet, User, UserEvent, UserEventType } from 'vchat-core';
import { IOnMessagePayload, PrivateChatInvitationAnswer, PromiseResult } from "../types";
declare class ChatService {
    private static services;
    private static listeners;
    constructor(instanceId: string);
    private instanceId;
    private chat;
    private chatConfig;
    private sources;
    private targets;
    private chatStatus;
    private exitCode;
    private initializing;
    private audioState;
    static registerLimitsChangeListener(listener: (instanceId: string, limits: Partial<Limits>) => any): void;
    static registerVideoLimitWarningListener(listener: (instanceId: string, isBelowThreshold: boolean, value: number) => any): void;
    static registerAbilityUpdateListener(listener: (instanceId: string, name: keyof Abilities, value: boolean) => any): void;
    static registerSingleModeUpdateListener(listener: (instanceId: string, value: boolean) => any): void;
    static registerQueryListener(listener: (instanceId: string, query: Query) => any): void;
    static registerChatStopListener(listener: (instanceId: string, code: ExitCode) => any): void;
    static registerOnMessageListener(handler: (instanceId: string, payload: IOnMessagePayload) => any): void;
    static registerChatPauseListener(listener: (instanceId: string) => any): void;
    static registerChatResumeListener(listener: (instanceId: string) => any): void;
    static registerTextMuteUpdateListener(listener: (instanceId: string, isMuted: boolean) => any): void;
    static registerAudioMuteUpdateListener(listener: (instanceId: string, isMuted: boolean) => any): void;
    static registerStreamSourceUpdateListener(listener: (instanceId: string, updatedSourceSet: SourceSet) => any): void;
    static registerChargeInfoListener(listener: (instanceId: string, chargeInfo: ChargeInfo) => any): void;
    static registerUserEventListener(listener: (instanceId: string, event: UserEvent) => any): void;
    static registerChatInitListener(listener: (instanceId: string, chat: CoreChat | User[]) => any): void;
    static getService(instanceId: string): ChatService;
    static destroyService(instanceId: string): void;
    private getChatHandler;
    private initializeChat;
    private destroyChat;
    private isNewChatConfig;
    private getNewChat;
    private getExistingOrBuildAChat;
    getInstanceId: () => string;
    getChat: (chatConfig: ChatConfig) => Promise<PromiseResult<CoreChat, any>>;
    sendQueryResponse: (chat: CoreChat, key: string, response: PrivateChatInvitationAnswer) => Promise<PromiseResult<any, any>>;
    /**
     * It starts the message communication between the client and the model through
     * the chat instance. If the the ability canText is true => enable the text first
     * and then use the sendMessage function.
     */
    startText: (chat: CoreChat) => Promise<boolean>;
    sendMessage: (text: string) => Promise<any>;
    sendMediaFile: (file: File, messageKey?: string | undefined) => Promise<PromiseResult<any, any>>;
    getStream: (chat: CoreChat, previewMode?: boolean | undefined) => Promise<PromiseResult<SourceSet, any>>;
    startPrivateChat: (chat: CoreChat) => Promise<PromiseResult<any, any>>;
    stopUpstream: () => Promise<PromiseResult<"OK", any>>;
    getUpstream: (chat: CoreChat) => Promise<PromiseResult<TargetSet, any>>;
    closeChat: (isUserIntended?: boolean | undefined) => Promise<PromiseResult<"OK", any>>;
    sendTip: (chat: CoreChat, amount: number) => Promise<PromiseResult<any, any>>;
    sendMetrics: (info: any) => void;
    sendCharge: (chat: CoreChat, amount: number) => Promise<PromiseResult<any, any>>;
    getChargeInfo: (chat: CoreChat) => Promise<PromiseResult<ChargeInfo, any>>;
    sendAudioState: (enabled: boolean) => Promise<any>;
    uploadImage: (chat: CoreChat, data: FormData) => Promise<PromiseResult<any, any>>;
}
export default ChatService;
export { Abilities, Limits, Query, CoreChat, SourceSet, TargetSet, ChatConfig, ChargeInfo, ExitCode, User, UserEvent, UserEventType };
