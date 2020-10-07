import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
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
    },
    actions: {
      nuxtServerInit({ commit }, asyncContext) {
        return this.$axios
          .get('https://first-nuxt-app-9ff4e.firebaseio.com/posts.json')
          .then((res) => {
            const data = res.data
            const dataArray = []
            for (const key in data) {
              dataArray.push({ ...data[key], id: key })
            }
            commit('setPosts', dataArray)
          })
          .catch((e) => asyncContext.error(e))
      },
      setPosts({ commit }, posts) {
        commit('setPosts', posts)
      },
      async createPost({ commit }, newPost) {
        const res = await this.$axios.post(
          'https://first-nuxt-app-9ff4e.firebaseio.com/posts.json',
          {
            ...newPost,
            updatedDate: new Date(),
          }
        )
        commit('createPost', { ...newPost, id: res.data.name })
      },
      async updatePost({ commit }, { editedPost, postId }) {
        await this.$axios.put(
          `https://first-nuxt-app-9ff4e.firebaseio.com/posts/${postId}.json`,
          {
            ...editedPost,
            updatedDate: new Date(),
          }
        )
        commit('updatePost', { ...editedPost, id: postId })
      },
    },
  })
}

export default createStore
