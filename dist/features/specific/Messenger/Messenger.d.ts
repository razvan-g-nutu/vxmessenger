import { ITranslation } from '../../../redux/store';
export interface IMessengerProps {
    isContactNoteOpen: boolean;
    hasActionSectionUnderTextbox: boolean;
    shouldRenderToySectionHeader: boolean;
    isMessageTypeHeader?: boolean;
    translation: ITranslation;
    onClose: () => void;
}
declare const Messenger: (props: IMessengerProps) => JSX.Element;
export default Messenger;
