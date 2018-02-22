<template>
  <div class="CommentBody">
    <CommentSubmit :commentsLength="commentsLength" />
    <CommentList :comments="comments" />
  </div>
</template>

<script>
import CommentList from './CommentBody/CommentList'
import CommentSubmit from './CommentBody/CommentSubmit'

export default {
  name: 'CommentBody',
  props: ['comments'],
  components: { CommentList, CommentSubmit },
  computed: {
    commentsLength() {
      return this.comments !== null
        ? Object.keys(this.comments).length
        : 0
    }
  }
}
</script>

<style scoped>
.CommentBody > * {
  margin-bottom: 2rem;
}
</style>

