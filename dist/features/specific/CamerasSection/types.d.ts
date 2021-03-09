import { ICameraDevice } from "../../../redux/store";
import { IInstanceProps } from "../../hoc/withInstanceInfo";
import { ActionDispatcher } from "../../../redux";
export interface IStoreProps {
    cameras: ICameraDevice[];
    selectedCamera?: ICameraDevice;
    setCam2CamSelectedCamera: ActionDispatcher<string>;
}
export interface ICamerasSplit {
    frontAndBack: ICameraDevice[];
    others: ICameraDevice[];
}
export declare type IProps = IStoreProps & IInstanceProps;
