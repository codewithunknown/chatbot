/**
 * A type that represents an AI model.
 * @typedef {Object} AIModel
 * @property {string} name - The name of the AI model.
 * @property {string} id - The ID of the AI model.
 * @property {boolean} available - A boolean indicating whether the AI model is available or not.
 */
export type AIModel = {
  name: string;
  id: string;
  available: boolean;
};
