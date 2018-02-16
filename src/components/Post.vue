<template>
  <div class="post">
    <HeaderCard :headerCardOptions="config"/>
    <PostLink v-if="typeIsLink"/>
    <PostText v-if="!typeIsLink"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import HeaderCard from '@/components/Home/HeaderCard'
import PostText from '@/components/Post/PostText'
import PostLink from '@/components/Post/PostLink'

export default {
  name: 'Post',
  created() {
    this.updateConfig(this.$route.params.type)
  },
  watch: {
    '$route'({ params: { type }}) {
      this.updateConfig(type)
    }
  },
  components: { HeaderCard, PostText, PostLink },
  computed: {
    ...mapGetters({
      user: 'currentUser' 
    }),
    typeIsLink() {
      return this.$route.params.type === 'link'
    }
  },
  methods: {
    updateConfig(postType) {
      const title = this.typeIsLink
        ? 'Submit a Link'
        : 'Submit a Text Post'
      this.config = {
        title,
        list: [
          ['Link', 'link'],
          ['Text', 'text']
        ]
      }
    }
  },
  data() {
    return {
      config: {}
    }
  },
}
</script>

<style scoped></style>
