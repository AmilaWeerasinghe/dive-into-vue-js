\<template>
  <div id="app">
    <FirstComponent></FirstComponent>
    <boot-stap-component></boot-stap-component>
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import BootStapComponent from "./components/BootStapComponent.vue";
import Blockly from "blockly";

export default {
  name: "App",
  components: {
    FirstComponent,
    BootStapComponent,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
