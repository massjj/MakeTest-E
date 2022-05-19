Blockly.defineBlocksWithJsonArray([{
        "type": "_034",
        "message0": "repeat %1 times do %2 %3",
        "args0": [{
                "type": "input_value",
                "name": "REPEAT_TIMES",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "REPEAT_ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#E7A03C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_035",
        "message0": "while  %1 do %2 %3",
        "args0": [{
                "type": "input_value",
                "name": "WHILE_LOGIC",
                "check": "Boolean"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "WHILE_CONDITION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#E7A03C",
        "tooltip": "",
        "helpUrl": ""
    },
    // {
    //     "type": "_035",
    //     "message0": "while  %1 do %2 %3",
    //     "args0": [{
    //             "type": "field_dropdown",
    //             "name": "CONDITION",
    //             "options": [
    //                 [
    //                     "true",
    //                     "true"
    //                 ],
    //                 [
    //                     "false",
    //                     "false"
    //                 ]
    //             ]
    //         },
    //         {
    //             "type": "input_dummy"
    //         },
    //         {
    //             "type": "input_statement",
    //             "name": "WHILE_CONDITION",
    //             "check": "Action"
    //         }
    //     ],
    //     "inputsInline": true,
    //     "previousStatement": "Action",
    //     "nextStatement": "Action",
    //     "colour": "#E7A03C",
    //     "tooltip": "",
    //     "helpUrl": ""
    // },
    {
        "type": "_036",
        "message0": "for %1 from 0 to %2 do %3 %4",
        "args0": [{
                "type": "input_value",
                "name": "FOR_INDEX",
                "check": "Var"
            },
            {
                "type": "input_value",
                "name": "FOR_NUM",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "FOR_ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#E7A03C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_037",
        "message0": "for each %1 in %2 do %3 %4",
        "args0": [{
                "type": "input_value",
                "name": "FOREACH_PARAM",
                "check": "Param"
            },
            {
                "type": "input_value",
                "name": "FOREACH_ID",
                "check": "Id"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "FOREACH_ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#E7A03C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_038",
        "message0": "break",
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#E7A03C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_039",
        "message0": "continue",
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#E7A03C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "param",
        "message0": "%1 %2",
        "args0": [{
                "type": "field_label_serializable",
                "name": "DOLLAR",
                "text": "$"
            },
            {
                "type": "field_input",
                "name": "PARAM",
                "text": "param"
            }
        ],
        "inputsInline": true,
        "output": "Param",
        "colour": "#E7A03C",
        "tooltip": "",
        "helpUrl": ""
    }
]);


Blockly.JavaScript['_034'] = function(block) {
    var value_repeat_times = Blockly.JavaScript.valueToCode(block, 'REPEAT_TIMES', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_repeat_action = Blockly.JavaScript.statementToCode(block, 'REPEAT_ACTION');
    // TODO: Assemble JavaScript into code variable.
    var code = '\nfor(let count = 1; count <= ' + value_repeat_times + '; count++){' + statements_repeat_action + '\n}'
    return code;
};

Blockly.JavaScript['_035'] = function(block) {
    var value_while_logic = Blockly.JavaScript.valueToCode(block, 'WHILE_LOGIC', Blockly.JavaScript.ORDER_NONE);
    var statements_while_condition = Blockly.JavaScript.statementToCode(block, 'WHILE_CONDITION');
    // TODO: Assemble JavaScript into code variable.
    var code = '\nwhile(' + value_while_logic + '){' + statements_while_condition + '\n}';
    return code;
};

// Blockly.JavaScript['_035'] = function(block) {
//     var dropdown_condition = block.getFieldValue('CONDITION');
//     var statements_while_condition = Blockly.JavaScript.statementToCode(block, 'WHILE_CONDITION');
//     // TODO: Assemble JavaScript into code variable.
//     var code = '\nwhile(' + dropdown_condition + '){' + statements_while_condition + '\n}';
//     return code;
// };

Blockly.JavaScript['_036'] = function(block) {
    var value_for_index = Blockly.JavaScript.valueToCode(block, 'FOR_INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    var value_for_num = Blockly.JavaScript.valueToCode(block, 'FOR_NUM', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_for_action = Blockly.JavaScript.statementToCode(block, 'FOR_ACTION');
    // TODO: Assemble JavaScript into code variable.
    var code = '\nfor(' + value_for_index + '= 0; ' + value_for_index + '<' + value_for_num + '; ' + value_for_index + '++){' + statements_for_action + '\n}';
    return code;
};

Blockly.JavaScript['_037'] = function(block) {
    var value_foreach_param = Blockly.JavaScript.valueToCode(block, 'FOREACH_PARAM', Blockly.JavaScript.ORDER_ATOMIC);
    var value_foreach_id = Blockly.JavaScript.valueToCode(block, 'FOREACH_ID', Blockly.JavaScript.ORDER_NONE);
    var statements_foreach_action = Blockly.JavaScript.statementToCode(block, 'FOREACH_ACTION');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_foreach_id + '.each((' + value_foreach_param + ') => {' + statements_foreach_action + '\n})';
    return code;
};

Blockly.JavaScript['_038'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\nbreak;';
    return code;
};

Blockly.JavaScript['_039'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncontinue;';
    return code;
};

Blockly.JavaScript['param'] = function(block) {
    var text_param = block.getFieldValue('PARAM');
    // TODO: Assemble JavaScript into code variable.
    var code = '$' + text_param;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};