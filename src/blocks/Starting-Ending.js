Blockly.defineBlocksWithJsonArray([{
        "type": "_001",
        "message0": "Test scenario: %1 %2",
        "args0": [{
                "type": "input_value",
                "name": "DESCRIBE_TEXT",
                "check": "String"
            },
            {
                "type": "input_statement",
                "name": "IT",
                "check": "It"
            }
        ],
        "inputsInline": true,
        "colour": "#BF2C23",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_002",
        "message0": "Test case: %1 %2",
        "args0": [{
                "type": "input_value",
                "name": "IT_TEXT",
                "check": "String"
            },
            {
                "type": "input_statement",
                "name": "ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "It",
        "nextStatement": "It",
        "colour": "#BF2C23",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_003",
        "message0": "Pre-condition:  %1 %2 %3",
        "args0": [{
                "type": "field_dropdown",
                "name": "PRE_TIMES",
                "options": [
                    [
                        "One times",
                        "one_times"
                    ],
                    [
                        "Every times",
                        "every_times"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "It",
        "nextStatement": "It",
        "colour": "#BF2C23",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_004",
        "message0": "After condition: %1 %2 %3",
        "args0": [{
                "type": "field_dropdown",
                "name": "AFTER_TIMES",
                "options": [
                    [
                        "One times",
                        "one_times"
                    ],
                    [
                        "Every times",
                        "every_times"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "It",
        "nextStatement": "It",
        "colour": "#BF2C23",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_005",
        "message0": "%1",
        "args0": [{
            "type": "field_label_serializable",
            "name": "end",
            "text": "end"
        }],
        "output": null,
        "colour": "#BF2C23",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['_001'] = function(block) {
    block.setDeletable(false);
    block.setMovable(false);
    var value_describe_text = Blockly.JavaScript.valueToCode(block, 'DESCRIBE_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_it = Blockly.JavaScript.statementToCode(block, 'IT');
    // TODO: Assemble JavaScript into code variable.
    var code = 'describe(' + value_describe_text + ' , () => {' + statements_it + '\n})';;
    return code;
};

Blockly.JavaScript['_002'] = function(block) {
    var value_it_text = Blockly.JavaScript.valueToCode(block, 'IT_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_action = Blockly.JavaScript.statementToCode(block, 'ACTION');
    // TODO: Assemble JavaScript into code variable.
    var code = '\nit(' + value_it_text + ', () => {' + statements_action + '\n})';
    return code;
};

Blockly.JavaScript['_003'] = function(block) {
    var dropdown_pre_times = block.getFieldValue('PRE_TIMES');
    var statements_action = Blockly.JavaScript.statementToCode(block, 'ACTION');
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_pre_times) {
        case 'one_times':
            var code = '\nbefore(() => {' + statements_action + '\n})';
            break;
        case 'every_times':
            var code = '\nbeforeEach(() => {' + statements_action + '\n})';
            break;
    }
    return code;
};

Blockly.JavaScript['_004'] = function(block) {
    var dropdown_after_times = block.getFieldValue('AFTER_TIMES');
    var statements_action = Blockly.JavaScript.statementToCode(block, 'ACTION');
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_after_times) {
        case 'one_times':
            var code = '\nafter(() => {' + statements_action + '\n})';
            break;
        case 'every_times':
            var code = '\nafterEach(() => {' + statements_action + '\n})';
            break;
    }
    return code;
};

Blockly.JavaScript['_005'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};