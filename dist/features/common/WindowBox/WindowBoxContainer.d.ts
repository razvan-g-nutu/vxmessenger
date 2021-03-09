import * as React from 'react';
interface IComponentProps {
    children: any;
    isOpen: boolean;
    hideHeader?: boolean;
    isWindowForUserPrompt?: boolean;
    customCloseIcon?: JSX.Element;
    title?: string | JSX.Element;
    handleClose: () => void;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
