<template>
  <div class="search">
    <input class="search__bar" type="text" placeholder="Search"/>
    <i class="fas fa-search fa-2x search__bar--icon"></i>
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style scoped>
.search {
  display: grid;
  align-items: center;
  position: relative;
}

.search__bar {
  padding: 1.5rem 2rem;
  padding-right: 5rem;
  text-align: left;
  border: 0;
  border-radius: 10px;
  display: block;
  color: var(--white);
  background-color: var(--dark-blue);
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 10rem;
  width: 30rem;
  border: 1px solid var(--cement);
} 

.search__bar::placeholder {
  color: var(--white);
  opacity: 1;
  text-transform: uppercase;
}

.search__bar--icon {
  font-size: 2.5rem;
  color: var(--turq);
  position: absolute;
  left: 35.1rem;
  cursor: pointer;
}
</style>
