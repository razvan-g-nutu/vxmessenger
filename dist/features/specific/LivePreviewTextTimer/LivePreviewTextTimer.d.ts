import * as React from 'react';
import ITheme from "../../../themes/interfaces";
import { ITranslation } from "../../../redux/store";
interface IProps {
    totalTime: number;
    currentTime: number;
    theme: ITheme;
    translation: ITranslation;
    onUnmount?: (remainingTime: number) => any;
    onTimeIsOver?: () => any;
}
declare const _default: React.ComponentClass<Pick<IProps, "translation" | "totalTime" | "currentTime" | "onUnmount" | "onTimeIsOver"> & {
    theme?: ITheme | undefined;
}, any>;
export default _default;
