import { IActionResponse } from '../../../redux/store';
import { ITheme } from '../../../themes';
export interface IProps {
    actionResponse: IActionResponse;
    theme?: ITheme;
    closeText: string;
    onCloseClick: () => void;
}
declare const _default: any;
export default _default;
