/// <reference types="react" />
/// <reference types="@emotion/core" />
interface IImageProps {
    width?: number;
    height?: number;
    isHidden?: boolean;
}
export declare const ImageWrapper: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const ImageLoaderWrapper: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Image: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLImageElement> & import("react").ImgHTMLAttributes<HTMLImageElement> & IImageProps, any, import("react").ClassAttributes<HTMLImageElement> & import("react").ImgHTMLAttributes<HTMLImageElement> & IImageProps>;
export {};
