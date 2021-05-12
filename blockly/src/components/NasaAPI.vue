<template>
  <div>
    <h2>NASA API Component</h2>
    <img :src="imgSrc" :title="ImgTitle" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "NasaAPI",
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
    this.ImgTitle = nasaData.data.title;
  },
};
</script>
<style>
</style>

