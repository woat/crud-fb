<template>
  <div class="Actions">
    <div class="shadow">
      <div class="card">
        <h1>Create a new post</h1>
        <router-link to="/submit/link" class="card__button">
          Submit a link
          <i class="fas fa-link fa-2x"></i>
        </router-link>
        <router-link to="/submit/text" class="card__button">
          Submit a text post
          <i class="fas fa-comment fa-2x"></i>
        </router-link>
      </div> 
      <div class="card">
        <h1>Daily Reddit gold goal</h1>
        <router-link to="#" class="card__button">
          Help support reddit
          <i class="fas fa-heart fa-2x"></i>
        </router-link>
      </div>
      <div class="card">
        <h1>Advertise</h1>
        <router-link to="#" class="card__button">
          Promote on reddit
          <i class="fas fa-bullhorn fa-2x"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Actions',

}
</script>

<style scoped>
h1 {
  color: var(--grey);
  margin-bottom: 2.5rem !important;
}

.shadow {
  box-shadow: 0 0 4rem rgba(0, 0, 0, .15);
  border-radius: 3px;
  overflow: hidden;
}

.Actions {
  width: 40rem;
  margin-left: 5rem;
  margin-top: 5rem;
}

.card {
  background: var(--light-blue);
  padding: 5rem;
  text-transform: uppercase;
}

.card:not(:last-child) {
  margin-bottom: 2px;
}

.card > *:not(:last-child) {
  margin-bottom: 2rem;
}

.card__button {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border: 1px solid var(--cement);
  border-radius: 1rem;
  color: var(--white);
  background-color: var(--dark-blue);
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  will-change: transform;
  transition: all 0.2s ease;
  outline: 0;
}

.card__button:hover {
  background-color: var(--blue);
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
}

.card__button:active {
  transition: all 0s ease;
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
}

/* This targets the icon */
.card__button > * {
  color: var(--turq);
}
</style>
