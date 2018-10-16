import { Readable } from "stream";
import { injectable, inject } from "inversify";
import TYPES from "../../../ioc.types";

import IDataReader from "../IDataWriter";

@injectable()
export default class DummyWriter implements IDataReader {
    
    private _tenantId: string;

    constructor(@inject(TYPES.TenantId) tenantId: string)
    {
        this._tenantId = tenantId;
    }

    public async ingest(stream: Readable) {
        
    }
}