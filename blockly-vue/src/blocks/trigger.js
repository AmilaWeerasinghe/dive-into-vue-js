import * as Blockly from 'blockly/core';

Blockly.Blocks['navigate_trigger'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Navigate trigger");
      this.appendValueInput("reference")
          .setCheck(null)
          .appendField("Reference");
      this.setOutput(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['navigate_trigger'] = function(block) {
    var value_reference = Blockly.JavaScript.valueToCode(block, 'reference', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };