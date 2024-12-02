const { app, BrowserWindow, ipcMain } = require('electron');
const os = require('os');

let win;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // To allow direct usage of Node APIs in renderer
    }
  });

  win.loadFile('index.html');
});

ipcMain.handle('get-system-info', () => {
  return {
    'System Architecture': os.arch(),
    'Platform': os.platform(),
    'Total Memory': os.totalmem(),
    'Free Memory': os.freemem(),
    'CPU Count': os.cpus().length,
    'System Root': process.env.SystemRoot || 'Unknown',
    'User Home Path': os.homedir(),
    'Process Type': process.type,
    'Node Version': process.version,
    'Electron Version': process.versions.electron,
    'Computer Name': os.hostname(),
  };
});
