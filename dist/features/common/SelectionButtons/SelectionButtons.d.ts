import * as React from 'react';
import { AnswerType } from '../../../redux/store';
import { SelectedButtonColor } from "./types";
export interface ISelectionOption<T> {
    value: T;
    label: string;
    selected?: boolean;
}
export interface ISelectionButtonsProps<T> {
    options: ISelectionOption<T>[];
    submit?: {
        label: string;
        answer?: T | AnswerType;
    };
    selectedButtonColor?: SelectedButtonColor;
    onSelect: (answer: T | AnswerType) => any;
}
interface IState<T> {
    options: ISelectionOption<T>[];
}
declare class SelectionButtons<T> extends React.Component<ISelectionButtonsProps<T>, IState<T>> {
    constructor(props: any);
    render(): JSX.Element;
    private onClickOption;
    private onSubmit;
    private hasSubmitFeature;
    private selectOptionInState;
    private getSelectedOptionFromState;
}
export default SelectionButtons;
