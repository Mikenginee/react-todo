import React from 'react'
import './Notification.css'

function Notification({ message }) {
    return (
        <div className="notification-container">
            {message}
        </div>
    )
}

export default Notification
