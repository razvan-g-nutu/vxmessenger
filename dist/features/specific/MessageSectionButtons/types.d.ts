import { IOptions, ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    hasEmoticons: boolean;
    hasImageUpload: boolean;
    shouldShowTipping: boolean;
    isResponsive: boolean;
    isInteractive: boolean;
    isDropDownOpen: boolean;
    isGiftSectionOpen: boolean;
    isToySectionOpen: boolean;
    hasToyControl: boolean;
    isGiftButtonVisible: boolean;
    isEmoticonSectionOpen: boolean;
    options: IOptions;
    translation: ITranslation;
    toggleDropDown: ActionDispatcher;
    openGiftSection: ActionDispatcher;
    closeGiftSection: ActionDispatcher;
    toggleToySectionAction: ActionDispatcher;
    openEmoticonSection: ActionDispatcher;
    closeEmoticonSection: ActionDispatcher;
    requestImageUpload: ActionDispatcher;
    openTipPrompt: ActionDispatcher;
}
export declare type IContainerProps = IInstanceProps & IStoreProps;
