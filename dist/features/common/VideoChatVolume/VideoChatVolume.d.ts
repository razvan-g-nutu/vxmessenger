import * as React from 'react';
import { ITranslation } from '../../../redux/store';
import ITheme from "../../../themes/interfaces";
interface IProps {
    isMutedByClient: boolean;
    displayVolumeAsInitiallyMuted?: boolean;
    isInitiallyMutedHintDisplayed?: boolean;
    translation: ITranslation;
    volume: number;
    theme?: ITheme;
    toggleSound: () => void;
    hideInitiallyMutedHint?: () => void;
    setVolume: (volume: number) => void;
}
export declare const handleVolumeChange: (props: IProps) => (_: any, value: number) => void;
declare const _default: React.ComponentClass<Pick<IProps, "isMutedByClient" | "isInitiallyMutedHintDisplayed" | "translation" | "displayVolumeAsInitiallyMuted" | "volume" | "toggleSound" | "hideInitiallyMutedHint" | "setVolume"> & {
    theme?: ITheme | undefined;
}, any>;
export default _default;
