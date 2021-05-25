import * as Blockly from 'blockly/core';



Blockly.Blocks['pages'] = {
    init: function() {
      this.appendValueInput("page_title")
          .setCheck("String")
          .appendField("Page Title");
      this.appendStatementInput("Questions")
          .setCheck(null)
          .appendField("Questions");
      this.appendValueInput("trigger")
          .setCheck(null)
          .appendField("trigger");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("page_block");
   this.setHelpUrl("");
    },
    // Mutator functions
  mutationToDom() {
    let container = document.createElement('mutation');

    // Bind some values to container e.g. container.setAttribute('foo', 3.14);
    container.setAttribute('foo', 3.14);

    return container;
  },
  domToMutation(xmlElement) {
    // Retrieve all attributes from 'xmlElement' and reshape your block
    // e.g. let foo = xmlElement.getAttribute('foo');
    // this.reshape(foo);
    let foo = xmlElement.getAttribute('pages');
    this.reshape(foo);
  },
  // Aux functions
  reshape(param){
    // Reshape your block...
    param.setColour="black";
  }
  };

  Blockly.JavaScript['pages'] = function(block) {
    var value_page_title = Blockly.JavaScript.valueToCode(block, 'page_title', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_questions = Blockly.JavaScript.statementToCode(block, 'Questions');
    var value_trigger = Blockly.JavaScript.valueToCode(block, 'trigger', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_page_title+statements_questions+value_trigger;
    return code;
  };

