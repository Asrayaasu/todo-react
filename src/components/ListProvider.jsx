import React, { useState } from 'react'
import ListContext from './ListContext';

const ListProvider = ({children}) => {
    const [todos, setTodos]=useState([]);
    

    const addTodo=(text)=>{
        setTodos([...todos,{text}])
    }

    const deleteTodo=(index)=>{
        setTodos(todos.filter((todo,i) => i !== index))
    }
  return (
    <div>
      <ListContext.Provider value={{todos, addTodo, deleteTodo}}>
        {children}
      </ListContext.Provider>
    </div>
  )
}

export default ListProvider
