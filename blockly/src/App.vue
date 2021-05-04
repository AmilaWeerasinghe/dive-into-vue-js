<template>
  <div id="app">
    <first-component></first-component>
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    FirstComponent,
  },
};
</script>

<style>
</style>
