<template>
  <div class="Profile">
    <div class="profile__header">
      <img class="profile__picture" :src="user.avatar">
      <!--
      <input v-model="avatarUrl" type="text">
      <button @click="uploadAvatar">upload</button>
      <button @click="removeAvatar">remove</button>
      -->
      <h1 class="profile__username">{{ user.username }}</h1>
      <h1 class="profile__email">{{ user.email }}</h1>
      <p class="profile__about">{{ user.about }}</p>
    </div>
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
    },
    removeAvatar() {
      firebase
        .database()
        .ref(`users/${this.uid}`)
        .update({
          avatar: 'http://via.placeholder.com/200x200'
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
  display: grid;
  justify-content: center;
  align-content: center;
}

.profile__header {
  display: grid;
  grid-gap: 2rem;
  justify-items: center;
}

.profile__username {
  font-size: 3rem;
}

.profile__email {
  font-size: 2rem;
  font-weight: 400;
  color: var(--cement);
}

.profile__about {
  font-style: italic;
  color: var(--dark-blue);
}
</style>
