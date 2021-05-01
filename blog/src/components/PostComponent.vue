<template>
  <h2>Post Component with API</h2>

  <div>
    <form @submit.prevent="createPost">
      <div>
        <label for="author">author</label>
        <input type="text" id="author" v-model="formData.author" />
      </div>
      <div>
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostComponent",
  data() {
    return {
      formData: {
        author: "",
        title: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("http://localhost:3000/posts", this.formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>