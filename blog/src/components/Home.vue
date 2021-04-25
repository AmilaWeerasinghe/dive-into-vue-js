<template>
  <Child :name="name" :getName="getName" />
  <h1>Home Component</h1>
  <h2>Name:{{ name }}</h2>
  <h2>Email:{{ getName() }}</h2>
  <h3>Email:{{ getData().email }}</h3>
  <h4>{{ count }}</h4>
  <input type="text" v-model="data" />
  <h4>two way binding :{{ data }}</h4>

  <button v-on:click="getalert()">Click</button>
  <button v-on:click="increase()">Click Count</button>
  <h3 v-if="show">Condition in vue is true</h3>
  <h3 v-else>Condition in vue is false</h3>
  <button v-on:click="show = !show">Click to change the condition</button>
  <ul>
    <li v-for="item in technology" :key="item">
      {{ item }}
    </li>
  </ul>
  <ul>
    <li v-for="item in users" :key="item.name">
      <User :data="item" :getalertUser="getalertUser" />
    </li>
  </ul>
  <div v-html="tag"></div>
</template>

<script>
import Child from "./Child.vue";
import User from "./User.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "amila",
      email: "amila@arimaclanka",
      count: 0,
      data: 0,
      show: true,
      technology: ["java", "html", "c", "javascript"],
      tag: "<h3>Html binding tag</h3>",
      users: [
        {
          name: "Amila",
          email: "amila@gmail",
        },
        {
          name: "Kanthi",
          email: "k@gmail",
        },
        {
          name: "Nimal",
          email: "Nimal@gmail",
        },
      ],
    };
  },
  components: {
    Child,
    User,
  },
  methods: {
    getName() {
      return "Amila@gmail";
    },
    getData() {
      return {
        name: "anil",
        email: "sidhu",
      };
    },
    getalert() {
      alert("button clicked");
    },
    getalertUser(name) {
      alert(name);
    },
    increase() {
      this.count = this.count + 1;
    },
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
