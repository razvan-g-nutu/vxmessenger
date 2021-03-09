/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IBaseButtonWrapperProps {
    isResponsive?: boolean;
    isFullScreen?: boolean;
    isForActionSection?: boolean;
}
export interface IBaseButtonProps {
    isSelected?: boolean;
}
export declare const BaseButtonWrapper: {
    new (props: IBaseButtonWrapperProps): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IBaseButtonWrapperProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IBaseButtonWrapperProps> | Readonly<IBaseButtonWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const BaseButton: any;
export declare const BaseButtonContent: any;
export declare const FirstRowText: any;
export declare const SingleRowText: any;
export declare const SecondRowText: any;
export declare const VipSingleRowText: any;
export {};
