<template>
  <div class="Profile">
    <h1>{{ user }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    this.initUser()
  },
  name: 'Profile',
  data() {
    return {
      uid: '',
      user: 'Profile could not be found.'
    }
  },
  methods: {
    initUser() {
      const username = this.$route.params.username || this.currentUser.displayName
      firebase
        .database()
        .ref('users')
        .orderByChild('username')
        .equalTo(username)
        .once('value', (snap) => {
          this.user = snap.val()[Object.keys(snap.val())[0]]
      })
    }
  },
  watch: {
    '$route.params'() {
      this.initUser()
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'currentUser' 
    }),
  },
}
</script>

<style scoped>
.Profile {
  background-color: white;
}
</style>
