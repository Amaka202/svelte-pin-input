<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let size = 4;
  export let inputType = 'text'; 

  export let containerstyle; 
  export let inputStyle;
  export let inputStyleInvalid;

  export let pattern;
  export let isInputHidden = true;
  export let disabled = false;
  export let isValid = false;
  
	let fields = [];

	for (let i = 0; i < size; i++) {
		fields[i] = { id: i, value: '' };
	}

	$: value = fields.map((input) => input.value).join('');

	function handleChange(e) {
		updateValue();
		const nextField = e.target.nextSibling;
		const prevField = e.target.previousSibling;

		if (e.target.value.length > 0) {
			nextField && nextField.focus();
		}

		if (e.keyCode === 8) prevField && prevField.focus();
	}

	function handlePaste(e) {
		e.preventDefault();
		const pastedText = e.clipboardData.getData('text');

		if (pastedText.length === size) {
			pastedText.split('').forEach((char, index) => {
				fields[index].value = char;
			});
		}
	}

  function handleInput(event, index) {
    let newValue;

    if(inputType === 'number') newValue = event.target.value.replace(/[^\d]/gi, '');
    if(inputType === 'text') newValue = event.target.value.replace(/[^a-zA-Z]/g, '');
    if(inputType === 'mixed') newValue = event.target.value.replace(/[^a-zA-Z0-9!@#$%^&*()-_+=<>?{}[\]|\.,;:'"`~]/g, '');

    if(pattern) newValue = event.target.value.replace(pattern, '')

    fields[index].value = newValue;
    updateValue();
  }

	function updateValue() {
		dispatch('updateValue', {
			value: value
		});
	}
</script>

{#if isInputHidden}
<div style="{containerstyle}">
  {#each fields as field}
    <input
      type='password'
      maxlength="1"
      id={field.id}
      on:input={(e) => handleInput(e, field.id)}
      on:keyup={handleChange}
      on:focus={(e) => e.target.select()}
      bind:value={field.value}
      style="{isValid ? inputStyle : inputStyleInvalid}"      
      on:paste={handlePaste}
      {disabled}
    />
  {/each}
</div>
{:else}
<div style="{containerstyle}">
  {#each fields as field}
    <input
      type='text'
      maxlength="1"
      id={field.id}
      on:input={(e) => handleInput(e, field.id)}
      on:keyup={handleChange}
      on:focus={(e) => e.target.select()}
      bind:value={field.value}
      style="{isValid ? inputStyle : inputStyleInvalid}"
      on:paste={handlePaste}
      {disabled}
    />
  {/each}
</div>
{/if}
