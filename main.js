const { app, BrowserWindow, shell, contextBridge } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Calcpad v.1.1.1",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
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

    // Menu.setApplicationMenu(null);
    win.loadFile('index.html');
    win.webContents.openDevTools({ mode: 'detach' });
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