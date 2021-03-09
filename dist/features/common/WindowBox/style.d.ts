/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IWindowBoxWrapperProps {
    isOpen: boolean;
    isFullScreen: boolean;
    shouldUseDropdownAnimation: boolean;
    isResponsive?: boolean;
    isWindowForUserPrompt?: boolean;
}
export declare const WindowContentWrapper: any;
export declare const WindowWrapper: {
    new (props: IWindowBoxWrapperProps): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IWindowBoxWrapperProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IWindowBoxWrapperProps> | Readonly<IWindowBoxWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const WindowTitleWrapper: any;
export {};
