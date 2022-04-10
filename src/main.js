// main.js
// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, ipcMain, dialog, webContents, remote } = require('electron');
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
        }
    })
    const childWindow = new BrowserWindow({
        width: 420,
        height: 420,
        parent: mainWindow,
        modal: false,
        frame: true,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, 'index.html'))
    childWindow.loadURL('https://www.github.com');

    //load HTML from child window
    const filePath = path.join(__dirname, '../src/test.html');
    childWindow.webContents.on('did-finish-load', () => {
        childWindow.webContents.savePage(filePath, 'HTMLComplete').then(() => {
            console.log('Page was saved successfully.')
        }).catch(err => {
            console.log(err)
        })
    })

    //update


    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    //setInterval(()=>{
    os.cpuUsage(function(v) {
        console.log('CPU Usage (%): ' + v * 100);
        // mainMenuTemplate.webContents.send('cpu',v*100)
        console.log('Mem Usage (%): ' + os.freememPercentage() * 100);
        // mainMenuTemplate.webContents.send('mem',os.freememPercentage()*100)
        console.log('CPU Usage (%): ' + os.totalmem() / 1024);
        // mainMenuTemplate.webContents.send('total-mem',os.totalmem()/1024)
    });
    // },1000)
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    var save = document.getElementById('Save');

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