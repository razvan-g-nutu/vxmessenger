import { ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    translation: ITranslation;
    shouldRenderAVSCam2CamPopup: boolean;
    toggleCam2Cam: ActionDispatcher;
}
export declare type IContainerProps = IInstanceProps & IStoreProps;
