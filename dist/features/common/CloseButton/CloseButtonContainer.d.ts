import * as React from 'react';
export declare enum CloseButtonType {
    MESSENGER = "MESSENGER",
    MOBILE_HEADER = "MOBILE_HEADER",
    INFORMATION_DIALOG = "INFORMATION_DIALOG",
    PRECHAT_INFORMATION_DIALOG = "PRECHAT_INFORMATION_DIALOG",
    ACTION_RESPONSE = "ACTION_RESPONSE",
    FULLSCREEN_HEADER = "PRECHAT_INFORMATION_DIALOG",
    IMAGE_MODAL = "IMAGE_MODAL",
    GROUP_CHAT_HEADER = "GROUP_CHAT_HEADER"
}
interface IComponentProps {
    hoverText?: string;
    iconClassName?: string;
    closeButtonType: CloseButtonType;
    /**
     * We use this flag for close buttons in InformationDialog. We basically ignore hasCloseButtonFromStore
     * when this flag is set.
     * - hasCloseButtonFromStore is only related for the buttons with which we close whole messenger;
     */
    hasCloseButton?: boolean;
    onClick: any;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
