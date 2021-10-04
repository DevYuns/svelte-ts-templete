<script lang="ts">
	import './translates';
	import Router from 'svelte-spa-router';
	import routes from './components/navigations/root';
</script>

<main>
	<nav>
		<a href="/">Intro</a>
		<a href="/#/temp">Temp</a>
	</nav>
	<Router routes={routes}/>
</main>