<template>
  <h2>Child Component</h2>
  <h2 ref="child">{{ name }} :{{ getName() }}</h2>
</template>
<script>
export default {
  name: "Child",
  props: {
    name: String,
    getName: Function,
  },
  beforeUnmount() {
    console.warn("before Unmount", this.$refs["child"]);
  },
  unmounted() {
    "unomounted";
  },
};
</script>