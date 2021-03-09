import * as React from 'react';
import { ITranslation } from '../../../redux/store';
import { IInstanceProps } from '../../hoc/withInstanceInfo';
export interface IComponentProps {
    datetime: string;
    showArrow: boolean;
    className?: string;
    hasSectionsInitiallyOpened?: boolean;
    isDayGroup?: boolean;
    children?: any;
    /** The Group component could render a specific information text given as prop */
    informationText?: any;
    onContentUpdate?: () => void;
}
interface IStoreProps {
    translation: ITranslation;
    language: string;
    shouldIncreaseMessageFontSize: boolean;
}
export declare type IProps = IComponentProps & IStoreProps & IInstanceProps;
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
