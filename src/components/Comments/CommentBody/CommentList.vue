<template>
  <div class="CommentList">
    <CommentCard 
      class="card" 
      v-for="(comment, commentKey) in comments" 
      :comment="comment" 
      :commentKey="commentKey"
      :key="commentKey"
      />
  </div>
</template>

<script>
import CommentCard from './CommentCard'

export default {
  name: 'CommentList',
  props: ['comments'],
  components: { CommentCard }
}
</script>

<style scoped>
.card:not(:first-child) {
  margin-top: 1rem;
}
</style>
