import { ICountdownWarning, ITranslation } from '../../../redux/store';
export interface ICountdownWarningProps {
    translation: ITranslation;
    warning: ICountdownWarning;
    isResponsive: boolean;
    isFullscreen: boolean;
    onAnswer: () => any;
    onTimeIsOver?: () => any;
    updateCountdownWarningTime?: (time: number) => any;
}
/**
 * Stateless component used to deal with various types of countdown warnings
 * @param props
 * @constructor
 */
declare const CountdownWarning: (props: ICountdownWarningProps) => JSX.Element;
export default CountdownWarning;
