<template>
  <h3>{{ data.name }}</h3>
  <button v-on:click="getalertUser(data.name)">alert name</button>
</template>

<script>
export default {
  name: "User",
  props: {
    data: Object,
    getalertUser: Function,
  },
};
</script>