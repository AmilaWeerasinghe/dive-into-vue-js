<template>
  <div id="app">
    <BlocklyComponent id="blockly2" :options="options" ref="foo"></BlocklyComponent>

    <button v-on:click="showCode()">Next Trigger</button>
  </div>
</template>

<script>
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/stocks";
import "./blocks/questions";
import "./prompt";

import BlocklyJS from "blockly/javascript";

export default {
  name: "app",
  components: {
    BlocklyComponent,
  },
  data() {
    return {
      code: "",
      options: {
        media: "media/",
        grid: {
          spacing: 25,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        toolbox: `<xml>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="Math" colour="%{BKY_MATH_HUE}">
            <block type="math_number">
              <field name="NUM">123</field>
            </block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
          </category>
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="Stocks" colour="%{BKY_LOOPS_HUE}">
            <block type="stock_buy_simple"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
          </category>
          <category name="colour_picker" colour="210">
      <block type="colour_picker"></block>
      <label text="A label" web-class="myLabelStyle"></label>
     
      </category>
      <category name="Questions" colour="%{BKY_LOOPS_HUE}">
            <block type="questions_buy_simple"></block>
            <block type="questions_buy_prog"></block>
             <block type="questions_checkbox_on"></block>
              <block type="example_checkbox"></block>
              <block type="validator_example"></block>
               <block type="example_checkbox_validator"></block>
                <block type="colour_match"></block>
                <block type="try_validator"></block>
                <block type="mySampleBlock"></block>
                 <block type="feature"></block>
                 <block type="next"></block>
              
               
          </category>
        </xml>`,
      },
    };
  },
  methods: {
    showCode() {
      this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
      console.log(this.code);
    },
    //validator
    validate: function (newValue) {
      var sourceBlock = this.getSourceBlock();
      sourceBlock.showTextField_ = newValue == "TRUE";
      sourceBlock.updateTextField();

      return newValue;
    },
    //update text field
    updateTextField: function () {
      var input = this.getInput("DUMMY");
      if (this.showTextField_ && !this.getField("TEXT")) {
        input.appendField(new BlocklyJS.FieldTextInput(), "TEXT");
      } else if (!this.showTextField_ && this.getField("TEXT")) {
        input.removeField("TEXT");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 40%;
  margin: 0;
  background-color: beige;
}

#blockly1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
}

#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 80%;
  height: 80%;
}
</style>
