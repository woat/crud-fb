<template>
  <div class="PostCard">
    <div class="card">
      <router-link to="#">{{ post.title }}</router-link>
      <div class="card__subheader">{{ post.date }} by {{ post.author_id }}</div>
      <div class="card__lower">comments share</div>
    </div>
    <button @click="removePost()">remove</button>
    <button @click="editPost()">edit</button>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post', 'postKey'],
  methods: {
    editPost() {
      firebase.database().ref('posts').child(this.postKey).update({
        body: 'owo'
      })
    },
    removePost() {
      firebase.database().ref('posts').child(this.postKey).remove()
    }
  }
}
</script>
