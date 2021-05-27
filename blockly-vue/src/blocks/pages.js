import * as Blockly from 'blockly/core';





//mutator for pages block contain trigger blocks inside it
Blockly.Blocks['trigger'] = {
  init: function() {
    this.appendValueInput("trigger")
        .setCheck(null)
        .appendField("trigger");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['pages'] = {
  //elseifCount_: 0,
  //elseCount_: 0,
  //suppressPrefixSuffix: true,
    init: function() {
     this.elseifCount_= 0;
  this.elseCount_= 0;
  //suppressPrefixSuffix: true;
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
   this.setMutator(new Blockly.Mutator(['pages','trigger','controls_if_elseif','controls_if_else']));
    },
    // Mutator functions
    // Mutator functions
    mutationToDom() {
      // Same as previous example
      if (!this.elseifCount_ && !this.elseCount_) {
        return null;
      }
      var container = Blockly.utils.xml.createElement('mutation');
      if (this.elseifCount_) {
        container.setAttribute('elseif', this.elseifCount_);
      }
      if (this.elseCount_) {
        container.setAttribute('else', 1);
      }
      return container;
      
  },
  domToMutation(xmlElement) {
      // Same as previous example
      this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
    this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
    this.rebuildShape_();
     
  },
  decompose(workspace) {
      // Decomposeyour block here
      var containerBlock = workspace.newBlock('pages');
    containerBlock.initSvg();
    var connection = containerBlock.nextConnection;
    for (var i = 1; i <= this.elseifCount_; i++) {
      var elseifBlock = workspace.newBlock('trigger');
      elseifBlock.initSvg();
      connection.connect(elseifBlock.previousConnection);
      connection = elseifBlock.nextConnection;
    }
    if (this.elseCount_) {
      var elseBlock = workspace.newBlock('trigger');
      elseBlock.initSvg();
      connection.connect(elseBlock.previousConnection);
    }
    return containerBlock;
  },
  compose: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    // Count number of inputs.
    this.elseifCount_ = 0;
    this.elseCount_ = 0;
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;
    while (clauseBlock && !clauseBlock.isInsertionMarker()) {
      switch (clauseBlock.type) {
        case 'trigger':
          this.elseifCount_++;
          valueConnections.push(clauseBlock.valueConnection_);
          statementConnections.push(clauseBlock.statementConnection_);
          break;
        case 'trigger':
          this.elseCount_++;
          elseStatementConnection = clauseBlock.statementConnection_;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
    this.updateShape_();
    // Reconnect any child blocks.
    this.reconnectChildBlocks_(valueConnections, statementConnections,
        elseStatementConnection);
  },
  saveConnections: function(containerBlock) {
    var clauseBlock = containerBlock.nextConnection.targetBlock();
    var i = 1;
    while (clauseBlock) {
      switch (clauseBlock.type) {
        case 'pages':
          var inputIf = this.getInput('IF' + i);
          var inputDo = this.getInput('DO' + i);
          clauseBlock.valueConnection_ =
              inputIf && inputIf.connection.targetConnection;
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          i++;
          break;
        case 'trigger':
          var inputDo = this.getInput('ELSE');
          clauseBlock.statementConnection_ =
              inputDo && inputDo.connection.targetConnection;
          break;
        default:
          throw TypeError('Unknown block type: ' + clauseBlock.type);
      }
      clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
    }
  },
  rebuildShape_: function() {
    var valueConnections = [null];
    var statementConnections = [null];
    var elseStatementConnection = null;

    if (this.getInput('ELSE')) {
      elseStatementConnection = this.getInput('ELSE').connection.targetConnection;
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      var inputIf = this.getInput('IF' + i);
      var inputDo = this.getInput('DO' + i);
      valueConnections.push(inputIf.connection.targetConnection);
      statementConnections.push(inputDo.connection.targetConnection);
      i++;
    }
    this.updateShape_();
    this.reconnectChildBlocks_(valueConnections, statementConnections,
        elseStatementConnection);
  },
  updateShape_: function() {
    // Delete everything.
    if (this.getInput('ELSE')) {
      this.removeInput('ELSE');
    }
    var i = 1;
    while (this.getInput('IF' + i)) {
      this.removeInput('IF' + i);
      this.removeInput('DO' + i);
      i++;
    }
    // Rebuild block.
    //for (i = 1; i <= 1; i++) {
          this.appendValueInput("trigger")
        .setCheck(null)
        .appendField("trigger");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
   // }
    if (this.elseCount_) {
      this.appendStatementInput('ELSE')
          .appendField(Blockly.Msg['CONTROLS_IF_MSG_ELSE']);
    }
  },
  reconnectChildBlocks_: function(valueConnections, statementConnections,
    elseStatementConnection) {
  for (var i = 1; i <= this.elseifCount_; i++) {
    Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
    Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
  }
  Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
},
  // Aux functions
  reshape(){
      // Same as previous example
  }
 // Mutator functions
    /*mutationToDom() {
        // Same as previous example
        let container = document.createElement('mutation');
        container.setAttribute('foo', 3.14);


         var test=0;
        //var test=container.getAttribute();
        console.warn(test);
        if (this.elseifCount_) {
          container.setAttribute('trigger', this.test);
        }
        //var trig=container.getAttribute('trigger');

        return container;
    },
    domToMutation(xmlElement) {
        // Same as previous example
        //let foo = xmlElement.getAttribute('foo');
    },
    decompose(workspace) {
        // Decomposeyour block here
    },
    compose(containerBlock) {
        // Compose your block here
    },
    // Aux functions
    reshape(param){
        // Same as previous example
    }*/
  
  
  };


  Blockly.JavaScript['pages'] = function(block) {
    var value_page_title = Blockly.JavaScript.valueToCode(block, 'page_title', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_questions = Blockly.JavaScript.statementToCode(block, 'Questions');
    var value_trigger = Blockly.JavaScript.valueToCode(block, 'trigger', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_page_title+statements_questions+value_trigger;
    return code;
  };

