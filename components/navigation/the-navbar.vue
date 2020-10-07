<template>
	<v-app-bar app color="indigo" dark>
		<v-app-bar-nav-icon @click.stop="$emit('update:drawer', !drawer)"></v-app-bar-nav-icon>
		<v-toolbar-title>WD Blog</v-toolbar-title>
	</v-app-bar>
</template>

<script>
export default {
	props: {
		drawer: {
			required: true,
		}
	},
}
</script>

<style scoped>
</style>