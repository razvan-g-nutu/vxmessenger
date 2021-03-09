import * as React from 'react';
interface IProps {
    currentPercentage: number;
    audioPlayerBarRef: any;
    onMouseDown: (e: React.MouseEvent) => void;
}
declare const AudioPlayerBar: (props: IProps) => JSX.Element;
export default AudioPlayerBar;
