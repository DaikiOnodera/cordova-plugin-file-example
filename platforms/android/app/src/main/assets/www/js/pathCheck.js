document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var path = 'cdvfile://localhost/cache-external/newTempFile.txt';
//    console.log(window.resolveLocalFileSystemURL);
    console.log(window.requestFileSystem);
    window.resolveLocalFileSystemURL(path, cbSuccess, cbFail);
    function cbSuccess(fileSystem){
        console.log(JSON.stringify(fileSystem, null, "  "));
        var nativePath = fileSystem.toURL();
        console.log(nativePath);
    }
    function cbFail(error){
        console.log(JSON.stringify(error));
    }
}