import { ICurrency, ITranslation, VideoChatType } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IContainerComponentProps {
    shouldDisplayIcon?: boolean;
    isForActionSection?: boolean;
}
export interface IStoreProps {
    price: number;
    currency: ICurrency;
    hasFreeChatDuration: boolean;
    translation: ITranslation;
    startVideoChatType: ActionDispatcher<VideoChatType>;
}
export declare type IContainerProps = IContainerComponentProps & IStoreProps & IInstanceProps;
