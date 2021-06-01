<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv"></div>
    <xml ref="blocklyToolbox" style="display:none">
      <slot></slot>
    </xml>
  </div>
</template>

<script>
import Blockly from "blockly";
import "../blocks/survey";
import "../blocks/pages";

export default {
  name: "BlocklyComponent",
  props: ["options"],
  data() {
    return {
      workspace: null,
      xml_text: null,
    };
  },
  mounted() {
    var options = this.$props.options || {};
    if (!options.toolbox) {
      options.toolbox = this.$refs["blocklyToolbox"];
    }
    this.workspace = Blockly.inject(this.$refs["blocklyDiv"], options);
    //add xml to load at the initial workspace
    this.xml_text =
      '<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none">' +
      '  <block type="survey"></block>' +
      '<block type="NewPages" ></block>' +
      "</xml>";
    var xml = Blockly.Xml.textToDom(this.xml_text);
    Blockly.Xml.domToWorkspace(xml, this.workspace);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>
