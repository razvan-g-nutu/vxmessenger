import { ContentState } from "draft-js";
import { IEmoticon } from "../../../redux/store";
interface IProps {
    contentState: ContentState;
    entityKey: string;
    children: any;
    emoticons: IEmoticon[];
}
declare const EmoticonDecorator: (props: IProps) => JSX.Element;
export default EmoticonDecorator;
