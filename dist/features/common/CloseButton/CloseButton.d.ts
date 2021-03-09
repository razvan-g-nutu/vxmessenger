interface IProps {
    hoverText?: string;
    closeButtonWrapper: any;
    iconClassName: string;
    className?: string;
    onClick: () => void;
}
declare const CloseButton: (props: IProps) => JSX.Element;
export default CloseButton;
