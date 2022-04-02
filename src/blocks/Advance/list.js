/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview List blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['LISTS_HUE']. (2018 April 5)
 */
Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
    // Block for creating an empty list
    // The 'list_create_with' block is preferred as it is more flexible.
    // <block type="lists_create_with">
    //   <mutation items="0"></mutation>
    // </block>
    {
        "type": "lists_create_empty",
        "message0": "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
        "output": "Array",
        "style": "list_blocks",
        "tooltip": "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
        "helpUrl": "%{BKY_LISTS_CREATE_EMPTY_HELPURL}"
    },
    // Block for creating a list with one element repeated.
    {
        "type": "lists_repeat",
        "message0": "%{BKY_LISTS_REPEAT_TITLE}",
        "args0": [{
                "type": "input_value",
                "name": "ITEM"
            },
            {
                "type": "input_value",
                "name": "NUM",
                "check": "Number"
            }
        ],
        "output": "Array",
        "style": "list_blocks",
        "tooltip": "%{BKY_LISTS_REPEAT_TOOLTIP}",
        "helpUrl": "%{BKY_LISTS_REPEAT_HELPURL}"
    },
    // Block for reversing a list.
    {
        "type": "lists_reverse",
        "message0": "%{BKY_LISTS_REVERSE_MESSAGE0}",
        "args0": [{
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
        }],
        "output": "Array",
        "inputsInline": true,
        "style": "list_blocks",
        "tooltip": "%{BKY_LISTS_REVERSE_TOOLTIP}",
        "helpUrl": "%{BKY_LISTS_REVERSE_HELPURL}"
    },
    // Block for checking if a list is empty
    {
        "type": "lists_isEmpty",
        "message0": "%{BKY_LISTS_ISEMPTY_TITLE}",
        "args0": [{
            "type": "input_value",
            "name": "VALUE",
            "check": ["String", "Array"]
        }],
        "output": "Boolean",
        "style": "list_blocks",
        "tooltip": "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
        "helpUrl": "%{BKY_LISTS_ISEMPTY_HELPURL}"
    },
    // Block for getting the list length
    {
        "type": "lists_length",
        "message0": "%{BKY_LISTS_LENGTH_TITLE}",
        "args0": [{
            "type": "input_value",
            "name": "VALUE",
            "check": ["String", "Array"]
        }],
        "output": "Number",
        "style": "list_blocks",
        "tooltip": "%{BKY_LISTS_LENGTH_TOOLTIP}",
        "helpUrl": "%{BKY_LISTS_LENGTH_HELPURL}"
    }
]); // END JSON EXTRACT (Do not delete this comment.)

