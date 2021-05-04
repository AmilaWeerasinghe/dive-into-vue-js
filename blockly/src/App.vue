\<template>
  <div id="app">
    <div id="blocklyDivx" style="height: 480px; width:900px;"></div>
    <textarea id="codeGenerated"></textarea>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  async mounted() {
    if (!window.g_blockly_workspace) {
      var scriptSrcs = [
        "https://cdn.jsdelivr.net/npm/blockly@1.0.0/blockly_compressed.js",
        "https://cdn.jsdelivr.net/npm/blockly@1.0.0/blocks_compressed.js",
        "https://cdn.jsdelivr.net/npm/blockly@1.0.0/msg/js/en.js",
        "https://cdn.jsdelivr.net/npm/blockly@1.0.0/python_compressed.js",
      ];

      for (let idx = 0; idx < scriptSrcs.length; idx++) {
        await new Promise(function (resolve, reject) {
          //console.log(scriptSrcs)
          let script = document.createElement("script");
          script.onload = () => {
            //console.log(scriptSrcs[idx]);
            resolve(scriptSrcs[idx] + " loaded");
          };
          script.async = true;
          script.src = scriptSrcs[idx];
          document.head.appendChild(script);
        });
      }

      var toolbox = `<xml id="toolbox" style="display: none"><category name="Category 1"><block type="variables_set"><field name="VAR" id="g4BT=E+!t}]z](sJAEP">i</field></block><block type="controls_if"/><block type="variables_set"><field name="VAR" id="g4BT=E+!t}]z](sJAEP">i</field></block><block type="logic_compare"><field name="OP">EQ</field></block><block type="text_print"><value name="TEXT"><shadow type="text"><field name="TEXT">abc</field></shadow></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field></block></next></block><block type="procedures_ifreturn"><mutation value="1"/></block><block type="text"><field name="TEXT"/></block></category><category name="Variables" colour="#a55b80" custom="VARIABLE"/><category name="Functions" colour="#995ba5" custom="PROCEDURE"/></xml>`;
      console.log(toolbox);
      this.$nextTick(function () {
        var blockly_workspace = Blockly.inject("blocklyDivx", {
          toolbox: toolbox,
        });
        window.g_blockly_workspace = blockly_workspace;

        function myUpdateFunction(event) {
          var code = Blockly.Python.workspaceToCode(blockly_workspace);
          document.getElementById("codeGenerated").value = code;
          console.log(code);
        }
        blockly_workspace.addChangeListener(myUpdateFunction);
      });
    }
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
