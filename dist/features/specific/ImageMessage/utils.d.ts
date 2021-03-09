/**
 * These computations are indeed intriguing and filled with magic numbers,
 * but they are based on the CSS rules between the chat box container and the image element
 * and it is the only way I found to determine the maximum available horizontal dimension
 * for an image to use, but BEFORE the image is loading.
 *
 * Note: please note that this needs to be kept in sync with the aforementioned CSS changes
 */
export declare const getMaxAvailableWidth: (props: any) => number;
/**
 * Image in the bubble should be square shaped (as per the newest requirements), so this function get its w = h dimension
 * @param props
 */
export declare const getSquareImageDimension: (props: any) => number;
export declare const getImageLoaderColor: (props: any) => any;
