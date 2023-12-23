import { Image64 } from "./Image"

/**
 * @typedef {Object} Conversation
 * @property {string|null} parts - The message sent by the user or the assistant.
 * @property {string} role - The role of the user, assistant or the system.
 * @property {Image64|null} image - The image sent by the user or the assistant.
 * @property {string} type - The type of the message.
 */
export type Conversation = {
    parts?: string | null,
    role?: string,
    image?: Image64 | null,
    type?: string,
}
