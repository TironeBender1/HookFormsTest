import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createUser = (e) => {
    e.preventDefault();
  
    const newUser = {firstName, lastName, email, passWord, confirmPassword} 
    console.log("Welcome", newUser)
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassWord("");
    setConfirmPassword("");
  
};
  
return (
    <div className="main-div">
    <form onSubmit= { createUser }>
        <div>
           <label>First Name</label>
           {firstName && firstName.length < 2 ? <p className="error-message">error</p> : null}
           <input type="text" onChange={ (e) => setFirstName(e.target.value)} /> 
        </div>
        <div>
           <label>Last Name</label>
           {lastName && lastName.length < 2 ? <span className="error-message">error</span> : null}
           <input type="text" onChange={ (e) => setLastName(e.target.value)} /> 
        </div>
        <div>
           <label>Email</label>
           {email && email.length < 5 ? <span className="error-message">error</span> : null}
           <input type="text" onChange={ (e) => setEmail(e.target.value)} /> 
        </div>
        <div>
           <label>Password</label>
           {passWord && passWord.length < 8 ? <span className="error-message">error</span> : null}
           <input type="text" onChange={ (e) => setPassWord(e.target.value)} /> 
        </div>
        <div>
           <label>Confirm Password</label>
           {confirmPassword && (passWord !== confirmPassword || confirmPassword.length < 8) ? <span className="error-message">error</span> : null}
           <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)} /> 
        </div>
        <input type="submit" value="Add User"/>
    </form>
    {firstName}, {lastName}, {email}, {passWord},{confirmPassword}
    </div>      
  
  )
}

export default Form;