Blockly.Blocks['lists_create_with'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function() {
        this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
        this.setStyle('list_blocks');
        this.itemCount_ = 3;
        this.updateShape_();
        this.setOutput(true, 'Array');
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this {Blockly.Block}
     */
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock('lists_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock && !itemBlock.isInsertionMarker()) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function() {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i)
                    .setAlign(Blockly.ALIGN_RIGHT);
                if (i == 0) {
                    input.appendField(Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH']);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};

Blockly.Blocks['lists_create_with_container'] = {
    /**
     * Mutator block for list container.
     * @this {Blockly.Block}
     */
    init: function() {
        this.setStyle('list_blocks');
        this.appendDummyInput()
            .appendField(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TITLE_ADD']);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
    }
};

Blockly.Blocks['lists_create_with_item'] = {
    /**
     * Mutator block for adding items.
     * @this {Blockly.Block}
     */
    init: function() {
        this.setStyle('list_blocks');
        this.appendDummyInput()
            .appendField(Blockly.Msg['LISTS_CREATE_WITH_ITEM_TITLE']);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_ITEM_TOOLTIP']);
        this.contextMenu = false;
    }
};

Blockly.Blocks['lists_indexOf'] = {
    /**
     * Block for finding an item in the list.
     * @this {Blockly.Block}
     */
    init: function() {
        var OPERATORS = [
            [Blockly.Msg['LISTS_INDEX_OF_FIRST'], 'FIRST'],
            [Blockly.Msg['LISTS_INDEX_OF_LAST'], 'LAST']
        ];
        this.setHelpUrl(Blockly.Msg['LISTS_INDEX_OF_HELPURL']);
        this.setStyle('list_blocks');
        this.setOutput(true, 'Number');
        this.appendValueInput('VALUE')
            .setCheck('Array')
            .appendField(Blockly.Msg['LISTS_INDEX_OF_INPUT_IN_LIST']);
        this.appendValueInput('FIND')
            .appendField(new Blockly.FieldDropdown(OPERATORS), 'END');
        this.setInputsInline(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg['LISTS_INDEX_OF_TOOLTIP'].replace('%1',
                thisBlock.workspace.options.oneBasedIndex ? '0' : '-1');
        });
    }
};

Blockly.Blocks['lists_getIndex'] = {
    /**
     * Block for getting element at index.
     * @this {Blockly.Block}
     */
    init: function() {
        var MODE = [
            [Blockly.Msg['LISTS_GET_INDEX_GET'], 'GET'],
            [Blockly.Msg['LISTS_GET_INDEX_GET_REMOVE'], 'GET_REMOVE'],
            [Blockly.Msg['LISTS_GET_INDEX_REMOVE'], 'REMOVE']
        ];
        this.WHERE_OPTIONS = [
            [Blockly.Msg['LISTS_GET_INDEX_FROM_START'], 'FROM_START'],
            [Blockly.Msg['LISTS_GET_INDEX_FROM_END'], 'FROM_END'],
            [Blockly.Msg['LISTS_GET_INDEX_FIRST'], 'FIRST'],
            [Blockly.Msg['LISTS_GET_INDEX_LAST'], 'LAST'],
            [Blockly.Msg['LISTS_GET_INDEX_RANDOM'], 'RANDOM']
        ];
        this.setHelpUrl(Blockly.Msg['LISTS_GET_INDEX_HELPURL']);
        this.setStyle('list_blocks');
        var modeMenu = new Blockly.FieldDropdown(MODE, function(value) {
            var isStatement = (value == 'REMOVE');
            this.getSourceBlock().updateStatement_(isStatement);
        });
        this.appendValueInput('VALUE')
            .setCheck('Array')
            .appendField(Blockly.Msg['LISTS_GET_INDEX_INPUT_IN_LIST']);
        this.appendDummyInput()
            .appendField(modeMenu, 'MODE')
            .appendField('', 'SPACE');
        this.appendDummyInput('AT');
        if (Blockly.Msg['LISTS_GET_INDEX_TAIL']) {
            this.appendDummyInput('TAIL')
                .appendField(Blockly.Msg['LISTS_GET_INDEX_TAIL']);
        }
        this.setInputsInline(true);
        this.setOutput(true);
        this.updateAt_(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('MODE');
            var where = thisBlock.getFieldValue('WHERE');
            var tooltip = '';
            switch (mode + ' ' + where) {
                case 'GET FROM_START':
                case 'GET FROM_END':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_FROM'];
                    break;
                case 'GET FIRST':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_FIRST'];
                    break;
                case 'GET LAST':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_LAST'];
                    break;
                case 'GET RANDOM':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_RANDOM'];
                    break;
                case 'GET_REMOVE FROM_START':
                case 'GET_REMOVE FROM_END':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM'];
                    break;
                case 'GET_REMOVE FIRST':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST'];
                    break;
                case 'GET_REMOVE LAST':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST'];
                    break;
                case 'GET_REMOVE RANDOM':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM'];
                    break;
                case 'REMOVE FROM_START':
                case 'REMOVE FROM_END':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM'];
                    break;
                case 'REMOVE FIRST':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST'];
                    break;
                case 'REMOVE LAST':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST'];
                    break;
                case 'REMOVE RANDOM':
                    tooltip = Blockly.Msg['LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM'];
                    break;
            }
            if (where == 'FROM_START' || where == 'FROM_END') {
                var msg = (where == 'FROM_START') ?
                    Blockly.Msg['LISTS_INDEX_FROM_START_TOOLTIP'] :
                    Blockly.Msg['LISTS_INDEX_FROM_END_TOOLTIP'];
                tooltip += '  ' + msg.replace('%1',
                    thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
            }
            return tooltip;
        });
    },
    /**
     * Create XML to represent whether the block is a statement or a value.
     * Also represent whether there is an 'AT' input.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        var isStatement = !this.outputConnection;
        container.setAttribute('statement', isStatement);
        var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
        container.setAttribute('at', isAt);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
        // Note: Until January 2013 this block did not have mutations,
        // so 'statement' defaults to false and 'at' defaults to true.
        var isStatement = (xmlElement.getAttribute('statement') == 'true');
        this.updateStatement_(isStatement);
        var isAt = (xmlElement.getAttribute('at') != 'false');
        this.updateAt_(isAt);
    },
    /**
     * Switch between a value block and a statement block.
     * @param {boolean} newStatement True if the block should be a statement.
     *     False if the block should be a value.
     * @private
     * @this {Blockly.Block}
     */
    updateStatement_: function(newStatement) {
        var oldStatement = !this.outputConnection;
        if (newStatement != oldStatement) {
            this.unplug(true, true);
            if (newStatement) {
                this.setOutput(false);
                this.setPreviousStatement(true);
                this.setNextStatement(true);
            } else {
                this.setPreviousStatement(false);
                this.setNextStatement(false);
                this.setOutput(true);
            }
        }
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {Blockly.Block}
     */
    updateAt_: function(isAt) {
        // Destroy old 'AT' and 'ORDINAL' inputs.
        this.removeInput('AT');
        this.removeInput('ORDINAL', true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT').setCheck('Number');
            if (Blockly.Msg['ORDINAL_NUMBER_SUFFIX']) {
                this.appendDummyInput('ORDINAL')
                    .appendField(Blockly.Msg['ORDINAL_NUMBER_SUFFIX']);
            }
        } else {
            this.appendDummyInput('AT');
        }
        var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
            var newAt = (value == 'FROM_START') || (value == 'FROM_END');
            // The 'isAt' variable is available due to this function being a closure.
            if (newAt != isAt) {
                var block = this.getSourceBlock();
                block.updateAt_(newAt);
                // This menu has been destroyed and replaced.  Update the replacement.
                block.setFieldValue(value, 'WHERE');
                return null;
            }
            return undefined;
        });
        this.getInput('AT').appendField(menu, 'WHERE');
        if (Blockly.Msg['LISTS_GET_INDEX_TAIL']) {
            this.moveInputBefore('TAIL', null);
        }
    }
};

Blockly.Blocks['lists_setIndex'] = {
    /**
     * Block for setting the element at index.
     * @this {Blockly.Block}
     */
    init: function() {
        var MODE = [
            [Blockly.Msg['LISTS_SET_INDEX_SET'], 'SET'],
            [Blockly.Msg['LISTS_SET_INDEX_INSERT'], 'INSERT']
        ];
        this.WHERE_OPTIONS = [
            [Blockly.Msg['LISTS_GET_INDEX_FROM_START'], 'FROM_START'],
            [Blockly.Msg['LISTS_GET_INDEX_FROM_END'], 'FROM_END'],
            [Blockly.Msg['LISTS_GET_INDEX_FIRST'], 'FIRST'],
            [Blockly.Msg['LISTS_GET_INDEX_LAST'], 'LAST'],
            [Blockly.Msg['LISTS_GET_INDEX_RANDOM'], 'RANDOM']
        ];
        this.setHelpUrl(Blockly.Msg['LISTS_SET_INDEX_HELPURL']);
        this.setStyle('list_blocks');
        this.appendValueInput('LIST')
            .setCheck('Array')
            .appendField(Blockly.Msg['LISTS_SET_INDEX_INPUT_IN_LIST']);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(MODE), 'MODE')
            .appendField('', 'SPACE');
        this.appendDummyInput('AT');
        this.appendValueInput('TO')
            .appendField(Blockly.Msg['LISTS_SET_INDEX_INPUT_TO']);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg['LISTS_SET_INDEX_TOOLTIP']);
        this.updateAt_(true);
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('MODE');
            var where = thisBlock.getFieldValue('WHERE');
            var tooltip = '';
            switch (mode + ' ' + where) {
                case 'SET FROM_START':
                case 'SET FROM_END':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_FROM'];
                    break;
                case 'SET FIRST':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_FIRST'];
                    break;
                case 'SET LAST':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_LAST'];
                    break;
                case 'SET RANDOM':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_SET_RANDOM'];
                    break;
                case 'INSERT FROM_START':
                case 'INSERT FROM_END':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FROM'];
                    break;
                case 'INSERT FIRST':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST'];
                    break;
                case 'INSERT LAST':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_LAST'];
                    break;
                case 'INSERT RANDOM':
                    tooltip = Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM'];
                    break;
            }
            if (where == 'FROM_START' || where == 'FROM_END') {
                tooltip += '  ' + Blockly.Msg['LISTS_INDEX_FROM_START_TOOLTIP']
                    .replace('%1',
                        thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
            }
            return tooltip;
        });
    },
    /**
     * Create XML to represent whether there is an 'AT' input.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
        container.setAttribute('at', isAt);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' input.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
        // Note: Until January 2013 this block did not have mutations,
        // so 'at' defaults to true.
        var isAt = (xmlElement.getAttribute('at') != 'false');
        this.updateAt_(isAt);
    },
    /**
     * Create or delete an input for the numeric index.
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {Blockly.Block}
     */
    updateAt_: function(isAt) {
        // Destroy old 'AT' and 'ORDINAL' input.
        this.removeInput('AT');
        this.removeInput('ORDINAL', true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT').setCheck('Number');
            if (Blockly.Msg['ORDINAL_NUMBER_SUFFIX']) {
                this.appendDummyInput('ORDINAL')
                    .appendField(Blockly.Msg['ORDINAL_NUMBER_SUFFIX']);
            }
        } else {
            this.appendDummyInput('AT');
        }
        var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
            var newAt = (value == 'FROM_START') || (value == 'FROM_END');
            // The 'isAt' variable is available due to this function being a closure.
            if (newAt != isAt) {
                var block = this.getSourceBlock();
                block.updateAt_(newAt);
                // This menu has been destroyed and replaced.  Update the replacement.
                block.setFieldValue(value, 'WHERE');
                return null;
            }
            return undefined;
        });
        this.moveInputBefore('AT', 'TO');
        if (this.getInput('ORDINAL')) {
            this.moveInputBefore('ORDINAL', 'TO');
        }

        this.getInput('AT').appendField(menu, 'WHERE');
    }
};

