import * as React from 'react';
import { IGift } from '../../../redux/store';
interface IComponentProps {
    emoticon?: string;
    mention?: string;
    placeholder: string;
    isInteractive: boolean;
    shouldResetEditorState: boolean;
    gift?: IGift;
    sendMessage: () => void;
    onTextChanged: (text: string) => void;
    onGiftTextChanged: (giftText: string) => void;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
