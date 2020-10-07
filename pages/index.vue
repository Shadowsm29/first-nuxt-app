<template>
	<div>
		<div class="header">
			<h1>Get the latest tech news!</h1>
		</div>
		<post-preview-list :posts="loadedPosts" />
	</div>
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
	}
}
</script>

<style>
.header {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	min-height: 300px;
	width: 100%;
	background-image: url('~assets/images/main-page-background.jpg');
}
</style>
