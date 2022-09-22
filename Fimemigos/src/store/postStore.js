import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
  state: () => {
    return {
       title: "",
       description: "",
       image: "",
       posts:[],
      };
  },
  actions: {
    setPost(title, description,user,image) {
      this.title=title;
      this.description=description;
      this.user=user;
      this.image=image
      this.posts.push({
        title:title,
        description:description,
        user:user,
        image:image
      })
      console.log(this.posts)
    },
  },
});
