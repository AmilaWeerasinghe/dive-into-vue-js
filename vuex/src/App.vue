<template>
  <div id="app">
    <ProductListOne v-bind:products="products"></ProductListOne>
    <ProductListTwo v-bind:products="products"></ProductListTwo>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

export default {
  name: "app",
  components: {
    ProductListOne,
    ProductListTwo,
  },
  data() {
    return {
      products: [
        { name: "banana", price: 20 },
        { name: "Coconut", price: 60 },
      ],
    };
  },
};
</script>

<style>
</style>
