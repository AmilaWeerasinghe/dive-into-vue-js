import * as Blockly from 'blockly/core';

Blockly.Blocks['questions'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Name Questions");
      this.appendValueInput("trigger")
          .setCheck(null)
          .appendField("trigger");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(345);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['questions'] = function(block) {
    var value_trigger = Blockly.JavaScript.valueToCode(block, 'trigger', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_trigger;
    return code;
  };