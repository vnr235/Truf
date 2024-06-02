import React from 'react'
import {Link} from 'react-router-dom';
import '../assets/CSS/Header.css'
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

// <header className='navbar'>
//             <div className="icon">
//                 <h2 className="logo">LOGO</h2>
//             </div>

//             <div className="Menu">
//                 <ul>
//                     <li>HOME</li>
//                     <li>CONTACT</li>
//                     <li>ABOUT US</li>
//                     <li>HELP</li>
//                     <li>
//                         {!localStorage.getItem('token') ? (
//                             <ul>
//                                 <li>LOGIN</li>
//                                 <li>REGISTER</li>
//                             </ul>
//                         ) : (
//                             <button className='logout-btn' onClick={handleLogout}>LOGOUT</button>
//                         )}
//                     </li>
//                 </ul>
//             </div>

//         </header>