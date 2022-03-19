Blockly.defineBlocksWithJsonArray([{
        "type": "_040",
        "message0": "visit %1",
        "args0": [{
            "type": "input_value",
            "name": "VISIT_TEXT",
            "check": "String"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#FA7A4C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_041",
        "message0": "url should %1",
        "args0": [{
            "type": "input_value",
            "name": "URL_LOGIC",
            "check": "Logic"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#FA7A4C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_042",
        "message0": "reload",
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#FA7A4C",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_043",
        "message0": "go %1",
        "args0": [{
            "type": "field_dropdown",
            "name": "GO_POSITION",
            "options": [
                [
                    "back",
                    "back"
                ],
                [
                    "forward",
                    "forward"
                ]
            ]
        }],
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#FA7A4C",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['_040'] = function(block) {
    var value_visit_text = Blockly.JavaScript.valueToCode(block, 'VISIT_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncy.visit(' + value_visit_text + ')';
    return code;
};

Blockly.JavaScript['_041'] = function(block) {
    var value_url_logic = Blockly.JavaScript.valueToCode(block, 'URL_LOGIC', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncy.url().should' + value_url_logic;
    return code;
};

Blockly.JavaScript['_042'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncy.reload()';
    return code;
};

Blockly.JavaScript['_043'] = function(block) {
    var dropdown_go_position = block.getFieldValue('GO_POSITION');
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_go_position) {
        case 'back':
            var code = '\ncy.go(\'back\')';
            break;
        case 'forward':
            var code = '\ncy.go(\'forward\')';
            break;
    }
    return code;
};