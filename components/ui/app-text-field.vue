<template>
	<v-text-field
		:value="value"
		:label="label"
		outlined
		hide-details="auto"
		@input="valueChanged"
	/>
</template>

<script>
export default {
	props: {
		value: {
			required: true,
		},
		label: {
			required: true,
		},
	},

	methods: {
		valueChanged(value) {
			this.$emit('input', value)
		}
	},
}
</script>

<style scoped>
</style>