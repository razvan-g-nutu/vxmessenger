import * as React from 'react';
import { ITranslation } from '../../../redux/store';
interface IComponentProps {
    isOpen: boolean;
    translation: ITranslation;
    isResponsive?: boolean;
    emoticonClick: (emoticon: string) => () => void;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
