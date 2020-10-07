<template>
	<v-card>
		<v-card-title>Edit Post</v-card-title>
		<v-card-text>
			<admin-post-form :post="postToEdit" />
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	layout: 'admin',

	components: {
		'admin-post-form': require('~/components/admin/admin-post-form').default,
	},

	asyncData(context) {
		return context.$axios
			.get(
				`https://first-nuxt-app-9ff4e.firebaseio.com/posts/${context.params.postId}.json`
			)
			.then((res) => {
				return {
					postToEdit: res.data,
				}
			})
			.catch((e) => context.error(e))
	},
}
</script>

<style scoped>
</style>