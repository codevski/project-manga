const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname);

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 800, height: 600, frame: false});

  // Remove the top menu
  //win.setMenu(null);

  // Specify entry point
  if (process.env.PACKAGE === 'true'){
      win.loadURL(url.format({
          pathname: path.join(__dirname, 'dist/index.html'),
          protocol: 'file:',
          slashes: true
        }));
    } else {
        win.loadURL(process.env.HOST);
        win.webContents.openDevTools();
    }

  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.