<template>
	<v-card>
		<v-card-title>Create Post</v-card-title>
		<v-card-text>
			<admin-post-form />
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	layout: "admin",
	middleware: ['check-auth', 'auth'],
	
	components: {
		'admin-post-form': require('~/components/admin/admin-post-form').default,
	},
}
</script>

<style scoped>
</style>