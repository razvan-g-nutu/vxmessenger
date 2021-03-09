import { ITranslation } from "../../../redux/store";
interface IProps {
    translation: ITranslation;
    children: any;
    onClose?: () => void;
}
declare const InitiallyMutedTooltip: (props: IProps) => JSX.Element;
export default InitiallyMutedTooltip;
