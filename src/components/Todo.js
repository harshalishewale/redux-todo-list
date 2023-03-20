import { useState } from "react"
import { Plus, Trash2 } from "react-feather"
import { AddToDo, DeleteToDo, RemoveAll } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import './todo.css'

const Todo = () => {
    const [input, setinput] = useState('');
    const list = useSelector((state) => state.todoreducer.list)
    const dispatch = useDispatch();

    console.log('input', input, 'list', list)
    return (
        <>
            <h2>ToDo List</h2>
            <div>
                <input type="text" placeholder='Add Items' value={input} onChange={(event) => setinput(event.target.value)} />
                <Plus className="plus" cursor='pointer' onClick={() => dispatch(AddToDo(input), setinput(''))} />

            </div>
            <div>
                {list.map((value) => {
                    return (
                        <div key={value.id}>
                            <div id='delete'>
                               <div> <h3>{value.data}</h3></div>
                                <div  id="delicon" >
                                    <Trash2 onClick={() => dispatch(DeleteToDo(value.id))} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <br/>
            <div>
                <button id='delall' onClick={() => dispatch(RemoveAll())}>Remove All</button>
            </div>
        </>
    )
}
export default Todo;