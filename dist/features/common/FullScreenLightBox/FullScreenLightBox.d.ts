import { IModalContent } from '../../../redux/store';
interface IProps {
    modalContent: IModalContent;
    closeLightbox: any;
}
declare const FullScreenLightBox: (props: IProps) => JSX.Element;
export default FullScreenLightBox;
