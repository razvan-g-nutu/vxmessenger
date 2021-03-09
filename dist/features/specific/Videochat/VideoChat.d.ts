import * as React from 'react';
interface IProps {
    isFrozen: boolean;
    container: HTMLElement | null;
    shouldHideVideochatControls: boolean;
    displayVideoChatControls: () => void;
    onCreateContainer: (container: HTMLDivElement) => any;
}
declare class VideoChat extends React.Component<IProps> {
    private ref;
    constructor(props: IProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private getStyle;
}
export default VideoChat;
