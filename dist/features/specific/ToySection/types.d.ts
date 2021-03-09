import { IToyOption } from "../../../redux/store";
export interface IToyOptionStructure extends IToyOption {
    isPlaying?: boolean;
    isLocked?: boolean;
}
