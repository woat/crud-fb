<template>
  <div class="CommentSubmit">
    <div class="submit">
      <textarea v-model="comment" class="submit__input"></textarea>
      <div class="submit__actions">
        <button @click="submitComment">Submit</button>
        <span class="submit__actions--help">Formatting Help</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CommentSubmit',
  computed: {
    ...mapGetters({
      user: 'currentUser' 
    })
  },
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    submitComment() {
      firebase.database().ref(`comments/${this.$route.params.id}`).push({
        points: 0,
        date: firebase.database.ServerValue.TIMESTAMP,
        comment: this.comment,
        author_id: this.user.uid
      })
    }
  }
}
</script>

<style scoped>
.submit {
  width: 40rem;
}

.submit__input {
  width: 100%;
  height: 15rem;
}

.submit__actions {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.submit__actions--help {
  color: var(--dark-turq);
  font-size: 1.2rem;
  text-transform: lowercase;
}

</style>
