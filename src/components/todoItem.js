import { useContext } from 'react'
import { Context } from '../context'
import { FaCheck, FaStar, FaTimes } from 'react-icons/fa'
import './todoItem.css'

const TodoItem = ({ text, id, completed }) => {
    const { deleteTodo, completeTodo, addToFavourite } = useContext(Context)


    let completedStyle = completed ? 'done' : ''

    return (
        <div className={`todoItem ${completedStyle}`}>
            <p className={`todoText ${completedStyle}`}>{text}</p>
            <div className="menu-container">
                <p className="action-icon"
                    onClick={() => completeTodo(id)}
                >
                    <FaCheck />
                </p>
                <p
                    className="action-icon"
                    onClick={() => addToFavourite(id)}
                >
                    <FaStar />
                </p>
                <p
                    className="action-icon"
                    onClick={() => deleteTodo(id)}
                >
                    <FaTimes />
                </p>
            </div>
        </div >
    )
}

export default TodoItem