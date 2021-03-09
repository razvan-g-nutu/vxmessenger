import { ITranslation } from '../../../redux/store';
interface IProps {
    translation: ITranslation;
    contactNoteText: string;
    onCloseClick: () => void;
    onInputChange: (event: any) => void;
}
declare const ContactNoteDialog: (props: IProps) => JSX.Element;
export default ContactNoteDialog;
