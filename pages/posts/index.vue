<template>
	<post-preview-list :posts="loadedPosts" />
</template>

<script>
export default {
	components: {
		'post-preview-list': require('~/components/posts/post-preview-list').default,
	},

	computed: {
		loadedPosts() {
			return this.$store.getters.loadedPosts;
		}
	},

	created() {
		this.$store.dispatch("setPosts", this.loadedPosts);
	}
}
</script>

<style scoped>
</style>