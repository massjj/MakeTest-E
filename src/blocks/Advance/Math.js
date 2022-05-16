Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
    // Block for numeric value.
    {
        "type": "_063",
        "message0": "%1",
        "args0": [{
            "type": "field_number",
            "name": "NUM",
            "value": 0
        }],
        "output": "Number",
        "colour": "#A5A824",
        "helpUrl": "",
        "tooltip": "",
    },
    {
        "type": "_064",
        "message0": "%1 of %2 and %3",
        "args0": [{
                "type": "field_dropdown",
                "name": "MIN_MAX",
                "options": [
                    [
                        "min",
                        "min"
                    ],
                    [
                        "max",
                        "max"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "MIN_NUMBER",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "MAX_NUMBER",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "Number",
        "colour": "#A5A824",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_065",
        "message0": "%1 %2 %3 %4",
        "args0": [{
                "type": "input_value",
                "name": "NUMBER_1",
                "check": "Number"
            },
            {
                "type": "field_dropdown",
                "name": "OPARATION",
                "options": [
                    [
                        "+",
                        "plus"
                    ],
                    [
                        "-",
                        "minus"
                    ],
                    [
                        "x",
                        "multiply"
                    ],
                    [
                        "÷",
                        "divide"
                    ],
                    [
                        "^",
                        "exponent"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "NUMBER_2",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": "#A5A824",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_066",
        "message0": "%1 %2",
        "args0": [{
                "type": "field_dropdown",
                "name": "OPARATION",
                "options": [
                    [
                        "round",
                        "round"
                    ],
                    [
                        "ceil",
                        "ceil"
                    ],
                    [
                        "floor",
                        "floor"
                    ],
                    [
                        "truncate",
                        "truncate"
                    ]
                ]
            },
            {
                "type": "input_value",
                "name": "NUMBER",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": "#A5A824",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_067",
        "message0": "pick random %1 to %2",
        "args0": [{
                "type": "input_value",
                "name": "NUMBER_1",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "NUMBER_2",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "output": "String",
        "colour": "#A5A824",
        "tooltip": "",
        "helpUrl": ""
    }


]);

Blockly.JavaScript['_063'] = function(block) {
    var text_NUM = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = text_NUM;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['_064'] = function(block) {
    var dropdown_min_max = block.getFieldValue('MIN_MAX');
    var value_min_number = Blockly.JavaScript.valueToCode(block, 'MIN_NUMBER', Blockly.JavaScript.ORDER_NONE);
    var value_max_number = Blockly.JavaScript.valueToCode(block, 'MAX_NUMBER', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_min_max) {
        case 'min':
            var code = 'Math.min(' + value_min_number + ',' + value_max_number + ')'
            break;
        case 'max':
            var code = 'Math.max(' + value_min_number + ',' + value_max_number + ')'
            break;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['_065'] = function(block) {
    var value_number_1 = Blockly.JavaScript.valueToCode(block, 'NUMBER_1', Blockly.JavaScript.ORDER_NONE);
    var dropdown_oparation = block.getFieldValue('OPARATION');
    var value_number_2 = Blockly.JavaScript.valueToCode(block, 'NUMBER_2', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_oparation) {
        case 'plus':
            var code = value_number_1 + '+' + value_number_2
            break;
        case 'minus':
            var code = value_number_1 + '-' + value_number_2
            break;
        case 'multiply':
            var code = value_number_1 + '*' + value_number_2
            break;
        case 'divide':
            var code = value_number_1 + '/' + value_number_2
            break;
        case 'exponent':
            var code = value_number_1 + '**' + value_number_2
            break;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_066'] = function(block) {
    var dropdown_oparation = block.getFieldValue('OPARATION');
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_oparation) {
        case 'round':
            var code = 'Math.round(' + value_number + ')'
            break;
        case 'ceil':
            var code = 'Math.ceil(' + value_number + ')'
            break;
        case 'floor':
            var code = 'Math.floor(' + value_number + ')'
            break;
        case 'truncate':
            var code = 'Math.trunc(' + value_number + ')'
            break;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_067'] = function(block) {
    var value_number_1 = Blockly.JavaScript.valueToCode(block, 'NUMBER_1', Blockly.JavaScript.ORDER_NONE);
    var value_number_2 = Blockly.JavaScript.valueToCode(block, 'NUMBER_2', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'randInt(' + value_number_1 + ',' + value_number_2 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};