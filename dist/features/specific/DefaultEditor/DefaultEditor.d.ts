import * as React from 'react';
import { ICurrency, IGift } from '../../../redux/store';
interface IProps {
    text: string;
    currency: ICurrency;
    gifts: IGift[];
    insertedGifts: IGift[];
    placeholder: string;
    isInteractive: boolean;
    shouldIncreaseMessageFontSize: boolean;
    onRemoveGiftClick: () => void;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
declare const DefaultEditor: (props: IProps) => JSX.Element;
export default DefaultEditor;
