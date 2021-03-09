import * as React from 'react';
import { DomIdentifier } from "./types";
declare const withIdentifier: <P extends {}>(WrappedComponent: any, id: DomIdentifier) => {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<P> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<P & React.HTMLAttributes<HTMLElement>> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withIdentifier;
