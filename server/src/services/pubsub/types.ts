export interface PubSubService {
    publish(topId: string, payload: Record<string, unknown>): Promise<string>;
    validatePayload(payload: Record<string, any>): boolean;
}