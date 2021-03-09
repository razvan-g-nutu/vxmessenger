import { ActionCreator, ActionIds } from "./interfaces";
interface ICreateActionTypePayload {
    isReduxAction?: boolean;
    isSagaAction?: boolean;
}
/** This function will receive the desired action and will return an action creator for it */
export declare const createAction: ActionCreator;
/**
 *
 * @param id represents the file's name within action type creation
 * @param payload represents if the action should be scoped as a Redux or as a Saga action
 * @param action represents the name of the action
 */
export declare const createActionType: (id: ActionIds, payload: ICreateActionTypePayload) => (action: string) => string;
export {};
