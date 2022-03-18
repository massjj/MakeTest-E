const textareaElement = document.getElementById("showCode");
const codeArea = CodeMirror.fromTextArea(textareaElement,{
    lineNumbers:true,
    tabSize:4,
    mode:"javascript"
});

