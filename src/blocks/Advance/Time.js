Blockly.defineBlocksWithJsonArray([{
        "type": "_075",
        "message0": "wait for %1 ms.",
        "args0": [{
            "type": "input_value",
            "name": "TIME",
            "check": "Number"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#9F1158",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_076",
        "message0": "time move for %1 ms. after %2 %3",
        "args0": [{
                "type": "input_value",
                "name": "TIME",
                "check": "Number"
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "TIME_ACTION",
                "check": "Action"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#9F1158",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['_075'] = function(block) {
    var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'cy.wait(' + value_time + ')';
    return code;
};

Blockly.JavaScript['_076'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_name = Blockly.JavaScript.statementToCode(block, 'TIME_ACTION');
    // TODO: Assemble JavaScript into code variable.
    var code = 'cy.clock().then((clock) => {' + statements_name + '\nclock.time(' + value_name + ')' + '\n})';
    return code;
};