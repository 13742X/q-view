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
