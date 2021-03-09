export interface IPreChatInformationDialogProps {
    text: string;
    closeButtonText?: string;
    hasCloseButton: boolean;
    onCloseClick?: () => any;
    buttons?: JSX.Element;
    otherContent?: JSX.Element;
    hasModelProfilePicture?: boolean;
}
declare const PreChatInformationDialog: (props: IPreChatInformationDialogProps) => JSX.Element;
export default PreChatInformationDialog;
