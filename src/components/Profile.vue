<template>
  <div class="Profile">
    <h1>{{ user.username }}</h1>
    <h1>{{ user.email }}</h1>
    <h1>{{ user.avatar}}</h1>
    <img :src="user.avatar">
    <input v-model="avatarUrl" type="text">
    <button @click="uploadAvatar">upload</button>
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
      user: 'Profile could not be found.',
      avatarUrl: ''
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
        .on('value', (snap) => {
          const user = snap.val()
          const uid = Object.keys(user)[0]
          this.user = user[uid]
          this.uid = uid
        })
    },
    uploadAvatar() {
      firebase
        .database()
        .ref(`users/${this.uid}`)
        .update({
          avatar: this.avatarUrl
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
