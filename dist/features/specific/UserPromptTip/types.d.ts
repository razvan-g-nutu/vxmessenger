import { ICurrency, IGift, ITipOption, ITranslation } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IContainerComponentProps {
    isAnonymous?: boolean;
}
export interface IStoreProps {
    gifts: IGift[];
    tip: ITipOption;
    currency: ICurrency;
    isResponsive?: boolean;
    translation: ITranslation;
    requestSendTip: ActionDispatcher;
    requestSendAnonymousTip: ActionDispatcher;
}
export declare type IContainerProps = IStoreProps & IContainerComponentProps & IInstanceProps;
