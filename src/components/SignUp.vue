<template>
  <div class="Signup">
    <div class="title">
      <h1>Sign Up</h1>
    </div>
    <div class="inputs">
      <label>
        <h3>Username</h3>
        <input v-model="username" type="text" placeholder="Username" />
      </label>
      <label>
        <h3>Email</h3>
        <input v-model="email" type="text" placeholder="Email" />
      </label>
      <label>
        <h3>Password</h3>
        <input v-model="password" type="password" placeholder="Password" />
      </label>
      <button @click="signUp">Sign Up</button>
      <p>Have an account? Click <router-link to="/login">here</router-link> to log in.</p>
    </div>
    <div class="footer">
      <a href="http://woat.github.io/">Click <span class="footer__here">here</span> to return to Github.</a>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'

export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          const userInfo = user.providerData[0]
          user.updateProfile({ displayName: this.username })
          firebase.database().ref(`users/${user.uid}`).set({
            username: this.username,
            email: userInfo.email
          })
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
.Signup {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 20rem auto 12rem;
  justify-items: center;
  align-items: center;
  background: linear-gradient(var(--white), var(--white) 85%, var(--light-blue) 15%, var(--light-blue));
  position: relative;
}

.title {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  text-align: center;
  display: grid;
  justify-content: end;
}

.inputs {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer {
  grid-row: 3 / 4;
  grid-column: 1 / -1;
}

.footer > * {
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--white);
}

.footer__here {
  text-decoration: underline;
}

h1 {
  font-size: 10rem;
}

h3 {
  text-transform: uppercase;
  font-size: 1.5rem;
  color: var(--light-blue);
}

h4 {
  color: var(--dark-grey);
  font-weight: 400;
}

.profile__text {
  color: var(--white);
}

label {
  margin-bottom: 1rem;
}

input {
  margin: 1rem 0;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 2px;
  border-bottom: 3px solid var(--grey);
  width: 100%;
  transition: all 0.3s;
}

input:focus {
  outline: none;
  transition: all 0.9s ease;
  border-bottom: 3px solid var(--turq);
}

button {
  width: 10rem;
  cursor: pointer;
  justify-self: center;
}

p {
  margin-top: 2rem;
  font-size: 13px;
}

p a {
  font-size: inherit;
  text-decoration: underline;
  cursor: pointer;
}
</style>
