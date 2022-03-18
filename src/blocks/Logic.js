Blockly.defineBlocksWithJsonArray([{
        "type": "_007",
        "message0": "%1 should %2",
        "args0": [{
                "type": "input_value",
                "name": "ID",
                "check": "Id"
            },
            {
                "type": "input_value",
                "name": "LOGIC"

            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#5DA688",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_009",
        "message0": "filter %1 by %2 should %3",
        "args0": [{
                "type": "input_value",
                "name": "FILTER_ID",
                "check": "Id"
            },
            {
                "type": "input_value",
                "name": "FILTER_TEXT",
                "check": [
                    "String",
                    "Var"
                ]
            },
            {
                "type": "input_value",
                "name": "FILTER_LOGIC",
                "check": "Logic"
            }
        ],
        "inputsInline": true,
        "previousStatement": "Action",
        "nextStatement": "Action",
        "colour": "#5DA688",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_010",
        "message0": "%1 %2 %3 %4",
        "args0": [{
                "type": "input_value",
                "name": "CHAINER_1",
                "check": [
                    "Boolean",
                    "Logic"
                ]
            },
            {
                "type": "field_dropdown",
                "name": "OPARATION",
                "options": [
                    [
                        "and",
                        "and"
                    ],
                    [
                        "or",
                        "or"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "CHAINER_2",
                "check": [
                    "Boolean",
                    "Logic"
                ]
            }
        ],
        "inputsInline": true,
        "output": "Logic",
        "colour": "#5DA688",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_012",
        "message0": "%1",
        "args0": [{
            "type": "field_dropdown",
            "name": "CONDITION",
            "options": [
                [
                    "true",
                    "true"
                ],
                [
                    "false",
                    "false"
                ]
            ]
        }],
        "output": "Boolean",
        "colour": "#5DA688",
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "_014",
        "message0": "%1 %2 %3 %4",
        "args0": [{
                "type": "input_value",
                "name": "CONDITION_1",
                "check": [
                    "Number",
                    "String"
                ]
            },
            {
                "type": "field_dropdown",
                "name": "OPARATION",
                "options": [
                    [
                        "=",
                        "equal"
                    ],
                    [
                        "≠",
                        "not_equal"
                    ],
                    [
                        ">",
                        "greater"
                    ],
                    [
                        "≥",
                        "greater_Equal"
                    ],
                    [
                        "<",
                        "less"
                    ],
                    [
                        "≤",
                        "less_equal"
                    ]
                ]
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_value",
                "name": "CONDITION_2",
                "check": [
                    "Boolean",
                    "Number"
                ]
            }
        ],
        "output": "Boolean",
        "colour": "#5DA688",
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.Blocks['_006'] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
        this.setColour("#5DA688");
        this.appendValueInput('IF0')
            .setCheck('Boolean')
            .appendField('if');
        this.appendStatementInput('DO0')
            .appendField('do');

        this.setPreviousStatement(true, 'Action');
        this.setNextStatement(true, 'Action');

        this.setMutator(new Blockly.Mutator(['controls_if_elseif',
            'controls_if_else'
        ]));
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
            } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
            } else if (thisBlock.elseifCount_ && !thisBlock.elseifCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
            } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
            }
            return '';
        });
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
    },

    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.elseCount_) {
            container.setAttribute('elseif', this.elseifCount_);
        }
        if (this.elseCount_) {
            container.setAttribute('else', 1);
        }
        return container;
    },

    domToMutation: function(xmlElement) {
        this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10) || 0;
        this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10) || 0;
        this.updateShape_();
    },

    decompose: function(workspace) {
        var containerBlock = workspace.newBlock('controls_if_if');
        containerBlock.initSvg();
        var connection = containerBlock.nextConnection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = workspace.newBlock('controls_if_elseif');
            elseifBlock.initSvg();
            connection.connect(elseifBlock.PreviousConnection);
            connection = elseifBlock.nextConnection;
        }
        if (this.elseCount_) {
            var elseBlock = workspace.newBlock('controls_if_else');
            elseBlock.initSvg();
            connection.connect(elseBlock.PreviousConnection);
        }
        return containerBlock;
    },
    compose: function(containerBlock) {
        var clauseBlock = containerBlock.nextConnection.targetBlock();
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
        var valueConnections = [null];
        var statementConnections = [null];
        var elseStatementConnection = null;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'controls_if_elseif':
                    this.elseifCount_++;
                    valueConnections.push(clauseBlock.valueConnection_);
                    statementConnections.push(clauseBlock.statementConnection_);
                    break;
                case 'controls_if_else':
                    this.elseCount_++;
                    elseStatementConnection = clauseBlock.statementConnection_;
                    break;
                default:
                    throw 'Unknown Block Type.';
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }
        this.updateShape_();
        for (var i = 1; i <= this.elseifCount_; i++) {
            Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
            Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
        }
        Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
    },

    saveConnections: function(containerBlock) {
        var clauseBlcok = containerBlock.nextConnection.targetBlock();
        var i = 1;
        while (clauseBlcok) {
            switch (clauseBlcok.type) {
                case 'controls_if_elseif':
                    var inputIf = this.getInput('IF' + i);
                    var inputDo = this.getInput('DO' + i);
                    clauseBlcok.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlcok.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case 'controls_if_else':
                    var inputDo = this.getInput('ELSE');
                    clauseBlcok.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw 'Unknown Block Type.';
            }
            clauseBlcok = clauseBlcok.nextConnection && clauseBlcok.nextConnection.targetBlock();
        }
    },
    updateShape_: function() {
        if (this.getInput('ELSE')) {
            this.removeInput('ELSE');
        }
        var i = 1;
        while (this.getInput('IF' + i)) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
            i++;
        }
        for (var i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck('Boolean')
                .appendField('else if');
            this.appendStatementInput('DO' + i)
                .appendField('do');
        }
        if (this.elseCount_) {
            this.appendStatementInput('ELSE')
                .appendField('else');
        }
    }
};
Blockly.Blocks['_013'] = {
    init: function() {
        var PROPERTIES = [
            ['be exist', 'be.exist'],
            ['be visible', 'be.visible'],
            ['be selected', 'be.selected'],
            ['be equal', 'be.equal'],
            ['be contain', 'be.contain'],
            ['not be exist', 'not.be.exist'],
            ['not be visible', 'not.be.visible'],
            ['not equal', 'not.equal'],
            ['not be contain', 'not.be.contain'],
            ['have value', 'have.value'],
            ['not have value', 'not.have.value']
        ];
        this.setColour(160);
        //this.appendValueInput('CHECK').setCheck('ID');
        var dropdowm = new Blockly.FieldDropdown(PROPERTIES, function(option) {
            var containInput = (option == 'be.contain');
            var equalInput = (option == 'be.equal');
            var notEqualInput = (option == 'not.equal');
            var notContainInput = (option == 'not.be.contain');
            var haveValueInput = (option == 'have.value');
            var notHaveValueInput = (option == 'not.have.value');
            // console.log('-------');
            // console.log('contain dropdown : ' , containInput);
            // console.log('equal dropdown : ' , equalInput);
            // console.log('not equal dropdown : ' , notEqualInput);
            // console.log('not contain dropdown : ' , notContainInput);
            if (!containInput && !notEqualInput && !notContainInput && !haveValueInput && !notHaveValueInput) {
                this.sourceBlock_.updateShape_(equalInput);
            } else if (!equalInput && !notEqualInput && !notContainInput && !haveValueInput && !notHaveValueInput) {
                this.sourceBlock_.updateShape_(containInput);
            } else if (!containInput && !equalInput && !notContainInput && !haveValueInput && !notHaveValueInput) {
                this.sourceBlock_.updateShape_(notEqualInput);
            } else if (!containInput && !equalInput && !notEqualInput && !haveValueInput && !notHaveValueInput) {
                this.sourceBlock_.updateShape_(notContainInput);
            } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !notHaveValueInput) {
                this.sourceBlock_.updateShape_(haveValueInput);
            } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !haveValueInput) {
                this.sourceBlock_.updateShape_(notHaveValueInput);
            }
        });
        this.appendDummyInput()
            .appendField(dropdowm, 'PROPERTY');
        this.setInputsInline(true);
        this.setOutput(true, 'Logic');
    },

    mutationToDom: function() {
        var container = document.createElement('mutation');
        var containInput = (this.getFieldValue('PROPERTY') == 'be.contain');
        var equalInput = (this.getFieldValue('PROPERTY') == 'be.equal');
        var notEqualInput = (this.getFieldValue('PROPERTY') == 'not.equal');
        var notContainInput = (this.getFieldValue('PROPERTY') == 'not.be.contain');
        var haveValueInput = (this.getFieldValue('PROPERTY') == 'have.value');
        var notHaveValueInput = (this.getFieldValue('PROPERTY') == 'not.have.value');
        if (!containInput && !notEqualInput && !notContainInput && !haveValueInput && !notHaveValueInput) {
            container.setAttribute('equal_input', equalInput);
        } else if (!equalInput && !notEqualInput && !notContainInput && !haveValueInput && !notHaveValueInput) {
            container.setAttribute('contain_input', containInput);
        } else if (!containInput && !equalInput && !notContainInput && !haveValueInput && !notHaveValueInput) {
            container.setAttribute('notEqual_input', notEqualInput);
        } else if (!containInput && !equalInput && !notEqualInput && !haveValueInput && !notHaveValueInput) {
            container.setAttribute('notContain_input', notContainInput);
        } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !notHaveValueInput) {
            container.setAttribute('haveValue_input', haveValueInput);
        } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !haveValueInput) {
            container.setAttribute('notHaveValue_input', notHaveValueInput);
        }
        // console.log('-------')
        // console.log("check : " , containInput);
        // console.log('J1 : ', container);
        return container;
    },

    domToMutation: function(xmlElement) {
        var containInput = (xmlElement.getAttribute('contain_input') == 'true');
        this.updateShape_(containInput);
    },

    updateShape_: function(Input) {
        var inputExists = this.getInput('CONTAIN');
        if (Input) {
            if (!inputExists) {
                this.appendValueInput('CONTAIN')
                    .setCheck(['Number', 'String']);
            }
        } else if (inputExists) {
            this.removeInput('CONTAIN');
        }
    }
};

