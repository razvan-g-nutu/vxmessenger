import { ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
import { IPreferenceActionPayload } from "../../../redux/interfaces";
export interface IStoreProps {
    isFullscreen: boolean;
    isMutedByModel: boolean;
    isMobileMenuOpen: boolean;
    isMutedByClient: boolean;
    clientVolume: number;
    notMutedClientVolume: number;
    displayVolumeAsInitiallyMuted: boolean;
    isInitiallyMutedHintDisplayed: boolean;
    hasFullscreen: boolean;
    shouldHideVideochatControls: boolean;
    translation: ITranslation;
    hideInitiallyMutedHint: ActionDispatcher;
    setIsInitiallyMuted: ActionDispatcher<boolean>;
    setIsMobileMenuOpen: ActionDispatcher<boolean>;
    setPreference: ActionDispatcher<IPreferenceActionPayload>;
}
export interface IContainerComponentProps {
    offsetX?: number;
    offsetY?: number;
}
export declare type IContainerProps = IContainerComponentProps & IStoreProps & IInstanceProps;
