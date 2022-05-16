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
        "style": "variable_blocks",
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["contextMenu_variableSetterGetter"]
    }
]);