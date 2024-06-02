import React from 'react'
import './Header.css'
export default function Header() {
    return (
        <div className="main">
            <div className='logo'>
                TRUFease
            </div>
            <div className='menu'>
                <ul className='ull'>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>
                        {!localStorage.getItem('token') ? (
                            <ul className='min'>
                                <li>Login</li>
                                <li>Register</li>
                            </ul>
                        ) : (
                            <button className='logout-btn' onClick={handleLogout}>LOGOUT</button>
                        )}
                    </li>
                </ul>
                <hr></hr>
            </div>
        </div>
    )
}

