import { IStateOption } from "./types";
export interface IProps {
    mentionOptions: IStateOption[];
    isOpen: boolean;
    isFullScreen: boolean;
    shouldDisplayCustomMentionSection: boolean;
    inputValue: string;
    focusedOptionId?: string;
    onChange: (value: any) => void;
    onMouseFocus: (id: string) => void;
}
declare const MentionSection: (props: IProps) => JSX.Element;
export default MentionSection;
