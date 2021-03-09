import { SourceSet, TargetSet } from "./ChatService/types";
import { PlayInfo, CameraConfig, Player, CameraPosition } from 'vchat-player';
import { IQualityBoundaries } from '../redux/store';
declare class PlayerService {
    private static services;
    private static listeners;
    constructor(instanceId: string);
    private instanceId;
    private player;
    private reloadCallback;
    private playerContainer;
    private cameraSelectionResolve;
    private cameraConfig;
    private isCameraStarted;
    static getService(instanceId: string): PlayerService;
    static destroyService(instanceId: string): void;
    static registerCameraOnListener(listener: (instanceId: string) => any): void;
    static registerCameraOffListener(listener: (instanceId: string) => any): void;
    static registerCameraDeniedListener(listener: (instanceId: string) => any): void;
    static registerPlayerInfoListener: (listener: (instanceId: string, info: PlayInfo) => any) => void;
    static registerSendMetricsListener: (listener: (instanceId: string, info: any) => any) => void;
    static registerPlayErrorListener(listener: (instanceId: string, level: number, error?: any) => any): void;
    static registerPlayStartListener(listener: (instanceId: string) => any): void;
    static registerPlayStopListener(listener: (instanceId: string) => any): void;
    static registerVolumeChangeListener(listener: (instanceId: string, volume: number) => any): void;
    static registerInitiallyMutedListener(listener: (instanceId: string, isMuted: boolean) => any): void;
    static registerSelectingCameraListener(listener: (instanceId: string, cameras: MediaDeviceInfo[]) => any): void;
    private getPlayerHandler;
    getInstanceId: () => string;
    createPlayer: (container: HTMLElement, qualityBoundaries: IQualityBoundaries, initialVolume?: number | undefined) => Player;
    getPlayerContainer: () => HTMLElement | null;
    /**
     * Reload previously created player
     */
    reloadPlayer: () => void;
    mutePlayer: () => void;
    /**
     * Set volume level for the stream
     * @param volume - number between 0 and 1 (inclusive), where 0 means muted and 1 means fully loud
     */
    setVolume: (volume: number) => void;
    /**
     * Play the provided stream to the previously created player
     * @param sources
     */
    play: (sources: SourceSet) => void;
    /**
     * Start own camera, but don't publish it yet to the upstream
     * @param configuration
     */
    startCamera: (configuration?: CameraConfig | undefined) => void;
    /**
     * Update aspect of the cam2cam video area
     * @param configuration
     * Note: close button won't be affected
     */
    updateCamera: (configuration: CameraConfig) => void;
    /**
     * publish own camera on the provided stream
     */
    publishCamera: (targets: TargetSet) => void;
    /**
     * Select a certain camera device from the available ones
     * @param camera
     */
    selectCamera: (camera: MediaDeviceInfo) => void;
    /**
     * Stop cam2cam on the previously created player
     */
    stopCamera: () => void;
    closePlayer: () => void;
    stopPlayer: () => void;
}
export default PlayerService;
export { CameraConfig, CameraPosition, Player, PlayInfo };
