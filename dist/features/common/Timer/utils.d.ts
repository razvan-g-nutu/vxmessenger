import { ITimerStylingProps } from './style';
import Theme from "../../../themes/interfaces";
export declare const getTimeLeft: (totalTime: number, currentTime?: number | undefined) => number;
export declare const clearTickHandler: (handler?: any) => void;
export declare const getLeftAngle: (totalTime: number, currentTime: number) => number;
export declare const getRightAngle: (totalTime: number, currentTime: number) => number;
export declare const defaultTimerStylingProps: (theme: Theme, props?: ITimerStylingProps | undefined) => {
    size: number;
    thickness: number;
    filledColor: string;
    unfilledColor: string;
    backgroundColor: string;
    timerTextColor: string;
} | {
    className?: string | undefined;
    size: number;
    thickness: number;
    filledColor: string;
    unfilledColor: string;
    backgroundColor: string;
    timerTextColor: string;
};
