import {app, BrowserWindow} from 'electron';

// import path from 'path';
import * as url from 'url';

let win: BrowserWindow | null;

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        //react-scriptでビルドされるファイルをロードする
        protocol: 'file:',
        slashes: true
    }));
    // デバッグツールはデフォルトOFF.
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
