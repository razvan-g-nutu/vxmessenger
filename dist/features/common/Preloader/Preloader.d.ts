interface IProps {
    preloader?: string;
    title: string;
    subtitle: string;
    hasPreloaderPaymentText?: boolean;
    shouldAdjustVertically?: boolean;
}
declare const Preloader: (props: IProps) => JSX.Element;
export default Preloader;
