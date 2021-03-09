import { Action } from 'redux-actions';
import { IRESPONSE } from "vxcontrol-client-lib";
import { IPayload } from '../../redux/interfaces';
interface IErrorData {
    response: IRESPONSE;
    messageKey: string;
}
export declare const requestSendImage: (instanceId: string, payload?: File | undefined) => Action<IPayload<File>>;
export declare const receiveSendImageError: (instanceId: string, payload?: IErrorData | undefined) => Action<IPayload<IErrorData>>;
declare const watchSagas: () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default watchSagas;
