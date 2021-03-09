interface IProps {
    isForActionSection?: boolean;
    isResponsive: boolean;
    isFullScreen: boolean;
    onClick?: () => void;
    children: any;
}
declare const BaseButton: (props: IProps) => JSX.Element;
export default BaseButton;
