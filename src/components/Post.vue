<template>
  <div class="post">
    <label>Post Title<input v-model="title" type="text"></label>
    <label>Text Body<input v-model="body" type="text"></label>
    <button @click="submitPost">Submit Post</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'Post',
  computed: {
    ...mapGetters({
      user: 'currentUser' 
    })
  },
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    submitPost() {
      firebase.database().ref('posts').push({
        title: this.title,
        body: this.body,
        date: firebase.database.ServerValue.TIMESTAMP,
        author_id: this.user.uid
      })
    }
  }
}
</script>

<style scoped>

</style>
