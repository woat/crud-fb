<template>
  <div class="Comments">
    <HeaderCard :headerCardOptions="config" />
    <div class="wrapper">
      <PostBody class="PostBody" :post="postData" />
      <CommentBody :comments="commentData" />
    </div>
  </div>
</template>

<script>
import PostBody from '@/components/Comments/PostBody'
import CommentBody from '@/components/Comments/CommentBody'
import HeaderCard from '@/components/Home/HeaderCard'
import firebase from 'firebase'

export default {
  created() {
    this.initPostData()
    this.initCommentData()
  },
  name: 'Comments',
  components: { PostBody, CommentBody, HeaderCard },
  data() {
    return {
      postData: {},
      commentData: {},
      config: {},
    }
  },
  methods: {
    initPostData() {
      firebase.database().ref(`posts/${this.$route.params.id}`).on('value', (snap) => {
        this.config = {
          title: snap.val().title
        }
        this.postData = snap.val()
      })
    },
    initCommentData() {
      firebase.database().ref(`comments/${this.$route.params.id}`).on('value', (snap) => {
        this.commentData = snap.val()
      })
    }
  }
}
</script>

<style scoped>
.Comments {
  background: white;
}

.PostBody {
  margin-bottom: 2rem;
}

.wrapper {
  padding: 2rem;
}
</style>
