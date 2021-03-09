import { IBoundingRect, TooltipPlacement } from "../AdvancedTooltip/interfaces";
export declare const getBoundingRect: (boundingRect?: IBoundingRect | undefined) => IBoundingRect;
declare type Rect = ClientRect | DOMRect | IBoundingRect;
/**
 * Transform fractional values inside the rectangle into integral values, by applying Math.floor
 * @param rect
 */
export declare const getRectWithIntegralValues: (rect: Rect) => {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export declare const canAdjustHorizontally: (placement?: TooltipPlacement | undefined) => boolean;
export declare const canAdjustVertically: (placement?: TooltipPlacement | undefined) => boolean;
export {};
