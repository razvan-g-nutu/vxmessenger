import { IGift, ITranslation, ICurrency } from "../../../redux/store";
interface IProps {
    currency: ICurrency;
    isResponsive?: boolean;
    tip: IGift;
    translation: ITranslation;
    imageSize: number;
    sendTip: () => void;
}
declare const UserPromptAnonymousTip: (props: IProps) => JSX.Element;
export default UserPromptAnonymousTip;
