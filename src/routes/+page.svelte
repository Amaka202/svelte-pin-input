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

<style>
</style>
