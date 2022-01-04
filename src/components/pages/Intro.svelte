<style>
  main {
    background-color: var(--background-color);
  }
  div {
    color: var(--text);
  }
</style>

<script lang="ts">
  import {_} from 'svelte-i18n';
  import {themeStore, toggleTheme} from '../../stores/ThemeStore';
  import type {Themes} from '../../theme';

  let localTheme: Themes;

  const unsubscribe = themeStore.subscribe((value) => {
    localTheme = value;
  });
</script>

<main style="--background-color: {localTheme.background}">
  <div style="--text: {localTheme.text}">Intro</div>
  <button on:click={toggleTheme}>toggle theme</button>
</main>
