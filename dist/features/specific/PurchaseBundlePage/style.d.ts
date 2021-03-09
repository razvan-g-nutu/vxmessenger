/// <reference types="react" />
/// <reference types="@emotion/core" />
export declare const CloseButton: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const ContentWrapper: {
    new (props: any): {
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: (Readonly<{}> & Readonly<{
            children?: import("react").ReactNode;
        }>) | (Readonly<import("react").HTMLAttributes<HTMLElement>> & Readonly<{
            children?: import("react").ReactNode;
        }>);
        state: Readonly<{}>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}> | Readonly<import("react").HTMLAttributes<HTMLElement>>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
export declare const Content: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const ImageWrapper: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Image: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, any, import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>;
export declare const TextWrapper: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Footer: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const BundleName: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const ContainsText: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const PurchaseButton: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const PurchaseGiftsList: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>>;
export declare const PurchaseGiftItem: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, any, import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>>;
export declare const GiftBundleInformation: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
