export * from './commands';

import { EmdiClient } from './emdi-client';
export { EmdiClient } from './emdi-client';

import { take } from 'rxjs/operators';

let _client: (EmdiClient | null) = null;

export default function (deviceId: number, accessToken: number): Promise<EmdiClient> {
    if (_client) {
        return Promise.resolve(_client);
    }

    const client = new EmdiClient();

    return new Promise<EmdiClient>((resolve, reject) => {

        client.connect(deviceId, accessToken).then(() => {
            client.connected$
                .pipe(take(1))
                .subscribe(connected => {
                    if (connected) {
                        _client = client;
                        resolve(client);
                    } else {
                        reject(new Error('Failed to connect'));
                    }
                });

            client.error$
                .pipe(take(1))
                .subscribe(err =>
                    reject(new Error(err.error.toString())));

            client.disconnected$
                .pipe(take(1))
                .subscribe(() => _client = null);
        }, err => reject(err));
    });
}
