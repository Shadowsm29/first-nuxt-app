<template>
	<v-card>
		<v-card-title>
			{{ mode === 'signup' ? 'Sign Up' : 'Login' }}
		</v-card-title>
		<v-card-text>
			<v-row>
				<v-col cols="12">
					<app-text-field v-model="form.email" label="Email" />
				</v-col>
				<v-col cols="12">
					<app-text-field v-model="form.password" label="Password" />
				</v-col>
			</v-row>
			<div class="w-100 d-flex justify-center">
				<v-btn class="ma-1" color="primary" v-if="mode === 'signup'" @click="signUp">Sign Up</v-btn>
				<v-btn class="ma-1" color="primary" v-else @click="login">Login</v-btn>
				<v-btn
					class="ma-1"
					text
					color="secondary"
					@click="mode === 'signup' ? (mode = 'login') : (mode = 'signup')"
				>
					{{ mode === 'signup' ? 'Switch to Login' : 'Switch to Signup' }}
				</v-btn>
			</div>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	layout: "admin",
	components: {
		'app-text-field': require('~/components/ui/app-text-field').default,
	},

	data() {
		return {
			form: {
				email: '',
				password: '',
			},
			mode: 'signup', // or login
		}
	},

	methods: {
		login() {},
		signUp() {},
	},
}
</script>

<style scoped>
</style>