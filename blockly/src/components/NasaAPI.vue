<template>
  <div>
    <h2>NASA API Component</h2>
    <img :src="Imgsrc" :title="ImgTitle" />
  </div>
</template>
<script>
import axios from "axios";
var apiKey = "0T8Buy5FS7AosxF1AAtVvCwX5kDrEVDfB1MIlSQW";
var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
export default {
  name: "NasaAPI",
  data() {
    return {
      Imgsrc: "",
      ImgTitle: "",
    };
  },
  async mounted() {
    axios.get(url).then(function (res) {
      console.log(res);
      this.Imgsrc = res.data.url;
      this.ImgTitle = res.data.title;
    });
  },
};
</script>
<style>
</style>

