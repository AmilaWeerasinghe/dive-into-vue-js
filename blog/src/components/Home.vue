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
  <h2 class="staticClass" :class="{ green: colorfull }">
    Dynamic class binding
  </h2>
  <button v-on:click="colorfull = !colorfull">Apply style</button><br />
  <input type="text" ref="input" />
  <button v-on:click="refData">Ref Click</button>
  <h2>A Complete form</h2>
  <label>Email</label>
  <input type="text" placeholder="enter email" v-model="form.email" /><br />
  <label>Password</label>
  <input
    type="text"
    placeholder="enter password"
    v-model="form.password"
  /><br />
  <select v-model="form.country">
    <option>India</option>
    <option>USA</option>
  </select>
  <br />
  <label>Male</label>
  <input type="radio" name="gender" value="male" v-model="form.gender" />
  <label>Female</label>
  <input
    type="radio"
    name="gender"
    value="female"
    v-model="form.gender"
  /><br />
  <h3>Technology</h3>
  <label>Java</label>
  <input
    type="checkbox"
    name="technology"
    value="Java"
    v-model="form.technology"
  />
  <label>C</label>
  <input
    type="checkbox"
    name="technology"
    value="C"
    v-model="form.technology"
  /><br />
  <button type="button" v-on:click="login">Submit</button>
  <p>{{ form }}</p>
  <ul>
    <li v-for="item in error" v-bind:key="item">{{ item }} is not valid</li>
  </ul>
  <button v-on:click="watchCount = watchCount + 1">Watch Count +</button>
  <button v-on:click="watchCount = watchCount - 1">Watch Count -</button>
  <p>{{ watchCount }}</p>
  <NewChild>
    <template v-slot:header>
      <h1>New component slot header</h1>
    </template>
    <template v-slot:footer>
      <h1>New component slot footer</h1>
    </template>
  </NewChild>
  <h3>Dynamic Component</h3>
  <button @click="tab = 'Java'">Java</button>
  <button @click="tab = 'Php'">Php</button>
  <button @click="tab = 'Node'">Node</button>
  <component :is="tab" />
</template>

<script>
import Child from "./Child.vue";
import User from "./User.vue";
import NewChild from "./NewChild.vue";
import Java from "./Java.vue";
import Node from "./Node.vue";
import Php from "./Php.vue";
export default {
  name: "Home",
  data() {
    return {
      tab: "Java",
      name: "amila",
      email: "amila@arimaclanka",
      count: 0,
      error: [],
      data: 0,
      watchCount: 0,
      show: true,
      technology: ["java", "html", "c", "javascript"],
      tag: "<h3>Html binding tag</h3>",
      colorfull: false,
      form: {
        email: "",
        password: "",
        gender: "",
        country: "",
        technology: [],
      },
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
  watch: {
    watchCount(val, preval) {
      if (val > 10 && val > preval) {
        alert("Stop increasing count");
      }
    },
  },
  components: {
    Child,
    User,
    NewChild,
    Java,
    Php,
    Node,
  },
  methods: {
    getName() {
      return "Amila@gmail";
    },
    login() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
        if (this.error.length === 0) {
          alert("Data has been submitted");
        }
      }
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
    refData() {
      this.$refs.input.focus();
      this.$refs.input.value = "AMila ref";
      this.$refs.input.style.color = "red";
    },
  },
};
</script>

<style scoped>
h1 {
  color: orange;
}

.green {
  background-color: green;
  width: 200px;
  padding: 100px;
  color: #fff;
}

.staticClass {
  color: blue;
}
</style>
