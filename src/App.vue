<template>
  <nav class="navbar" style="background-color: #ffffff;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAwpxBY8pI5wmmsmyeHITDVjNQXq29LtsHA&usqp=CAU" style="height: 50px" alt="" /> FIME-FRIENDS</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" v-on:click.prevent="changeDir('')" aria-current="page" href="#"> <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" style="height: 20px" alt="" /> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click.prevent="changeDir('feed')" href="#"> <img src="https://iconarchive.com/download/i96648/iconsmind/outline/Newspaper-2.ico" style="height: 20px" alt="" /> Feed</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" v-on:click.prevent="changeDir('post')" href="#"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5ix9jsCTP7m8dR-PhxV2l96nChe3zng0anvfhu4&s" style="height: 20px" alt="" /> Post</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeDir(ruta) {
      this.$router.push('/'+ruta);
    },
  },
};
</script>

<style></style>
