const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Opens dev tools at start
  // win.webContents.openDevTools();
  ipcMain.handle("ping", () => "Trololo...");
  win.loadFile("index.html");
};

/**
 * This method will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
app.whenReady().then(() => {
  createWindow();

  /**
   * Emitted when the application is activated. Various actions can
   * trigger this event, such as launching the application for the first time,
   * attempting to re-launch the application when it's already running,
   * or clicking on the application's dock or taskbar icon.
   * On OS X it's common to re-create a window in the app when the
   * dock icon is clicked and there are no other windows open.
   */
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

/**
 * Emitted when all windows have been closed.
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
