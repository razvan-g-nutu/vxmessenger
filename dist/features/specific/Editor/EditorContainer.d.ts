import * as React from 'react';
interface IComponentProps {
    emoticon?: string;
    gift?: string;
    mention?: string;
    placeholder: string;
    shouldResetEditorState: boolean;
    sendMessage: () => void;
    onTextChanged: (text: string) => void;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
