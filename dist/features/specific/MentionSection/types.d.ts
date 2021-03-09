import { IStoredEditorState } from "../../../redux/store";
import { ActionDispatcher } from "../../../redux";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
interface IStoreProps {
    mentionOptions: string[];
    focusedMentionOption: string;
    mentionQuery: string;
    modelName: string;
    isMentionSectionOpen: boolean;
    isFullScreen: boolean;
    shouldDisplayCustomMentionSection: boolean;
    storedEditorState: IStoredEditorState;
    closeMentionSection: ActionDispatcher;
    setActiveMention: ActionDispatcher<string>;
    setFocusedMentionOption: ActionDispatcher<string>;
    resetFocusedMentionOption: ActionDispatcher;
}
export declare type IProps = IInstanceProps & IStoreProps;
export interface IStateOption {
    id: string;
    value: string;
    label: string;
}
export {};
