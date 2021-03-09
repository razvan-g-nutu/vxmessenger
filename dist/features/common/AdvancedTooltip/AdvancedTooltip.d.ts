import * as React from 'react';
import { IBoundingRect, TooltipPlacement } from "./interfaces";
interface IProps {
    children: React.ReactElement;
    target?: any;
    placement?: TooltipPlacement;
    boundingRect?: IBoundingRect;
}
declare const AdvancedTooltip: (props: IProps) => JSX.Element;
export default AdvancedTooltip;
