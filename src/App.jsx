import React from 'react'
import ListProvider from './components/ListProvider'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div>
      <ListProvider>
        <TodoList/>
      </ListProvider>
    </div>
  )
}

export default App
