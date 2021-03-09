import { IModel } from '../../../redux/store';
interface IProps {
    model: IModel;
    closeText: string;
    closeMessenger: () => void;
}
declare const MobileProfileInfo: (props: IProps) => JSX.Element;
export default MobileProfileInfo;
