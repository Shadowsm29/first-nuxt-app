<template>
	<v-row>
		<post-preview
			v-for="post in posts"
			:key="post.Id"
			:id="post.id"
			:is-admin="isAdmin"
			:thumbnail-url="post.thumbnailUrl"
			:title="post.title"
			:preview-text="post.previewText"
		/>
	</v-row>
</template>

<script>
export default {
	components: {
		'post-preview': require('~/components/posts/post-preview').default,
	},

	props: {
		isAdmin: {
			default: false,
		},
		posts: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style scoped>
</style>