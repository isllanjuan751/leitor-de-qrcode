const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld("lerQrocde", {
    Leitor: (caminho) => ipcRenderer.invoke("ler_qrcode", caminho),
});