import React from "react"
import TodoItem from "./TodoItem"

function TodoList({item}) {
  return (
    <ul className="todo-list-item" >
            {item.map((elem) =>{
                return <TodoItem 
                key={elem.id} 
                id={elem.id} 
                value={elem.value}/>
            })}
    </ul>
  )
}
export default TodoList