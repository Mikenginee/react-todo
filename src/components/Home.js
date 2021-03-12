import React from 'react'
import Button from './Button'
import './Home.css'

function Home() {
    return (
        <>
            <div className="home-container">
                <h1 className="home-title">Welcome to Todo App</h1>
                <p className="home-subtitle">Create your todos right now!</p>
                <p className="home-description">Tap the button below</p>
                <Button text='Get started' className='start' path='/main' />
            </div>
        </>
    )
}

export default Home
