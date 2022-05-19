Blockly.defineBlocksWithJsonArray([{
        "type": "_048",
        "message0": "length of array %1",
        "args0": [{
            "type": "input_value",
            "name": "VALUE",
            "check": ["String", "Array", "Var"]
        }],
        "inputsInline": true,
        "output": "Number",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_049",
        "message0": "%1 get value at %2",
        "args0": [{
                "type": "input_value",
                "name": "ARRAY_VAR",
                "check": [
                    "Array",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "INDEX",
                "check": ["Number", "Var"]
            }
        ],
        "inputsInline": true,
        "output": null,
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_050",
        "message0": "%1 get and remove value at %2",
        "args0": [{
                "type": "input_value",
                "name": "ARRAY",
                "check": [
                    "Array",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "INDEX",
                "check": ["Number", "Var"]
            }
        ],
        "inputsInline": true,
        "output": "Array",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_051",
        "message0": "get and remove last value from %1",
        "args0": [{
            "type": "input_value",
            "name": "ARRAY",
            "check": [
                "Array",
                "Var"
            ]
        }],
        "inputsInline": true,
        "output": "Array",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_052",
        "message0": "get and remove first value from %1",
        "args0": [{
            "type": "input_value",
            "name": "ARRAY",
            "check": [
                "Array",
                "Var"
            ]
        }],
        "inputsInline": true,
        "output": "Array",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_053",
        "message0": "get random value from %1",
        "args0": [{
            "type": "input_value",
            "name": "ARRAY",
            "check": [
                "Array",
                "Var"
            ]
        }],
        "inputsInline": true,
        "output": "Array",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_054",
        "message0": "%1 set value at  %2 to %3",
        "args0": [{
                "type": "input_value",
                "name": "ARRAY",
                "check": [
                    "Array",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "INDEX",
                "check": ["Number", "Var"]
            },
            {
                "type": "input_value",
                "name": "SET_VALUE",
                "check": [
                    "Number",
                    "String",
                    "Var"
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_055",
        "message0": "%1 add value %2 to end",
        "args0": [{
                "type": "input_value",
                "name": "ARRAY",
                "check": [
                    "Array",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "SET_VALUE",
                "check": [
                    "Number",
                    "String",
                    "Var"
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_058",
        "message0": "%1 remove value at %2",
        "args0": [{
                "type": "input_value",
                "name": "ARRAY",
                "check": [
                    "Array",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "INDEX",
                "check": ["Number", "Var"]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_060",
        "message0": "%1 insert at %2 value %3",
        "args0": [{
                "type": "input_value",
                "name": "ARRAY",
                "check": [
                    "Array",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "INDEX",
                "check": ["Number", "Var"]
            },
            {
                "type": "input_value",
                "name": "SET_VALUE",
                "check": [
                    "Number",
                    "String",
                    "Var"
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_061",
        "message0": "%1 find index of  %2",
        "args0": [{
                "type": "input_value",
                "name": "ARRAY",
                "check": [
                    "Array",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "GET_VALUE",
                "check": ["String", "Var"]
            }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_062",
        "message0": "reverse %1",
        "args0": [{
            "type": "input_value",
            "name": "NAME",
            "check": [
                "Array",
                "Var"
            ]
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0D929B",
        "tooltip": "",
        "helpUrl": ""
    }

])

Blockly.Blocks['_047'] = {

    init: function() {
        this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
        //this.setStyle('list_blocks');
        this.itemCount_ = 3;
        this.updateShape_();
        this.setOutput(true, 'Array');
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
        this.setInputsInline(true);
        this.setColour("#0D929B");
    },

    mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },

    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },

    decompose: function(workspace) {
        var containerBlock = workspace.newBlock('lists_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },

    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },

    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },

    updateShape_: function() {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i)
                    .setAlign(Blockly.ALIGN_RIGHT);
                if (i == 0) {
                    input.appendField(Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH']);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};

Blockly.Blocks['lists_create_with_container'] = {

    init: function() {
        this.setStyle('list_blocks');
        this.appendDummyInput()
            .appendField(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TITLE_ADD']);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
        this.setColour("#0D929B");
    }
};

Blockly.Blocks['lists_create_with_item'] = {

    init: function() {
        this.setStyle('list_blocks');
        this.appendDummyInput()
            .appendField(Blockly.Msg['LISTS_CREATE_WITH_ITEM_TITLE']);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_ITEM_TOOLTIP']);
        this.contextMenu = false;
        this.setColour("#0D929B");
    }
};


Blockly.JavaScript['_047'] = function(block) {
    // Create a list with any number of elements of any type.
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
            Blockly.JavaScript.ORDER_NONE) || 'null';
    }
    var code = '[' + elements.join(', ') + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['_048'] = function(block) {
    // String or array length.
    var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_MEMBER) || '[]';
    return [list + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['_049'] = function(block) {
    var value_array_var = Blockly.JavaScript.valueToCode(block, 'ARRAY_VAR', Blockly.JavaScript.ORDER_MEMBER) || '[]';
    var value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array_var + '[' + value_index + ']';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['_050'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_MEMBER) || '[]';
    var value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.splice(' + value_index + ', 1)';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['_051'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.pop()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_052'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.shift()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_053'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.[Math.floor(Math.random()*' + value_array + '.length)]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_054'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE);
    var value_set_value = Blockly.JavaScript.valueToCode(block, 'SET_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '[' + value_index + '] = ' + value_set_value;
    return code;
};

Blockly.JavaScript['_055'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_set_value = Blockly.JavaScript.valueToCode(block, 'SET_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.push(' + value_set_value + ')';
    return code;
};

Blockly.JavaScript['_058'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_set_value = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.splice(' + value_set_value + ',1)';
    return code;
};

Blockly.JavaScript['_060'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE);
    var value_set_value = Blockly.JavaScript.valueToCode(block, 'SET_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.splice(' + value_index + ', 0, ' + value_set_value + ')';
    return code;
};

Blockly.JavaScript['_061'] = function(block) {
    var value_array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    var value_get_value = Blockly.JavaScript.valueToCode(block, 'GET_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_array + '.indexOf(' + value_get_value + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_062'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_name + '.reverse()';
    return code;
};