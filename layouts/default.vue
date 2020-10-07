<template>
	<v-app>
		<the-nav-drawer :drawer.sync="drawer" />
		<the-navbar :drawer.sync="drawer" />
		<v-main>
			<v-container>
				<Nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	props: {
		'the-nav-drawer': require('~/components/navigation/the-nav-drawer'),
		'the-navbar': require('~/components/navigation/the-navbar'),
	},

	data() {
		return {
			drawer: true,
		}
	},
}
</script>

<style>
html {
	font-family: 'Open Sans', 'sans-serif';
}

body {
	margin: 0;
}

.container {
	justify-content: start !important;
}
</style>