Blockly.Blocks['lists_getSublist'] = {
    /**
     * Block for getting sublist.
     * @this {Blockly.Block}
     */
    init: function() {
        this['WHERE_OPTIONS_1'] = [
            [Blockly.Msg['LISTS_GET_SUBLIST_START_FROM_START'], 'FROM_START'],
            [Blockly.Msg['LISTS_GET_SUBLIST_START_FROM_END'], 'FROM_END'],
            [Blockly.Msg['LISTS_GET_SUBLIST_START_FIRST'], 'FIRST']
        ];
        this['WHERE_OPTIONS_2'] = [
            [Blockly.Msg['LISTS_GET_SUBLIST_END_FROM_START'], 'FROM_START'],
            [Blockly.Msg['LISTS_GET_SUBLIST_END_FROM_END'], 'FROM_END'],
            [Blockly.Msg['LISTS_GET_SUBLIST_END_LAST'], 'LAST']
        ];
        this.setHelpUrl(Blockly.Msg['LISTS_GET_SUBLIST_HELPURL']);
        this.setStyle('list_blocks');
        this.appendValueInput('LIST')
            .setCheck('Array')
            .appendField(Blockly.Msg['LISTS_GET_SUBLIST_INPUT_IN_LIST']);
        this.appendDummyInput('AT1');
        this.appendDummyInput('AT2');
        if (Blockly.Msg['LISTS_GET_SUBLIST_TAIL']) {
            this.appendDummyInput('TAIL')
                .appendField(Blockly.Msg['LISTS_GET_SUBLIST_TAIL']);
        }
        this.setInputsInline(true);
        this.setOutput(true, 'Array');
        this.updateAt_(1, true);
        this.updateAt_(2, true);
        this.setTooltip(Blockly.Msg['LISTS_GET_SUBLIST_TOOLTIP']);
    },
    /**
     * Create XML to represent whether there are 'AT' inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        var isAt1 = this.getInput('AT1').type == Blockly.INPUT_VALUE;
        container.setAttribute('at1', isAt1);
        var isAt2 = this.getInput('AT2').type == Blockly.INPUT_VALUE;
        container.setAttribute('at2', isAt2);
        return container;
    },
    /**
     * Parse XML to restore the 'AT' inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
        var isAt1 = (xmlElement.getAttribute('at1') == 'true');
        var isAt2 = (xmlElement.getAttribute('at2') == 'true');
        this.updateAt_(1, isAt1);
        this.updateAt_(2, isAt2);
    },
    /**
     * Create or delete an input for a numeric index.
     * This block has two such inputs, independent of each other.
     * @param {number} n Specify first or second input (1 or 2).
     * @param {boolean} isAt True if the input should exist.
     * @private
     * @this {Blockly.Block}
     */
    updateAt_: function(n, isAt) {
        // Create or delete an input for the numeric index.
        // Destroy old 'AT' and 'ORDINAL' inputs.
        this.removeInput('AT' + n);
        this.removeInput('ORDINAL' + n, true);
        // Create either a value 'AT' input or a dummy input.
        if (isAt) {
            this.appendValueInput('AT' + n).setCheck('Number');
            if (Blockly.Msg['ORDINAL_NUMBER_SUFFIX']) {
                this.appendDummyInput('ORDINAL' + n)
                    .appendField(Blockly.Msg['ORDINAL_NUMBER_SUFFIX']);
            }
        } else {
            this.appendDummyInput('AT' + n);
        }
        var menu = new Blockly.FieldDropdown(this['WHERE_OPTIONS_' + n],
            function(value) {
                var newAt = (value == 'FROM_START') || (value == 'FROM_END');
                // The 'isAt' variable is available due to this function being a
                // closure.
                if (newAt != isAt) {
                    var block = this.getSourceBlock();
                    block.updateAt_(n, newAt);
                    // This menu has been destroyed and replaced.
                    // Update the replacement.
                    block.setFieldValue(value, 'WHERE' + n);
                    return null;
                }
            });
        this.getInput('AT' + n)
            .appendField(menu, 'WHERE' + n);
        if (n == 1) {
            this.moveInputBefore('AT1', 'AT2');
            if (this.getInput('ORDINAL1')) {
                this.moveInputBefore('ORDINAL1', 'AT2');
            }
        }
        if (Blockly.Msg['LISTS_GET_SUBLIST_TAIL']) {
            this.moveInputBefore('TAIL', null);
        }
    }
};

