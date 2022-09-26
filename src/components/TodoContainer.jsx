import React, {useState} from 'react'

import './TodoContainer.css' 
import trash from '../icons/remove.png'

function TodoContainer() {

    const [change, setChange] = useState('')

    const [inputValue, setInputValue] = useState([

    ])
    console.log(change);

    


  return (
    <div className="todo">
            <div className="todo-container">
                    <div className="todo-content-wrapper">
                       <div className="todo-content">
                       <div className="todo-input-block">
                            <input
                            value={change}
                             onChange={(e)=> setChange(e.target.value)}
                             className='todo-input' 
                             type="text" 
                             placeholder='Введите задачу' />
                            
                        </div>
                        <div className="todo-click-block">
                        <div className="todo-link-block">
                            <a href="#" className='todo-link'>Все(0)</a>
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

            </div>
    </div>
  )
}
export default TodoContainer