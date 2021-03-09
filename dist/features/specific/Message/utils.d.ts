import * as React from "react";
import IMessageProps from "./interfaces";
import { IToyMessageInfo } from "../../../redux/store";
export declare const getMessageTime: (dateCreated: string) => string;
/**
 * Returns the message sent by the current client as a React element.
 */
export declare const getClientMessageComponent: (content: any, timeIndicatorComponent: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>, props: IMessageProps, shouldRenderAudioMessage?: boolean | undefined) => JSX.Element;
/**
 * Returns the message sent by the model as a React element
 */
export declare const getReceivedMessageComponent: (content: any, timeIndicatorComponent: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>, props: IMessageProps, shouldHavePicture?: boolean, isGroupChatUserMessage?: boolean) => JSX.Element;
/**
 * Returns the system message received from the backend as a React element
 */
export declare const getSystemMessage: (content: any, props: IMessageProps) => JSX.Element;
/**
 *
 * @param toy
 */
export declare const getToyMessage: (toy: IToyMessageInfo, messageId?: string | undefined, groupIndex?: number | undefined) => JSX.Element;
export declare const getGroupChatUserMessage: (content: any, timeIndicatorComponent: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>, props: IMessageProps) => JSX.Element;
export declare const getModelMessageComponent: (content: any, timeIndicatorComponent: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>, props: IMessageProps) => JSX.Element;
