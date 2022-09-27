import cancel from '../icons/cancel.svg'
import edit from '../icons/edit.svg'

import './TodoItem.css'

function TodoItem({id, value , handleRemove}) {
    // console.log(handleRemove);
  return (
    <li className="todo-item">
        <p>{value}</p>
    <div className="todo-item-icon-container">
    <span className='todo-icon-edit'>
        <img className='icon-press' 
        src={edit} alt="#" />
    </span>

    <span className='todo-icon-delet'>
        <img className='icon-press' 
        src={cancel} alt="#" 
        onClick={() => handleRemove(id)}
        
        />
    </span>
    </div>
    </li>
  )
}
export default TodoItem