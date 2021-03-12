import React, { useContext } from 'react'
import TodoItem from './todoItem'
import styles from './list.module.css'
import { Context } from '../context'

const Main = () => {

    const { addTask, todos, inputValue, setInputValue, setTodos } = useContext(Context)

    function deleteChecked() {
        let newTodos = todos.filter(todo => !todo.completed || todo.favourite)
        setTodos(newTodos)
    }

    return (
        <div className={`${styles.container} ${styles.containerList}`}>
            <div className={styles.header}>
                <p className={styles.title}>Main Page</p>
                <form onSubmit={addTask} className="form" >
                    <label htmlFor="input">
                        <input
                            className={styles.input}
                            placeholder="What would you like to remember?"
                            value={inputValue}
                            id="input"
                            onChange={event => setInputValue(event.target.value)}
                        />
                    </label>
                </form>
            </div>
            <div className={styles.body}>
                {todos.length !== 0 ? todos.map(todo => {
                    if (!todo.favourite) {
                        return <TodoItem text={todo.text} key={todo.id} id={todo.id} completed={todo.completed} />
                    }
                }) : <div>No todos yet, let's get started!</div>}
            </div>
            <div className={styles.button} onClick={deleteChecked}>Remove checked</div>
        </div>
    )
}

export default Main