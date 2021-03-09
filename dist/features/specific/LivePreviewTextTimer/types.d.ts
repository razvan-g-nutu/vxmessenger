import { ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    timeLimit: number;
    timeLeft: number;
    translation: ITranslation;
    setLivePreviewTextTimeLeft: ActionDispatcher<number>;
}
export declare type IContainerProps = IInstanceProps & IStoreProps;
