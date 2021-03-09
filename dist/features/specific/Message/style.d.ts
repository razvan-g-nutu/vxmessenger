/// <reference types="react" />
/// <reference types="@emotion/core" />
import ITheme from "../../../themes/interfaces";
interface IClientMessageWrapperProps {
    isMobileLandscape?: boolean;
    isFullscreen?: boolean;
    isConsecutiveGroupMessage?: boolean;
    isLastConsecutiveGroupMessage?: boolean;
    isSoloMessage?: boolean;
}
interface IModelMessageAndImageWrapperProps {
    isMobileLandscape?: boolean;
    isConsecutiveGroupMessage?: boolean;
    isLastConsecutiveGroupMessage?: boolean;
    isSoloMessage?: boolean;
    /**
     * In some messenger contexts (fullscreen or responsive rendering),
     * the profile picture to the left of the message bubble is not rendered
     */
    isContextWithoutProfilePicture?: boolean;
}
interface IMessageBaseProps {
    hasImage?: boolean;
    isFullscreen?: boolean;
    isConsecutiveGroupMessage?: boolean;
    isVideoChatInGroupMode?: boolean;
    isGroupChatUserMessage?: boolean;
    shouldRenderAudioMessage?: boolean;
}
interface IToyMessageWrapper {
    isActive?: boolean;
    shouldApplyMargin?: boolean;
}
interface IModelMessageWrapper {
    isConsecutiveGroupMessage?: boolean;
    isLastConsecutiveGroupMessage?: boolean;
    isSoloMessage?: boolean;
    hasProfilePicture?: boolean;
}
export declare const getModelMessageBackgroundColor: (theme: ITheme, isVideoChatInGroupMode?: boolean | undefined, isGroupChatUserMessage?: boolean | undefined) => string;
export declare const getClientMessageBackgroundColor: (theme: ITheme, isVideoChatInGroupMode?: boolean | undefined) => string;
export declare const getClientMessagePadding: (props: IClientMessageWrapperProps) => string;
export declare const getReceivedMessagePadding: (props: IModelMessageAndImageWrapperProps) => string;
export declare const getMaxWidthForReceivedMessage: (props: IModelMessageWrapper) => string;
export declare const messageAnimation: any;
export declare const MessageBase: any;
export declare const NotSystemMessageBase: any;
export declare const GroupChatPictureWrapper: any;
export declare const ClientMessage: {
    new (props: IMessageBaseProps): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IMessageBaseProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IMessageBaseProps> | Readonly<IMessageBaseProps & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const GroupChatModelInfoWrapper: any;
export declare const GroupChatModelName: any;
export declare const ToyMessageWrapper: {
    new (props: IToyMessageWrapper): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IToyMessageWrapper> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IToyMessageWrapper> | Readonly<IToyMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const FullscreenSystemMessage: any;
export declare const MessageContentWrapper: any;
export declare const TrashIcon: any;
export declare const TimeSection: any;
export declare const ProfilePictureWrapper: any;
export declare const ClientMessageWrapper: any;
export declare const ContentWrapper: any;
export declare const FullscreenSystemMessageWrapper: any;
export declare const ReceivedMessageAndImageWrapper: any;
export declare const ReceivedMessageWrapper: {
    new (props: IModelMessageWrapper): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IModelMessageWrapper> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IModelMessageWrapper> | Readonly<IModelMessageWrapper & import("react").HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const FullscreenReceivedMessageWrapper: {
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
export declare const GroupChatUsername: any;
export {};
