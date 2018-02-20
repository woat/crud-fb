<template>
  <div class="PostBody">
    <div class="card">
      <div class="card__header">
        <div class="card__header--title">
          <router-link to="#">{{ post.title }}</router-link>
        </div>
      </div>
      <div class="card__subheader">
        {{ post.date }} -- <router-link class="card__subheader--author" to="#">{{ post.author_id }}</router-link>
      </div>
      <div class="card__body">
        <div class="card__body--text">
          {{ post.body }}
        </div>
      </div>
      <div class="card__footer">
        <ul class="card__footer--list">
          <li>comment</li>
          <li>share</li>
          <li>save</li>
          <li>hide</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostBody',
  props: ['post'],
  computed: {
    noPost() {
      return this.post === null
        ? 'There is no post here.'
        : null
    }
  }
}
</script>

<style scoped>
.PostBody {
}

.card__header--title > * {
  font-size: 2rem;
  text-decoration: none;
}

.card__subheader {
  font-size: 1.1rem;
  color: var(--dark-grey);
}

.card__subheader--author {
  font-size: inherit;
  text-decoration: none;
}

.card__subheader--author:hover {
  text-decoration: underline;
}

.card__body--text {
  line-height: 2.2rem;
  font-size: 1.6rem;
  background-color: var(--super-grey);
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--dark-grey);
}

.card__footer--list > li {
  display: inline-block;
  font-size: 1.1rem;
  color: var(--dark-grey);
  font-weight: 700;
  cursor: pointer;
}

.card__footer--list > li:hover {
  text-decoration: underline;
}
</style>
