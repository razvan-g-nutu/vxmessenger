import { IProps as ToyOptionProps } from '../../common/ToyOption/ToyOption';
import { IBoundingRect } from "../../common/AdvancedTooltip/interfaces";
export interface IProps extends ToyOptionProps {
    tooltipImage: string;
    tooltipTitle: string;
    tooltipText: string;
    isResponsive: boolean;
    boundingRect?: IBoundingRect;
}
declare const ToyOptionWithTooltip: (props: IProps) => JSX.Element;
export default ToyOptionWithTooltip;
