import { ITranslation } from '../../../redux/store';
interface IProps {
    isFullscreen: boolean;
    isMobileMenuOpen: boolean;
    isMutedByModel: boolean;
    isMutedByClient: boolean;
    clientVolume: number;
    displayVolumeAsInitiallyMuted: boolean;
    isInitiallyMutedHintDisplayed: boolean;
    hasFullscreen: boolean;
    translation: ITranslation;
    toggleFullscreen: () => void;
    toggleMobileMenu: () => void;
    toggleSound: () => void;
    hideInitiallyMutedHint: () => void;
    reloadPlayer: () => void;
    setClientVolume: (volume: number) => void;
}
declare const VideoChatActionSection: (props: IProps) => JSX.Element;
export default VideoChatActionSection;
