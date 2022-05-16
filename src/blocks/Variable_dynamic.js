Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
    // Block for variable getter.
    {
        "type": "variables_get_dynamic",
        "message0": "%1",
        "args0": [{
            "type": "field_variable",
            "name": "VAR",
            "variable": "item"
        }],
        "output": "Var",
        "style": "variable_dynamic_blocks",
        "helpUrl": "",
        "tooltip": "",
        "extensions": ["contextMenu_variableDynamicSetterGetter"]
    },
    // Block for variable setter.
    {
        "type": "variables_set_dynamic",
        "message0": "set %1 to %2",
        "args0": [{
                "type": "field_variable",
                "name": "VAR",
                "variable": "item"
            },
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "previousStatement": "Action",
        "nextStatement": "Action",
        "style": "variable_dynamic_blocks",
        "tooltip": "",
        "helpUrl": "",
        "extensions": ["contextMenu_variableDynamicSetterGetter"]
    }
]);