Blockly.defineBlocksWithJsonArray([{
        "type": "_027",
        "message0": "%1",
        "args0": [{
            "type": "field_input",
            "name": "ID_ELE",
            "text": "ID Element"
        }],
        "inputsInline": true,
        "output": "Id",
        "colour": "#006583",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_028",
        "message0": "%1 of %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "POSITION",
                "options": [
                    [
                        "first",
                        "first"
                    ],
                    [
                        "last",
                        "last"
                    ],
                    [
                        "next",
                        "next"
                    ],
                    [
                        "previous",
                        "previous"
                    ],
                    [
                        "parent",
                        "parent"
                    ],
                    [
                        "children",
                        "children"
                    ],
                    [
                        "previous all",
                        "prevAll"
                    ],
                    [
                        "next all",
                        "nextAll"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "ID_POSITION",
                "check": "Id"
            }
        ],
        "inputsInline": true,
        "output": "Id",
        "colour": "#006583",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_029",
        "message0": "element at %1 of %2",
        "args0": [{
                "type": "input_value",
                "name": "ELEMENT_POSITION",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "ELEMENT_ID",
                "check": "Id"
            }
        ],
        "inputsInline": true,
        "output": "Id",
        "colour": "#006583",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_030",
        "message0": "element that contains %1 with %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "MATCH_CASE",
                "options": [
                    [
                        "match case",
                        "match_case"
                    ],
                    [
                        "not match case",
                        "not_match_case"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "ELEMENT_MATCHCASE",
                "check": ["String", "Var"]
            }
        ],
        "inputsInline": true,
        "output": "Id",
        "colour": "#006583",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_032",
        "message0": "%1 then do with %2 %3",
        "args0": [{
                "type": "input_value",
                "name": "THEN_ID",
                "check": "Id"
            },
            {
                "type": "input_value",
                "name": "THEN_PARAM",
                "check": "Param"
            },
            {
                "type": "input_statement",
                "name": "THEN_ACTION",
                "check": ["Action", "Var"]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#006583",
        "tooltip": "ส่วนใหญ่มักใช้ร่วมกับ expect()",
        "helpUrl": ""
    },
    {
        "type": "_033",
        "message0": "within %1 with %2 %3",
        "args0": [{
                "type": "input_value",
                "name": "WITHIN_ID",
                "check": "Id"
            },
            {
                "type": "input_value",
                "name": "WITHIN_PARAM",
                "check": "Param"
            },
            {
                "type": "input_statement",
                "name": "WITHIN_ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#006583",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['_027'] = function(block) {
    var text_id_ele = block.getFieldValue('ID_ELE');
    // TODO: Assemble JavaScript into code variable.
    var code = 'cy.get(\'' + text_id_ele + '\')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_028'] = function(block) {
    var dropdown_position = block.getFieldValue('POSITION');
    var value_id_position = Blockly.JavaScript.valueToCode(block, 'ID_POSITION', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_position) {
        case 'first':
            var code = value_id_position + '.first()';
            break;
        case 'last':
            var code = value_id_position + '.last()';
            break;
        case 'next':
            var code = value_id_position + '.next()';
            break;
        case 'previous':
            var code = value_id_position + '.previous()';
            break;
        case 'parent':
            var code = value_id_position + '.parent()';
            break;
        case 'children':
            var code = value_id_position + '.children()';
            break;
        case 'prevAll':
            var code = value_id_position + '.prevAll()';
            break;
        case 'nextAll':
            var code = value_id_position + '.nextAll()';
            break;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_029'] = function(block) {
    var value_element_position = Blockly.JavaScript.valueToCode(block, 'ELEMENT_POSITION', Blockly.JavaScript.ORDER_ATOMIC);
    var value_element_id = Blockly.JavaScript.valueToCode(block, 'ELEMENT_ID', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_element_id + '.eq(' + value_element_position + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_030'] = function(block) {
    var dropdown_match_case = block.getFieldValue('MATCH_CASE');
    var value_element_matchcase = Blockly.JavaScript.valueToCode(block, 'ELEMENT_MATCHCASE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.

    switch (dropdown_match_case) {
        case 'match_case':
            var code = 'cy.contains(' + value_element_matchcase + ', { matchCase: true })';
            break;
        case 'not_match_case':
            var code = 'cy.contains(' + value_element_matchcase + ')';
            break;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_032'] = function(block) {
    var value_then_id = Blockly.JavaScript.valueToCode(block, 'THEN_ID', Blockly.JavaScript.ORDER_NONE);
    var value_then_param = Blockly.JavaScript.valueToCode(block, 'THEN_PARAM', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_then_action = Blockly.JavaScript.statementToCode(block, 'THEN_ACTION');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_then_id + '.then((' + value_then_param + ') => {' + statements_then_action + '\n})';
    return code;
};

Blockly.JavaScript['_033'] = function(block) {
    var value_within_id = Blockly.JavaScript.valueToCode(block, 'WITHIN_ID', Blockly.JavaScript.ORDER_NONE);
    var value_within_param = Blockly.JavaScript.valueToCode(block, 'WITHIN_PARAM', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_within_action = Blockly.JavaScript.statementToCode(block, 'WITHIN_ACTION');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_within_id + '.within((' + value_within_param + ') => {' + statements_within_action + '\n})';
    return code;
};