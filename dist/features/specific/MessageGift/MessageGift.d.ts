import { IGift } from '../../../redux/store';
interface IProps {
    icon: string;
    gifts: IGift[];
    hasEnlargedContent?: boolean;
}
declare const MessageGift: (props: IProps) => JSX.Element;
export default MessageGift;
