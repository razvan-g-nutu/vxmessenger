import { ITranslation } from '../../../redux/store';
interface IProps {
    isFullScreen: boolean;
    translation: ITranslation;
    toggleFullscreen: () => void;
}
declare const VideoChatToggleFullscreen: (props: IProps) => JSX.Element;
export default VideoChatToggleFullscreen;
