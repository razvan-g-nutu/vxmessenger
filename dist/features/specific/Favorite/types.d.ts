import { ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    isModelFavorite: boolean;
    translation: ITranslation;
    requestSetFavorite: ActionDispatcher<boolean>;
}
export declare type IContainerProps = IInstanceProps & IStoreProps;
