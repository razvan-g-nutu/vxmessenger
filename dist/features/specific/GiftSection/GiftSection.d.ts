import * as React from 'react';
import { IBundle, IGiftPage, ITranslation, ICurrency } from '../../../redux/store';
import config from '../../../static/config';
import { IGiftItemForPurchaseList } from '../PurchaseBundlePage';
export interface IGiftSectionProps {
    activeIndex: number;
    activeBundle?: IBundle;
    bundleGifts: IGiftItemForPurchaseList[];
    giftPages: IGiftPage[];
    translation: ITranslation;
    specialGiftPages: config.ISpecialGiftPages;
    currency: ICurrency;
    isResponsive?: boolean;
    isOpen: boolean;
    isMobileLandscape?: boolean;
    scrollbar: React.Ref<any>;
    isFullScreen: boolean;
    shouldUseDropdownAnimation: boolean;
    closeGiftSection: () => any;
    onBundlePurchase: () => void;
    onBundlePageClose: () => void;
    changeTab: (activeIndex: number) => () => void;
    onGiftClick: (giftEncodedId: string) => () => void;
    onBundleGiftClick: (giftEncodedId: string) => () => void;
}
declare const GiftSection: (props: IGiftSectionProps) => JSX.Element;
export default GiftSection;
