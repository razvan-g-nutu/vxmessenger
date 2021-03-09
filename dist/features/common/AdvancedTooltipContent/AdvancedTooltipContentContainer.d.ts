import * as React from "react";
import { ICorrections } from "./interfaces";
import { IBoundingRect, IDimensions, TooltipPlacement } from "../AdvancedTooltip/interfaces";
interface IProps {
    children: any;
    target?: any;
    placement?: TooltipPlacement;
    boundingRect?: IBoundingRect;
}
interface IContentProps {
    isHidden?: boolean;
}
declare type IState = ICorrections & IDimensions & IContentProps;
/**
 * @class react class component dealing with tooltips displayed with absolute positioning
 */
declare class AdvancedTooltipContentContainer extends React.Component<IProps, IState> {
    constructor(props: any);
    private isUnmounted;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IProps, prevState: IState): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /**
     * call the provided callback in an animation frame context
     * @param callback
     */
    private doInAnimationFrame;
    private grabDimensionsAndCorrections;
    private updateCorrections;
    private getViewportCorrections;
}
export default AdvancedTooltipContentContainer;
