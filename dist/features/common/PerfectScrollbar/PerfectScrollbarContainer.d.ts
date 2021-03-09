import * as React from 'react';
import { ScrollBarProps } from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ITheme from '../../../themes/interfaces';
export declare enum ScrollPosition {
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    BETWEEN = "BETWEEN"
}
interface IComponentProps {
    className?: string;
    shouldScrollTop?: boolean;
    shouldUnsetScroll?: boolean;
    backgroundColor?: string;
    isFullscreen?: boolean;
    theme?: ITheme;
    hasFullWidth?: boolean;
    hasFullHeight?: boolean;
    config?: ScrollBarProps;
    onScroll?: (position: ScrollPosition) => void;
}
declare type IProps = IComponentProps;
declare class PerfectScrollbarContainer extends React.Component<IProps> {
    private static RailYClassName;
    private static ThumbYClassName;
    protected scrollBarRef: any;
    private scrollTimer;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleScroll;
    private handleWheel;
    private isOnTop;
    private isOnBottom;
    private refCallback;
    scrollDown: () => Promise<void>;
    scrollUp: () => Promise<void>;
    updateScroll: () => Promise<void>;
    scrollYTo: (anchorId?: string | undefined) => void;
}
export default PerfectScrollbarContainer;
