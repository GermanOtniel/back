//const baseUrl = 'http://localhost:3000/api/entries/'
const baseUrl = '/api/entries/';


//   inicia READ
export function getItems(){
  return fetch(baseUrl)
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(items=>{
    return items
  })
}

export function getSingleItem(id){
  return fetch( baseUrl + id )
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(item=>{
    return item
  })
}
//     termina READ


// inicia   CREATE


export function addItem(item){
  
  const form = new FormData();
  for (let key in item){
    form.append(key, item[key]);
  }
  
  return fetch(baseUrl, {
    method: 'post',
    body: form
  })
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(item=>{
    return item
  })
}


// termina  CREATE

// update 

// export function updateItem(item){
//   return fetch(baseUrl, {
//     method: 'patch',
//     headers: {
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(item)
//   })
//   .then(res=>{
//     if(!res.ok) return Promise.reject(res.statusText);
//     return res.json()
//   })
//   .then(item=>{
//     return item
//   })
// }

// update

// delete 

// export function deleteItem(item){
//   return fetch(baseUrl, {
//     method: 'delete',
//     headers: {
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(item)
//   })
//   .then(res=>{
//     if(!res.ok) return Promise.reject(res.statusText);
//     return res.json()
//   })
//   .then(item=>{
//     return item
//   })
// }

// delete


// export function deleteEntry(id){
//   return fetch(baseUrl + id)
//   .then(res=>{
//     if(!res.ok) return Promise.reject(res.statusText);
//     return res.json()
//   })
//   .then(entry=>{
//     return "Se ha borrado!"
//   })
// }