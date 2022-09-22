<template>
  <div class="container">
    <h1 v-if="user2!=''">You has signed in as {{user2}}</h1>
    <button v-if="user2!=''" class="btn btn-primary" v-on:click="logOut">Log out</button>
    <div class="row">
      <div class="col-12">
        <form v-if="user2==''" v-on:submit.prevent="saveUser">
          <div class="mb-3">
            <label for="name" class="form-label"> <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" style="height: 25px" alt="" /> User</label>
            <input type="text" v-model="name" class="form-control" id="name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label"> <img src="https://i.pinimg.com/originals/1d/47/3f/1d473f81ae5fb2aac1fee23b39ca1a5d.jpg" style="height: 25px" alt="" /> Email</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <button v-if="name.length>=3 && email" type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../store/userStore";
export default {
  data() {
    return {
      name: "",
      email: "",
      user2: "",
    };
  },
  methods: {
    saveUser() {
      const user = useUserStore();
      user.setUser(this.name, this.email);
      this.user2=user.name;
      console.log(this.user2)
      this.$router.push('/feed');
    },
    logOut(){
      const user = useUserStore();
      user.setUser('','');
      this.user2 = user.name;
    },
  },
  mounted() {
    const user = useUserStore();
    this.user2 = user.name;
    console.log(this.user2);
  },
};
</script>

<style></style>
