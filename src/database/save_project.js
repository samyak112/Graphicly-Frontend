function save_project(canvas_specs){
    const openDB = window.indexedDB.open('canvas_database', 3);
  
      openDB.onerror = function(event) {
        console.log('Error opening database');
      };
  
      openDB.onsuccess = function(event) {
        const db = event.target.result;
        console.log(db)
        const transaction = db.transaction(["canvas"], 'readwrite');
  
        transaction.onerror = function(event) {
          console.log(event)
          console.log('Transaction error');
        };
  
        const objectStore = transaction.objectStore("canvas");
  
        const request = objectStore.add(canvas_specs);
  
        request.onsuccess = function(event) {
          console.log('Data added successfully');
        };
      };
   }

   export default save_project