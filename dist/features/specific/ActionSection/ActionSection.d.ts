import * as React from 'react';
export interface IProps {
    isVip: boolean;
    isFullscreen: boolean;
    shouldDisplayIcon: boolean;
    isForInformationDialog?: boolean;
    buttonsVisibility: {
        liveChat: boolean;
        livePreview: boolean;
        privateChat: boolean;
        voyeurChat: boolean;
        cam2Cam: boolean;
    };
}
declare const _default: {
    new (props: IProps): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<IProps & React.HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IProps> | Readonly<IProps & React.HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
