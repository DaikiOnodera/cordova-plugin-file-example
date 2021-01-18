document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
        console.log('file system open: ' + fs.name);
        console.log(fs);
        console.log(JSON.stringify(fs, null, "  "));
        createFile(fs.root, "newTempFile.txt", false);
    }, onErrorLoadFs);
}

function createFile(dirEntry, fileName, isAppend) {
    // Creates a new file or returns the file if it already exists.
    dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {
//        console.log("fileEntry");
//        console.log(JSON.stringify(fileEntry, null, "  "));

        writeFile(fileEntry, null);

    }, onErrorCreateFile);

}

function writeFile(fileEntry, dataObj) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file write...");
            readFile(fileEntry);
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file write: " + e.toString());
        };

        // If data object is not passed in,
        // create a new Blob instead.
        if (!dataObj) {
            dataObj = new Blob(['some file data'], { type: 'text/plain' });
        }

        fileWriter.write(dataObj);
    });
}

function readFile(fileEntry) {

    fileEntry.file(function (file) {
        var reader = new FileReader();

        reader.onloadend = function() {
            console.log("Successful file read: " + this.result);
            console.log(fileEntry.fullPath + ": " + this.result);
        };

        reader.readAsText(file);

    }, onErrorReadFile);
}

function onErrorLoadFs(error){
    console.log("error"+error);
}
function onErrorReadFile(error){
    console.log("error"+error);
}
function onErrorCreateFile(error){
    console.log("error"+error);
}
