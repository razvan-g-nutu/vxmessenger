import * as React from 'react';
import { ICameraDevice } from "../../../redux/store";
interface IProps {
    cameras: ICameraDevice[];
    selectedCamera?: ICameraDevice;
    onSelectCamera: (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
declare const CamerasSection: (props: IProps) => JSX.Element;
export default CamerasSection;
