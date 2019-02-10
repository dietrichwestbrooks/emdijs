import { EmdiCommand, EmdiResponse, EmdiEvent, EmdiError } from './commands';
export declare class EmdiFactory {
    static createCommand(command: string): EmdiCommand | undefined;
    static createResponseOrEvent(xml: string): Promise<EmdiResponse | EmdiEvent | EmdiError>;
    private static createEvent(data);
    private static createResponse(data);
    private static toUpperCamelCase(s);
}
