const {dialog} = require("electron");
const fs = require('fs')
async function userSelectFolder () {
    
    return new Promise((success,reject)=>{
        const result = dialog.showSaveDialog({
        title: 'Select the File Path to save',
        buttonLabel: 'Save',
        // Restricting the user to only Text Files.
        filters: [
            {
                extensions: ['xml']
            }],
        properties: []
        });
        result.then((fileName)=>{
            if (fileName === undefined){
                console.log("You didn't save the file");
                return;
            }
        
            // fileName is a string that contains the path and filename created in the save file dialog.  
            fs.writeFile(fileName, "content", (err) => {
                if(err){
                    alert("An error ocurred creating the file "+ err.message)
                }
                            
                alert("The file has been succesfully saved");
            });
            success(fileName);
        });
        result.catch((err)=>{
            reject(err);
        });
    });
    
}

module.exports = {
    userSelectFolder : userSelectFolder
}