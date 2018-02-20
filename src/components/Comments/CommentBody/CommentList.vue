<template>
  <div class="CommentList">
    <div class="card" v-for="comment in comments">
      <div class="card__header">
        <div class="card__header--username">{{ comment.author_id }}</div>
        <div class="card__header--points">{{ comment.points }} -- {{ comment.date }}</div>
      </div>
      <div class="card__body">
        <div class="card__body--text">
          {{ comment.comment }}
        </div>
      </div>
      <div class="card__footer">
        <ul class="card__footer--actions">
          <li>permalink</li>
          <li>embed</li>
          <li>save</li>
          <li>reply</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: ['comments']
}
</script>

<style scoped>
.card__header {
  display: flex;
}

.card__header--username {
  color: var(--dark-turq);
  font-weight: 700;
  font-size: 1.2rem;
}

.card__header--points {
  font-size: 1.1rem;
  color: var(--dark-grey);
}

.card__footer--actions > li {
  display: inline-block;
  font-size: 1.1rem;
  color: var(--dark-grey);
  font-weight: 700;
  cursor: pointer;
}
</style>
