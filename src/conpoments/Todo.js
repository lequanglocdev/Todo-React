import { useState } from 'react';
import StyleTodo from './Todo.scss'

function Todo() {
    const [input, setInput] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        setTodoList(prev => [...prev, { id: input.replace(/\s/g, ''), jobs: input }])
        setInput('')

    }
    const handleDelete = (id) => {
        // console.log(id)
        setTodoList(prev => prev.filter(item => item.id !== id))
    }
    console.log(todoList)
    return (
        <div className="todo-container">
            <div className="todo-heading">Todo List using ReactJS</div>
            <div className="todo-body">
                <input
                    className='todo-input'
                    value={input}
                    onChange={(e) => handleInput(e)}
                />



                <button className='btn-Add'
                    onClick={handleAdd}
                >Add
                </button>
                <div className='todo-content'>
                    <ul className='todo-list'>
                        {todoList.map((item) => {
                            return (
                                <li key={item.id} className="todo-item">{item.jobs}
                                    <button className='btn-dellete' onClick={(id) => handleDelete(item.id)}><i className="fa-solid fa-trash "></i></button>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Todo;