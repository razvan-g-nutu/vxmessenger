import { DraftHandleValue, Editor as DraftJSEditor, EditorState } from 'draft-js';
import * as React from 'react';
interface IProps {
    isInteractive: boolean;
    shouldIncreaseMessageFontSize: boolean;
    editorState: EditorState;
    placeholder: string;
    editorRef?: React.RefObject<DraftJSEditor>;
    onChange: any;
    handleReturn: any;
    handleBeforeInput: any;
    onUpArrow: (event: any) => void;
    onDownArrow: (event: any) => void;
    handlePastedText: (text: string, html: string | undefined) => DraftHandleValue;
}
declare const Editor: (props: IProps) => JSX.Element;
export default Editor;
