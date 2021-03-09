import { ITranslation, VideoChatType } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    isGiftSectionOpen: boolean;
    isGiftButtonVisible: boolean;
    isToySectionOpen: boolean;
    isToyButtonVisible: boolean;
    hasImageUpload: boolean;
    translation: ITranslation;
    buttonsVisibility: {
        liveChat: boolean;
        privateChat: boolean;
        cam2Cam: boolean;
    };
    openGiftSection: ActionDispatcher;
    closeGiftSection: ActionDispatcher;
    toggleToySection: ActionDispatcher;
    toggleCam2Cam: ActionDispatcher;
    closeMessenger: ActionDispatcher;
    requestImageUpload: ActionDispatcher;
    setIsMobileMenuOpen: ActionDispatcher<boolean>;
    startVideoChatType: ActionDispatcher<VideoChatType>;
}
export declare type IContainerProps = IInstanceProps & IStoreProps;
