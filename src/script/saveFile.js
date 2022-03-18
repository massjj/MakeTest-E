// const fs = require("fs");

// const dialogConfig = {
//     title: 'Select the File Path to save',
//     defaultPath: 'C:/Users/Noeye/Documents/CPE_Y4/Project/MakeTest/MakeTest-electron/MakeTest-html/cypress/integration/test.spec.js',
//     // defaultPath: path.join(__dirname, '../assets/'),
//     buttonLabel: 'Save',
//     // Restricting the user to only Text Files.
//     filters: [
//         {
//             name: 'Test Script',
//             extensions: ['spec.js']
//         },],
//     properties: []
// };
const promptConfig = {
    title: 'Create File',
    label: 'Enter Test file name :',
    value: 'MakeTest',
    inputAttrs: {
        type: 'text'
    },
    type: 'input'
};
var save = document.getElementById('Save');
// var txtBox = document.getElementById("showCode");
// var txtval = txtBox;
save.addEventListener("click", () => {
    console.log(codeTosave);
    electron.openPrompt(promptConfig, codeTosave);
});