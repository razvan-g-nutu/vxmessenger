import { ThemedStyledProps } from "styled-components";
import { ITheme } from '../../../themes';
import { MessageDirection } from "../../../redux/store";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IComponentProps {
    id: string;
    src: string;
    direction: MessageDirection;
    containerWidth: number;
    imgWidth: number;
    imgHeight: number;
    onClick?: () => void;
    onLoad?: () => void;
}
export interface IStoreProps {
    isFullscreen: boolean;
    showCensoredContent: boolean;
    censoredContentImage: string;
}
export interface IState {
    isLoading: boolean;
}
export declare type IProps = ThemedStyledProps<IInstanceProps & IComponentProps & IStoreProps, ITheme>;
