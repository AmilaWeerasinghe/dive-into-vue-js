\<template>
  <div id="app">
    <FirstComponent></FirstComponent>
    <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
    <xml id="toolbox" style="display: none">
      <block type="controls_if"></block>
      <block type="controls_repeat_ext"></block>
      <block type="logic_compare"></block>
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="text"></block>
      <block type="text_print"></block>
    </xml>
  </div>
</template>

<script>
import FirstComponent from "./components/FirstComponent.vue";
import Blockly from "blockly";

export default {
  name: "App",
  components: {
    FirstComponent,
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
