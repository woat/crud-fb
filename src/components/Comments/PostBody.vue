<template>
  <div class="PostBody">
    <div class="card">
      <div class="card__header">
        <div class="card__header--title">
          <a :href="post.link">{{ post.title }}</a>
        </div>
      </div>
      <div class="card__subheader">
        submitted {{ timeFromNow }} -- <router-link class="card__subheader--author" to="#">{{ post.author_id }}</router-link>
      </div>
      <div class="card__body">
        <div class="card__body--image" v-if="isThisPostALink">
          <img :src="post.img" />
        </div>
        <div class="card__body--text" v-else>
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
import moment from 'moment'

export default {
  name: 'PostBody',
  props: ['post'],
  computed: {
    noPost() {
      return this.post === null
        ? 'There is no post here.'
        : null
    },
    isThisPostALink() {
      return !!this.post.link
    },
    timeFromNow() {
      return moment(this.post.date).fromNow()
    }
  },
}
</script>

<style scoped>
.PostBody {
}

a {
  color: blue;
  cursor: pointer;
}

.card__header--title > * {
  font-size: 2rem;
  text-decoration: none;
}

.card__subheader {
  margin: .2rem 0;
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

.card__body--image {
  overflow: hidden;
}

img {
  max-width: 100%;
}

.card__body--text {
  line-height: 2.2rem;
  font-size: 1.6rem;
  background-color: var(--super-grey);
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--dark-grey);
  width: 70rem;
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
