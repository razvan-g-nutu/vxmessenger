import { ITranslation } from "../../../redux/store";
export interface IProps {
    participants: number;
    translation: ITranslation;
    openMentionSection: () => void;
}
declare const GroupChatParticipants: (props: IProps) => JSX.Element;
export default GroupChatParticipants;
