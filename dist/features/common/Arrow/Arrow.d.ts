import { ArrowDirection } from "./types";
interface IProps {
    arrowDirection?: ArrowDirection;
    isResponsive?: boolean;
    onClick?: () => any;
}
declare const Arrow: (props: IProps) => JSX.Element;
export default Arrow;
