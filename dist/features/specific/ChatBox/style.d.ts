/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IChatBoxWrapperProps {
    shouldLiftChatbox: boolean;
    shouldTrimChatbox: boolean;
    shouldApplyOverflow: boolean;
}
export declare const ChatBoxWrapper: {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IChatBoxWrapperProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IChatBoxWrapperProps> | Readonly<IChatBoxWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const ChatBoxBlanket: any;
export declare const MessageItem: any;
export declare const MessageList: any;
export declare const ImageUrlContentWrapper: any;
export declare const ImageUrlTextWrapper: any;
export declare const GroupChatParticipantsWrapper: any;
export {};
