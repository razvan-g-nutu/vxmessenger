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
export declare const BaseButton: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & IBaseButtonProps, any, import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & IBaseButtonProps>;
export declare const BaseButtonContent: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export declare const FirstRowText: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export declare const SingleRowText: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export declare const SecondRowText: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export declare const VipSingleRowText: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export {};
