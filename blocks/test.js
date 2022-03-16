Blockly.defineBlocksWithJsonArray([ // BEGIN JSON EXTRACT
    // Block for text value
    {
        "type": "text",
        "message0": "%1",
        "args0": [{
            "type": "field_input",
            "name": "TEXT",
            "text": ""
        }],
        "output": "String",
        "style": "text_blocks",
        "helpUrl": "%{BKY_TEXT_TEXT_HELPURL}",
        "tooltip": "%{BKY_TEXT_TEXT_TOOLTIP}",
        "extensions": [
            "text_quotes",
            "parent_tooltip_when_inline"
        ]
    },
]);

var toolbox = `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <category name="Text" colour="#8D4CAB">
        <block type="text"></block>
    </category>
</xml>`