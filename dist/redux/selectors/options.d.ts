import IStore, { IOptions } from "../store";
export declare const getOptions: (store: IStore, instanceId: string | undefined) => IOptions;
/**
 * @return the max width in pixels by which the messenger will stay in the portrait mode
 */
export declare const getSwitchToPortraitWidth: import("reselect").OutputParametricSelector<IStore, string | undefined, number, (res: IOptions) => number>;
/**
 * @return the tipping information that will be displayed in the chat
 * after the customer has sent a tip to the model.
 */
export declare const getTip: import("reselect").OutputParametricSelector<IStore, string | undefined, import("../store").ITipOption, (res: IOptions) => import("../store").ITipOption>;
/**
 * @returns {number | undefined} the initial videochat volume if it has
 * been configured by the parent platform. The value will be a float between 0 and 1.
 */
export declare const getInitialVideochatVolume: import("reselect").OutputParametricSelector<IStore, string | undefined, number | undefined, (res: IOptions) => number | undefined>;
/**
 * @return {string} - the preloader CDN image address for when the stream is loading. If no preloader
 * has been sent from the parent platform, we will use our visit-x default preloader.
 */
export declare const getPreloader: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IOptions) => string | undefined>;
/**
 * @return {string} - the link presented to the user to update his presumable outdated browser
 */
export declare const getUpdateBrowserLink: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IOptions) => string | undefined>;
/**
 * @return {string} - the Google Analytics key for metric tracking
 */
export declare const getAnalyticsKey: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IOptions) => string | undefined>;
/**
 * @return {string} - the censored content image
 */
export declare const getCensoredContentImage: import("reselect").OutputParametricSelector<IStore, string | undefined, string | undefined, (res: IOptions) => string | undefined>;
