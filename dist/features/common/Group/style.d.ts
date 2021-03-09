/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IGroupWrapperProps {
    showArrow?: boolean;
}
interface IGroupContentWrapperProps {
    isOpen?: boolean;
}
interface IGroupTextWrapper {
    shouldIncreaseMessageFontSize?: boolean;
}
export declare const GroupContentWrapper: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IGroupContentWrapperProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & IGroupContentWrapperProps>;
export declare const GroupWrapper: {
    new (props: IGroupWrapperProps): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IGroupWrapperProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IGroupWrapperProps> | Readonly<IGroupWrapperProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const GroupTextWrapper: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & IGroupTextWrapper, any, import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & IGroupTextWrapper>;
export declare const TextArrow: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, any, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>;
export {};
