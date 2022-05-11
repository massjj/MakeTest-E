const {dialog, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let fileHandle;

    // for saving xml file
    ipcMain.on('save-file-as', (event, content) => {
        dialog.showSaveDialog({
            title: 'Save file as',
            defaultPath: path.join(__dirname, '.../MakeTest.xml'),
            buttonLabel: 'Save',
            // Restricting the user to only Text Files.
            filters: [{
                name: 'XML files',
                extensions: ['xml']
            },],
            properties: []
        }).then(file => {
            // Stating whether dialog operation was cancelled or not.
            console.log(file.canceled);
            if (!file.canceled) {
                console.log(file.filePath.toString());
                // Creating and Writing to the sample.txt file
                fs.writeFile(file.filePath.toString(),
                    content,
                    function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                        fileHandle = file.filePath.toString();
                        console.log("1 " + fileHandle);
                        event.reply('save-as-reply', fileHandle)
                    });
            }
        }).catch(err => {
            console.log(err)
        });
    })

    ipcMain.on('create-new', (event, content) => {
        dialog.showSaveDialog({
            title: 'Create new file',
            defaultPath: path.join(__dirname, '.../MakeTest.xml'),
            buttonLabel: 'Create',
            // Restricting the user to only Text Files.
            filters: [{
                name: 'XML files',
                extensions: ['xml']
            },],
            properties: []
        }).then(file => {
            // Stating whether dialog operation was cancelled or not.
            console.log(file.canceled);
            if (!file.canceled) {
                console.log(file.filePath.toString());
                // Creating and Writing to the sample.txt file
                fs.writeFile(file.filePath.toString(),
                    content,
                    function (err) {
                        if (err) throw err;
                        console.log('file created!');
                        fileHandle = file.filePath.toString();
                        console.log("1 " + fileHandle);
                        event.reply('create-reply', fileHandle)
                    });
            }
        }).catch(err => {
            console.log(err)
        });
    })

    ipcMain.on('update-file', (event, content, fileHandle) => {
        fs.writeFile(fileHandle, content, (err) => {
            if (err) {
                // alert("An error ocurred updating the file" + err.message);
                console.log(err);
                return;
            }

            console.log("The file has been succesfully saved");
        })
    })

    ipcMain.on('import-file', (event) => {
        dialog.showOpenDialog({
            title: 'Import file',
            // defaultPath: path.join(__dirname, '.../'),
            buttonLabel: 'Open',
            // Restricting the user to only Text Files.
            filters: [{
                name: 'XML files',
                extensions: ['xml']
            },],
            properties: []
        }).then(file => {
            // Stating whether dialog operation was cancelled or not.
            console.log(file.canceled);
            if (!file.canceled) {
                console.log(file.filePaths.toString());
                // Creating and Writing to the sample.txt file
                fs.readFile(file.filePaths.toString(),
                    'utf-8',
                    function (err, data) {
                        if (err) throw err;
                        console.log('Import success!');
                        fileHandle = file.filePaths.toString();
                        fileData = {
                            text: data,
                            filePath: fileHandle
                        }
                        console.log("2 " + fileHandle);
                        event.reply('import-reply', fileData)
                    });
            }
        }).catch(err => {
            console.log(err)
        });
    })

    ipcMain.on('leave-file', (event, mode) => {
        // const modal = new BrowserWindow({ width: 800, height: 600 });
        switch (mode) {
            
            case 0:                     //new file หลัง import
                dialog.showMessageBox(null, {
                    type: 'question',
                    icon: 'M-Logo-Whi.ico',
                    buttons: ["&Save", "&Don't save", "&Cancel"],
                    title: "Save file",
                    message: "Do you want to save this file?",
                    detail: "Your work will be lost if you didn't save them"
                }).then((data) => {
                    console.log(data.response)
                    switch (data.response) {
                        //save
                        case 0:
                            event.reply('leave-reply', 0)
                            break;
                        //don't save
                        case 1:
                            event.reply('leave-reply', 1)
                            break;
                        //cancel
                        case 2:
                            event.reply('leave-reply', 2)
                            break;
                    }
                });
                break;

            case 1:                     //new file โดยที่ยังไม่เคย import
                dialog.showMessageBox(null, {
                    type: 'question',
                    icon: 'M-Logo-Whi.ico',
                    buttons: ["&Save as", "&Don't save", "&Cancel"],
                    title: "Save as file",
                    message: "Do you want to save as this file?",
                    detail: "Your work will be lost if you didn't save them"
                }).then((data) => {
                    console.log(data.response)
                    switch (data.response) {
                        //save as
                        case 0:
                            event.reply('leave-reply', 0)
                            break;
                        //don't save
                        case 1:
                            event.reply('leave-reply', 1)
                            break;
                        //cancel
                        case 2:
                            event.reply('leave-reply', 2)
                            break;
                    }
                });
                break;

            // console.log(response);

        }
    })

    ipcMain.on('file-compare', (event, pathFile, xmlText) => {
        if (pathFile !== null) {
            fs.readFile(pathFile,
                'utf-8',
                function (err, data) {
                    if (err) throw err;
                    console.log(data);
                    console.log(xmlText);
                    if (data != xmlText) {
                        console.log("save ma?");
                        event.reply('compare-reply', false);;
                    }
                    if (data == xmlText) {
                        console.log("no changed");
                        event.reply('compare-reply', true);
                    }
                });
        };
        if (pathFile === null) event.reply('compare-reply', 0);

    });