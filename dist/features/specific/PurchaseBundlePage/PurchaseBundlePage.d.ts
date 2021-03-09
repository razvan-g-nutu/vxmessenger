import { ICurrency, ITranslation } from '../../../redux/store';
export interface IGiftItemForPurchaseList {
    name: string;
    quantity: number;
}
interface IProps {
    imageUrl: string;
    name: string;
    price: number;
    currency: ICurrency;
    gifts: IGiftItemForPurchaseList[];
    translation: ITranslation;
    onClose: () => void;
    onBundlePurchase: () => void;
}
declare const PurchaseBundlePage: (props: IProps) => JSX.Element;
export default PurchaseBundlePage;
