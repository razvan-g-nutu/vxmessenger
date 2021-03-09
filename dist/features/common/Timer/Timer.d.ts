import { ITimerStylingProps } from "./style";
import ITheme from "../../../themes/interfaces";
export interface IProps {
    /** total time in seconds figured on the timer */
    totalTime: number;
    /** how much time (in seconds) is figured as already being passed on the timer */
    currentTime?: number;
    timeFormatter?: (remainingTime: number) => any;
    resets?: number;
    onTimeIsOver?: () => any;
    onTick?: (remainingTime: number) => any;
    onUnmount?: (remainingTime: number) => any;
    styling?: ITimerStylingProps;
    theme: ITheme;
}
export interface IState {
    timeLeft: number;
}
declare const _default: any;
export default _default;
