import { AnswerType, ICurrency, IQuestion, ITranslation } from '../../../../redux/store';
export interface IUserPromptTitleProps {
    question: IQuestion;
    currency: ICurrency;
    translation: ITranslation;
    onAnswer: (answer: AnswerType) => any;
}
declare const UserPromptTitle: (props: IUserPromptTitleProps) => JSX.Element;
export default UserPromptTitle;
