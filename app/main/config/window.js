const path = require('path')
const is = require('electron-is')
function getPath(){
    let filePath = `file://${path.join(__dirname,'..', '..','render/index.html')}`;
    console.log('path',filePath)
    if(is.dev()){
        filePath = 'http://127.0.0.1:8000/'
    }
    return filePath;
}

module.exports = { getPath }