import * as React from "react";
import { ICamerasSplit, IProps } from "./types";
import { ICameraDevice } from "../../../redux/store";
export declare const onSelectCamera: (props: IProps) => (id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
export declare const extractFrontAndBackCameras: (cameras: ICameraDevice[]) => ICamerasSplit;
