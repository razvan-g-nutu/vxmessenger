/// <reference types="react" />
/// <reference types="@emotion/core" />
import { DomIdentifier } from '../../hoc/withIdentifier';
interface IMentionSectionWrapperProps {
    isOpen: boolean;
    shouldDisplayCustomMentionSection: boolean;
    isFullScreen: boolean;
}
export declare const selectStyles: ({ isFullScreen, shouldDisplayCustomMentionSection }: {
    isFullScreen: any;
    shouldDisplayCustomMentionSection: any;
}) => {
    container: () => {
        position: string;
        boxSizing: string;
        width: string;
        bottom: string;
        zIndex: string;
    };
    menu: (provided: any) => any;
    menuList: (provided: any) => any;
    option: (_: any, state: any) => {
        backgroundColor: string;
        color: string;
        padding: string;
        cursor: string;
    };
};
export declare const getMentionSectionWrapper: (identifier: DomIdentifier) => {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<IMentionSectionWrapperProps> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<IMentionSectionWrapperProps> | Readonly<IMentionSectionWrapperProps & import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
/**
 * Set styles for a certain div, but without styled components
 * because currently, the reference for a styled components element is not coming right.
 * FUTURE TODO try to use styled components again when upgrading the library
 * @param props
 */
export declare const getStylesForMentionSectionContainer: (props: IMentionSectionWrapperProps) => {
    position?: undefined;
    left?: undefined;
    bottom?: undefined;
    width?: undefined;
    height?: undefined;
} | {
    position: "absolute";
    left: number;
    bottom: number;
    width: string;
    height: number;
};
export {};
