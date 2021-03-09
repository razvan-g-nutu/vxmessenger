import { DeepPartial } from "redux";
export default interface ITheme {
    name: string;
    typography: {
        fontFamily: string;
        secondaryFontFamily: string;
        weight: {
            thin: number;
            light: number;
            regular: number;
            medium: number;
            bold: number;
        };
    };
    layout: {
        textMode: {
            minWidth: number;
            minHeight: number;
        };
        messageSection: {
            responsiveBreakpointWidth: number;
        };
    };
    colors: {
        overlay: string;
        baseButtonIcon: string;
        recordingIcon: string;
        fontSwitcherIcon: string;
        sendMessageButton: string;
        cancelRecordingHover: string;
        cam2CamBackgroundColor: string;
        cam2CamDisabledColor: string;
        cam2CamHoverColor: string;
        messengerWrapper: string;
        messengerClose: string;
        messengerLoader: string;
        messageEditorBackgroundColor: string;
        messageEditorPlaceholderColor: string;
        messageEditorTextColor: string;
        mentionBackground: string;
        mentionHeaderText: string;
        groupChat: {
            modelInfoText: string;
            pictureBorder: string;
            userMessageText: string;
            userMessageBackground: string;
            usernameColorSet: string[];
            modelMessageText: string;
            modelMessageBackground: string;
            modelMessageUsername: string;
            clientMessageText: string;
            clientMessageBackground: string;
            clientName: string;
            participants: {
                bgColor: string;
                textColor: string;
            };
        };
        chatBoxContainer: string;
        imageUrlContent: string;
        groupColor: string;
        groupTextColor: string;
        profileLink: string;
        profileLinkHover: string;
        profileMotto: string;
        messengerButtonInvertedBackground: string;
        messengerButtonHover: string;
        messengerButtonInvertedText: string;
        windowBackground: string;
        windowItemsShadow: string;
        windowPaginatorBackground: string;
        clientMessageBackground: string;
        fullscreenSystemMessageBackground: string;
        fullscreenSystemMessageText: string;
        modelMessageBackground: string;
        messageText: string;
        messageTimeAgo: string;
        videoChatBackground: string;
        videoChatControlsBackground: string;
        videoChatControlsBackgroundHover: string;
        videoChatControlsText: string;
        onlineBulletColor: string;
        offlineBulletColor: string;
        selectedButton: {
            defaultBackground: string;
            defaultBackgroundHover: string;
            blackBackground: string;
            blackBackgroundHover: string;
            defaultDropDownBackground: string;
            blueBackgroundHover: string;
            greyBackgroundHover: string;
            text: string;
            clickHighlight: string;
        };
        initiallyMutedButtonBackground: string;
        initiallyMutedToolTipContentText: string;
        checkedStrokeColor: string;
        checkedFillColor: string;
        dropDownContentBgColor: string;
        timerFillColor: string;
        timerUnfillColor: string;
        timerBgColor: string;
        timerTextColor: string;
        livePreviewTimer: {
            fillColor: string;
            unfillColor: string;
            bgColor: string;
            textColor: string;
        };
        editor: {
            background: string;
            text: string;
        };
        giftPageTitle: string;
        giftPageText: string;
        avsCam2CamPopup: {
            backgroundColor: string;
            smallTextColor: string;
            mainTextColor: string;
            button: {
                standard: string;
                onHover: string;
                textColor: string;
            };
        };
        preChatPopup: {
            backgroundColor: string;
            textColor: string;
        };
        actionResponse: {
            warningColor: string;
            errorColor: string;
            successfulColor: string;
        };
        userPrompt: {
            tipColor: string;
            tipPriceColor: string;
            tipButtonColor: string;
            tipButtonBackgroundColor: string;
            tipButtonBackgroundHoverColor: string;
        };
        modalCloseButtonColor: string;
        toySection: {
            primaryColor: string;
            secondaryColor: string;
            lock: string;
            text: string;
            hoverTooltipText: string;
            headerSectionBackground: string;
            headerSectionBorderColor: string;
            optionText: string;
            headerSectionLink: string;
            inactiveToyMessageText: string;
        };
        informationDialog: {
            title: string;
        };
        messageTypeHeader: {
            modelTitle: string;
            title: string;
            subtitle: string;
        };
        cameraSelection: {
            option: {
                defaultColor: string;
                selectedColor: string;
            };
        };
        noteButton: string;
        giftsCloseButton: string;
    };
}
export declare type IPartialTheme = DeepPartial<ITheme>;
