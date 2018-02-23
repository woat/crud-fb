<template>
  <div class="CommentCard">
    <div class="card">
      <div class="card__scoring">
        <div @click="voteUp" :class="{ 'card__scoring--active-up': active }" >
          <i class="card__scoring--caret card__scoring--caret-up fas fa-caret-up" ></i>
        </div>
        <div @click="voteDown" :class="{ 'card__scoring--active-down': active === false }">
          <i class="card__scoring--caret card__scoring--caret-down fas fa-caret-down"></i>
        </div>
      </div>
      <div class="card__main">
        <div class="card__header">
          <div class="card__header--username">{{ username }}</div>
          <div class="card__header--points">{{ comment.score }} points {{ timeFromNow }}</div>
        </div>
        <div class="card__body">
          <div class="card__body--text">{{ comment.comment }}</div>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
import voting from '@/utils/voting'
import convertIdTo from '@/utils/convertIdTo'

export default {
  created() {
    if (this.comment.hasOwnProperty('author_id')) {
      this.initUsername(this.comment.author_id)
    }
  },
  watch: {
    comment(val) {
      this.initUsername(val.author_id)
    }
  },
  data() {
    return {
      username: ''
    }
  },
  name: 'CommentCard',
  props: ['comment', 'commentKey'],
  methods: {
    initUsername(id) {
      convertIdTo.username(id).then(username => this.username = username )
    },
    voteUp() {
      voting.voteUp(this, this.comment, `comments/${this.$route.params.id}/${this.commentKey}`)
    },
    voteDown() {
      voting.voteDown(this, this.comment, `comments/${this.$route.params.id}/${this.commentKey}`)
    }
  },
  computed: {
    timeFromNow() {
      return moment(this.comment.date).fromNow()
    },
    active() {
      if (this.comment.votes) {
        return !!this.comment.votes[this.user.uid]
      }
    },
    ...mapGetters({
      user: 'currentUser' 
    }),
  }
}
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: auto 1fr;
}

.card__scoring {
  display: grid;
  align-content: start;
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
  margin-top: -.6rem;
  margin-bottom: -.6rem;
}

.card__scoring--caret-up:hover{
  color: var(--turq);
}

.card__scoring--caret-down {
  margin-top: -.6rem;
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

.card__header {
  align-self: center;
  display: flex;
}

.card__header--username {
  color: var(--dark-turq);
  font-weight: 700;
  font-size: 1.2rem;
}

.card__header--points {
  margin-left: 0.5rem;
  font-size: 1.1rem;
  color: var(--dark-grey);
}

.card__body--text {
  padding-top: 0.5rem;
  white-space: pre-line;
}

.card__footer--actions > li {
  display: inline-block;
  font-size: 1.1rem;
  color: var(--dark-grey);
  font-weight: 700;
  cursor: pointer;
}

.card__footer--actions > li:hover {
  text-decoration: underline;
}
</style>
