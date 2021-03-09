import * as React from 'react';
import { ICameraDevice } from "../../../redux/store";
interface IProps {
    camera: ICameraDevice;
    isSelected: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
declare const CameraOption: (props: IProps) => JSX.Element;
export default CameraOption;
