import * as React from 'react';
import { IToyOptionStructure } from "./types";
interface IProps {
    text: string;
    isOpen: boolean;
    isFullScreen: boolean;
    shouldUseDropdownAnimation: boolean;
    isResponsive?: boolean;
    isMobileLandscape?: boolean;
    options: IToyOptionStructure[];
    toySectionRef?: any;
    onOptionClick: (id: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    closeToyOptionTooltip: () => void;
    onGetReference?: (ref: any) => void;
}
declare const ToySection: (props: IProps) => JSX.Element;
export default ToySection;
