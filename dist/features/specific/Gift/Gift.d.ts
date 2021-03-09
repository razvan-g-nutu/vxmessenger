import { ITranslation } from '../../../redux/store';
interface IProps {
    icon: string;
    url: string;
    title: string;
    price: number;
    initialPrice?: number;
    currency: string;
    quantity?: number;
    isBundleGiftPage: boolean;
    translation: ITranslation;
    onGiftClick: (icon: string) => () => void;
}
declare const Gift: (props: IProps) => JSX.Element;
export default Gift;
