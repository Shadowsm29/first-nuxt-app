export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'server',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'first-nuxt-app',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap' },
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		//   "~plugins/axios-setup"
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		'@nuxtjs/vuetify',
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {
		baseURL: "https://first-nuxt-app-9ff4e.firebaseio.com",
		credentials: false,
	},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	},

	env: {}
}
