import { Action } from "redux-actions";
import { PreferenceName } from "../services/AppService/types";
/** This type stands for the function through which we can create action creators */
export declare type ActionCreator = <T extends any>(type: string) => (instanceId: string, payload?: T) => Action<IPayload<T>>;
/**
 * This type stands for any action's payload.
 * It will contain messenger instance's id on which
 * we want to alter the state and its optional payload.
 */
export interface IPayload<T = any> {
    instanceId: string;
    value: T;
}
export interface IPreferenceActionPayload {
    preferenceName: PreferenceName;
    value: boolean | number;
}
/** This type stands for all the action dispatchers received as props by smart components */
export declare type ActionDispatcher<T = any> = (instanceId: string, payload?: T) => any;
export declare enum ActionIds {
    APP = "app",
    FEATURES = "features",
    OPTIONS = "options",
    HOOKS = "hooks",
    MESSENGER = "messenger",
    MODEL = "model",
    PLATFORM_PROPS = "platformProps",
    SESSION = "session",
    USER = "user",
    VIDEOCHAT_REDUX = "videochat",
    CHAT_SAGA_COMMON = "common/chat",
    CHAT_EVENTS = "chatEvents",
    CLOSE = "close",
    ERRORS = "errors",
    PLAYER_EVENTS = "playerEvents",
    API_EVENTS = "apiEvents",
    RECHARGE = "recharge",
    UI = "ui",
    USER_PROMPT = "userPrompt",
    USER_EVENTS = "userEvents",
    FULLSCREEN = "fullscreen",
    VIDEOCHAT_SAGA = "videochat",
    CAM2CAM = "cam2cam",
    ANALYTICS = "analytics",
    CHAT_SAGA_SPECIFIC = "specific/chat",
    CHANNEL = "channel",
    CHANNEL_INFO = "channelInfo",
    CHAT_SAGA_WEBSOCKETS = "websockets/chat",
    GIFTS = "gifts",
    HANDLE_ERROR = "handleError",
    HISTORY = "history",
    IMAGE = "image",
    INIT = "init",
    LOGIN = "login",
    MESSAGE = "message",
    NEW_CHANNEL = "newChannel",
    NOOP = "noop",
    ONLINE_STATE = "onlineState",
    QUERY_BACKEND = "queryBackend",
    ROOT = "ROOT"
}
