import { VideochatInformationType } from "../../../redux/store";
export interface IInformationDialogProps {
    title: string;
    text?: string;
    button?: JSX.Element;
    buttonText?: string;
    cancelText?: string;
    closeTooltip?: string;
    informationType?: VideochatInformationType;
    children?: JSX.Element;
    hasModelProfilePicture: boolean;
    hasCloseButton: boolean;
    isVideoChatOpen: boolean;
    isMobileLandscape: boolean;
    onButtonClick?: () => void;
    onCloseClick?: () => void;
}
declare const InformationDialog: (props: IInformationDialogProps) => JSX.Element;
export default InformationDialog;
