import IMessage from './IMessage';

/**
 * Handles messages received by the agent.
 *
 * @export
 * @interface IMessageHandler
 */
export default interface IMessageHandler {
    /**
     * Handle a given message
     *
     * @type {HandleFunc}
     * @memberof IMessageHandler
     */
    handle: IHandleFunc;
}

type IHandleFunc = (message: IMessage) => Promise<void>;
