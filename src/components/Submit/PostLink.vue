<template>
  <div class="post">
    <div class="post__form">
      <label>
        <h3>Link Url</h3>
        <input v-model="link" type="text">
      </label>
      <label>
        <h3>Image Link</h3>
        <input v-model="img" type="text">
      </label>
      <label>
        <h3>Title</h3>
        <textarea v-model="title" type="text"></textarea>
      </label>
      <div class="post__buttons">
        <button class="post__button" @click="submitPost">Submit</button>
        <button class="post__button" @click="test">Test</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'PostLink',
  computed: {
    ...mapGetters({
      user: 'currentUser' 
    })
  },
  data() {
    return {
      link: '',
      img: '',
      title: ''
    }
  },
  methods: {
    submitPost() {
      const pushDataAndReturnKey = firebase.database().ref('posts').push({
        link: this.link,
        img: this.img,
        //img: 'http://via.placeholder.com/160x80',
        title: this.title,
        date: firebase.database.ServerValue.TIMESTAMP,
        score: 0,
        votes: {},
        author_id: this.user.uid
      }).key

      this.$router.push(`/comments/${pushDataAndReturnKey}`)
    },
    test() {
      const key = firebase.database().ref('posts').push({
        link: 'https://www.wildlifearchives.com/pin/85/',
        img: 'https://www.wildlifearchives.com/wp-content/uploads/2016/01/peak-mountain-1453580627g4n8k-1280x854.jpg',
        title: 'Matterhorn. Peak mountain. What else?',
        date: firebase.database.ServerValue.TIMESTAMP,
        score: 0,
        votes: {},
        author_id: this.user.uid
      }).key

      this.$router.push(`/comments/${key}`)
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
  color: var(--grey);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.post__buttons {
  display: flex;
  justify-content: space-between;
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
