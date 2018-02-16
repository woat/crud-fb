<template>
  <div class="PostCard">
    <div class="card">
      <div class="card__scoring">
        <i class="card__scoring--caret fas fa-caret-up"></i>
        <div class="card__scoring--score">1010</div>
        <i class="card__scoring--caret fas fa-caret-down"></i>
      </div>
      <img class="card__image" :src="post.thumb" />
      <div class="card__info">
        <router-link to="#">{{ post.title }}</router-link>
        <div class="card__info--subheader">{{ post.date }} by {{ post.author_id }}</div>
        <div class="card__info--lower">comments share</div>
        <button @click="removePost()">remove</button>
        <button @click="editPost()">edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: ['post', 'postKey'],
  methods: {
    editPost() {
      firebase.database().ref('posts').child(this.postKey).update({
        body: 'owo'
      })
    },
    removePost() {
      firebase.database().ref('posts').child(this.postKey).remove()
    }
  }
}
</script>

<style scoped>
.card {
  padding: 4rem 5rem;
  border-bottom: 1px solid var(--super-grey);
  display: grid;
  grid-template-columns: 16rem 1fr;
  align-items: center;
  position: relative;
}

.card__info {
  padding-left: 4rem;
}

.card__scoring {
  position: absolute;
  top: 50%;
  left: -8rem;
  transform: translateY(-50%);
  display: grid;
  justify-items: center;
}

.card__scoring--score {
  font-family: 'Lato';
  font-size: 2rem;
  color: var(--white);
}

.card__scoring--caret {
  color: var(--cement);
  font-size: 5rem;
  cursor: pointer;
  margin: -1rem 0;
  transition: all 0.2s ease;
}

.card__scoring--caret:hover{
  color: var(--turq);
}

/* Last arrow is down arrow */
.card__scoring--caret:hover:last-child{
  color: var(--crimson);
}

.card__image {
}

.card__info {
}

</style>
