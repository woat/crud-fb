<template>
  <div class="SignUp">
    <div class="inputs">
      <input v-model="email" type="text" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
    </div>
    <button @click="signUp">Sign Up</button>
    <p>Have an account? Click <router-link to="/login">here</router-link> to log in.</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp() {
      let error = false
      const user = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          alert(err)
          error = true
        })
      if (error) return
      alert('Your account has been created!')
      this.$router.replace('hello')
    }
  }
}
</script>

<style scoped>
.SignUp {
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
