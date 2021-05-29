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
    var code = value_reference;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };


  //ui trigger
  Blockly.Blocks['ui_trigger'] = {
    init: function() {
        this.setOutput(true, null);
      this.appendDummyInput()
          .appendField("UI trigger");
      this.appendDummyInput()
          .appendField("Trigger event")
          .appendField(new Blockly.FieldDropdown([["init","init"], ["run","run"], ["option","OPTIONNAME"]]), "trigger_event");
      this.appendDummyInput()
          .appendField("Visible")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "visible");
      this.appendDummyInput()
          .appendField("Enable")
          .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
      this.appendValueInput("visible_if")
          .setCheck(null)
          .appendField("visible if");
      this.appendValueInput("enable_if")
          .setCheck(null)
          .appendField("enable if");
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //get and set
  Blockly.Blocks['variable_get'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("VAR_NAME"), "FIELD_NAME");
      this.setOutput(true, null);
      
    }
  };
  
  // Block for variable setter.
  Blockly.Blocks['variable_set'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("set")
          .appendField(new Blockly.FieldVariable("VAR_NAME"), "FIELD_NAME")
          .appendField("to");
      this.setOutput(true, null);
  
    }
  };