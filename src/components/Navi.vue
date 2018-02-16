<template>
  <div class="navi">
    <div class="navi__bar">
      <div class="navi__bar--left">
        <router-link to="/home">My Subreddits</router-link>
      </div>
      <div class="navi__bar--right">
        <router-link v-if="!user" to="/login">Login</router-link>
        <router-link v-if="!user" to="/sign-up">SignUp</router-link>
        <a v-if="user" v-on:click="logout">Logout</a>
      </div>
    </div>
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

<style scoped>
a {
  color: var(--grey);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1rem;
  padding-top: 1px;
  cursor: pointer;
}

a:not(:last-child) {
  margin-right: 1.5rem;
}

.navi {
  background-image: url('../assets/header-bg.jpeg');
  background-size: cover;
  background-position: center;
  background-color: var(--dark-blue);

  display: grid;
  grid-template-rows: 4.5rem 1fr;
}

.navi__bar {
  background-color: var(--dark-blue);
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  align-items: center;
}

.navi__bar--left {
  order: -1;
  display: flex;
  align-items: center;
  justify-self: start;
}

.navi__bar--right {
  display: flex;
  align-items: center;
  justify-self: end;
}

</style>
