<script>
	import SveltePinInput from "svelte-pin-input";
    
    let code = '';

    const customStyle = `background-color: lightblue; 
    text-align:center; color: black; width: 50px; height: 50px; border-radius: 10px; border: grey; margin-right: 10px`;

    const customInvalidStyle = `background-color: pink; 
    text-align:center; color: black; width: 50px; height: 50px; border-radius: 10px; border: grey; margin-right: 10px`;

</script>

<SveltePinInput 
    size={5} 
    isInputHidden={false}
    inputType="mixed" 
    inputStyle= {customStyle}
    inputStyleInvalid={customInvalidStyle}
    isValid={true}
    containerstyle="display: flex"
    on:updateValue={(e) => (code = e.detail.value)} 
/>

<style>
</style>
