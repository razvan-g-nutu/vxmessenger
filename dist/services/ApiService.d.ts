import { ICOMMAND, IRESPONSE, SupportedLanguage } from 'vxcontrol-client-lib';
/** Creates the connection to the VXControl API endpoint */
declare class ApiService {
    private static services;
    private static listeners;
    constructor(instanceId: string);
    private msnSession;
    private language;
    private instanceId;
    static registerOKListener(listener: (instanceId: string, response: IRESPONSE) => any): void;
    static registerErrorListener(listener: (instanceId: string, response: IRESPONSE) => any): void;
    static addNewConnection: (instanceId: string) => void;
    static getService: (instanceId: string) => ApiService;
    static destroy: (instanceId: string) => void;
    getInstanceId: () => string;
    /**
     * Starts the connection to the VXControl endpoint.
     * The INIT request is sent automatically after the websocket
     * connection is ready.
     */
    connect: (webtoken: string, language: SupportedLanguage) => void;
    updateLanguage: (language: SupportedLanguage) => void;
    /**
     * Logging out from the VXControl API; currently not used,
     * since the mother platform, as a webtoken provider, should manage the logout too
     */
    logout: () => void;
    /**
     * Close the websocket from the client part
     */
    closeConnection: () => void;
    /** Sends the command to the VXControl endpoint */
    sendCommand: (command: ICOMMAND) => void;
    /**
     * Handles the responses from the VXControl endpoint and based
     * by command's type, we call the receive saga logic by dispatching action creators
     */
    private handleCommandResponse;
}
export default ApiService;
