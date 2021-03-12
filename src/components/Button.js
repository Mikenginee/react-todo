import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.css'



function Button({ text, className, path }) {


    return (
        <>
            <div>
                <NavLink className={className} to={path}>{text}</NavLink>
            </div>
        </>
    )
}

export default Button
