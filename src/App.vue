<template>
  <div id="app">
    <PostCreate />
    <h2>{{postsCount}}</h2>
    <div class="post" v-for="post of validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import PostCreate from '@/components/PostCreate.vue';
export default {
  name: 'App',
  // computed: {
  //   allPosts(){
  //     return this.$store.getters.allPosts;
  //   }
  // },
  components: {
    PostCreate
  },
  methods: mapActions(['fetchPosts']),
  computed: mapGetters(['allPosts', 'getPostById', 'postsCount', 'validPosts']),
  async mounted() {
    // this.$store.dispatch('fetchPosts');
    this.fetchPosts(7);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .post {
    width: 70%;
    border: 3px solid rgb(2, 125, 182);
    margin-bottom: 1rem;
    padding: 1rem 2rem !important;

    
  }

  h2{
    width: 100%;
    margin: 20px 0 !important;
  }
}
</style>
