import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import TodoList from './TodoList'
import './TodoContainer.css' 
import trash from '../icons/remove.png'

function TodoContainer() {

    const [change, setChange] = useState('')

    const [inputValue, setInputValue] = useState([])
  
    const handlePress = (e) =>{
        if(e.charCode === 13){
            setInputValue([  {id: nanoid(8), value: change } ,  ...inputValue ])
            setChange('')
        }
       
    }

    const handleRemove = (id) =>{
      setInputValue(inputValue => inputValue.filter((elem)=> elem.id !== id)
        )
    }

    // console.log(inputValue);

  return (
    <div className="todo">
            <div className="todo-container">
                    <div className="todo-content-wrapper">
                       <div className="todo-content">
                       <div className="todo-input-block">
                            <input
                            value={change}
                             onChange={(e)=> setChange(e.target.value)}
                             onKeyPress={(e) => handlePress(e)}
                             className='todo-input' 
                             type="text" 
                             placeholder='Введите задачу' />
                            
                        </div>
                        <div className="todo-click-block">
                        <div className="todo-link-block">
                            <a href="#" className='todo-link'>Все({inputValue.length})</a>
                            <a href="#" className='todo-link'>Выполненые</a>
                        </div>
                        <div className="todo-trash-block">
                            <div className="todo-trash">
                                <img src={trash} alt="#" />
                            </div>
                        </div>  
                        </div>
                       </div>
                    </div>
            <div className="todo-list">
                <TodoList 
                key={Date.now().toString()} 
                item={inputValue}
                handleRemove={handleRemove }
                />
                
            </div>
        </div>
    </div>
  )
}
export default TodoContainer