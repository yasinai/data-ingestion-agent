const TYPES = {
    Agent: Symbol('Agent'),
    AuthManager: Symbol('AuthService'),
    Bucket: Symbol('Bucket'),
    ConnectionPool: Symbol('ConnectionPool'),
    Container: Symbol('Container'),
    DDLHelper: Symbol('DDLHelper'),
    DataIngestionApi: Symbol('DataIngestionApi'),
    DataReader: Symbol('IngestionReader'),
    DataWriter: Symbol('IngestionWriter'),
    DummyHandler: Symbol('DummyHandler'),
    DummyMessage: Symbol('DummyMessage'),
    INGEST: Symbol('Ingest'),
    IntegrationConfigFactory: Symbol('IntegrationConfigFactory'),
    Logger: Symbol('Logger'),
    MessageFactory: Symbol('MessageFactory'),
    MessageHandlerFactory: Symbol('MessageHandlerFactory'),
    OutputEncoder: Symbol('OutputEncoder'),
    PREVIEW: Symbol('Preview'),
    PreviewHandler: Symbol('PreviewHandler'),
    PreviewMessage: Symbol('PreviewMessage'),
    QueueUrl: Symbol('QueueUrl'),
    SendDataHandler: Symbol('SendDataHandler'),
    SendDataMessage: Symbol('SendDataMessage'),
    SnapshotReceivedTopicArn: Symbol('SnapshotReceivedTopicArn'),
    SNS: Symbol('SNS'),
    SQS: Symbol('SQS'),
    TenantName: Symbol('TenantName'),
    QueryService: Symbol('QueryService')
};

export default TYPES;
