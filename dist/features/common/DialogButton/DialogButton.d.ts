import { DialogButtonColor } from './style';
interface IProps {
    color: DialogButtonColor;
    text?: string;
    onClick?: () => any;
}
declare const DialogButton: (props: IProps) => JSX.Element;
export default DialogButton;
