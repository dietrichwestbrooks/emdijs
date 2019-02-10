import { Subject } from 'rxjs';
export declare class EmdiService {
    constructor();
    connect(id: number): Subject<MessageEvent>;
    private createSocketSubject(url);
}
export declare const service: EmdiService;
