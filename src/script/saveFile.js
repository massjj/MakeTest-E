// const fs = require("fs");

const dialogConfig = {
    title: 'Select the File Path to save',
    // defaultPath: 'C:/Users/Noeye/Documents/CPE_Y4/Project/MakeTest/MakeTest-electron/MakeTest-html/cypress/integration/test.spec.js',
    defaultPath: path.join(__dirname, 'project1.xml'),
    buttonLabel: 'Save',
    // Restricting the user to only Text Files.
    filters: [
        {
            extensions: ['xml']
        },],
    properties: []
};

// const promptConfig = {
//     title: 'Create File',
//     label: 'Enter Test file name :',
//     value: 'MakeTest',
//     inputAttrs: {
//         type: 'text'
//     },
//     type: 'input'
// };
// var save = document.getElementById('Save');
// // // var txtBox = document.getElementById("showCode");
// // // var txtval = txtBox;
// save.addEventListener("click", () => {
//     console.log("Hello save");
//     electron.openDialog('showSaveDialog', dialogConfig);
// });

async function openDialogBox () {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    api.openDialog('showSaveDialog',dialogConfig,xml);
}