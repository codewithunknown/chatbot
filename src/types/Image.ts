/**
 * A type that represents an image in base64 format for conversation and send to api.
 * @typedef {Object} Image64
 * @property {string} base64 - The base64 encoded image data.
 * @property {string} mimeType - The MIME type of the image.
 */
export type Image64 = {
    base64: string;
    mimeType: string;
}