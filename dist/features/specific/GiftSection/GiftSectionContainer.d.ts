import * as React from 'react';
interface IComponentProps {
    isOpen: boolean;
    isResponsive?: boolean;
    onGiftClick: (giftIcon: string) => () => void;
}
declare const _default: React.ComponentType<IComponentProps>;
export default _default;
