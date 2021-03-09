import * as React from 'react';
interface IProps {
    currentTime: number;
    duration: number;
    setClickedTime: (clickedTime: number) => void;
}
declare class AudioPlayerBarContainer extends React.Component<IProps> {
    constructor(props: any);
    render(): JSX.Element;
    componentWillUnmount(): void;
    private readonly audioPlayerBarRef;
    private calcClickedTime;
    private handleTimeDrag;
    private updateTimeOnMove;
}
export default AudioPlayerBarContainer;
