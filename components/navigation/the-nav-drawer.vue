<template>
	<v-navigation-drawer :value="drawer" @input="drawerChanged" app>
		<v-list dense>
				<v-list-item v-for="(link, index) in links" :key="index" link :to="link.url" >
					<!-- @click="$emit('update:drawer', false)" -->
					<v-list-item-action>
						<v-icon v-html="link.icon" />
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ link.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	props: {
		drawer: {
			required: true,
		}
	},

	data() {
		return {
			links: [
				{url: "/", name: "Home", icon: "mdi-home"},
				{url: "/posts", name: "Posts", icon: "mdi-book-open"},
				{url: "/admin", name: "Admin", icon: "mdi-shield-key-outline"},
				{url: "/about", name: "About", icon: "mdi-comment-question-outline"},
			]
		}
	},

	methods: {
		drawerChanged(value) {
			this.$emit("update:drawer", value);
		}
	},
}
</script>

<style scoped>
</style>