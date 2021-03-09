import { Component } from 'react';
import { Props as ReactSelectProps } from 'react-select';
interface IComponentProps {
    modelName: string;
    modelPicture: string;
    focusedOption?: string;
    onMouseFocus: (id: string) => void;
}
declare type IProps = ReactSelectProps & IComponentProps;
declare class CustomMentionOption extends Component<IProps> {
    componentDidUpdate(prevProps: IProps): void;
    render(): JSX.Element;
}
export default CustomMentionOption;
