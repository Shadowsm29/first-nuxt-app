<template>
	<v-btn color="primary" @click="$emit('click')" :disabled="disabled">
		<span class="btn-text">Cancel</span>
	</v-btn>
</template>

<script>
export default {
	props: {
		disabled: {
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