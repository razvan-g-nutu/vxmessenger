export interface ISimpleModelPictureProps {
    picture: string;
    isOnline?: boolean;
    hasCursorPointer?: boolean;
    hasOverlay?: boolean;
    size: number;
    isGroupChatMode?: boolean;
    isForGroupChatMentions?: boolean;
    onClick?: () => void;
}
