// display marked down version
function readFirstLineFromFile(fileContent) {
  // Split the file content by the carriage return (line break)
  const lines = fileContent.split('\n');
  var firstLine = lines[0].trim();
  firstLine = firstLine.replace("/*","");
  firstLine = firstLine.replace("*/","");
  document.getElementById("markdown-used").innerText = ""+ firstLine;
}

fetch('./js/markdown-it.min.js')
  .then(response => {
    if (!response.ok) {
      throw new Error(`File could not be fetched! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(fileContent => {
    // Call the function to read the first line from the file content
    readFirstLineFromFile(fileContent);
  })
  .catch(error => {
    console.error('An error occurred while fetching the file:', error);
  });


////////


 
 /// reset
 var resetbutton = document.getElementById('reset'); // Assumes element with id='button'

 resetbutton.onclick = function() {
     localStorage.clear();

     const dbName = 'systemm';

const request = indexedDB.deleteDatabase(dbName);

request.onsuccess = function() {
  console.log(`Database '${dbName}' deleted successfully`);
};

request.onerror = function(event) {
  console.error("Failed to delete database", event.target.error);
};


     document.getElementById('reset').innerText="CLEARED!";
 };
// version number
fetch('./manifest.json')
.then(response => response.json())
.then(data => {
  // Extract the version number
  const version = data.version;
  const name = data.name;

  // Display the version in a div
  const versionDiv = document.getElementById('version');
  versionDiv.textContent = `${name} - ${version}`;
})
.catch(error => {
  console.error('Error:', error);
});

// can use this but only works in extension
// var manifestData = chrome.runtime.getManifest();
// console.log(manifestData.version);
