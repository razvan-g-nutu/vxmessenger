import Rollbar from "rollbar";
import * as React from 'react';
import { IPlatformProps } from '../redux/store';
declare type IProps = IPlatformProps;
interface IState {
    rollbar?: Rollbar;
}
declare class AppContainer extends React.Component<IProps, IState> {
    instanceId: string;
    constructor(props: IProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    private setupProductionDebug;
}
export default AppContainer;
