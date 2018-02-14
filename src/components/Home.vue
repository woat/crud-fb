<template>
  <div class="home">
    <PostList />
    <router-link to="/post">
      <button>Create New Post</button>
    </router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
import PostList from '@/components/Home/PostList'

export default {
  name: 'home',
  components: { PostList },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(function() {
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

