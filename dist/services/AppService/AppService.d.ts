import { IAgeVerification, IBecomeVIP, IClickExit, IClickProfile, IExitPopupAction, IOnFailedChatConfig, IOnFailedWebToken, IOnModelStatusChange, IOnSupportedVideoChatTypes, IRecharge, IVideoChatAction, IPreferenceStore, IClickImage } from "./types";
/**
 * Service handling the configured hooks from the parent platform
 */
declare class AppService {
    private static services;
    constructor(instanceId: string);
    private instanceId;
    onClickProfile: IClickProfile;
    onClickImage: IClickImage;
    onBecomeVIP: IBecomeVIP;
    preferenceStore: IPreferenceStore;
    static getService(instanceId: string): AppService;
    static destroyService(instanceId: string): void;
    getInstanceId: () => string;
    onExit: IClickExit;
    onRecharge: IRecharge;
    onVideoChatAction: IVideoChatAction;
    onExitPopupAction: IExitPopupAction;
    onAgeVerification: IAgeVerification;
    onModelStatusChange: IOnModelStatusChange;
    onSupportedVideoChatTypes: IOnSupportedVideoChatTypes;
    onFailedChatConfig: IOnFailedChatConfig;
    onFailedWebToken: IOnFailedWebToken;
}
export default AppService;
