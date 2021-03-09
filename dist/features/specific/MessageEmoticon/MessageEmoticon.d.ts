import { IEmoticon } from "../../../redux/store";
interface IProps {
    icon: string;
    emoticons: IEmoticon[];
    children?: any;
}
declare const MessageEmoticon: (props: IProps) => JSX.Element;
export default MessageEmoticon;
