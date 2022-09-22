<template>
  <div class="container">
    <h1 v-if="user==''">Welcome guest</h1>
    <h1 v-if="user!=''">Welcome {{user}}</h1>
    <h5 v-if="posts.length==0">No post yet</h5>
    <br />
    <div class="accordion" id="accordionExample">
      <div v-for="post of posts">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5>{{ post.title }} @{{ post.user }}</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {{ post.description }}
              <img :src="post.image" style="height: 100px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <button class="btn btn-primary" v-if="user!=''" v-on:click="changeDir('post')">Add Post</button>
  </div>
</template>

<script>
import { usePostStore } from "../store/postStore";
import { useUserStore } from "../store/userStore";
export default {
  data() {
    return {
      title: "",
      description: "",
      user: "",
      posts: [],
    };
  },
  methods:{
    changeDir(ruta) {
      this.$router.push('/'+ruta);
    },
  },
  mounted() {
    const user = useUserStore();
    const post = usePostStore();
    this.user = user.name;
    this.posts = post.posts;
    console.log(this.posts);
  },
};
</script>

<style>
  h5{
    text-align: center;
  }
  h1{
    text-align: center;
  }
</style>
