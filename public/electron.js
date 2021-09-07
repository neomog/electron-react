const electron = require('electron');
const url = require('url');
const path = require('path');
const isDev = require('electron-is-dev');

const {app, BrowserWindow} = electron;

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // mainWindow.loadURL(url.format({
    //     pathname: path.join(__dirname, '../build/index.html'),
    //     protocol: 'file',
    //     slashes: true
    // }));
    win.loadURL(
        isDev ? 'http://localhost:3000'
        : `file://${path.join(__dirname, 'index.html')}`
    );

    if (isDev) {
        win.webContent.openDevTools({
            mode: 'detach'
        });
    }
    

    // mainWindow.on('closed', function () {
    //     mainWindow = null
    // })
}


// app.on('ready', createWindow);

// app.on('window-all-closed', function () {
//     if (process.platform !== 'darwin') {
//         app.quit;
//     }
// });

// app.on('activate', function () {
//     if (mainWindow == null) {
//         createWindow();
//     }
// });


app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});