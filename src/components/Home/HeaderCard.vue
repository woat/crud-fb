<template>
  <div class="HeaderCard">
    <h1 class="title">{{ headerCardOptions.title }}</h1>
    <HeaderSubCard class="header-sub-card" :listItems="headerCardOptions.list"/>
  </div>
</template>

<script>
import HeaderSubCard from '@/components/Home/HeaderSubCard'

export default {
  name: 'HeaderCard',
  props: ['headerCardOptions'],
  components: { HeaderSubCard },
}
</script>

<style scoped>
.HeaderCard {
  display: grid;
  grid-template-rows: 1fr 6.5rem;
  height: 27rem;
  background: var(--turq);
  align-items: center;
  border-radius: 3px;
}

.title {
  color: var(--white);
  font-size: 4rem;
  font-family: 'Lato';
  padding-left: 5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  grid-column: 1 / 2;
  grid-row: 1 / -1;
}

.header-sub-card {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

</style>
