import IStore from "../store";
export declare const getHooks: (store: IStore, instanceId: string | undefined) => import("../store").HooksArguments;
/**
 * @param hookName
 * @return array of arguments (if any) for the previous call of the specified hook
 */
export declare const geHook: (hookName: "onClickProfile" | "onClickImage" | "onExit" | "onRecharge" | "onVideoChatAction" | "onExitPopupAction" | "onAgeVerification" | "onModelStatusChange" | "onSupportedVideoChatTypes" | "onFailedChatConfig" | "onFailedWebToken" | "onBecomeVIP") => import("reselect").OutputParametricSelector<IStore, string | undefined, any, (res: import("../store").HooksArguments) => any>;
