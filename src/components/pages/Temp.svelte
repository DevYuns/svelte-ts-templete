<script lang="ts">
    let username: string;
    let email: string;
    let password: string;
    let passwordConfirm: string;

    $: disabled = (password && passwordConfirm) ? password !== passwordConfirm : true;

    const submit = () => {};
</script>

<form>
    <h1>This is test</h1>
    <label for="username">username</label>
    <input id="username" bind:value={username}/>
    
    <label for="email">email</label>
    <input id="email" bind:value={email}/>
    
    <label for="password">password</label>
    <input id="password" type="password" bind:value={password}/>
    
    <label for="password-confirm">password confirm</label>
    <input id="password-confirm" type="password" bind:value={passwordConfirm}/>
    
    <button {disabled} on:click|preventDefault={submit}>Sign up</button>
</form>