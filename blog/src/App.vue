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
  <p v-for="item in list" :key="item.id">
    {{ item.id }}---{{ item.email }}---{{ item.first_name }}
  </p>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home.vue";
import Input from "./components/Input.vue";
import NewUser from "./components/NewUser.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Home,
    Input,
    NewUser,
  },
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(result.data.data);
    this.list = result.data.data;
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
</style>
