Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
    // Block for text value
    {
        "type": "text",
        "message0": "%1",
        "args0": [{
            "type": "field_input",
            "name": "TEXT",
            "text": ""
        }],
        "output": "String",
        "colour": "#8D4CAB",
        "helpUrl": "",
        "tooltip": "",
        "extensions": [
            "text_quotes"
        ]
    },
    {
        "type": "_069",
        "message0": "length of  %1",
        "args0": [{
            "type": "input_value",
            "name": "STRING",
            "check": "Var"
        }],
        "inputsInline": true,
        "output": "String",
        "colour": "#8D4CAB",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_071",
        "message0": "convert %1 to number ",
        "args0": [{
            "type": "input_value",
            "name": "STRING_PARSE",
            "check": "Var"
        }],
        "inputsInline": true,
        "output": "Number",
        "colour": "#8D4CAB",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_072",
        "message0": "split %1 by %2",
        "args0": [{
                "type": "input_value",
                "name": "STRING",
                "check": "Var"
            },
            {
                "type": "input_value",
                "name": "SEP",
                "check": "String"
            }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": "#8D4CAB",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_074",
        "message0": "convert %1 to text",
        "args0": [{
            "type": "input_value",
            "name": "NUMBER",
            "check": "Var"
        }],
        "inputsInline": true,
        "output": "String",
        "colour": "#8D4CAB",
        "tooltip": "",
        "helpUrl": ""
    },
]);


Blockly.JavaScript['_069'] = function(block) {
    var value_string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_string + '.length';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['_071'] = function(block) {
    var value_string_parse = Blockly.JavaScript.valueToCode(block, 'STRING_PARSE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'parseFloat(' + value_string_parse + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_072'] = function(block) {
    var value_string = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ATOMIC);
    var value_sep = Blockly.JavaScript.valueToCode(block, 'SEP', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_string + '.split(' + value_sep + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['_074'] = function(block) {
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_number + '.toString()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};