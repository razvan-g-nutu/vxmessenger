import * as React from 'react';
import { IContainerProps as IProps } from "./types";
import { IMessengerBaseButtonProps } from '../MessageSection/style';
import { DomIdentifier } from '../../hoc/withIdentifier';
export declare const expandDropdown: (props: IProps) => void;
export declare const toggleEmoticonSection: (props: IProps) => () => void;
export declare const toggleGiftSection: (props: IProps) => () => void;
export declare const toggleToySection: (props: IProps) => () => void;
export declare const getBaseButtonContent: (icon: string, text: string, isResponsive?: boolean | undefined) => JSX.Element;
export declare const getButtonWithIdentifier: (identifier: DomIdentifier) => {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IMessengerBaseButtonProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IMessengerBaseButtonProps> | Readonly<IMessengerBaseButtonProps & React.HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
