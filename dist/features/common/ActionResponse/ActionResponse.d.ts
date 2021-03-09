import * as React from 'react';
import { IActionResponse } from '../../../redux/store';
import { ITheme } from '../../../themes';
export interface IProps {
    actionResponse: IActionResponse;
    theme?: ITheme;
    closeText: string;
    onCloseClick: () => void;
}
declare const _default: React.ComponentClass<Pick<IProps, "actionResponse" | "closeText" | "onCloseClick"> & {
    theme?: ITheme | undefined;
}, any>;
export default _default;
