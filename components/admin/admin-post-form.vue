<template>
	<div>
		<v-form ref="form" :disabled="isSaving">
			<v-row>
				<v-col cols="12">
					<app-text-field v-model="editedPost.author" label="Author" />
				</v-col>
				<v-col cols="12">
					<app-text-field v-model="editedPost.title" label="Title" />
				</v-col>
				<v-col cols="12">
					<app-text-field v-model="editedPost.thumbnailUrl" label="Thumbnail URL" />
				</v-col>
				<v-col cols="12">
					<app-text-area v-model="editedPost.previewText" label="Preview Text" />
				</v-col>
				<v-col cols="12">
					<app-text-area v-model="editedPost.content" label="Content" />
				</v-col>
			</v-row>
		</v-form>
		<div class="w-100 d-flex">
			<v-spacer />
			<app-cancel-button
				@click="$router.push('/admin')"
				class="ml-2 mb-2 mt-2"
				:disabled="isSaving"
			/>
			<app-save-button
				@click="onSave"
				class="ml-2 mb-2 mt-2"
				:loading="isSaving"
			/>
		</div>
	</div>
</template>

<script>
export default {
	components: {
		'app-text-field': require('~/components/ui/app-text-field').default,
		'app-text-area': require('~/components/ui/app-text-area').default,
		'app-save-button': require('~/components/ui/app-save-button').default,
		'app-cancel-button': require('~/components/ui/app-cancel-button').default,
	},

	props: {
		post: {
			type: Object,
			required: false,
		},
	},

	data() {
		return {
			isSaving: false,
			editedPost: this.post
				? { ...this.post }
				: {
						author: '',
						title: '',
						thumbnailUrl: '',
						content: '',
						previewText: '',
				  },
		}
	},

	methods: {
		async onSave() {
			this.isSaving = true

			try {
				if (this.post) {
					await this.$store.dispatch('updatePost', {
						editedPost: this.editedPost,
						postId: this.$route.params.postId,
					})
				} else {
					await this.$store.dispatch('createPost', this.editedPost)
				}
				this.$router.push('/admin')
			} catch (error) {
				alert('Something went wrong')
			}

			this.isSaving = false
		},
	},
}
</script>

<style scoped>
</style>