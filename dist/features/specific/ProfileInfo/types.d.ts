import { ITranslation } from "../../../redux/store";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IContainerComponentProps {
    children?: any;
    tooltipText: string;
}
export interface IStoreProps {
    hasFavorite: boolean;
    hasContactNote: boolean;
    hasModelName: boolean;
    hasModelProfilePicture: boolean;
    modelName: string;
    shouldRenderMotto: boolean;
    hasActionSectionInProfile: boolean;
    isModelOnline: boolean;
    translation: ITranslation;
}
export declare type IContainerProps = IContainerComponentProps & IStoreProps & IInstanceProps;
