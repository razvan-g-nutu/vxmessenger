import { IAnswerUserPromptPayload } from '../../../redux/modules/messenger';
import { ICurrency, IQuestion, QuestionType, ITranslation } from '../../../redux/store';
export interface IProps {
    prompts: IQuestion[];
    currency: ICurrency;
    translation: ITranslation;
    className?: string;
    isAnyUserPromptOpen: boolean;
    isResponsive?: boolean;
    isMobileLandscape?: boolean;
    isGiftSectionOpen?: boolean;
    isTipPromptOpen?: boolean;
    onAnswer: (payload: IAnswerUserPromptPayload) => any;
    closeUserPrompt: (questionType: QuestionType) => () => any;
}
/**
 * Stateless component used to deal with various types of user prompt interactions
 * @param props
 * @constructor
 */
declare const UserPrompt: (props: IProps) => JSX.Element;
export default UserPrompt;
