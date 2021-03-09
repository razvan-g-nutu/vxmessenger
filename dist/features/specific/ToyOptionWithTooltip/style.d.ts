/// <reference types="react" />
/// <reference types="@emotion/core" />
interface ITooltipContentWrapper {
    isResponsive: boolean;
}
interface ITextTitle {
    isResponsive: boolean;
}
export declare const Wrapper: {
    new (props: {}): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<{}> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const Title: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLHeadingElement> & import("react").HTMLAttributes<HTMLHeadingElement> & ITextTitle, any, import("react").ClassAttributes<HTMLHeadingElement> & import("react").HTMLAttributes<HTMLHeadingElement> & ITextTitle>;
export declare const Text: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ITextTitle, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & ITextTitle>;
export declare const Inline: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const TooltipContentWrapper: {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<ITooltipContentWrapper> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<ITooltipContentWrapper> | Readonly<ITooltipContentWrapper & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export {};
