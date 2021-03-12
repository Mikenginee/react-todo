import React from 'react'
import { FaGithub, FaInfoCircle, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-inner-container">
                <h3 className="footer-title">Be the first to try our service!</h3>
                <Button className='start small sharp' text='Contact us' path='/' />
                <div className="footer-links">
                    <div className="footer-links-container">
                        <Link to='/' className="footer-links__item footer-links__item--title">About us</Link>
                        <Link to='/' className="footer-links__item">Who we are</Link>
                        <Link to='/' className="footer-links__item">Why we do it</Link>
                        <Link to='/' className="footer-links__item">Rights</Link>
                    </div>
                    <div className="footer-links-container">
                        <Link to='/' className="footer-links__item footer-links__item--title">Our purposes</Link>
                        <Link to='/' className="footer-links__item">Motivation</Link>
                        <Link to='/' className="footer-links__item">Inspiration</Link>
                        <Link to='/' className="footer-links__item">Reviews</Link>
                    </div>
                    <div className="footer-links-container">
                        <Link to='/' className="footer-links__item footer-links__item--title">Other projects</Link>
                        <Link to='/' className="footer-links__item">First project</Link>
                        <Link to='/' className="footer-links__item">Second project</Link>
                        <Link to='/' className="footer-links__item">Third project</Link>
                    </div>
                    <div className="footer-links-container">
                        <Link to='/' className="footer-links__item footer-links__item--title">Social media</Link>
                        <Link to='/' className="footer-links__item">Linkedin <FaLinkedin /></Link>
                        <Link to='/' className="footer-links__item">Instagram <FaInstagram /></Link>
                        <Link to='/' className="footer-links__item">GitHub <FaGithub /></Link>
                    </div>
                </div>
                <h5 className='footer-rights'>All rights reserved <FaInfoCircle className='footer-icon' /></h5>
            </div>
        </div>
    )
}

export default Footer
