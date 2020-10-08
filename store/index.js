import Vuex from 'vuex'
import Cookie from "js-cookie"

const createStore = () => {
	return new Vuex.Store({
		state: {
			loadedPosts: [],
			token: null,
		},
		getters: {
			loadedPosts(state) {
				return state.loadedPosts;
			},
			token(state) {
				return state.token;
			},
			isAuthenticated(state) {
				return !!state.token;
			}
		},
		mutations: {
			setPosts(state, posts) {
				state.loadedPosts = posts
			},
			createPost(state, newPost) {
				state.loadedPosts.push(newPost)
			},
			updatePost(state, editedPost) {
				const postIndex = state.loadedPosts.findIndex(
					(post) => post.id === editedPost.id
				)
				state.loadedPosts[postIndex] = editedPost
			},
			setToken(state, token) {
				state.token = token
			},
			clearToken(state) {
				state.token = null
			}
		},
		actions: {
			nuxtServerInit({ commit }, { app }) {
				return app.$axios
					.$get('/posts.json')
					.then((data) => {
						const dataArray = []
						for (const key in data) {
							dataArray.push({ ...data[key], id: key })
						}
						commit('setPosts', dataArray)
					})
					.catch((e) => {
						console.log("Something went wrong");
						// asyncContext.error(e)
					})
			},
			setPosts({ commit }, posts) {
				commit('setPosts', posts)
			},
			async createPost({ commit, state }, newPost) {
				const data = await this.$axios.$post('/posts.json?auth=' + state.token, {
					...newPost,
					updatedDate: new Date(),
				})
				commit('createPost', { ...newPost, id: data.name })
			},
			async updatePost({ commit, state }, { editedPost, postId }) {
				await this.$axios.$put(`/posts/${postId}.json?auth=` + state.token, {
					...editedPost,
					updatedDate: new Date(),
				})
				commit('updatePost', { ...editedPost, id: postId })
			},
			async signUpUser({ commit, dispatch }, payload) {
				const data = await this.$axios.$post(
					'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
					process.env.fbApiKey, payload)
				commit('setToken', data.idToken);
				const tokenExpiryDateTime = new Date().getTime() + parseInt(data.expiresIn) * 1000;
				localStorage.setItem("token", data.idToken);
				localStorage.setItem("tokenExpiration", tokenExpiryDateTime);
				Cookie.set("token", data.idToken);
				Cookie.set("tokenExpiration", tokenExpiryDateTime);
				// dispatch("setLogoutTimer", data.expiresIn * 1000);
			},
			async logInUser({ commit, dispatch }, payload) {
				const data = await this.$axios.$post(
					'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
					process.env.fbApiKey, payload)
				commit('setToken', data.idToken);
				const tokenExpiryDateTime = new Date().getTime() + parseInt(data.expiresIn) * 1000;
				localStorage.setItem("token", data.idToken);
				localStorage.setItem("tokenExpiration", tokenExpiryDateTime);
				Cookie.set("token", data.idToken);
				Cookie.set("tokenExpiration", tokenExpiryDateTime);
				// dispatch("setLogoutTimer", data.expiresIn * 1000);
			},
			setLogoutTimer({ commit }, duration) {
				setTimeout(() => {
					commit('clearToken');
				}, duration);
			},
			initAuth({ commit, dispatch }, req) {
				let token, tokenExpiryDateTime;

				if (req) {
					console.log("SSR")
					if (!req.headers.cookie) return;
					console.log("Cookies found");
					const tokenCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("token="))
					if (!tokenCookie) return;
					token = tokenCookie.split("=")[1];
               console.log("initAuth -> token", token)

					const expirationCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("tokenExpiration="))
					tokenExpiryDateTime = expirationCookie.split("=")[1];
				} else {
					console.log("Client")
					token = localStorage.getItem("token");
					tokenExpiryDateTime = localStorage.getItem("tokenExpiration");
				}

				if (!token || new Date() > tokenExpiryDateTime) {
					commit("clearToken");
					return;
				}

				// dispatch("setLogoutTimer", tokenExpiryDateTime - new Date().getTime());
				commit("setToken", token);
			},
		},
	})
}

export default createStore
