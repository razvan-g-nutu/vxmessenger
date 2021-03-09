interface IProps {
    isOpen: boolean;
    link: string;
    title: string;
    isResponsive: boolean;
    isToySectionMinimizied: boolean;
    onClick: () => void;
}
declare const ToySectionHeader: (props: IProps) => JSX.Element;
export default ToySectionHeader;
