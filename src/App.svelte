<script>
	import {lang} from './store'
	import Footer from './containers/Footer.svelte';
	import Section from './containers/Section.svelte';
	import Aside from './containers/Aside.svelte';
	import Header from './containers/Header.svelte';
</script>
<svelte:head>
	<title>{$lang === 'en-US' ? 'Networking calculator' : 'Calculadora de redes'}</title>
	<html lang={$lang} />
</svelte:head>

<div class="container">
	<header><Header/></header>
	<section><Section/></section>
	<aside><Aside/></aside>
	<footer><Footer/></footer>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: 25% 65% 10%;
		overflow: hidden;
	}
	header {
		grid-row:1;
		grid-column: 1/3;
	}
	section {
		grid-row: 2;
		grid-column: 2 / 3;
	}
	aside {
		grid-row: 2;
		grid-column: 1 / 2;
	}
	footer {
		grid-row:3;
		grid-column:1/3;
		background-color: var(--main-blue);
	}
</style>