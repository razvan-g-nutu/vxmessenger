import { ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    translation: ITranslation;
    clickCloseMessengerButton: ActionDispatcher;
}
export declare type IContainerProps = IStoreProps & IInstanceProps;
