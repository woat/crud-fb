<template>
  <div class="PostCard">
    <div class="card">
      <div class="card__scoring">
        <div @click="voteUp" :class="{ 'card__scoring--active-up': active }" >
          <i class="card__scoring--caret card__scoring--caret-up fas fa-caret-up" ></i>
        </div>
        <div class="card__scoring--score">{{ post.score }}</div>
        <div @click="voteDown" :class="{ 'card__scoring--active-down': active === false }">
          <i class="card__scoring--caret card__scoring--caret-down fas fa-caret-down"></i>
        </div>
      </div>
      <img class="card__image" :src="post.img" />
      <div class="card__info">
        <router-link class="card__info--title" :to="{ path: `comments/${postKey}` }">{{ post.title }}</router-link>
        <div class="card__info--subheader">submitted {{ timeFromNow }} by <router-link to="#">{{ post.author_id }}</router-link></div>
        <ul class="card__info--lower">
          <li>{{ displayCommentsLength }}</li>
          <li>share</li>
        </ul>
        <button @click="removePost()">remove</button>
        <button @click="editPost()">edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import voting from '@/helpers/voting'

export default {
  created() {
    firebase.database().ref(`comments/${this.postKey}`).on('value', (snap) => {
      if (snap.val() === null) return
      this.commentsLength = Object.keys(snap.val()).length
    })
  },
  name: 'PostCard',
  props: ['post', 'postKey'],
  data() {
    return {
      commentsLength: 0
    }
  },
  methods: {
    editPost() {
      firebase.database().ref('posts').child(this.postKey).update({
        body: 'owo'
      })
    },
    removePost() {
      firebase.database().ref('posts').child(this.postKey).remove()
    },
    voteUp() {
      voting.voteUp(this, this.post, `posts/${this.postKey}`)
    },
    voteDown() {
      voting.voteDown(this, this.post, `posts/${this.postKey}`)
    }
  },
  computed: {
    displayCommentsLength() {
      return this.commentsLength > 0
        ? `${this.commentsLength} comments`
        : 'comment'
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
  }
}
</script>

<style scoped>
.card {
  padding: 4rem 5rem;
  border-bottom: 1px solid var(--super-grey);
  display: grid;
  grid-template-columns: 16rem 1fr;
  align-items: center;
  position: relative;
}

.card__info {
  padding-left: 4rem;
}

.card__scoring {
  position: absolute;
  top: 50%;
  left: -8rem;
  transform: translateY(-50%);
  display: grid;
  justify-items: center;
}

.card__scoring--score {
  font-family: 'Lato';
  font-size: 2rem;
  color: var(--white);
}

.card__scoring--caret {
  color: var(--cement);
  font-size: 5rem;
  cursor: pointer;
  margin: -1rem 0;
  transition: all 0.2s ease;
}

.card__scoring--caret-up:hover{
  color: var(--turq);
}

.card__scoring--caret-down:hover:last-child{
  color: var(--crimson);
}

.card__scoring--active-up > * {
  color: var(--turq);
}

.card__scoring--active-down > * {
  color: var(--crimson);
}

.card__image {
  width: 16rem;
  height: 8rem;
  object-fit: cover;
}

.card__info--title {
  text-decoration: none;
}

.card__info--subheader {
  font-size: 1.1rem;
  color: var(--dark-grey);
}

.card__info--subheader > * {
  all: inherit;
  display: inline-block;
  color: var(--dark-turq);
}

.card__info--subheader > *:hover {
  text-decoration: underline;
  cursor: pointer;
}

.card__info--lower {
  margin-top: -3px;
}

.card__info--lower > li {
  font-size: 1.1rem;
  font-weight: 700;
  display: inline-block;
  color: var(--cement)
}

.card__info--lower > *:hover {
  text-decoration: underline;
  cursor: pointer;
}

.card__info--lower > *:not(:first-child) {
  margin-left: 3px;
}

</style>
