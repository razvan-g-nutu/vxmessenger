interface IProps {
    onFileSelect: (event: any) => void;
    inputRefCallback?: (ref: HTMLInputElement | null) => void;
}
declare const ImageUploader: (props: IProps) => JSX.Element;
export default ImageUploader;
