import * as React from 'react';
import { ActionDispatcher } from "../../../redux";
import { ICountdownWarning, ITranslation } from '../../../redux/store';
import { IOpenLoadAccountPayload } from "../../../sagas/common/userPrompt";
interface IComponentProps {
    className?: string;
}
export interface IStoreProps {
    isResponsive: boolean;
    isFullscreen: boolean;
    isOneClickRechargeAvailable: boolean;
    translation: ITranslation;
    warning?: ICountdownWarning;
    rechargeExternal: ActionDispatcher;
    closeFullscreen: ActionDispatcher;
    openCountdownWarning: ActionDispatcher<ICountdownWarning>;
    setVideoChatTimeLimit: ActionDispatcher<number>;
    openLoadAccountOneClickPrompt: ActionDispatcher<IOpenLoadAccountPayload>;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
