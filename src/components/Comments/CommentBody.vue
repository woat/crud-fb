<template>
  <div class="CommentBody">
    <CommentSubmit />
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
    noComments() {
      return this.comment === null 
        ? 'There are no comments (yet).'
        : null
    }
  }
}
</script>

<style scoped>
</style>
