import { IContainerProps as IProps } from "./types";
import { AnswerType } from "../../../redux/store";
export declare const onCloseClick: (props: IProps) => () => void;
export declare const onVerifyAgeClick: (props: IProps) => () => void;
export declare const onChargeNowClick: (props: IProps) => () => void;
export declare const onVipClick: (props: IProps) => () => void;
export declare const onAnswerToSpyingPrivateChat: (props: IProps) => (answer: AnswerType) => void;
