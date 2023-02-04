function getData(canvas_id=null) {
    return new Promise((resolve,reject)=>{
        const openDB = window.indexedDB.open('canvas_database', 2);

         openDB.onsuccess = function(event){
            let objectStoreRequest;
            const db = event.target.result;
            const transaction = db.transaction(["canvas"], "readwrite");
      
            // report on the success of the transaction completing, when everything is done
            transaction.oncomplete = (event) => {
              // pass
            };
          
            transaction.onerror = (event) => {
              console.log('there was some error' , event)
            };
          
            // create an object store on the transaction
            const objectStore = transaction.objectStore("canvas");
            if(canvas_id==null){
              objectStoreRequest = objectStore.getAll();
            }
            else{
              objectStoreRequest = objectStore.get(canvas_id);
              
            }
            // Make a request to get a record by key from the object store
        
            objectStoreRequest.onsuccess = (event) => {
              // report the success of our request  
              let record = objectStoreRequest.result;
              resolve(record)
            };
        }

        openDB.onupgradeneeded = function(){
          const db = openDB.result;
          const store = db.createObjectStore("canvas" , {keyPath:"canvas_id"})
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

// let objects = [{id: 'abc', value: 'foo'}, {id: 'def', value: 'bar'}, {id: 'ghi', value: 'baz'}];

// let hashTable = {};

// for (let object of objects) {
//   hashTable[object.id] = object;
// }

// let id = 'def';
// let object = hashTable[id];

// object.value = 'qux';

// console.log(objects);
// Output: [{id: 'abc', value: 'foo'}, {id: 'def', value: 'qux'}, {id: 'ghi', value: 'baz'}]


  