<script lang="ts">
import { Themes } from 'src/theme';

    import {_} from 'svelte-i18n';
    import {themeStore, toggleTheme} from '../../stores/ThemeStore';


    let localTheme: Themes;

    const unsubscribe = themeStore.subscribe(value => {
        localTheme = value;
    })

</script>

<main style="--background-color: {localTheme.background}">
    <div style="--text: {localTheme.text}">Intro</div>
    <button on:click={toggleTheme}>toggle theme</button>
</main>


<style>
    main {
        background-color: var(--background-color);
    }
    div {
        color: var(--text);
    }
</style>