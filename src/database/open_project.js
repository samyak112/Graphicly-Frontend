function getData(canvas_id) {
    return new Promise((resolve,reject)=>{
        const openDB = window.indexedDB.open('canvas_database', 3);
        let record;
         openDB.onsuccess = function(event){
            const db = event.target.result;
            const transaction = db.transaction(["canvas"], "readwrite");
      
            // report on the success of the transaction completing, when everything is done
            transaction.oncomplete = (event) => {
              console.log('done getting oncomplete')
            };
          
            transaction.onerror = (event) => {
              console.log('there was some error')
            };
          
            // create an object store on the transaction
            const objectStore = transaction.objectStore("canvas");
          
            // Make a request to get a record by key from the object store
            const objectStoreRequest = objectStore.get(canvas_id);
          
            objectStoreRequest.onsuccess = (event) => {
              // report the success of our request  
              let record = objectStoreRequest.result;
              resolve(record)
            };
        }
        // open a read/write db transaction, ready for retrieving the data
    })
    
   
  }

  export default getData

//   class HashMap {
//     constructor() {
//       this.map = new Map();
//     }
  
//     put(key, value) {
//       this.map.set(key, value);
//     }
  
//     get(key) {
//       return this.map.get(key);
//     }
  
//     has(key) {
//       return this.map.has(key);
//     }
  
//     delete(key) {
//       this.map.delete(key);
//     }
//   }
  
//   const map = new HashMap();
  
//   const object1 = {
//     id: 'abc123',
//     name: 'John Doe',
//     age: 30,
//     address: '123 Main St'
//   };
  
//   const object2 = {
//     id: 'def456',
//     name: 'Jane Doe',
//     age: 25,
//     address: '456 Main St'
//   };
  
//   map.put(object1.id, object1);
//   map.put(object2.id, object2);
  
//   console.log(map.get('abc123')); // Output: {id: 'abc123', name: 'John Doe', age: 30, address: '123 Main St'}
//   console.log(map.get('def456')); // Output: {id: 'def456', name: 'Jane Doe', age: 25, address: '456 Main St'}


// const [selectedButton, setSelectedButton] = useState(null);

// const handleButtonClick = (buttonId) => {
//   setSelectedButton(buttonId);
// }

// return (
//   <div>
//     {buttons.map((button) => (
//       <div key={button.id} onClick={() => handleButtonClick(button.id)}>
//         <div>
//           {selectedButton === button.id && <TickIcon />}
//         </div>
//         <div>
//           {button.label}
//         </div>
//       </div>
//     ))}
//   </div>
// )

  