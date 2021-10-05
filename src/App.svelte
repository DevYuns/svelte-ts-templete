<script lang="ts" context="module">
	import './translates';
	import Router from 'svelte-spa-router';
	import routes from './components/navigations/root';

	import {_} from 'svelte-i18n';
</script>

<main>
	<nav>
		<a href="/">Intro</a>
		<a href="/#/temp">Temp</a>
	</nav>
	<Router routes={routes}/>
</main>

<style>
	:root {
		--background-color: #ccc;
		--text: #000;
		--text-contrast: #fff;
		--placeholder: #6d6d6d;
	}
</style>