import React from 'react'
import './regestration.css'
function Contactinfo({userobj,setuserobj}) {
    function handleSumbit(e)
    {
        e.preventDefault();
        console.log(userobj);
    }
  return (
    <div className='container'>
        <h2>Contact Info</h2>
        <div className="form-container">
            <form onSubmit={(e)=>handleSumbit}>
            <label>Email id</label>
            <input 
                type='text' 
                name='email'
                value={userobj.email}
                onChange={(e)=>setuserobj({...userobj,[e.target.name]:[e.target.value]})}
                
                />
            <label>Contact No</label>
            <input 
                type='text' 
                name='contactno'
                value={userobj.contactno}
                onChange={(e)=>setuserobj({...userobj,[e.target.name]:[e.target.value]})}
                />
            
            <label>city</label>
            <input 
                type='text'
                name='city' 
                value={userobj.city}
                onChange={(e)=>setuserobj({...userobj,[e.target.name]:[e.target.value]})}
                />
            <label>pincode</label>
            <input 
                type='text' 
                name='pincode'
                onChange={(e)=>setuserobj({...userobj,[e.target.name]:[e.target.value]})}
                ></input>
            <button type='sumbit'>Sumbit</button>
            </form>
        </div>
    </div>
  )
}

export default Contactinfo