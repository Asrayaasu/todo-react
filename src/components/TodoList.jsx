import React, { useContext } from 'react'
import ListContext from './ListContext'

const TodoList = () => {
    const {todos, addTodo, deleteTodo} = useContext(ListContext);
    const [newTodo, setnewTodo]=useState('');
  return (
    <div>
        <input type='text' value={newTodo} onChange={(e)=>setnewTodo(e.target.value)} placeholder='Add items' />
        <span><button onClick={(addTodo(newTodo))}>Add</button></span>
      <ul>
        {todos.map((todo,index)=>(
            <li key={index}>
                {todo.text}
                <button onClick={()=>deleteTodo(index)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
