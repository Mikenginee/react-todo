import { useEffect, useState } from 'react'
import { Context } from '../context'
import { Route, Switch } from 'react-router-dom'
import StartPage from './StartPage'
import Home from './Home'
import Main from './Main'
import Favourite from './Favourite'

const List = () => {
    const [todos, setTodos] = useState([])

    const [inputValue, setInputValue] = useState('')

    function addTask(e) {
        e.preventDefault()
        if (inputValue.trim() !== '') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: inputValue,
                    completed: false,
                    favourite: false,
                }
            ])
            setInputValue('')
        }
    }

    const addToFavourite = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.favourite = !todo.favourite
            }
            return todo
        }))
    }

    const completeTodo = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const deleteTodo = id => {
        let newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }


    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('todos')) || []
        setTodos(data)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <Context.Provider
            value={
                { deleteTodo, completeTodo, addToFavourite, addTask, todos, setTodos, inputValue, setInputValue }
            }
        >
            <StartPage />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/main" component={Main} />
                <Route path="/favourites" component={Favourite} />
            </Switch>
        </Context.Provider>
    )
}

export default List