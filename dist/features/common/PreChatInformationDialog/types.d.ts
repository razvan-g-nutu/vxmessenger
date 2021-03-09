import { ICurrency, ITranslation, PreChatInformationType } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IStoreProps {
    isVip: boolean;
    hasModelProfilePicture: boolean;
    shouldRenderPreChatInformationDialog: boolean;
    modelName: string;
    translation: ITranslation;
    informationType: PreChatInformationType;
    voyeurPrice: number;
    currency: ICurrency;
    closeMessenger: ActionDispatcher;
    rechargeExternal: ActionDispatcher;
    resetPreChatInformation: ActionDispatcher;
    closePrechatDialog: ActionDispatcher;
    acceptToSpy: ActionDispatcher;
}
export declare type IContainerProps = IStoreProps & IInstanceProps;
