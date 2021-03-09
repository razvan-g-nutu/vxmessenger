export declare type ChatConfig = any;
export declare class Player extends Object {
    VERSION: 0;
}
export declare class PlayerService {
    closePlayer(): void;
    static getService(instanceId: string): PlayerService;
}
export default PlayerService;
