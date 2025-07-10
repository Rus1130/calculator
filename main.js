const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Calcpad v.1.3.3",
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    Menu.setApplicationMenu(null);
    win.loadFile('index.html');
    // win.webContents.openDevTools({ mode: 'detach' });

    win.setAlwaysOnTop(true);
    win.setAlwaysOnTop(false);
    win.show();
    
    win.on('close', (e) => {
        win.webContents.send('app-before-quit');
    });
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