import { IViewProviderProps } from '../interfaces';
interface IComponentProps {
    isGiftSectionOpen: boolean;
    isToySectionOpen: boolean;
    isMobileLandscape: boolean;
    onGiftClick: (gift: string) => any;
}
declare type IProps = IComponentProps & IViewProviderProps;
declare const VideoChatMobileLandscapeView: (props: IProps) => JSX.Element;
export default VideoChatMobileLandscapeView;
