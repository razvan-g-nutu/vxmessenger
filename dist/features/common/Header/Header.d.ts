import { HeaderAlignment } from "./types";
interface IProps {
    children: any;
    alignment?: HeaderAlignment;
}
declare const Header: (props: IProps) => JSX.Element;
export default Header;
