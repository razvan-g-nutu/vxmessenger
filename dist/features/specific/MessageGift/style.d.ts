/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IGiftStyle {
    url: string | undefined;
    hasEnlargedContent?: boolean;
}
export declare const MessageGiftWrapper: {
    new (props: IGiftStyle): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IGiftStyle> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IGiftStyle> | Readonly<IGiftStyle & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export {};
