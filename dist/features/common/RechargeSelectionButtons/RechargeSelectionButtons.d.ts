import { AnswerType, ICurrency } from '../../../redux/store';
export interface IRechargeSelectionButtonsProps {
    amounts?: number[];
    defaultAmount?: number;
    currency: ICurrency;
    hasSubmit: boolean;
    submitLabel?: string;
    onSelect: (amount: number | AnswerType) => any;
}
declare const RechargeSelectionButtons: (props: IRechargeSelectionButtonsProps) => JSX.Element | null;
export default RechargeSelectionButtons;
