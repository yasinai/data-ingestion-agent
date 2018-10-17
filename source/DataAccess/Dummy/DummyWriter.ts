import { Readable } from 'stream';
import { inject, injectable } from 'inversify';
import TYPES from '../../../ioc.types';

import IDataReader from '../IDataWriter';

@injectable()
export default class DummyWriter implements IDataReader {

    private _tenantId: string;

    constructor(@inject(TYPES.TenantId) tenantId: string) {
        this._tenantId = tenantId;
    }

    // tslint:disable-next-line:no-empty
    public async ingest(stream: Readable) {

    }
}
