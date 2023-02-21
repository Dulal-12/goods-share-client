const addToLocal = (id,price)=>{

    const data = findObj();
    const quantity = data[id];

    if(quantity){
        const newQuantity = quantity+1;
        data[id] = newQuantity;
        
    }
    else{
        
        data[id] = 1;
        data['price'] = price;
       

    }
    localStorage.setItem("shopping" , JSON.stringify(data))
}

const deleteProductLocal = (id) =>{

    const data = findObj();

    if(id in data){
        localStorage.removeItem("shopping")
        //delete data[id];
        // localStorage.setItem("shopping" , JSON.stringify());
    }
   
}


const findObj = () =>{

    const obj = localStorage.getItem("shopping");
    if(obj){
        return JSON.parse(obj)
    }
    else{
        return {};
    }
}

const addUser = (id)=>{


    const data  = findUser();
    localStorage.setItem("list" , JSON.stringify(id));

}


const deleteUser = (id)=>{

    const data = findUser();
   

    if(data){
       localStorage.removeItem('list')
    
    }
   
  
}


const findUser = ()=>{

    const user = localStorage.getItem("list");
    if(user){
        return JSON.parse(user)
    }
    else{
        return {}
    }
}

export {
    addToLocal
    ,
    findObj
    ,
    deleteProductLocal
    ,
    addUser
    ,
    findUser
    ,
    deleteUser
}