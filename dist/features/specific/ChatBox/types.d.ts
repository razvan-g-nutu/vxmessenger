/** The messages from the chatbox are grouped by these time frames */
import { IEmoticon, IGift, IGroupMessage, IMessage, IModalContent } from '../../../redux/store';
export declare enum GroupTimestamp {
    TODAY = "TODAY",
    YESTERDAY = "YESTERDAY",
    ONEWEEKAGO = "ONEWEEKAGO",
    TWOWEEKSAGO = "TWOWEEKSAGO",
    THREEWEEKSAGO = "THREEWEEKSAGO",
    ONEMONTHAGO = "ONEMONTHAGO",
    TWOMONTHSAGO = "TWOMONTHSAGO",
    THREEMONTHSAGO = "THREEMONTHSAGO",
    SIXMONTHSAGO = "SIXMONTHSAGO"
}
export declare type IOrganizedMessage = (IMessage[] | {
    [index: string]: (IGroupMessage | IMessage)[];
});
export declare enum CONTENT_UPDATE_TYPE {
    MESSAGES = "MESSAGES",
    IMAGES = "IMAGES",
    GROUP = "GROUP"
}
export interface IChatBoxProps {
    gifts: IGift[];
    emoticons: IEmoticon[];
    isFullscreen: boolean;
    isResponsive: boolean;
    isMobileLandscape: boolean;
    hasMessagesGrouped: boolean;
    hasHistorySectionsOpened: boolean;
    mentionOptions: string[];
    organizedMessages: IOrganizedMessage;
    width: number;
    setModalContent: (modalContent?: IModalContent) => () => void;
    onContentUpdate: (content: CONTENT_UPDATE_TYPE, message?: IMessage) => () => void;
}
