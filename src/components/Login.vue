<template>
  <div class="Login">
    <div class="title">
      <h1>Login</h1>
      <h4>or use a quick account</h4>
    </div>
    <div class="inputs">
      <label>
        <h3>Email</h3>
        <input v-model="email" type="text" placeholder="Email" />
      </label>
      <label>
        <h3>Password</h3>
        <input v-model="password" type="password" placeholder="Password" />
      </label>
      <button @click="signIn">Login</button>
      <p>You don't have an account? Click <router-link to="/sign-up">here</router-link> to create one.</p>
    </div>
    <div class="quick">
      <div class="profile">
        <div class="profile__card">
        <img class="profile__picture" src="https://static2.greatsong.net/artiste/276x276/big-shaq-99991200000558.jpg" />
        <h3 class="profile__text">Big_Shaq1</h3>
        </div>
      </div>
      <div class="profile">
        <div class="profile__card">
          <img class="profile__picture" src="https://pm1.narvii.com/6648/584adb35cb505a1fa2436f3ca22d58ad68ac05a8_128.jpg" />
        <h3 class="profile__text">Lil_Pump99</h3>
        </div>
      </div>
    </div>
    <div class="footer">
      <a href="http://woat.github.io/">Click <span class="footer__here">here</span> to return to Github.</a>
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
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputs:before {
  content: '';
  top: 0;
  left: 50%;
  height: 50%;
  transform: translateY(50%);
  display: block;
  position: absolute;
  border-right: 1px solid var(--light-grey);
}

.quick {
  padding: 1rem;
  grid-row: 1 / -1;
  grid-column: 1 / 2;
}

.profile {
  display: inline-block;
  padding: 3rem 3rem;
  width: auto;
  border: 1px solid var(--cement);
  background-color: var(--dark-blue);
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.profile:hover {
  transform: translateY(-3px);
  background-color: var(--blue);
  box-shadow: 0 2px 4px rgb(0,0,0,.7);
}

.profile:active {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgb(0,0,0,.3);
  transition: all 0s;
}

.profile:not(:last-child) {
  margin-right: 3rem;
}

.profile__card {
  display: grid;
  justify-items: center;
  grid-gap: 2rem;
}

.profile__picture {
  height: 10rem;
  border: 1px solid var(--cement);
  border-radius: 5rem;
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
