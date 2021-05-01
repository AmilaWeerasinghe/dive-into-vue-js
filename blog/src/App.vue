<template>
  <router-view></router-view>
  <router-link to="/">Home page</router-link>
  <router-link to="/login">Login page</router-link>
  <router-link to="/about">About page</router-link>
  <router-link to="/profile/amila">Amila's Profile page</router-link><br />
  <router-link to="/profile/arimac">Arimac Profile page</router-link>
  <HelloWorld msg="Welcome arimac Vue.js App" />
  <Home />
  <Input />
  <NewUser name="Amila from App . vue" />
  <h3>User's data from API</h3>
  <ul class="item" v-for="item in list" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.email }}</li>
    <li><img :src="item.avatar" /></li>
  </ul>

  <h2>Post Component</h2>
  <div>
    <form @submit="postData" method="post">
      <input
        type="text"
        name="author"
        v-model="posts.author"
        placeholder="author"
      /><br />
      <input
        type="text"
        name="title"
        v-model="posts.title"
        placeholder="title"
      /><br />
      <button type="submit">Post</button>
    </form>
  </div>
  {{ posts }}
  <CreatePost></CreatePost>
  <PostComponent></PostComponent>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import Input from "./components/Input.vue";
import NewUser from "./components/NewUser.vue";
import CreatePost from "./components/CreatePost.vue";
import PostComponent from "./components/PostComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Home,
    Input,
    NewUser,
    CreatePost,
    PostComponent,
  },
  data() {
    return {
      list: [],
      posts: {
        author: "",
        title: "",
      },
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(result.data.data);
    this.list = result.data.data;
  },
  async created() {
    // Simple POST request with a JSON body using axios
    const article = { title: "Vue POST Request Example" };
    axios
      .post("https://reqres.in/api/articles", article)
      .then((response) => (this.articleId = response.data.id));
  },
  methods: {
    postData() {
      console.warn(this.posts);
      const article = { title: "Vue POST Request Example" };
      axios
        .post("https://reqres.in/api/articles", article)
        .then((response) => (this.articleId = response.data.id));
      //this.axios.post("http://localhost:3000/posts/").then((result) => {
      // console.warn(result);
      // });
      //e.preventDefault;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item {
  display: flex;
}
.item li {
  display: inline-block;
  border: 1px solid;
  width: 180px;
}
</style>
