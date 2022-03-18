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
]);

Blockly.JavaScript['_063'] = function(block) {
    var text_NUM = block.getFieldValue('NUM');
    // TODO: Assemble JavaScript into code variable.
    var code = text_NUM;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};