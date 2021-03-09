import * as React from 'react';
interface ITimeout {
    enter: number;
    exit: number;
}
interface IClassNames {
    appear?: string;
    appearActive?: string;
    enter: string;
    enterActive: string;
    enterDone: string;
    exit: string;
    exitActive: string;
    exitDone: string;
}
export interface ITransitionGroupProps<T> {
    timeout: ITimeout;
    classNames: IClassNames;
    transitionedItems: T[];
    itemKey: (item: T) => any;
    children: (item: T) => JSX.Element;
}
declare class TransitionGroup<T> extends React.Component<ITransitionGroupProps<T>> {
    render(): JSX.Element;
}
export default TransitionGroup;
