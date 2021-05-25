import * as Blockly from 'blockly/core';

Blockly.Blocks['survey'] = {
    init: function() {
      this.appendValueInput("survey_name")
          .setCheck(null)
          .appendField("Survey Name");
      this.appendStatementInput("survey_process")
          .setCheck(null);
      this.setColour(260);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.JavaScript['survey'] = function(block) {
    var value_survey_name = Blockly.JavaScript.valueToCode(block, 'survey_name', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_survey_process = Blockly.JavaScript.statementToCode(block, 'survey_process');
    // TODO: Assemble JavaScript into code variable.
    var code = value_survey_name+statements_survey_process;
    return code;
  };