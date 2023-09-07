/// <reference types="svelte" />
import type { SvelteComponentTyped } from "svelte";

export interface CodeInputProps {
  size: number; // The size of the input fields
  inputType?: 'text' | 'number' | 'mixed'; // The type of input ('text', 'number', or 'mixed')
  containerstyle?: string; // Optional CSS styles for the container
  inputStyle?: string; // Optional CSS styles for the input elements
  inputStyleInvalid?: string; // Optional CSS styles for invalid input elements
  pattern?: RegExp; // Optional pattern for input validation
  isInputHidden?: boolean; // Whether the input is hidden (default: true)
  disabled?: boolean; // Whether the input is disabled (default: false)
  isValid?: boolean; // Whether the input is valid (default: true)
}

export default class CodeInput extends SvelteComponentTyped<
  CodeInputProps,
  { updateValue: CustomEvent<{ value: string }> }, // Define the updateValue event
  {}
> {}