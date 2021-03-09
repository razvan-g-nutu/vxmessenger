import { FC } from 'react';
interface IProps {
    isRecording: boolean;
    shouldSendMessage: boolean;
    recordingSeconds: string;
    recordingMinutes: string;
    stopRecording: () => void;
    sendAudioMessage: () => void;
}
export declare const AudioMessageUploader: FC<IProps>;
export default AudioMessageUploader;
