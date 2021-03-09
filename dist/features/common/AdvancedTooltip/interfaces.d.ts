export declare enum TooltipPlacement {
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}
/**
 * Dimensions in pixels for the tooltip
 */
export interface IDimensions {
    width: number;
    height: number;
}
/**
 * Rectangular coordinates (in pixels) of the area in which the tooltip should be forced to stay
 */
export interface IBoundingRect {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
