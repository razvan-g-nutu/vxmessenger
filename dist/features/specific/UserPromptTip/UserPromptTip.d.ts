import { ITranslation, ICurrency, ITipOption } from "../../../redux/store";
interface IProps {
    currency: ICurrency;
    isResponsive?: boolean;
    tip: ITipOption;
    translation: ITranslation;
    imageSize: number;
    sendTip: () => void;
}
declare const UserPromptTip: (props: IProps) => JSX.Element;
export default UserPromptTip;
