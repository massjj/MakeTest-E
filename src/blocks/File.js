Blockly.defineBlocksWithJsonArray([{
        "type": "_044",
        "message0": "attach %1 to %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "ATTACH_FILE",
                "options": [
                    [
                        "option",
                        "OPTIONNAME"
                    ],
                    [
                        "option",
                        "OPTIONNAME"
                    ],
                    [
                        "option",
                        "OPTIONNAME"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "ATTACH_FILE_ID",
                "check": "Id"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#4C384D",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_045",
        "message0": "file %1 was downloaded",
        "args0": [{
            "type": "input_value",
            "name": "FILE_NAME",
            "check": "String"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#4C384D",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['_044'] = function(block) {
    var dropdown_attach_file = block.getFieldValue('ATTACH_FILE');
    var value_attach_file = Blockly.JavaScript.valueToCode(block, 'ATTACH_FILE', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_attach_file + '.attachFile(' + dropdown_attach_file + ');';
    return code;
};

Blockly.JavaScript['_045'] = function(block) {
    var value_file_name = Blockly.JavaScript.valueToCode(block, 'FILE_NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncy.readFile(' + value_file_name + ').should(\"exist\");';
    return code;
};