import { ITranslation } from "../../../redux/store";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
interface IStoreProps {
    motto: string;
    isVideochatOpen: boolean;
    translation: ITranslation;
    hasModelProfilePicture: boolean;
    hasModelPictureInProfile: boolean;
}
export declare type IContainerProps = IInstanceProps & IStoreProps;
export {};
