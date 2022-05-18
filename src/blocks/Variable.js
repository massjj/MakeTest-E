// goog.provide('Blockly.Blocks.variables'); // Deprecated.
// goog.provide('Blockly.Constants.Variables');

// goog.require('Blockly');
// goog.require('Blockly.Blocks');
// goog.require('Blockly.FieldLabel');
// goog.require('Blockly.FieldVariable');

Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
    // Block for variable getter.
    {
        "type": "variables_get",
        "message0": "%1",
        "args0": [{
            "type": "field_variable",
            "name": "VAR",
            "variable": "item"
        }],
        "output": "Var",
        "style": "variable_blocks",
        "helpUrl": "",
        "tooltip": "",
        "extensions": ["contextMenu_variableSetterGetter"]
    },
    // Block for variable setter.
    {
        "type": "variables_set",
        "message0": "set %1 to %2",
        "args0": [{
                "type": "field_variable",
                "name": "VAR",
                "variable": "item"
            },
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "previousStatement": "Action",
        "nextStatement": "Action",
        "inputsInline": true,
        "style": "variable_blocks",
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["contextMenu_variableSetterGetter"]
    }
]);

Blockly.JavaScript['variables_get'] = function(block) {
    // Variable getter.
    var code = '\n' + Blockly.JavaScript.nameDB_.getName(block.getFieldValue('VAR'),
        Blockly.VARIABLE_CATEGORY_NAME);
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set'] = function(block) {
    // Variable setter.
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var varName = Blockly.JavaScript.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME);
    return '\n' + varName + ' = ' + argument0 + ';';
};