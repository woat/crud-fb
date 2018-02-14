<template>
  <div class="Navi">
    {{ user ? 't' : 'f' }}
    <router-link to="/login">Login</router-link>
    <router-link to="/sign-up">SignUp</router-link>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'Navi',
  computed: {
    ...mapGetters({
      user: 'loggedIn'
    })
  },
  data() {
    return {
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/')
        this.$store.commit('logoutUser')
      }).catch(function(error) {
        console.log(error)
      });
    }
  },
  created() {
    // Sets proper state if someone who is authenticated exits the page and returns
    let currentUser = firebase.auth().currentUser;
    if (currentUser) this.$store.commit('loginUser', currentUser)
  }
}
</script>
