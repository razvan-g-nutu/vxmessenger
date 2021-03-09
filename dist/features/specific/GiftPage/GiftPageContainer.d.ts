import * as React from 'react';
import { IGift } from '../../../redux/store';
interface IComponentProps {
    page: IGift[];
    activePage: number;
    isBundleGiftPage: boolean;
    title?: React.ReactElement;
    onGiftClick: (gift: string) => () => void;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
