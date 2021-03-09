import { IGift } from '../../../redux/store';
interface IProps {
    gifts: IGift[];
    [prop: string]: any;
}
declare const GiftDecorator: (props: IProps) => JSX.Element;
export default GiftDecorator;
