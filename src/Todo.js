import react, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './todo.css'

function TodoList() {

    const [input, setInput] = useState([])
    const [add, setAdd] = useState([])
    const [btnchange, setbtnchange] = useState(true)
    const [edit, setEdit] = useState()

    function handleChange(e) {
        setInput(e.target.value)
    }
    function AddDatas() {
        setAdd([...add, input])
    }
    function updatedatas() {
        add[edit] = input
        setbtnchange(true)


    }
    function EditWork(id) {

        add.find((value, index) => {
            if (index  == id) {
                setInput(value)
                setEdit(id)

            }
        })
        setbtnchange(false)

    }
    function DeleteRow(a){
        if (a > -1) {
            add.splice(a, 1);
        }
        setAdd([...add])

    }
    return (
        <div>
            <input type="test" onChange={handleChange} value={input}></input>
            {btnchange ?
                <button onClick={AddDatas}>Add</button>

                :
                <button onClick={updatedatas}>update</button>

            }
            {add.map((data, index) => {
                return (
                    <div className="Dataview">
                        <div>{data}</div>
                        <div className="buttons">
                            <EditIcon color="primary" onClick={() => EditWork(index )} className="Editicon" />
                            <DeleteIcon color="secondary" onClick={()=>DeleteRow(index)} />
                        </div>
                    </div>

                )
            })}

        </div>
    )
}
export default TodoList;