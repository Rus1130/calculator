const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });
    
    // const customMenu = Menu.buildFromTemplate([
    //     {
    //         label: 'Help',
    //         submenu: [
    //             {
    //                 label: 'Documentation',
    //                 accelerator: 'CmdOrCtrl+/',
    //                 click: () => shell.openExternal('https://rus1130.github.io/projects/mdparser.html?url=https://rus1130.github.io/calculator/README.md')
    //             },
    //         ]
    //     },
    // ]);

    Menu.setApplicationMenu(null);
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});