<template>
  <div class="PostList">
    <ol>
      <!-- TODO POST_CARD -->
      <!-- TODO POST_MODAL (EDIT) -->
      <li v-for="(post, key) in posts">
        <PostCard :post="post" :postKey="key" />
      </li>
    </ol>
  </div>
</template>

<script>
import firebase from 'firebase'
import PostCard from '@/components/Home/PostCard'

export default {
  name: 'PostList',
  components: { PostCard },
  data() {
    return{
      posts: [],
    }
  },
  methods: {
    getPosts() {
      firebase.database().ref('posts').on('value', (snap) => {
        this.posts = snap.val()
      })
    },
  },
  created() {
    this.getPosts()
  }
}
</script>
