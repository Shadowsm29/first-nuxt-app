<template>
  <v-card>
    <v-card-title>{{ loadedPost.title }}</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-chip outlined color="primary" label>{{
            loadedPost.author
          }}</v-chip>
          <v-chip outlined color="grey">{{ loadedPost.updatedDate }}</v-chip>
        </v-col>
        <v-col cols="12">
          <p>{{ loadedPost.content }}</p>
        </v-col>
        <v-col cols="12">
          <p>Feedback, let me know, what you think</p>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  asyncData(context) {
    return context.$axios
      .$get(`/posts/${context.params.id}.json`)
      .then((data) => {
        return { loadedPost: data }
      })
      .catch((e) => context.error(e))
  },
}
</script>

<style scoped></style>
