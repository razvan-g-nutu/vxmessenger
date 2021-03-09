import * as React from 'react';
export interface IInstanceProps {
    instanceId: string;
}
declare const withInstanceInfo: <P extends object>(WrappedComponent: React.ComponentType<P & IInstanceProps>) => {
    new (props: (P & IInstanceProps) | Readonly<P & IInstanceProps>): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & IInstanceProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & IInstanceProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & IInstanceProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & IInstanceProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & IInstanceProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & IInstanceProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & IInstanceProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & IInstanceProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & IInstanceProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: P & IInstanceProps, context: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P & IInstanceProps>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<P & IInstanceProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P & IInstanceProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P & IInstanceProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P & IInstanceProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P & IInstanceProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P & IInstanceProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P & IInstanceProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P & IInstanceProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withInstanceInfo;
