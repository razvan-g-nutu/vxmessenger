/// <reference types="react" />
/// <reference types="@emotion/core" />
import { IStateOption } from "./types";
/**
 * Convert participants to options
 * @param participants
 * @param query
 */
export declare const getOptions: (participants: string[], query: string) => IStateOption[];
/**
 * Get previous option
 * @param options - options list
 * @param currentOptionId - id of the current focused option
 * @return id of the previous option, or undefined if options are empty
 */
export declare const getPreviousOption: (options: IStateOption[], currentOptionId: string | undefined) => string | undefined;
/**
 * Get next option
 * @param options - options list
 * @param currentOptionId - id of the current focused option
 * @return id of the previous option, or undefined if options are empty
 */
export declare const getNextOption: (options: IStateOption[], currentOptionId: string | undefined) => string | undefined;
/**
 * Get the HTML element for the entire selection list
 * @param elemRef - component's reference
 */
export declare const getMenuElement: (elemRef: import("react").RefObject<HTMLElement>) => Element | null | undefined;
/**
 * Get the HTML element for a certain option in selection list
 * @param elemRef - component's reference
 * @param optionId - id of the option
 */
export declare const getOptionElement: (elemRef: import("react").RefObject<HTMLElement>, optionId: string) => Element | null | undefined;
/**
 * Scrolls the list to the specified option
 * @param elemRef - component's reference
 * @param optionId - id of the option
 */
export declare const scrollTo: (elemRef: import("react").RefObject<HTMLElement>, optionId: string) => void;
/**
 * Return the amount of more (or less) scroll to be applied on the selection list
 * to have a certain target element visible
 * @param targetRect
 * @param containerRect
 */
export declare const getScrollDelta: (targetRect: DOMRect, containerRect: DOMRect) => number;
