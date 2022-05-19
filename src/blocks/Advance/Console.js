Blockly.defineBlocksWithJsonArray([{
        "type": "_077",
        "message0": "show %1",
        "args0": [{
            "type": "input_value",
            "name": "CONSOLE_STRING",
            "check": ["String", "Var"]
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#8B8383",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_078",
        "message0": "show value %1 = %2",
        "args0": [{
                "type": "input_value",
                "name": "NAME"
            },
            {
                "type": "input_value",
                "name": "NAME",
                "check": [
                    "String",
                    "Number"
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#8B8383",
        "tooltip": "",
        "helpUrl": ""
    }
])

Blockly.JavaScript['_077'] = function(block) {
    var value_console_string = Blockly.JavaScript.valueToCode(block, 'CONSOLE_STRING', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncy.log(' + value_console_string + ')';
    return code;
};

// Blockly.JavaScript['_078'] = function(block) {
//     var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//     var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = '...;\n';
//     return code;
// };