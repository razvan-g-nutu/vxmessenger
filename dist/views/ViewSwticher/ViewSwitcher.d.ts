import * as React from 'react';
import { IViewProviderProps } from '../interfaces';
declare const ViewSwitcher: (props: IViewProviderProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default ViewSwitcher;
