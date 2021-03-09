/// <reference types="react" />
/// <reference types="@emotion/core" />
export interface IMessengerBaseButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    isInverted?: boolean;
    isActive?: boolean;
    isDropDownOpen?: boolean;
    isResponsive?: boolean;
    hasOnlySendButton?: boolean;
}
interface IMessengerSectionWrapperProps {
    isFullscreen: boolean;
}
export declare const MessageSectionContainerWrapper: any;
export declare const MessageSectionWrapper: any;
export declare const MessengerBox: any;
export declare const MessengerSectionWrapper: {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IMessengerSectionWrapperProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IMessengerSectionWrapperProps> | Readonly<IMessengerSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const MessengerButtonsWrapper: any;
export declare const MessengerBaseButton: any;
export declare const MessengerBaseButtonIcon: any;
export declare const ToyControlBaseButtonIcon: any;
export declare const ToyControlIcon: any;
export declare const DropDownButton: any;
export declare const DropDownContent: any;
export declare const MessageSectionPopups: any;
export {};
