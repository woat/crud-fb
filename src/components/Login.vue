<template>
  <div class="Login">
    <div class="inputs">
      <label>
        <h3>Email</h3>
        <input v-model="email" type="text" placeholder="Email" />
      </label>
      <label>
        <h3>Password</h3>
        <input v-model="password" type="password" placeholder="Password" />
      </label>
      <button @click="signIn">Log In</button>
      <p>You don't have an account? Click <router-link to="/sign-up">here</router-link> to create one.</p>
    </div>
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
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  align-items: center;
  background: var(--white);
}

h3 {
  text-transform: uppercase;
  font-size: 1.5rem;
  color: var(--light-blue);
}

input {
  margin: 1rem 0;
  padding: 1rem 2rem;
}

.inputs {
  display: flex;
  flex-direction: column;
}

button {
  margin-top: 20px;
  width: 10rem;
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
