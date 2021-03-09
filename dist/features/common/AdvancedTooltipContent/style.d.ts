/// <reference types="react" />
/// <reference types="@emotion/core" />
import { ICorrections } from "./interfaces";
import { IDimensions } from "../AdvancedTooltip/interfaces";
declare type IContentWrapperProps = IDimensions & ICorrections;
interface IHideableComponentProps {
    isHidden?: boolean;
}
export declare const ContentWrapper: {
    new (props: IContentWrapperProps): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IContentWrapperProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IContentWrapperProps> | Readonly<IDimensions & ICorrections & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const Content: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IHideableComponentProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IHideableComponentProps>;
export declare const Arrow: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps>;
export declare const TopContentWrapper: import("styled-components").StyledComponentClass<IContentWrapperProps, any, Pick<IContentWrapperProps, "height" | "width" | "horizontal" | "vertical"> & {
    theme?: any;
}>;
export declare const BottomContentWrapper: import("styled-components").StyledComponentClass<IContentWrapperProps, any, Pick<IContentWrapperProps, "height" | "width" | "horizontal" | "vertical"> & {
    theme?: any;
}>;
export declare const LeftContentWrapper: import("styled-components").StyledComponentClass<IContentWrapperProps, any, Pick<IContentWrapperProps, "height" | "width" | "horizontal" | "vertical"> & {
    theme?: any;
}>;
export declare const RightContentWrapper: import("styled-components").StyledComponentClass<IContentWrapperProps, any, Pick<IContentWrapperProps, "height" | "width" | "horizontal" | "vertical"> & {
    theme?: any;
}>;
export declare const DownArrow: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps>;
export declare const UpArrow: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps>;
export declare const LeftArrow: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps>;
export declare const RightArrow: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IDimensions & ICorrections & IHideableComponentProps>;
export {};
