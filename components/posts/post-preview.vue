<template>
	<v-col cols="4">
		<v-card :to="postLink" elevation="5">
			<v-img
				class="white--text align-end"
				height="200px"
				:src="thumbnailUrl"
			>
				<v-card-title>{{ title }}</v-card-title>
			</v-img>
			<v-card-text>{{ previewText }}</v-card-text>
		</v-card>
	</v-col>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		previewText: {
			type: String,
			required: true,
		},
		thumbnailUrl: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
		}
	},

	computed: {
		postLink() {
			if(this.isAdmin) return '/admin/' + this.id;
			return '/posts/' + this.id
		}
	}
}
</script>

<style scoped>
</style>