<template>
  <h2>{{ profile }}'s Profile Component</h2>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "Profile",
  data() {
    return {
      profile: "",
    };
  },
  mounted() {
    const route = useRoute();
    console.warn(route.params.name);
    this.profile = route.params.name;
  },
};
</script>