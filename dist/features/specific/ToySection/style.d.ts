/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IWrapper {
    isFullScreen: boolean;
    isResponsive?: boolean;
    isOpen: boolean;
    shouldUseDropdownAnimation: boolean;
    isMobileLandscape?: boolean;
    [props: string]: any;
}
interface IText {
    isReponsive?: boolean;
}
interface IInlineOption {
    hasLimitedWidth: boolean;
}
export declare const Wrapper: {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IWrapper> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const Text: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IText, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IText>;
export declare const InlineOption: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IInlineOption, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IInlineOption>;
export declare const OptionsWrapper: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
