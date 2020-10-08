<template>
	<v-card elevation="1">
		<v-card-title>
			Existing Posts
			<v-spacer />
			<v-btn small color="primary" to="/admin/new-post">Create Post</v-btn>
		</v-card-title>
		<v-card-text>
			<post-preview-list is-admin :posts="loadedPosts" />
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	layout: "admin",
	middleware: ['check-auth', 'auth'],
	
	components: {
		'post-preview-list': require('~/components/posts/post-preview-list').default,
	},

	computed: {
		loadedPosts() {
			return this.$store.getters.loadedPosts;
		}
	},
}
</script>

<style scoped>
</style>