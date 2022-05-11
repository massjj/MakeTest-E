Blockly.defineBlocksWithJsonArray([{
    "type": "variables_get",
    "message0": "%1",
    "args0": [{
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        // "variableTypes": ["Number"],
        // "defaultType": "Number"
    }],
    "output": null,
    "style": "variable_blocks",
    "helpUrl": "",
    "tooltip": "",
    "extensions": ["contextMenu_variableSetterGetter"]
}, {
    "type": "variables_set",
    "message0": "",
    "args0": [{
        "type": "field_variable",
        "name": "VAR",
        "variable": "",
        // "variableTypes": ["Number"],
        // "defaultType": "Number"
    }, {
        "type": "input_value",
        "name": "VALUE",
        "check": ["Number", "String"]
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "variable_blocks",
    "tooltip": "",
    "helpUrl": "",
    "extensions": ["contextMenu_variableSetterGetter"]
}]);
