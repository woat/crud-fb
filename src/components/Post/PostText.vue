<template>
  <div class="post">
    <div class="post__form">
      <label>
        <h3>Post Title</h3>
        <input v-model="title" type="text">
      </label>
      <label>
        <h3>Text Body</h3>
        <textarea v-model="body" type="text"></textarea>
      </label>
      <label>
        <h3>Thumbnail</h3>
        <input v-model="thumb" type="text">
      </label>
      <button class="post__button" @click="submitPost">Submit</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'PostText',
  created() {
  },
  computed: {
    ...mapGetters({
      user: 'currentUser' 
    })
  },
  data() {
    return {
      thumb: '',
      title: '',
      body: ''
    }
  },
  methods: {
    submitPost() {
      firebase.database().ref('posts/text').push({
        thumb: this.thumb,
        title: this.title,
        body: this.body,
        date: firebase.database.ServerValue.TIMESTAMP,
        author_id: this.user.uid
      })
    }
  }
}
</script>

<style scoped>
.post {
  background: var(--white);
}
.post__form {
  display: grid;
  padding: 5rem;
}

label:first-child {
  padding-top: 0;
}

label {
  display: inline-block;
  width: 100%;
  height: auto;
  padding: 3rem 0;
  border-bottom: 1px solid var(--super-grey);
}

label:nth-last-child(2) {
  border-bottom: 0;
}

input {
  display: block;  
  width: 50%;
  border-radius: 1rem;
  background-color: var(--super-grey);
  border: 1px solid var(--dark-grey);
  padding: 1rem;
}

textarea {
  padding: 1rem;
  width: 50%;
  border-radius: 1rem;
  height: 20rem;
  background-color: var(--super-grey);
  border: 1px solid var(--dark-grey);
}


h3 {
  color: var(--dark-grey);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.post__button {
  text-align: center;
  text-transform: uppercase;
  width: 15rem;
  padding: 1.5rem 2rem;
  border: 0;
  border-radius: 1rem;
  color: var(--white);
  background-color: var(--dark-grey);
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  will-change: transform;
}

.post__button:hover {
  background-color: var(--light-grey);
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}

.post__button:active {
  transition: all 0s ease;
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
}

</style>
