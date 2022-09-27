import React from "react"
import TodoItem from "./TodoItem"

function TodoList({item, handleRemove}) {
  return (
    <ul className="todo-list-item" >
            {item.map((elem) =>{
                return <TodoItem 
                key={elem.id} 
                id={elem.id} 
                value={elem.value}
                item = {item}
                handleRemove={handleRemove}
                />
            })}
    </ul>
  )
}
export default TodoList