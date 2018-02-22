<template>
  <div class="Home">
    <HeaderCard class="header-card" :headerCardOptions="config" />
    <PostList class="post-list" />
  </div>
</template>

<script>
import PostList from '@/components/Home/PostList'
import HeaderCard from '@/components/Home/HeaderCard'

export default {
  name: 'Home',
  components: { PostList, HeaderCard },
  data () {
    return {
      config: {
        title: 'Front',
        list: [
          ['Hot', 'hot'],
          ['New', 'new'],
          ['Top', 'top']
        ]
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home {
  background-color: var(--white);
  display: grid;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

