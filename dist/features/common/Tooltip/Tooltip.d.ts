export interface ITooltipProps {
    id: string;
    text?: string;
    children: any;
    isHtml?: boolean;
    isClickable?: boolean;
    isLight?: boolean;
    delayHide?: number;
    isSolid?: boolean;
}
declare const Tooltip: (props: ITooltipProps) => any;
export default Tooltip;
