<template>
	<v-btn color="green" @click="$emit('click')" :loading="loading">
		<span class="btn-text">Save</span>
	</v-btn>
</template>

<script>
export default {
	props: {
		loading: {
			default: false,
		}
	}
}
</script>

<style scoped>
.btn-text {
	color: white;
}
</style>