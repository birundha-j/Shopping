import React, { useState }  from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import './todo.css'

function TodoList() {
    const [days,setdays]=useState()

    function calculate(){
        

    }

    // const [state, setState] = React.useState({
    //     name: "",
    //     age: "",
    //     degree: "",
    //     place: "",
    //     phone: ""
    //   })
      
    //   function handleChange(evt) {
    //     const value = evt.target.value;
    //     setState({
    //       ...state,
    //       [evt.target.name]: value
    //     });
    //     console.log(state,"state")
    //   }
    //   function Adddata(){
    //     setState(state)

    //   }

    // const [input, setInput] = useState([])
    // const [add, setAdd] = useState([])
    // const [btnchange, setbtnchange] = useState(true)
    // const [edit, setEdit] = useState()

    // function handleChange(e) {
    //     setInput(e.target.value)
    // }
    // function AddDatas() {
    //     setAdd([...add, input])
    // }
    // function updatedatas() {
    //     add[edit] = input
    //     setbtnchange(true)


    // }
    // function EditWork(id) {

    //     add.find((value, index) => {
    //         if (index  == id) {
    //             setInput(value)
    //             setEdit(id)

    //         }
    //     })
    //     setbtnchange(false)

    // }
    // function DeleteRow(a){
    //     if (a > -1) {
    //         add.splice(a, 1);
    //     }
    //     setAdd([...add])

    // }
    return (
        <div>
            number:<input/>
            <button onClick={calculate}>Find</button>
            {/* <input type="test" onChange={handleChange} value={input}></input>
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
            })} */}
           {/* <div>
                Name   :       <input type="text" name="name" onChange={handleChange} value={state.name}/><br /><br/>
                Age    :        <input type="number" name="age" onChange={handleChange} value={state.age}/><br /><br/>
                degree :     <input type="text" name="degree" onChange={handleChange} value={state.degree}/><br /><br/>
                place  :      <input type="text" name="place" onChange={handleChange} value={state.place}/><br /><br/>
                P.No   :       <input type="number" name="phone" onChange={handleChange} value={state.phone}/>
                
            </div>
            {state.name}
            {state.age}
            {state.degree}
            {state.place}
            {state.phone}  */}





        </div>
    )
}
export default TodoList;