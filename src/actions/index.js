export const AddToDo=(data)=>{
    return{
        type:'Add_TODO',
        payload:{
            id:Date.now()+Math.random()*2,
            data:data
        }
    }
}

export const DeleteToDo=(id)=>{
    return{
        type:'Delete_ToDo',
        id
    }
}

export const RemoveAll=()=>{
    return{
        type:'Remove_All'
    }
}