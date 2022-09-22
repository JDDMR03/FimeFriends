<template>
  <div class="container" v-if="user != ''">
    <div class="row">
      <div class="col-12">
        <div class="mb-3">
          <label for="Title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            v-model="title"
            id="Title"
            placeholder="Title for post"
          />
        </div>
        <div class="mb-3">
          <label for="Description" class="form-label">Description</label>
          <textarea
            class="form-control"
            v-model="description"
            id="Description"
            placeholder="What happened?"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="Image" class="form-label">Image</label>
          <textarea
            class="form-control"
            v-model="image"
            id="Image"
            placeholder="URL for an Image"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button class="btn btn-primary" v-on:click="savePost">Post</button>
    </div>
  </div>
  <h5 v-if="user == ''">You have to login before post</h5>
</template>

<script>
import { usePostStore } from "../store/postStore";
import { useUserStore } from "../store/userStore";
export default {
  data() {
    return {
      title: "",
      description: "",
      image: "",
      user: "",
    };
  },
  methods: {
    savePost() {
      const post = usePostStore();
      post.setPost(this.title, this.description, this.user, this.image);
      this.$router.push('/feed');
    },
  },
  mounted() {
    const user = useUserStore();
    this.user = user.name;
  },
};
</script>

<style>
  h5{
    text-align: center;
  }
</style>
