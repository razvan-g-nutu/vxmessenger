import { IContainerProps as IProps } from "./types";
import { QuestionType } from '../../../redux/store';
export declare const onCloseUserPrompt: (props: IProps) => (questionType: QuestionType) => () => void;
