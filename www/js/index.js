document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log(cordova.file.applicationDirectory);
  console.log(cordova.file.dataDirectory);
  console.log(cordova.file.documentsDirectory);
  console.log(cordova.file.sharedDirectory);
}
