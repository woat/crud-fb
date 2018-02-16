<template>
  <div class="HeaderSubCard">
    <ul class="sub">
      <li v-for="item in listItems" class="sub__item">
        <router-link :to="{ path: `/${relative}/${item[1]}` }" :class="active(item[1])" class="sub__link">
          {{ item[0] }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderSubCard',
  props: ['listItems'],
  methods: {
    active(item) {
      return this.$route.params.type === item
        ? 'sub__item--active'
        : null
    }
  },
  data() {
    return {
    }
  },
  computed: {
    relative() {
      return this.$route.name.toLowerCase()
    }
  }
}
</script>

<style scoped>
.HeaderSubCard {
  height: 100%;
  background: var(--dark-turq);
  display: grid;
  align-items: center;
}

.sub {
  padding: 0 5rem;
}

.sub__link {
  all: inherit;
}

.sub__item {
  color: var(--light-grey);
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  transition: all 0.2s ease;
  cursor: pointer;
}

.sub__item:hover {
  color: var(--white);
}

.sub__item--active {
  color: var(--white);
}

.sub__item:not(:first-child) {
  margin-left: 3rem;
}
</style>
