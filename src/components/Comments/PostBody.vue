<template>
  <div class="PostBody">
    <div class="card">
      <div class="card__header">
        <div class="card__header--left">
          <div class="card__scoring">
            <div @click="voteUp" :class="{ 'card__scoring--active-up': active }" >
              <i class="card__scoring--caret card__scoring--caret-up fas fa-caret-up" ></i>
            </div>
            <div class="card__scoring--score">{{ post.score }}</div>
            <div @click="voteDown" :class="{ 'card__scoring--active-down': active === false }">
              <i class="card__scoring--caret card__scoring--caret-down fas fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div class="card__header--main">
          <div class="card__title">
            <a :href="post.link">{{ post.title }}</a>
          </div>
          <div class="card__subtitle">
            submitted {{ timeFromNow }} -- <router-link class="card__subtitle--author" :to="{path: `/profile/${username}`}">{{ username }}</router-link>
          </div>
        </div>
      </div>

      <div class="card__body">
        <div class="card__body--image" v-if="isThisPostALink">
          <img :src="post.img" />
        </div>
        <div class="card__body--text" v-else>{{ post.body }}</div>
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
import { mapGetters } from 'vuex'
import moment from 'moment'
import voting from '@/utils/voting'
import convertIdTo from '@/utils/convertIdTo'

export default {
  created() {
    if (this.post.hasOwnProperty('author_id')) {
      this.initUsername(this.post.author_id)
    }
  },
  watch: {
    post(val) {
      this.initUsername(val.author_id)
    }
  },
  name: 'PostBody',
  props: ['post'],
  data() {
    return {
      username: ''
    }
  },
  methods: {
    initUsername(id) {
      convertIdTo.username(id).then(username => this.username = username )
    },
    voteUp() {
      voting.voteUp(this, this.post, `posts/${this.$route.params.id}`)
    },
    voteDown() {
      voting.voteDown(this, this.post, `posts/${this.$route.params.id}`)
    }
  },
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
    },
    active() {
      if (this.post.votes) {
        return !!this.post.votes[this.user.uid]
      }
    },
    ...mapGetters({
      user: 'currentUser' 
    })
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

.card__header {
  display: grid;
  grid-template-columns: auto 1fr;
}

.card__header--left {
}

.card__scoring {
  display: grid;
  justify-items: center;
  margin-right: 1rem;
}

.card__scoring--score {
  font-family: 'Lato';
  font-size: 1.5rem;
  color: var(--dark-grey);
}

.card__scoring--caret {
  color: var(--cement);
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.card__scoring--caret-up {
  margin-bottom: -.8rem;
}

.card__scoring--caret-up:hover{
  color: var(--turq);
}

.card__scoring--caret-down {
  margin-top: -.8rem;
}
.card__scoring--caret-down:hover{
  color: var(--crimson);
}

.card__scoring--active-up > * {
  color: var(--turq);
}

.card__scoring--active-down > * {
  color: var(--crimson);
}

.card__header--main {
  align-self: center;
}

.card__title > * {
  font-size: 2rem;
  text-decoration: none;
}

.card__subtitle {
  margin: .2rem 0;
  font-size: 1.1rem;
  color: var(--dark-grey);
}

.card__subtitle--author {
  font-size: inherit;
  text-decoration: none;
}

.card__subtitle--author:hover {
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
  white-space: pre-line;
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
