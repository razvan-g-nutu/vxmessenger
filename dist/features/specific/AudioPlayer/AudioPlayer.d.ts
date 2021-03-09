interface IProps {
    audioRef: any;
    audioSrc: string;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    setAudioTime: () => void;
    setClickedTime: (clickedTime: number) => void;
    stopPlaying: () => void;
    startPlaying: () => void;
}
declare const AudioPlayer: (props: IProps) => JSX.Element;
export default AudioPlayer;
