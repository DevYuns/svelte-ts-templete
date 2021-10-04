<script lang="ts">
    import {_} from 'svelte-i18n';
    import TextInput from '../uis/TextInput.svelte';


    let formData: {[index: string]: string} = {
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    }

    $: disabled = (formData.password && formData.passwordConfirm) ? formData.password !== formData.passwordConfirm : true;

    const onChange = (e: CustomEvent) => {
        const {id, value} = e.detail;
        
        formData[id] = value.value;        
    }

    const submit = () => {};
</script>

<form>
    <h1>{$_("SIGN_UP")}</h1>

    <TextInput id="username" label={$_("USER_NAME")} on:changed={onChange}/>
    <TextInput id="email" label={$_("EMAIL")} on:changed={onChange}/>
    <TextInput id="password" label={$_("PASSWORD")} type="password" on:changed={onChange}/>
    <TextInput id="passwordConfirm" label={$_("PASSWORD_CONFIRM")} type="password"  on:changed={onChange}/>
    
    <button {disabled} on:click|preventDefault={submit}>{$_("SIGN_UP")}</button>
</form>