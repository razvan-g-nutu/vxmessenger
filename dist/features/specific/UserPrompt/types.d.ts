import { ICurrency, IQuestion, ITranslation, QuestionType } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IAnswerUserPromptPayload } from "../../../redux/modules/messenger";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
export interface IContainerComponentProps {
    className?: string;
}
export interface IStoreProps {
    currency: ICurrency;
    isResponsive: boolean;
    areAnyUserPromptsOpen: boolean;
    isGiftSectionOpen: boolean;
    isTipPromptOpen: boolean;
    isAnyUserPromptOpen: boolean;
    isMobileLandscape: boolean;
    userPrompts: IQuestion[];
    translation: ITranslation;
    closeUserPromptSection: ActionDispatcher<QuestionType>;
    answerUserPromptSection: ActionDispatcher<IAnswerUserPromptPayload>;
}
export declare type IContainerProps = IContainerComponentProps & IStoreProps & IInstanceProps;
