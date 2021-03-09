import { ICurrency, ITranslation } from '../../../redux/store';
interface IProps {
    price: number;
    currency: ICurrency;
    translation: ITranslation;
    shouldDisplayIcon?: boolean;
    isForActionSection?: boolean;
    onClick: () => void;
}
declare const VoyeurCamButton: (props: IProps) => JSX.Element;
export default VoyeurCamButton;
