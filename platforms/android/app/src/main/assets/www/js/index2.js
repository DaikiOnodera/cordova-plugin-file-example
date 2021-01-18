document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, cbRequestSuccess, cbFail);
}

function cbRequestSuccess(fileSystem){
    console.log(JSON.stringify(fileSystem.root, null, "  "));
    var path = 'cdvfile://localhost/cache-external/newTempFile.txt';
    var options = {create:true, exclusive:false};
    fileSystem.root.getFile("cdvfile//localhost/cache-external/test.txt", {create:true, exclusive:false}, cbGetSuccess, cbFail);
}

function cbGetSuccess(fileEntry){
    console.log(fileEntry);
}


function cbFail(error){
    console.log(JSON.stringify(error));
}