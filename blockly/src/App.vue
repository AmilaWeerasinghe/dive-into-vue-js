\<template>
  <div id="app">
    <FirstComponent></FirstComponent>
    <BootStapComponent></BootStapComponent>
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import BootStapComponent from "./components/BootStapComponent.vue";
import NasaAPI from "./components/NasaAPI.vue";
import axios from "axios";
import Blockly from "blockly";

export default {
  name: "App",
  components: {
    FirstComponent,
    BootStapComponent,
    NasaAPI,
  },
  data() {
    return {
      imgSrc: "",
      ImgTitle: "",
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(result.data.data);

    //new nasa api
    var apiKey = "0T8Buy5FS7AosxF1AAtVvCwX5kDrEVDfB1MIlSQW";
    var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
    axios.get(url).then(function (res) {
      console.log(res);
    });
    let nasaData = await axios.get(url);
    console.log(nasaData.data.url);
    this.imgSrc = nasaData.data.url;
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
