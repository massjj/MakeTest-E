// main.js
// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, dialog, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const cypress = require("cypress");

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
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const mainMenuTemplate = [
    {
      label: "File",
      submenu: [
        {
          label: "New File",
          accelerator: "Ctrl+N",
          click: async () => {
            mainWindow.webContents.send("send-function", "new file");
          },
        },
        {
          label: "Open File",
          accelerator: "Ctrl+O",
          click: async () => {
            mainWindow.webContents.send("send-function", "open file");
          },
        },
        { type: "separator" },
        {
          label: "Save",
          accelerator: "Ctrl+S",
          click: async () => {
            mainWindow.webContents.send("send-function", "save");
          },
        },
        {
          label: "Save As",
          accelerator: "Ctrl+Shift+S",
          click: async () => {
            mainWindow.webContents.send("send-function", "save as");
          },
        },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    // { role: 'editMenu' }
    {
      label: "Edit",
      submenu: [
        { label: "Undo",
        accelerator: "Ctrl+Z",
        click: async () => {
          mainWindow.webContents.send("send-function", "undo");
        }, },
        { label: "Redo",
        accelerator: "Ctrl+Y",
        click: async () => {
          mainWindow.webContents.send("send-function", "redo");
        }, },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "delete" },
      ],
    },
    // { role: 'viewMenu' }
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { type: "separator" },
        { role: 'toggleDevTools' },
        { role: "togglefullscreen" },
      ],
    },
    // { role: 'windowMenu' }
    {
      label: "Run",
      submenu: [
        {
          label: "Run",
          accelerator: "F5",
          click: async () => {
            mainWindow.webContents.send("send-function", "run");
          },
        },
        {
            label: "Run As Selecting",
            accelerator: "Ctrl+F5",
            click: async () => {
                mainWindow.webContents.send("send-function", "cypress");
            },
        },
      ],
    },
    {
      role: "help",
      submenu: [
        {
          label: "Learn More",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://electronjs.org");
          },
        },
      ],
    },
  ];
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);

  mainWindow.maximize();

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  let fileHandle;

  // for saving xml file
  ipcMain.on("save-file-as", (event, content) => {
    dialog
      .showSaveDialog(mainWindow, {
        title: "Save file as",
        defaultPath: path.join(__dirname, ".../MakeTest.xml"),
        buttonLabel: "Save",
        // Restricting the user to only Text Files.
        filters: [
          {
            name: "XML files",
            extensions: ["xml"],
          },
        ],
        properties: [],
        cancelId: "cancel",
      })
      .then((file) => {
        // Stating whether dialog operation was cancelled or not.
        console.log(file.canceled);
        if (!file.canceled) {
          console.log(file.filePath.toString());
          // Creating and Writing to the sample.txt file
          fs.writeFile(file.filePath.toString(), content, function (err) {
            if (err) throw err;
            console.log("Saved!");
            fileHandle = file.filePath.toString();
            fileData = {
              filePath: fileHandle,
              response: true,
            };
            console.log("1 " + fileHandle);
            event.reply("save-as-reply", fileData);
          });
        }
      })
      .catch((err) => {
        console.log(err);
        fileData = {
          filePath: fileHandle,
          response: err,
        };
        event.reply("save-as-reply", fileData);
      });
  });

  ipcMain.on("create-new", (event, content) => {
    dialog
      .showSaveDialog(mainWindow, {
        title: "Create new file",
        defaultPath: path.join(__dirname, ".../MakeTest.xml"),
        buttonLabel: "Create",
        // Restricting the user to only Text Files.
        filters: [
          {
            name: "XML files",
            extensions: ["xml"],
          },
        ],
        properties: [],
        cancelId: true,
      })
      .then((file) => {
        // Stating whether dialog operation was cancelled or not.
        console.log(file.canceled);
        if (!file.canceled) {
          console.log(file.filePath.toString());
          // Creating and Writing to the sample.txt file
          fs.writeFile(file.filePath.toString(), content, function (err) {
            if (err) throw err;
            console.log("file created!");
            fileHandle = file.filePath.toString();
            fileData = {
              filePath: fileHandle,
              response: file.canceled,
            };
            event.reply("create-reply", fileData);
          });
        } else {
          fileData = {
            filePath: fileHandle,
            response: file.canceled,
          };
          event.reply("create-reply", fileData);
        }
      })
      .catch((err) => {
        fileData = {
          filePath: fileHandle,
          response: err,
        };
        event.reply("create-reply", fileData);
        console.log(err);
      });
  });

  ipcMain.on("update-file", (event, content, fileHandle) => {
    fs.writeFile(fileHandle, content, (err) => {
      if (err) {
        // alert("An error ocurred updating the file" + err.message);
        console.log(err);
        event.reply("update-reply", err);
      } else {
        console.log("The file has been succesfully saved");
        event.reply("update-reply", true);
      }
    });
  });

  ipcMain.on("import-file", (event) => {
    dialog
      .showOpenDialog(mainWindow, {
        title: "Import file",
        // defaultPath: path.join(__dirname, '.../'),
        buttonLabel: "Open",
        // Restricting the user to only Text Files.
        filters: [
          {
            name: "XML files",
            extensions: ["xml"],
          },
        ],
        properties: [],
        cancelId: "cancel",
      })
      .then((file) => {
        // Stating whether dialog operation was cancelled or not.
        console.log(file.canceled);
        if (!file.canceled) {
          console.log(file.filePaths.toString());
          // Creating and Writing to the sample.txt file
          fs.readFile(file.filePaths.toString(), "utf-8", function (err, data) {
            if (err) throw err;
            console.log("Import success!");
            fileHandle = file.filePaths.toString();
            fileData = {
              text: data,
              filePath: fileHandle,
              response: true,
            };
            event.reply("import-reply", fileData);
          });
        } else {
          event.reply("import-reply", "cancel");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  ipcMain.on("modal-leave-from-import", (event) => {
    //new file หลัง import
    dialog
      .showMessageBox(mainWindow, {
        type: "question",
        icon: "M-Logo-Whi.ico",
        buttons: ["&Save", "&Don't save", "&Cancel"],
        title: "Save file",
        message: "Do you want to save this file?",
        detail: "Your work will be lost if you didn't save them.",
        noLink: true,
        cancelId: 2,
      })
      .then((data) => {
        console.log(data.response);
        switch (data.response) {
          //save
          case 0:
            event.reply("leave-import-reply", 0);
            break;
          //don't save
          case 1:
            event.reply("leave-import-reply", 1);
            break;
          //cancel
          case 2:
            event.reply("leave-import-reply", 2);
            break;
        }
      });
  });

  ipcMain.on("modal-leave-file", (event) => {
    //new file โดยที่ยังไม่เคย import
    dialog
      .showMessageBox(mainWindow, {
        type: "question",
        icon: "M-Logo-Whi.ico",
        buttons: ["&Save as", "&Don't save", "&Cancel"],
        title: "Save as file",
        message: "Do you want to save as this file?",
        detail: "Your work will be lost if you didn't save them.",
        noLink: true,
        cancelId: 2,
      })
      .then((data) => {
        console.log(data.response);
        switch (data.response) {
          //save as
          case 0:
            event.reply("leave-reply", 0);
            break;
          //don't save
          case 1:
            event.reply("leave-reply", 1);
            break;
          //cancel
          case 2:
            event.reply("leave-reply", 2);
            break;
        }
      });
  });

  ipcMain.on("modal-save-button", (event) => {
    dialog
      .showMessageBox(mainWindow, {
        type: "question",
        icon: "M-Logo-Whi.ico",
        buttons: ["&Save", "&Save as", "&Cancel"],
        title: "Save or Save as",
        message: "Do you want to 'Save' or 'Save as' ?",
        detail:
          "Press 'Save' to update this file. Press 'Save as' to create as the new file.",
        noLink: true,
        cancelId: 2,
      })
      .then((data) => {
        console.log(data.response);
        switch (data.response) {
          //save
          case 0:
            event.reply("save-button-reply", 0);
            break;
          //save as
          case 1:
            event.reply("save-button-reply", 1);
            break;
          //cancel
          case 2:
            event.reply("save-button-reply", 2);
            break;
        }
      });
  });

  ipcMain.on("modal-never-create", (event) => {
    dialog
      .showMessageBox(mainWindow, {
        type: "question",
        icon: "M-Logo-Whi.ico",
        buttons: ["&Create", "&Cancel"],
        title: "Save or Save as",
        message: "Can't save, the file was never created.",
        detail: "You should create this file first.",
        noLink: true,
        cancelId: 1,
      })
      .then((data) => {
        console.log(data.response);
        switch (data.response) {
          //save as
          case 0:
            event.reply("never-create-reply", 0);
            break;
          //cancel
          case 1:
            event.reply("never-create-reply", 1);
            break;
        }
      });
  });

  ipcMain.on("file-compare", (event, pathFile, xmlText) => {
    if (pathFile !== null) {
      fs.readFile(pathFile, "utf-8", function (err, data) {
        if (err) throw err;
        console.log(data);
        console.log(xmlText);
        if (data != xmlText) {
          event.reply("compare-reply", false);
        }
        if (data == xmlText) {
          event.reply("compare-reply", true);
        }
      });
    }
    if (pathFile === null) event.reply("compare-reply", 0);
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
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

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
