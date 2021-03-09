import * as React from 'react';
import { DomCustomClass } from "./types";
declare type ClassesCallback<Q> = (p: Q) => DomCustomClass[];
declare const withCustomClasses: <P extends {}>(WrappedComponent: any, classes: ClassesCallback<P> | DomCustomClass[]) => {
    new (props: P): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<P> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<P & React.HTMLAttributes<HTMLDivElement>> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P> | Readonly<P & React.HTMLAttributes<HTMLDivElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default withCustomClasses;
