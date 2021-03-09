import { ICurrency, ITranslation } from '../../../redux/store';
export interface ILiveChatButtonProps {
    price?: number;
    currency: ICurrency;
    translation: ITranslation;
    shouldDisplayIcon?: boolean;
    isForActionSection?: boolean;
    shouldRenderPrice?: boolean;
    onClick: () => void;
}
declare const LiveChatButton: (props: ILiveChatButtonProps) => JSX.Element;
export default LiveChatButton;
