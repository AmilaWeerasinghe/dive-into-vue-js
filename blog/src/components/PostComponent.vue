<template>
  <h2>Post Component</h2>
  <div>
    <form @submit="postData" method="POST">
      <input type="text" name="author" v-model="posts.author" />
      <input type="text" name="title" v-model="posts.title" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: {
        author: "",
        title: "",
      },
    };
  },
  methods: {
    postData(e) {
      this.axios.post().then((result) => {
        console.warn(result);
      });
      e.preventDefault;
    },
  },
};
</script>