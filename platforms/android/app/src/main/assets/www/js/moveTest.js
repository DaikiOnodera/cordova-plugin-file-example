document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    window.resolveLocalFileSystemURL(cordova.file.externalCache,function (fileEntry){
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory,function (directory)
        {
           fileEntry.moveTo(directory, 'new_fileName.txt',function(){
                alert('Successful Copy!');
            },
            function()
            {
                alert('Copying Unsuccessful ');
            });
        },null);
    }, null);
}

