import { IViewHandlerProps, IViewProviderProps } from "./interfaces";
/**
 * Return flags on how the messenger / videochat app should behave based on the resolution / format
 * @param props ViewHandlerProps
 * @return IViewProviderProps
 */
declare const getViewProviderParams: (props: IViewHandlerProps) => IViewProviderProps;
export default getViewProviderParams;
