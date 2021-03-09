import { ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    isResponsive: boolean;
    isGiftSectionOpen: boolean;
    isEmoticonSectionOpen: boolean;
    isToySectionOpen: boolean;
    translation: ITranslation;
    setActiveEmoticon: ActionDispatcher<string>;
    setActiveGift: ActionDispatcher<string>;
}
export declare type IContainerProps = IInstanceProps & IStoreProps;
