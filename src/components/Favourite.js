import React, { useContext } from 'react'
import { Context } from '../context'
import styles from './list.module.css'
import TodoItem from './todoItem'

const Favourite = () => {

    const { todos, setTodos } = useContext(Context)

    function deleteChecked() {
        let newTodos = todos.filter(todo => !todo.completed || !todo.favourite)
        setTodos(newTodos)
    }

    return (
        <div className={`${styles.container} ${styles.containerFav}`}>
            <div className={styles.header}>
                <p className={styles.title}>Favourites</p>
            </div>
            <div className={styles.body}>
                {todos.length !== 0 ? todos.map(todo => {
                    if (todo.favourite) {
                        return <TodoItem text={todo.text} key={todo.id} id={todo.id} completed={todo.completed} />
                    }
                    else {
                        return null
                    }
                }) : <div>No todos yet, let's get started!</div>}
            </div>
            <div className={styles.button} onClick={deleteChecked}>Remove checked</div>
        </div>
    )
}

export default Favourite