import React, {useState} from "react";



function Inputtodo(){
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([])

    function handleChange(event){
        const inputVal = event.target.value
        setTodo(inputVal)
    }

    function addTodo(){
        setTodoList((preVal)=>[...preVal, todo]);
        setTodo('')
        
    }

    
    return(
        <div  className="input-wrapper">
            <input onChange={handleChange} value={todo} type="text"/>
            <button onClick={addTodo}>add</button>
        </div>
    )
}
export default Inputtodo;