import 'react-perfect-scrollbar/dist/css/styles.css';
import { IEmoticon, IGift, IGroupMessage, IMessage } from '../../../redux/store';
import { IChatBoxProps } from './types';
/**
 * Translates the text from the editor to the message rendered inside the bubble.
 * In this process, emoticons and gifts shortcuts are replaced by their image.
 * Also, new lines separators are translated for HTML
 */
export declare const prepareTextMessageForDisplaying: (emoticons: IEmoticon[], gifts: IGift[], message: string, mentionOptions: string[]) => any;
/**
 *
 * @return {boolean} true if the message is of type text and
 * contains only one emoticon and no other element (text, gifts and so on).
 */
export declare const isMessageWithJustOneEmoticon: (emoticons: IEmoticon[], content: any) => boolean;
export declare const getMessagesToRender: (groupedMessage: IMessage | IGroupMessage, index: number, props: IChatBoxProps, key?: string | undefined) => JSX.Element;
export declare const getMessageListing: (message: IMessage, opacity: number, props: IChatBoxProps, isGroupMessage?: boolean | undefined, groupIndex?: number | undefined) => JSX.Element;
