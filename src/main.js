// main.js
// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const os = require('os-utils');
const path = require('path');
const fs = require('fs');


const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
        },
    })


    // const view = new BrowserView()
    // mainWindow.setBrowserView(view)
    // view.setBounds({ x: 305, y: 124, width: 420, height: 420 }) //1113 111
    // view.webContents.loadURL('https://electronjs.org')
    // view.setAutoResize({width: true, height: false});
    // view.webContents.on("did-finish-load",()=>{
    //     view.webContents.savePage(filePath, 'HTMLComplete').then(() => {
    //                 console.log('Page was saved successfully.')
    //             }).catch(err => {
    //                 console.log(err)
    //             })
    // })

    // const childWindow = new BrowserWindow({
    //     width: 420,
    //     height: 420,
    //     parent: mainWindow,
    //     modal: false,
    //     frame: true,
    //     webPreferences: {
    //         devTools: true,
    //         nodeIntegration: true,
    //     },
    //     titleBarStyle: "hidden"
    // })

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

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
            }, ],
            properties: []
        }).then(file => {
            // Stating whether dialog operation was cancelled or not.
            console.log(file.canceled);
            if (!file.canceled) {
                console.log(file.filePath.toString());
                // Creating and Writing to the sample.txt file
                fs.writeFile(file.filePath.toString(),
                    content,
                    function(err) {
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
            }, ],
            properties: []
        }).then(file => {
            // Stating whether dialog operation was cancelled or not.
            console.log(file.canceled);
            if (!file.canceled) {
                console.log(file.filePath.toString());
                // Creating and Writing to the sample.txt file
                fs.writeFile(file.filePath.toString(),
                    content,
                    function(err) {
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
            }, ],
            properties: []
        }).then(file => {
            // Stating whether dialog operation was cancelled or not.
            console.log(file.canceled);
            if (!file.canceled) {
                console.log(file.filePaths.toString());
                // Creating and Writing to the sample.txt file
                fs.readFile(file.filePaths.toString(),
                    'utf-8',
                    function(err, data) {
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

    ipcMain.on('modal-leave-from-import', (event) => { //new file หลัง import
        dialog.showMessageBox(null, {
            type: 'question',
            icon: 'M-Logo-Whi.ico',
            buttons: ["&Save", "&Don't save", "&Cancel"],
            title: "Save file",
            message: "Do you want to save this file?",
            detail: "Your work will be lost if you didn't save them",
            noLink: true
        }).then((data) => {
            console.log(data.response)
            switch (data.response) {
                //save
                case 0:
                    event.reply('leave-import-reply', 0)
                    break;
                    //don't save
                case 1:
                    event.reply('leave-import-reply', 1)
                    break;
                    //cancel
                case 2:
                    event.reply('leave-import-reply', 2)
                    break;
            }
        });
    })

    ipcMain.on('modal-leave-file', (event) => { //new file โดยที่ยังไม่เคย import
        dialog.showMessageBox(null, {
            type: 'question',
            icon: 'M-Logo-Whi.ico',
            buttons: ["&Save as", "&Don't save", "&Cancel"],
            title: "Save as file",
            message: "Do you want to save as this file?",
            detail: "Your work will be lost if you didn't save them",
            noLink: true
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
    });

    ipcMain.on('modal-save-button', (event) => {
        dialog.showMessageBox(null, {
            type: 'question',
            icon: 'M-Logo-Whi.ico',
            buttons: ["&Save", "&Save as", "&Cancel"],
            title: "Save or Save as",
            message: "Do you want to 'Save' or 'Save as' ?",
            detail: "Press 'Save' to update this file. Press 'Save as' to create as the new file.",
            noLink: true
        }).then((data) => {
            console.log(data.response)
            switch (data.response) {
                //save 
                case 0:
                    event.reply('save-button-reply', 0)
                    break;
                    //save as
                case 1:
                    event.reply('save-button-reply', 1)
                    break;
                    //cancel
                case 2:
                    event.reply('save-button-reply', 2)
                    break;
            }
        });
    })

    ipcMain.on('file-compare', (event, pathFile, xmlText) => {
        if (pathFile !== null) {
            fs.readFile(pathFile,
                'utf-8',
                function(err, data) {
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


    //load HTML from child window
    // const filePath = path.join(__dirname, '../src/test.html');
    // childWindow.webContents.on('did-finish-load', () => {
    //     childWindow.show()
    //     childWindow.webContents.savePage(filePath, 'HTMLComplete').then(() => {
    //         console.log('Page was saved successfully.')
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // })

    //update


    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    //setInterval(()=>{
    // os.cpuUsage(function(v) {
    //     console.log('CPU Usage (%): ' + v * 100);
    //     // mainMenuTemplate.webContents.send('cpu',v*100)
    //     console.log('Mem Usage (%): ' + os.freememPercentage() * 100);
    //     // mainMenuTemplate.webContents.send('mem',os.freememPercentage()*100)
    //     console.log('CPU Usage (%): ' + os.totalmem() / 1024);
    //     // mainMenuTemplate.webContents.send('total-mem',os.totalmem()/1024)
    // });
    // // },1000)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
    const cypress = require("cypress");
    const firstTimeFilePath = path.resolve(app.getPath('userData'), '.first-time-huh');
    let isFirstTime;
    try {
        fs.closeSync(fs.openSync(firstTimeFilePath, 'wx'));
        isFirstTime = true;
    } catch (e) {
        if (e.code === 'EEXIST') {
            isFirstTime = false;
        } else {
            // something gone wrong
            throw e;
        }
    }
    if (isFirstTime) {
        //add guide window na ja dee
        cypress.open()
    }

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()

    })





    // save.addEventListener('click', (event) => {
    //     // Resolves to a Promise<Object>
    //     console.log("Hey")
    //     dialog.showSaveDialog({
    //         title: 'Select the File Path to save',
    //         defaultPath: path.join(__dirname, 'sample.xml'),
    //         // defaultPath: path.join(__dirname, '../assets/'),
    //         buttonLabel: 'Save',
    //         // Restricting the user to only Text Files.
    //         filters: [
    //             {
    //                 name: 'Block code',
    //                 extensions: ['xml']
    //             }, ],
    //         properties: []
    //     }).then(file => {
    //         // Stating whether dialog operation was cancelled or not.
    //         console.log(file.canceled);
    //         if (!file.canceled) {
    //             console.log(file.filePath.toString());

    //             // Creating and Writing to the sample.txt file
    //             fs.writeFile(file.filePath.toString(), 
    //             document.getElementById('Save').value, function (err) {
    //                 if (err) throw err;
    //                 console.log('Saved!');
    //             });
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     });
    // });
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

const mainMenuTemplate = [{
            label: 'File',
            submenu: [
                { role: 'quit' },
                { label: 'New File' },
                { label: 'Open File' },
                {
                    label: 'Save As',
                    click() {

                    }
                },
                {
                    label: 'Save',
                    click() {

                    }
                },
                {
                    label: 'Save',
                    click() {

                    }
                }
            ]
        },
        // { role: 'editMenu' }
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
            ]
        },
        // { role: 'viewMenu' }
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        // { role: 'windowMenu' }
        {
            label: 'Run',
            submenu: [{
                label: 'Run',
                accelerator: 'F5',
                click() {}
            }]
        },
        {
            role: 'help',
            submenu: [{
                label: 'Learn More',
                click: async() => {
                    const { shell } = require('electron')
                    await shell.openExternal('https://electronjs.org')
                }
            }]
        }
    ]
    // In this file you can include the rest of your app's specific main process
    // code. You can also put them in separate files and require them here.