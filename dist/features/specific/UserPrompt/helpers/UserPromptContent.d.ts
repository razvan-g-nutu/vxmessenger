import { AnswerType, ICurrency, IQuestion, ITranslation } from '../../../../redux/store';
export interface IUserPromptContentProps {
    currency: ICurrency;
    question: IQuestion;
    translation: ITranslation;
    onAnswer: (answer: AnswerType) => any;
}
declare const UserPromptContent: (props: IUserPromptContentProps) => JSX.Element;
export default UserPromptContent;
