export declare enum AnalyticsCategories {
    MESSENGER = "Messenger",
    VIDEOCHAT = "Videochat"
}
export declare enum AnalyticsActions {
    CONTACT_NOTE = "The client opened the contact note",
    GIFT_BUNDLES = "The client opened the gifts bundles tab",
    TOY_SECTION = "The client opened the toy section",
    MUTE_MODEL = "The client has muted the model",
    FULLSCREEN_VIDEOCHAT = "The client is watching the stream in fullscreen"
}
declare class AnalyticsService {
    private static key;
    static initialize(newKey: string): void;
    static triggerEvent(category: AnalyticsCategories, action: AnalyticsActions): void;
}
export default AnalyticsService;
