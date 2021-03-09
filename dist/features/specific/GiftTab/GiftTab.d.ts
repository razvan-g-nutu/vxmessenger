import { IGiftPage, ITranslation } from '../../../redux/store';
interface IProps {
    changeTab: (activeIndex: number) => () => void;
    giftPage: IGiftPage;
    translation: ITranslation;
    className: string;
    isActive: boolean;
}
declare const GiftTab: (props: IProps) => JSX.Element;
export default GiftTab;
