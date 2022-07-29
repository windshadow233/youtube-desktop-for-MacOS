const path = require('path')

const { app, BrowserWindow } = require('electron')

let mainWindow

async function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    darkTheme: true,
    icon: 'icon/youtube.icns',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (mainWindow.webContents.session === undefined) {
    throw new Error('defaultSession is undefined');
  }

  mainWindow.loadURL("https://youtube.com")
  mainWindow.setTitle("Youtube Desktop")
  mainWindow.setBackgroundColor("#181818")

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.show();
  })
  mainWindow.webContents.on("did-fail-load", () => {
    if(confirm("Youtube could not be loaded. Retry?")) {
      mainWindow.reload()
    }
    else {
      mainWindow.close()
    }})

  mainWindow.on("page-title-updated", event => {
    event.preventDefault()
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    let sess = mainWindow.webContents.session;
    app.quit()
  }
})
