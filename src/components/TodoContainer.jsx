import './TodoContainer.css'


function TodoContainer() {
  return (
    <div className="todo">
            <div className="todo-container">
                    <div className="todo-content-wrapper">
                        <div className="todo-input-block">
                            <input className='todo-input' type="text" placeholder='Введите задачу' />
                        </div>
                    </div>
            </div>
    </div>
  )
}
export default TodoContainer