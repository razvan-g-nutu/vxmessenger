import * as React from 'react';
interface IProps {
    audioSrc: string;
}
interface IState {
    duration: number;
    currentTime: number;
    isPlaying: boolean;
    clickedTime?: number;
}
declare class AudioPlayerContainer extends React.Component<IProps, IState> {
    private readonly audioRef;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(_: any, prevState: IState): void;
    render(): JSX.Element;
    private setAudioTime;
    private setAudioData;
    private setClickedTime;
    private startPlaying;
    private stopPlaying;
}
export default AudioPlayerContainer;
