Blockly.Blocks['_008'] = {
    init: function() {
        var PROPERTIES = [
            ['be exist', 'be.exist'],
            ['be contain', 'be.contain'],
            ['equal', 'equal'],
            ['have value', 'have.value'],
            ['match', 'match'],
            ['be.visible', 'be.visible'],
            ['be true', 'be.true'],
            ['be false', 'be.false'],
            ['not be exist', 'not.be.exist'],
            ['not be contain', 'not.be.contain'],
            ['not equal', 'not.equal'],

        ];
        var dropdowm = new Blockly.FieldDropdown(PROPERTIES, function(option) {
            var containInput = (option == 'be.contain');
            var equalInput = (option == 'equal');
            var haveValueInput = (option == 'have.value');
            var matchInput = (option == 'match');
            var notEqualInput = (option == 'not.equal');
            var notContainInput = (option == 'not.be.contain');

            if (!containInput && !notEqualInput && !notContainInput && !haveValueInput && !matchInput) {
                this.sourceBlock_.updateShape_(equalInput);
            } else if (!equalInput && !notEqualInput && !notContainInput && !haveValueInput && !matchInput) {
                this.sourceBlock_.updateShape_(containInput);
            } else if (!containInput && !equalInput && !notContainInput && !haveValueInput && !matchInput) {
                this.sourceBlock_.updateShape_(notEqualInput);
            } else if (!containInput && !equalInput && !notEqualInput && !haveValueInput && !matchInput) {
                this.sourceBlock_.updateShape_(notContainInput);
            } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !matchInput) {
                this.sourceBlock_.updateShape_(haveValueInput);
            } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !haveValueInput) {
                this.sourceBlock_.updateShape_(matchInput);
            }

        })
        this.appendValueInput("EXPECT_PARAM")
            .setCheck("Param")
            .appendField("expect");

        this.appendDummyInput()
            .appendField("to")
            .appendField(dropdowm, 'PROPERTY');

        this.setInputsInline(true);
        this.setPreviousStatement(true, "Action");
        this.setNextStatement(true, "Action");
        this.setColour("#5DA688");
        this.setTooltip("");
        this.setHelpUrl("");
    },
    mutations: function() {
        var container = document.createElement('mutation');
        var containInput = (this.getFieldValue('PROPERTY') == 'be.contain');
        var equalInput = (this.getFieldValue('PROPERTY') == 'equal');
        var notEqualInput = (this.getFieldValue('PROPERTY') == 'not.equal');
        var notContainInput = (this.getFieldValue('PROPERTY') == 'not.be.contain');
        var haveValueInput = (this.getFieldValue('PROPERTY') == 'have.value');
        var matchInput = (this.getFieldValue('PROPERTY') == 'match');
        if (!containInput && !notEqualInput && !notContainInput && !haveValueInput && !matchInput) {
            container.setAttribute('equal_input', equalInput);
        } else if (!equalInput && !notEqualInput && !notContainInput && !haveValueInput && !matchInput) {
            container.setAttribute('contain_input', containInput);
        } else if (!containInput && !equalInput && !notContainInput && !haveValueInput && !matchInput) {
            container.setAttribute('notEqual_input', notEqualInput);
        } else if (!containInput && !equalInput && !notEqualInput && !haveValueInput && !matchInput) {
            container.setAttribute('notContain_input', notContainInput);
        } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !matchInput) {
            container.setAttribute('haveValue_input', haveValueInput);
        } else if (!containInput && !equalInput && !notEqualInput && !notContainInput && !haveValueInput) {
            container.setAttribute('match_input', matchInput);
        }
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

// ['not be exist', 'not.be.exist'],
// ['not be contain', 'not.be.contain'],
// ['not equal', 'not.equal'],
// ['not have value', 'not.have.value'],
// ['not match', 'not.match']
Blockly.JavaScript['_008'] = function(block) {
    var value_expect_param = Blockly.JavaScript.valueToCode(block, 'EXPECT_PARAM', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var dropdown_property = block.getFieldValue('PROPERTY');
    // var code = dropdown_property;
    switch (dropdown_property) {
        case 'be.exist':
            var code = 'expect' + value_expect_param + '.to.exist';
            break;
        case 'be.contain':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = 'expect' + value_expect_param + '.to.contain(' + container + ')';
            break;
        case 'equal':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = 'expect' + value_expect_param + '.to.equal(' + container + ')';
            break;
        case 'have.value':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = 'expect' + value_expect_param + '.to.have.value(' + container + ')';
            break;
        case 'match':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = 'expect' + value_expect_param + '.to.match(' + container + ')';
            break;
        case 'be.true':
            var code = 'expect' + value_expect_param + '.to.be.true';
            break;
        case 'be.false':
            var code = 'expect' + value_expect_param + '.to.be.false';
            break;
        case 'not.be.exist':
            var code = 'expect' + value_expect_param + '.not.to.exist';
            break;
        case 'not.be.contain':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = 'expect' + value_expect_param + '.not.to.contain(' + container + ')';
            break;
        case 'not.equal':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = 'expect' + value_expect_param + '.to.not.equal(' + container + ')';
            break;
        case 'be.visible':
            var container = Blockly.JavaScript.valueToCode(block, 'CONTAIN', Blockly.JavaScript.ORDER_ATOMIC);
            var code = 'expect' + value_expect_param + '.to.be.visible';
            break;
    }
    return code;
};