Blockly.Blocks['lists_sort'] = {
    /**
     * Block for sorting a list.
     * @this {Blockly.Block}
     */
    init: function() {
        this.jsonInit({
            "message0": Blockly.Msg['LISTS_SORT_TITLE'],
            "args0": [{
                    "type": "field_dropdown",
                    "name": "TYPE",
                    "options": [
                        [Blockly.Msg['LISTS_SORT_TYPE_NUMERIC'], "NUMERIC"],
                        [Blockly.Msg['LISTS_SORT_TYPE_TEXT'], "TEXT"],
                        [Blockly.Msg['LISTS_SORT_TYPE_IGNORECASE'], "IGNORE_CASE"]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "DIRECTION",
                    "options": [
                        [Blockly.Msg['LISTS_SORT_ORDER_ASCENDING'], "1"],
                        [Blockly.Msg['LISTS_SORT_ORDER_DESCENDING'], "-1"]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "LIST",
                    "check": "Array"
                }
            ],
            "output": "Array",
            "style": "list_blocks",
            "tooltip": Blockly.Msg['LISTS_SORT_TOOLTIP'],
            "helpUrl": Blockly.Msg['LISTS_SORT_HELPURL']
        });
    }
};

Blockly.Blocks['lists_split'] = {
    /**
     * Block for splitting text into a list, or joining a list into text.
     * @this {Blockly.Block}
     */
    init: function() {
        // Assign 'this' to a variable for use in the closures below.
        var thisBlock = this;
        var dropdown = new Blockly.FieldDropdown(
            [
                [Blockly.Msg['LISTS_SPLIT_LIST_FROM_TEXT'], 'SPLIT'],
                [Blockly.Msg['LISTS_SPLIT_TEXT_FROM_LIST'], 'JOIN']
            ],
            function(newMode) {
                thisBlock.updateType_(newMode);
            });
        this.setHelpUrl(Blockly.Msg['LISTS_SPLIT_HELPURL']);
        this.setStyle('list_blocks');
        this.appendValueInput('INPUT')
            .setCheck('String')
            .appendField(dropdown, 'MODE');
        this.appendValueInput('DELIM')
            .setCheck('String')
            .appendField(Blockly.Msg['LISTS_SPLIT_WITH_DELIMITER']);
        this.setInputsInline(true);
        this.setOutput(true, 'Array');
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue('MODE');
            if (mode == 'SPLIT') {
                return Blockly.Msg['LISTS_SPLIT_TOOLTIP_SPLIT'];
            } else if (mode == 'JOIN') {
                return Blockly.Msg['LISTS_SPLIT_TOOLTIP_JOIN'];
            }
            throw Error('Unknown mode: ' + mode);
        });
    },
    /**
     * Modify this block to have the correct input and output types.
     * @param {string} newMode Either 'SPLIT' or 'JOIN'.
     * @private
     * @this {Blockly.Block}
     */
    updateType_: function(newMode) {
        var mode = this.getFieldValue('MODE');
        if (mode != newMode) {
            var inputConnection = this.getInput('INPUT').connection;
            inputConnection.setShadowDom(null);
            var inputBlock = inputConnection.targetBlock();
            if (inputBlock) {
                inputConnection.disconnect();
                if (inputBlock.isShadow()) {
                    inputBlock.dispose();
                } else {
                    this.bumpNeighbours();
                }
            }
        }
        if (newMode == 'SPLIT') {
            this.outputConnection.setCheck('Array');
            this.getInput('INPUT').setCheck('String');
        } else {
            this.outputConnection.setCheck('String');
            this.getInput('INPUT').setCheck('Array');
        }
    },
    /**
     * Create XML to represent the input and output types.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('mode', this.getFieldValue('MODE'));
        return container;
    },
    /**
     * Parse XML to restore the input and output types.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
        this.updateType_(xmlElement.getAttribute('mode'));
    }
};

Blockly.JavaScript['lists_create_empty'] = function(block) {
    // Create an empty list.
    return ['[]', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['lists_create_with'] = function(block) {
    // Create a list with any number of elements of any type.
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
            Blockly.JavaScript.ORDER_NONE) || 'null';
    }
    var code = '[' + elements.join(', ') + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['lists_repeat'] = function(block) {
    // Create a list with one element repeated.
    var functionName = Blockly.JavaScript.provideFunction_(
        'listsRepeat', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
            '(value, n) {',
            '  var array = [];',
            '  for (var i = 0; i < n; i++) {',
            '    array[i] = value;',
            '  }',
            '  return array;',
            '}'
        ]);
    var element = Blockly.JavaScript.valueToCode(block, 'ITEM',
        Blockly.JavaScript.ORDER_NONE) || 'null';
    var repeatCount = Blockly.JavaScript.valueToCode(block, 'NUM',
        Blockly.JavaScript.ORDER_NONE) || '0';
    var code = functionName + '(' + element + ', ' + repeatCount + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['lists_length'] = function(block) {
    // String or array length.
    var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_MEMBER) || '[]';
    return [list + '.length', Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['lists_isEmpty'] = function(block) {
    // Is the string null or array empty?
    var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_MEMBER) || '[]';
    return ['!' + list + '.length', Blockly.JavaScript.ORDER_LOGICAL_NOT];
};

Blockly.JavaScript['lists_indexOf'] = function(block) {
    // Find an item in the list.
    var operator = block.getFieldValue('END') == 'FIRST' ?
        'indexOf' : 'lastIndexOf';
    var item = Blockly.JavaScript.valueToCode(block, 'FIND',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
    var list = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_MEMBER) || '[]';
    var code = list + '.' + operator + '(' + item + ')';
    if (block.workspace.options.oneBasedIndex) {
        return [code + ' + 1', Blockly.JavaScript.ORDER_ADDITION];
    }
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['lists_getIndex'] = function(block) {
    // Get element at index.
    // Note: Until January 2013 this block did not have MODE or WHERE inputs.
    var mode = block.getFieldValue('MODE') || 'GET';
    var where = block.getFieldValue('WHERE') || 'FROM_START';
    var listOrder = (where == 'RANDOM') ? Blockly.JavaScript.ORDER_NONE :
        Blockly.JavaScript.ORDER_MEMBER;
    var list = Blockly.JavaScript.valueToCode(block, 'VALUE', listOrder) || '[]';

    switch (where) {
        case ('FIRST'):
            if (mode == 'GET') {
                var code = list + '[0]';
                return [code, Blockly.JavaScript.ORDER_MEMBER];
            } else if (mode == 'GET_REMOVE') {
                var code = list + '.shift()';
                return [code, Blockly.JavaScript.ORDER_MEMBER];
            } else if (mode == 'REMOVE') {
                return list + '.shift();\n';
            }
            break;
        case ('LAST'):
            if (mode == 'GET') {
                var code = list + '.slice(-1)[0]';
                return [code, Blockly.JavaScript.ORDER_MEMBER];
            } else if (mode == 'GET_REMOVE') {
                var code = list + '.pop()';
                return [code, Blockly.JavaScript.ORDER_MEMBER];
            } else if (mode == 'REMOVE') {
                return list + '.pop();\n';
            }
            break;
        case ('FROM_START'):
            var at = Blockly.JavaScript.getAdjusted(block, 'AT');
            if (mode == 'GET') {
                var code = list + '[' + at + ']';
                return [code, Blockly.JavaScript.ORDER_MEMBER];
            } else if (mode == 'GET_REMOVE') {
                var code = list + '.splice(' + at + ', 1)[0]';
                return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
            } else if (mode == 'REMOVE') {
                return list + '.splice(' + at + ', 1);\n';
            }
            break;
        case ('FROM_END'):
            var at = Blockly.JavaScript.getAdjusted(block, 'AT', 1, true);
            if (mode == 'GET') {
                var code = list + '.slice(' + at + ')[0]';
                return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
            } else if (mode == 'GET_REMOVE') {
                var code = list + '.splice(' + at + ', 1)[0]';
                return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
            } else if (mode == 'REMOVE') {
                return list + '.splice(' + at + ', 1);';
            }
            break;
        case ('RANDOM'):
            var functionName = Blockly.JavaScript.provideFunction_(
                'listsGetRandomItem', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
                    '(list, remove) {',
                    '  var x = Math.floor(Math.random() * list.length);',
                    '  if (remove) {',
                    '    return list.splice(x, 1)[0];',
                    '  } else {',
                    '    return list[x];',
                    '  }',
                    '}'
                ]);
            code = functionName + '(' + list + ', ' + (mode != 'GET') + ')';
            if (mode == 'GET' || mode == 'GET_REMOVE') {
                return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
            } else if (mode == 'REMOVE') {
                return code + ';\n';
            }
            break;
    }
    throw Error('Unhandled combination (lists_getIndex).');
};

Blockly.JavaScript['lists_setIndex'] = function(block) {
    // Set element at index.
    // Note: Until February 2013 this block did not have MODE or WHERE inputs.
    var list = Blockly.JavaScript.valueToCode(block, 'LIST',
        Blockly.JavaScript.ORDER_MEMBER) || '[]';
    var mode = block.getFieldValue('MODE') || 'GET';
    var where = block.getFieldValue('WHERE') || 'FROM_START';
    var value = Blockly.JavaScript.valueToCode(block, 'TO',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || 'null';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    // Closure, which accesses and modifies 'list'.
    function cacheList() {
        if (list.match(/^\w+$/)) {
            return '';
        }
        var listVar = Blockly.JavaScript.nameDB_.getDistinctName(
            'tmpList', Blockly.VARIABLE_CATEGORY_NAME);
        var code = 'var ' + listVar + ' = ' + list + ';\n';
        list = listVar;
        return code;
    }
    switch (where) {
        case ('FIRST'):
            if (mode == 'SET') {
                return list + '[0] = ' + value + ';\n';
            } else if (mode == 'INSERT') {
                return list + '.unshift(' + value + ');\n';
            }
            break;
        case ('LAST'):
            if (mode == 'SET') {
                var code = cacheList();
                code += list + '[' + list + '.length - 1] = ' + value + ';\n';
                return code;
            } else if (mode == 'INSERT') {
                return list + '.push(' + value + ');\n';
            }
            break;
        case ('FROM_START'):
            var at = Blockly.JavaScript.getAdjusted(block, 'AT');
            if (mode == 'SET') {
                return list + '[' + at + '] = ' + value + ';\n';
            } else if (mode == 'INSERT') {
                return list + '.splice(' + at + ', 0, ' + value + ');\n';
            }
            break;
        case ('FROM_END'):
            var at = Blockly.JavaScript.getAdjusted(block, 'AT', 1, false,
                Blockly.JavaScript.ORDER_SUBTRACTION);
            var code = cacheList();
            if (mode == 'SET') {
                code += list + '[' + list + '.length - ' + at + '] = ' + value + ';\n';
                return code;
            } else if (mode == 'INSERT') {
                code += list + '.splice(' + list + '.length - ' + at + ', 0, ' + value +
                    ');\n';
                return code;
            }
            break;
        case ('RANDOM'):
            var code = cacheList();
            var xVar = Blockly.JavaScript.nameDB_.getDistinctName(
                'tmpX', Blockly.VARIABLE_CATEGORY_NAME);
            code += 'var ' + xVar + ' = Math.floor(Math.random() * ' + list +
                '.length);\n';
            if (mode == 'SET') {
                code += list + '[' + xVar + '] = ' + value + ';\n';
                return code;
            } else if (mode == 'INSERT') {
                code += list + '.splice(' + xVar + ', 0, ' + value + ');\n';
                return code;
            }
            break;
    }
    throw Error('Unhandled combination (lists_setIndex).');
};

/**
 * Returns an expression calculating the index into a list.
 * @param {string} listName Name of the list, used to calculate length.
 * @param {string} where The method of indexing, selected by dropdown in Blockly
 * @param {string=} opt_at The optional offset when indexing from start/end.
 * @return {string|undefined} Index expression.
 * @private
 */
Blockly.JavaScript.lists.getIndex_ = function(listName, where, opt_at) {
    if (where == 'FIRST') {
        return '0';
    } else if (where == 'FROM_END') {
        return listName + '.length - 1 - ' + opt_at;
    } else if (where == 'LAST') {
        return listName + '.length - 1';
    } else {
        return opt_at;
    }
};

Blockly.JavaScript['lists_getSublist'] = function(block) {
    // Get sublist.
    var list = Blockly.JavaScript.valueToCode(block, 'LIST',
        Blockly.JavaScript.ORDER_MEMBER) || '[]';
    var where1 = block.getFieldValue('WHERE1');
    var where2 = block.getFieldValue('WHERE2');
    if (where1 == 'FIRST' && where2 == 'LAST') {
        var code = list + '.slice(0)';
    } else if (list.match(/^\w+$/) ||
        (where1 != 'FROM_END' && where2 == 'FROM_START')) {
        // If the list is a variable or doesn't require a call for length, don't
        // generate a helper function.
        switch (where1) {
            case 'FROM_START':
                var at1 = Blockly.JavaScript.getAdjusted(block, 'AT1');
                break;
            case 'FROM_END':
                var at1 = Blockly.JavaScript.getAdjusted(block, 'AT1', 1, false,
                    Blockly.JavaScript.ORDER_SUBTRACTION);
                at1 = list + '.length - ' + at1;
                break;
            case 'FIRST':
                var at1 = '0';
                break;
            default:
                throw Error('Unhandled option (lists_getSublist).');
        }
        switch (where2) {
            case 'FROM_START':
                var at2 = Blockly.JavaScript.getAdjusted(block, 'AT2', 1);
                break;
            case 'FROM_END':
                var at2 = Blockly.JavaScript.getAdjusted(block, 'AT2', 0, false,
                    Blockly.JavaScript.ORDER_SUBTRACTION);
                at2 = list + '.length - ' + at2;
                break;
            case 'LAST':
                var at2 = list + '.length';
                break;
            default:
                throw Error('Unhandled option (lists_getSublist).');
        }
        code = list + '.slice(' + at1 + ', ' + at2 + ')';
    } else {
        var at1 = Blockly.JavaScript.getAdjusted(block, 'AT1');
        var at2 = Blockly.JavaScript.getAdjusted(block, 'AT2');
        var getIndex_ = Blockly.JavaScript.lists.getIndex_;
        var wherePascalCase = {
            'FIRST': 'First',
            'LAST': 'Last',
            'FROM_START': 'FromStart',
            'FROM_END': 'FromEnd'
        };
        var functionName = Blockly.JavaScript.provideFunction_(
            'subsequence' + wherePascalCase[where1] + wherePascalCase[where2], ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
                '(sequence' +
                // The value for 'FROM_END' and'FROM_START' depends on `at` so
                // we add it as a parameter.
                ((where1 == 'FROM_END' || where1 == 'FROM_START') ? ', at1' : '') +
                ((where2 == 'FROM_END' || where2 == 'FROM_START') ? ', at2' : '') +
                ') {',
                '  var start = ' + getIndex_('sequence', where1, 'at1') + ';',
                '  var end = ' + getIndex_('sequence', where2, 'at2') + ' + 1;',
                '  return sequence.slice(start, end);',
                '}'
            ]);
        var code = functionName + '(' + list +
            // The value for 'FROM_END' and 'FROM_START' depends on `at` so we
            // pass it.
            ((where1 == 'FROM_END' || where1 == 'FROM_START') ? ', ' + at1 : '') +
            ((where2 == 'FROM_END' || where2 == 'FROM_START') ? ', ' + at2 : '') +
            ')';
    }
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['lists_sort'] = function(block) {
    // Block for sorting a list.
    var list = Blockly.JavaScript.valueToCode(block, 'LIST',
        Blockly.JavaScript.ORDER_FUNCTION_CALL) || '[]';
    var direction = block.getFieldValue('DIRECTION') === '1' ? 1 : -1;
    var type = block.getFieldValue('TYPE');
    var getCompareFunctionName = Blockly.JavaScript.provideFunction_(
        'listsGetSortCompare', ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
            '(type, direction) {',
            '  var compareFuncs = {',
            '    "NUMERIC": function(a, b) {',
            '        return Number(a) - Number(b); },',
            '    "TEXT": function(a, b) {',
            '        return a.toString() > b.toString() ? 1 : -1; },',
            '    "IGNORE_CASE": function(a, b) {',
            '        return a.toString().toLowerCase() > ' +
            'b.toString().toLowerCase() ? 1 : -1; },',
            '  };',
            '  var compare = compareFuncs[type];',
            '  return function(a, b) { return compare(a, b) * direction; }',
            '}'
        ]);
    return [list + '.slice().sort(' +
        getCompareFunctionName + '("' + type + '", ' + direction + '))',
        Blockly.JavaScript.ORDER_FUNCTION_CALL
    ];
};

Blockly.JavaScript['lists_split'] = function(block) {
    // Block for splitting text into a list, or joining a list into text.
    var input = Blockly.JavaScript.valueToCode(block, 'INPUT',
        Blockly.JavaScript.ORDER_MEMBER);
    var delimiter = Blockly.JavaScript.valueToCode(block, 'DELIM',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
    var mode = block.getFieldValue('MODE');
    if (mode == 'SPLIT') {
        if (!input) {
            input = '\'\'';
        }
        var functionName = 'split';
    } else if (mode == 'JOIN') {
        if (!input) {
            input = '[]';
        }
        var functionName = 'join';
    } else {
        throw Error('Unknown mode: ' + mode);
    }
    var code = input + '.' + functionName + '(' + delimiter + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['lists_reverse'] = function(block) {
    // Block for reversing a list.
    var list = Blockly.JavaScript.valueToCode(block, 'LIST',
        Blockly.JavaScript.ORDER_FUNCTION_CALL) || '[]';
    var code = list + '.slice().reverse()';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};