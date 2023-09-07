## svelte-code-input

A Svelte component for entering verification/PIN codes.

## Installation:

`npm install svelte-code-input`

or

`yarn add svelte-code-input`

## Usage:

**Add `SvelteCodeInput` to your component like this:**

```
<script>
	import CodeInput from "$lib/CodeInput/CodeInput.svelte";

    let code = '';

    const customStyle = "background-color: lightblue; color: red;";

</script>

<CodeInput
    size={8}
    isInputHidden={true}
    inputType="number"
    inputStyle= "background-color: lightblue;padding: 20px;border: 1px solid red;"
    containerstyle="background-color: #007bff;cursor: pointer;"
    on:updateValue={(e) => (code = e.detail.value)}
/>

```

## Props

Common props you may want to specify include:

| Prop Name      | Initial Value | Type                            | Description                                       |
| -------------- | ------------- | ------------------------------- | ------------------------------------------------- |
| size           | 6             | `number`                        | The size of the input fields.                     |
| inputType      | `'text'`      | `'text' \| 'number' \| 'mixed'` | The type of input ('text', 'number', or 'mixed'). |
| containerstyle | `undefined`   | `string` (optional)             | Optional CSS styles for the container.            |
| inputStyle     | `undefined`   | `string` (optional)             | Optional CSS styles for the input elements.       |
| pattern        | `undefined`   | `RegExp` (optional)             | Optional pattern for input validation.            |
| isInputHidden  | `true`        | `boolean`                       | Whether the input is hidden (default: `true`).    |
| disabled       | `false`       | `boolean`                       | Whether the input is disabled (default: `false`). |
| isValid        | `true`        | `boolean`                       | Whether the input is valid (default: `true`).     |

## License

MIT Licensed. Copyright (c) Chiamaka Umeh 2023.
