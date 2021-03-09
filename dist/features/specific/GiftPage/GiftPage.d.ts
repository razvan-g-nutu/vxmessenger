import * as React from 'react';
import { ICurrency, IGift, ITranslation } from '../../../redux/store';
interface IProps {
    page: IGift[];
    activePage: number;
    currency: ICurrency;
    translation: ITranslation;
    isBundleGiftPage: boolean;
    title?: React.ReactElement;
    onGiftClick: (giftIcon: string) => () => void;
}
declare const GiftPage: (props: IProps) => JSX.Element;
export default GiftPage;
