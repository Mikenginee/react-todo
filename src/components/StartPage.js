import React, { useState } from 'react'
import { FaBars, FaFirstOrderAlt, FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './StartPage.css'

function StartPage() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <div className="container">
                <NavLink to="/" className="logo">TODO APP &nbsp;
                    <FaFirstOrderAlt />
                </NavLink>

                <div className="nav"
                    onClick={handleClick}
                >
                    {click ? <FaTimes className='menu-icon' /> : <FaBars className=' menu-icon' />}

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item nav-item--mobile'>
                        <NavLink to='/' className='nav-links navItem' onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item nav-item--mobile'>
                        <NavLink to='/main' className='nav-links navItem' onClick={closeMobileMenu}>
                            Main
                        </NavLink>
                    </li>
                    <li className='nav-item nav-item--mobile'>
                        <NavLink to='/favourites' className='nav-links navItem' onClick={closeMobileMenu}>
                            Favourites
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default StartPage
