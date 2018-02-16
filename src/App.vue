<template>
  <div id="app">
    <Navi class="navi" />
    <Search class="search" />
    <router-view class="router-view"/>
    <Actions class="actions" />
  </div>
</template>

<script>
import Navi from '@/components/Navi'
import Actions from '@/components/Actions'
import Search from '@/components/Search'

export default {
  name: 'App',
  components: { Navi, Actions, Search }
}
</script>

<style>
:root {
  --turq: #00ACC1;
  --dark-turq: #0097A7;

  --light-blue: #41545D;
  --blue: #364A54;
  --dark-blue: #263C46;

  --navy: #203640;

  --white: #FFFFFF;

  --red: #E7183F;
  --crimson: #DA023A;

  --super-grey: #F3F4F5;
  --light-grey: #ABB8BF;
  --grey: #8C9DA6;
  --dark-grey: #8799A2;

  --cement: #66767D;
}
* {
  margin: 0;
  padding: 0;
  font-family: Roboto;
  font-size: 1.6rem;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

#app {
  background-color: var(--blue);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: grid;
  color: #2c3e50;
  grid-template-columns: 1.5fr 5.5fr 4fr;
  grid-template-rows: 9rem 15rem auto 20rem;
  grid-template:
    "header header header"
    "header content header"
    "left-body content right-body"
    "footer footer footer"
}

.navi {
  grid-column: 1 / -1;
  grid-row: 1 / 3;
}

.router-view {
  grid-column: 2;
  grid-row: 2 / -2;
  box-shadow: 0 0 4rem rgba(0, 0, 0, .15);
  border-radius: 3px;
}

.actions {
  grid-column: 3;
  grid-row: 3 / auto;
  align-items: start;
}

.search {
  grid-column: 3;
  grid-row: 2;
}

#app > * {
}
</style>
