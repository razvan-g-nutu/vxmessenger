import * as React from 'react';
import { MessageDirection, IToyMessageInfo, MessageContentType, MsgType } from '../../../redux/store';
interface IComponentProps {
    id: string;
    isSystem: boolean;
    dateCreated: string;
    type?: MsgType;
    toy?: IToyMessageInfo;
    direction: MessageDirection;
    contentType?: MessageContentType;
    isImage?: boolean;
    audioSrc?: string;
    username?: string;
    usernameColor?: string;
    groupIndex?: number;
    isFullscreen: boolean;
    isResponsive: boolean;
    isMessageWithJustOneEmoticon?: boolean;
    children: any;
    onContentUpdate?: () => any;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