Blockly.JavaScript['_006'] = function(block) {
    var n = 0;
    var code = '',
        branchCode, conditionCode;
    do {
        conditionCode = Blockly.JavaScript.valueToCode(block, 'IF' + n, Blockly.JavaScript.ORDER_NONE) || false;
        branchCode = Blockly.JavaScript.statementToCode(block, 'DO' + n);
        code += (n > 0 ? ' else ' : '') +
            '\nif (' + conditionCode + '){\n' + branchCode + '}';

        ++n;
    } while (block.getInput('IF' + n));

    if (block.getInput('ELSE')) {
        branchCode = Blockly.JavaScript.statementToCode(block, 'ELSE');
        code += ' else {\n' + branchCode + '}';
    }
    return code + '\n';
};

Blockly.JavaScript['_007'] = function(block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE);
    var value_logic = Blockly.JavaScript.valueToCode(block, 'LOGIC', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_id + '.should' + value_logic + '';
    return code;
};

Blockly.JavaScript['_009'] = function(block) {
    var value_filter_id = Blockly.JavaScript.valueToCode(block, 'FILTER_ID', Blockly.JavaScript.ORDER_NONE);
    var value_filter_text = Blockly.JavaScript.valueToCode(block, 'FILTER_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    var value_filter_logic = Blockly.JavaScript.valueToCode(block, 'FILTER_LOGIC', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n' + value_filter_id + '.filter(' + value_filter_text + ').should' + value_filter_logic;
    return code;
};

Blockly.JavaScript['_010'] = function(block) {
    var value_chainer_1 = Blockly.JavaScript.valueToCode(block, 'CHAINER_1', Blockly.JavaScript.ORDER_NONE);
    var dropdown_oparation = block.getFieldValue('OPARATION');
    var value_chainer_2 = Blockly.JavaScript.valueToCode(block, 'CHAINER_2', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_chainer_1 + '.' + dropdown_oparation + value_chainer_2;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_012'] = function(block) {
    var dropdown_condition = block.getFieldValue('CONDITION');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_condition;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_013'] = function(block) {
    var dropdown_property = block.getFieldValue('PROPERTY');
    switch (dropdown_property) {
        case 'be.exist':
            var code = '(\'be.exist\')';
            break;
        case 'be.visible':
            var code = '(\'be.visible\')';
            break;
        case 'be.selected':
            var code = '(\'be.selected\')';
            break;
        case 'be.equal':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = '(\'equal\', ' + container + ')';
            break;
        case 'be.contain':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = '(\'be.contain\', ' + container + ')';
            break;
        case 'not.be.exist':
            var code = '(\'not.be.exist\')';
            break;
        case 'not.be.visible':
            var code = '(\'not.be.visible\')';
            break;
        case 'not.equal':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = '\'not.equal\', ' + container;
            break;
        case 'not.be.contain':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = '(\'not.be.contain\', ' + container + ')';
            break;
        case 'have.value':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = '(\'have.value\', ' + container + ')';
            break;
        case 'not.have.value':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = '(\'not.have.value\', ' + container + ')';
            break;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['_014'] = function(block) {
    var value_condition_1 = Blockly.JavaScript.valueToCode(block, 'CONDITION_1', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_oparation = block.getFieldValue('OPARATION');
    var value_condition_2 = Blockly.JavaScript.valueToCode(block, 'CONDITION_2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    switch (dropdown_oparation) {
        case 'equal':
            var code = value_condition_1 + '==' + value_condition_2;
            break;
        case 'not_equal':
            var code = value_condition_1 + '!=' + value_condition_2;
            break;
        case 'greater':
            var code = value_condition_1 + '>' + value_condition_2;
            break;
        case 'greater_Equal':
            var code = value_condition_1 + '>=' + value_condition_2;
            break;
        case 'less':
            var code = value_condition_1 + '<' + value_condition_2;
            break;
        case 'less_equal':
            var code = value_condition_1 + '<=' + value_condition_2;
            break;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return code
};