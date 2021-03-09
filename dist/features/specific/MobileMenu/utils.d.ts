import { IContainerProps as IProps } from "./types";
import { VideoChatType } from '../../../redux/store';
export declare const onToyButtonClick: (props: IProps) => () => void;
export declare const onActionButtonClick: (props: IProps) => (type: VideoChatType) => () => void;
export declare const toggleGiftSection: (props: IProps) => () => void;
