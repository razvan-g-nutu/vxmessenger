/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IImage {
    image: string;
    isActive?: boolean;
    canPlayOption?: boolean;
}
interface IWrapper {
    isClickable?: boolean;
}
interface IText {
    isResponsive: boolean;
    hasTooltipOpen?: boolean;
}
export declare const Wrapper: {
    new (props: IWrapper): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IWrapper> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IWrapper> | Readonly<IWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const ImageWrapper: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Image: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IImage, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IImage>;
export declare const Text: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IText, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IText>;
export declare const Lock: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const PlayingStatusWrapper: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const PlayingStatus: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export {};
