<script lang="ts">
    let password: string;
    let passwordConfirm: string;

    $: disabled = (password && passwordConfirm) ? password !== passwordConfirm : true;
</script>

<h1>This is test</h1>
<label for="username">username</label>
<input id="username"/>

<label for="email">email</label>
<input id="email"/>

<label for="password">password</label>
<input id="password" type="password" bind:value={password}/>

<label for="password-confirm">password confirm</label>
<input id="password-confirm" type="password" bind:value={passwordConfirm}/>

<button {disabled}>Sign up</button>