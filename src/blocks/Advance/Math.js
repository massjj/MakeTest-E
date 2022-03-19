Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
    // Block for numeric value.
    {
        "type": "math_number",
        "message0": "%1",
        "args0": [{
            "type": "field_number",
            "name": "NUM",
            "value": 0
        }],
        "output": "Number",
        "helpUrl": "",
        "colour": "#A5A824",
        "tooltip": "",
        "extensions": ["parent_tooltip_when_inline"]
    },
]);

// Blockly.JavaScript['_063'] = function(block) {
//     var text_NUM = block.getFieldValue('NUM');
//     // TODO: Assemble JavaScript into code variable.
//     var code = text_NUM;
//     // TODO: Change ORDER_NONE to the correct strength.
//     return [code, Blockly.JavaScript.ORDER_NONE];
// };