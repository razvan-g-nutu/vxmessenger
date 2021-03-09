import { ITranslation } from '../../../redux/store';
export interface IGroupProps {
    children: any;
    datetime: string;
    language: string;
    shouldIncreaseMessageFontSize: boolean;
    isOpen?: boolean;
    isDayGroup?: boolean;
    showArrow: boolean;
    informationText?: string;
    translation: ITranslation;
    className?: string;
    onClick: () => void;
}
declare const Group: (props: IGroupProps) => JSX.Element;
export default Group;
