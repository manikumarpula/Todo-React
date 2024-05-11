import { useState } from 'react'
import './App.css'

function App(){
     let [todoInput,updateInput] = useState("test")

     let [todolist,updateTodos]  = useState([
                {
                  id:1,
                  task:"Learn Vue"
                },
                {
                  id:2,
                  task:"Learn React"
                },
                {
                  id:3,
                  task:"Learn Web Development"
                }]
              )
  let nextid = 3
  function addNewTodo(){
    if (todoInput === "" ) 
    {
        alert("Please add some task")}
    else{
      let newtodos = [
        ...todolist,
        {
          id:++nextid,
          task:todoInput
        }
      ]
      updateTodos(newtodos);
      updateInput("")
    }
  }

  function deletetodo(id){
        let updatedtodos = todolist.filter(
          (todo)=>{
            return todo.id!==id
          }

        )
        updateTodos(updatedtodos)
  }
  
  return(
  
  <div className="container mt-5 w-50">
    <h3 className='text-center'>Todo App Using React</h3>
        <div className="input-group">
            <input className="form-control" type="text" value={todoInput} onChange={(e)=>{
              let task = e.target.value;
              updateInput(task)
            }}/>
            <button className="btn btn-primary" onClick={()=>addNewTodo()}>
              Add
            </button>
        </div>
        <ul className="list-group mt-4">

          {
            todolist.map((e)=>{
              return(
              <li className="list-group-item">
                <p>{e.task}</p>
                <button className="btn" onClick={()=>{deletetodo(e.id)}}>❌</button>
              </li>)
            }

            )
          }
 
        </ul>
  </div>
  )
}

export default App