fetch('https://jsonplaceholder.typicode.com/photos')
.then((res)=>{
    console.log(res);
    res.json()
    .then((message)=>{
        console.log(message);
        
    })
    .catch((errmessage)=>{
        console.log(errmessage);
        
    })
    
})
.catch((err)=>{
    console.log(err);
    
})