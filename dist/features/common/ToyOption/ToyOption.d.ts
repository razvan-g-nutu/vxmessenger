export interface IProps {
    name: string;
    image: string;
    hoverImage: string;
    currency: string;
    price: number;
    durationText: string;
    isResponsive: boolean;
    isPlaying?: boolean;
    isLocked?: boolean;
    hasTooltipOpen?: boolean;
    isAvailable?: boolean;
}
declare const ToyOption: (props: IProps) => JSX.Element;
export default ToyOption;
