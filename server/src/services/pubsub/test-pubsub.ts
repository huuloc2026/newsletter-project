import { PubSubService } from "./types";

export class testPubSub implements PubSubService {
    publish(topicId: string, payload: Record<string, unknown>): Promise<string> {
        console.log(payload)
        return Promise.resolve(`Published to ${topicId} successfully`)
    }
    validatePayload(payload: Record<string, any>): boolean {
        return !!payload
    }
}