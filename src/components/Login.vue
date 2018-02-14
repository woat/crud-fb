<template>
  <div class="Login">
    <div class="inputs">
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
    </div>
    <button @click="signIn">Connection</button>
    <p>You don't have an account? Click <router-link to="/sign-up">here</router-link> to create one.</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$store.commit('loginUser', user)
          this.$router.push('home')
        },
        (err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.Login {
  margin-top: 40px;
  display: grid;
  justify-items: center;
}

input {
  margin: 10px 0;
  padding: 15px 25px;
}

.inputs {
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 20px;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
