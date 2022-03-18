Blockly.defineBlocksWithJsonArray([{
        "type": "_015",
        "message0": "clear text in %1",
        "args0": [{
            "type": "input_value",
            "name": "CLEAR_ID",
            "check": "Id"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_016",
        "message0": "click at %1",
        "args0": [{
            "type": "input_value",
            "name": "CLICK_ID",
            "check": "Id"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_017",
        "message0": "double click at %1",
        "args0": [{
            "type": "input_value",
            "name": "DB_CLICK",
            "check": "Id"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_018",
        "message0": "right click at %1",
        "args0": [{
            "type": "input_value",
            "name": "R_CLICK",
            "check": "Id"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_019",
        "message0": "submit form %1",
        "args0": [{
            "type": "input_value",
            "name": "SUBMIT",
            "check": "Id"
        }],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_020",
        "message0": "type %1 to %2",
        "args0": [{
                "type": "input_value",
                "name": "TYPE_TEXT",
                "check": [
                    "String",
                    "Number",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "TYPE_ID",
                "check": "Id"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_021",
        "message0": "uncheck %1 with value %2",
        "args0": [{
                "type": "input_value",
                "name": "UNCHECK_ID",
                "check": "Id"
            },
            {
                "type": "input_value",
                "name": "UNCHECK_VALUE",
                "check": [
                    "String",
                    "Var",
                    "Number"
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_022",
        "message0": "set viewport size width = %1 px, height = %2 px",
        "args0": [{
                "type": "input_value",
                "name": "VIEW_WIDTH",
                "check": "Number"
            },
            {
                "type": "input_value",
                "name": "VIEW_HEIGHT",
                "check": "Number"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_023",
        "message0": "check %1 %2 have %3",
        "args0": [{
                "type": "field_dropdown",
                "name": "POPUP_CHECK",
                "options": [
                    [
                        "alert",
                        "window:alert"
                    ],
                    [
                        "confirm",
                        "window:confirm"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "POPUP_TEXT",
                "check": [
                    "String",
                    "Var"
                ]
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_024",
        "message0": "select value %1 from selector %2",
        "args0": [{
                "type": "input_value",
                "name": "SELECT_VALUE",
                "check": [
                    "String",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "SELECT_ID",
                "check": "Id"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#0071DE",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['_015'] = function(block) {
    var value_clear_id = Blockly.JavaScript.valueToCode(block, 'CLEAR_ID', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_clear_id + '.clear()';
    return code;
};

Blockly.JavaScript['_016'] = function(block) {
    var value_click_id = Blockly.JavaScript.valueToCode(block, 'CLICK_ID', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_click_id + '.click()';
    return code;
};

Blockly.JavaScript['_017'] = function(block) {
    var value_db_click_id = Blockly.JavaScript.valueToCode(block, 'DB_CLICK', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_db_click_id + '.dbclick()';
    return code;
};

Blockly.JavaScript['_018'] = function(block) {
    var value_r_click = Blockly.JavaScript.valueToCode(block, 'R_CLICK', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_r_click + '.rightclick()';
    return code;
};

Blockly.JavaScript['_019'] = function(block) {
    var value_submit = Blockly.JavaScript.valueToCode(block, 'SUBMIT', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_submit + '.submit()';
    return code;
};

Blockly.JavaScript['_020'] = function(block) {
    var value_type_text = Blockly.JavaScript.valueToCode(block, 'TYPE_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var value_type_id = Blockly.JavaScript.valueToCode(block, 'TYPE_ID', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_type_id + '.type(' + value_type_text + ')';
    return code;
};

Blockly.JavaScript['_021'] = function(block) {
    var value_uncheck_id = Blockly.JavaScript.valueToCode(block, 'UNCHECK_ID', Blockly.JavaScript.ORDER_NONE);
    var value_uncheck_value = Blockly.JavaScript.valueToCode(block, 'UNCHECK_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_uncheck_id + '.uncheck(' + value_uncheck_value + ')';
    return code;
};

Blockly.JavaScript['_022'] = function(block) {
    var value_view_width = Blockly.JavaScript.valueToCode(block, 'VIEW_WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    var value_view_height = Blockly.JavaScript.valueToCode(block, 'VIEW_HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncy.viewport(' + value_view_width + '\,' + value_view_height + ')';
    return code;
};

Blockly.JavaScript['_023'] = function(block) {
    var dropdown_popup_check = block.getFieldValue('POPUP_CHECK');
    var value_popup_text = Blockly.JavaScript.valueToCode(block, 'POPUP_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\ncy.on(\'' + dropdown_popup_check + '\'\, (text) => { \n expect(text).to.contain(' + value_popup_text + ') \n})';
    return code;
};

Blockly.JavaScript['_024'] = function(block) {
    var value_select_value = Blockly.JavaScript.valueToCode(block, 'SELECT_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_select_id = Blockly.JavaScript.valueToCode(block, 'SELECT_ID', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_select_id + '.select(' + value_select_value + ')';
    return code;
};