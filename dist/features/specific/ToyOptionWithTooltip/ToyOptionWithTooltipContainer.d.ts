import * as React from 'react';
import { IInstanceProps } from '../../hoc/withInstanceInfo';
import { IProps as ToyOptionProps } from "../../common/ToyOption/ToyOption";
export interface IPartialComponentProps extends ToyOptionProps {
    tooltipImage: string;
    tooltipTitle: string;
    tooltipText: string;
    limitingContainerRef?: any;
    width?: number;
    height?: number;
}
interface IStoreProps {
    isResponsive: boolean;
}
declare type IComponentProps = IPartialComponentProps;
export declare type IProps = IComponentProps & IStoreProps & IInstanceProps;
declare const _default: React.ComponentType<IPartialComponentProps>;
export default _default;
