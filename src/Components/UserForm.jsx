import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    const [formComplete, setFormComplete] = useState(false);
    // const [formMessage, setFormMessage] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, email, password };
        console.log("Welcome", newUser);
        setFormComplete( true );
    };

    const formMessage = () => {
        if( formComplete ) {
	    return ("Thank you for submitting the form!");
	} else {
	    return ("Welcome, please submit the form");
	}
    };
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(firstName.length < 1){
            setFirstNameError("Must Enter A First Name")
        }
        else if(firstName.length < 3){
            setFirstNameError("First name must be at least 3 characters.");
        }
        else{
            setFirstNameError("");
        }
    }
    const handleLastNameError = (e) => {
        setLastName(e.target.value);
        if(lastName.length < 1){
            setLastNameError("Must Enter A Last Name")
        }
        else if(lastName.length < 3){
            setLastNameError("Last name must be at least 3 characters.");
        }
        else{
            setLastNameError("");
        }
    }
    const handleEmailError = (e) => {
        setEmail(e.target.value);
        if(email.length < 1){
            setEmailError("Must Enter A Email")
        }
        else if(email.length < 3){
            setEmailError("Email must be at least 3 characters.");
        }
        else{
            setEmailError("");
        }
    }
    const handlePasswordError = (e) => {
        setPassword(e.target.value);
        if(password.length = 1){
            setPasswordError("Must Enter A Password")
        }
        else if(password.length < 5){
            setPasswordError("Password must be at least 5 characters.");
        }
        else{
            setPasswordError("");
        }
    }
    const handlePasswordConfirmError = (e) => {
        setPasswordConfirm(e.target.value);
        if(password.length = 0){
            setPasswordConfirmError("Must Enter a Password")
        }
        else if(passwordConfirm != password){
            setPasswordConfirmError("Passwords are not the same")
        }
        else{
            setPasswordConfirmError("");
        }
    }
    return(
        <div class = "bg-light font-weight-bold p-1"  >
            <form >
                <div >
                    {/* {
                        formComplete ?
                        
                    } */}
                    <h1>Log In Here</h1>
                </div>
                <div>
                    <label class="text-success">First Name: </label>
                    <input class="rounded m-2" type="text" onChange={handleFirstName}></input>
                    {
                        firstNameError ?
                        <p style={{color:'blue'}}>{firstNameError}</p> : ''
                    }
                </div>
                <div>
                    <label class="text-success">Last Name: </label>
                    <input class="rounded m-2" type="text" onChange={handleLastNameError}></input>
                    {
                        lastNameError ?
                        <p style={{color:'blue'}}>{lastNameError}</p> : ''
                    }
                </div>
                <div>
                    <label class="text-success">Email: </label>
                    <input class="rounded m-2" type="text" onChange={handleEmailError}></input>
                    {
                        emailError ?
                        <p style={{color:'blue'}}>{emailError}</p> : ''
                    }
                </div>
                <div>
                    <label class="text-success">Password: </label>
                    <input class="rounded m-2" type="text" onChange={handlePasswordError}></input>
                    {
                        passwordError ?
                        <p style={{color:'blue'}}>{passwordError}</p> : ''
                    }
                </div>
                <div>
                    <label class="text-success">Confirm Password: </label>
                    <input class="rounded m-2" type="text" onChange={handlePasswordConfirmError}></input>
                    {
                        passwordConfirmError ?
                        <p style={{color:'blue'}}>{passwordConfirmError}</p> : ''
                    }
                </div>
                {/* <input type="submit" value="Create User" /> */}
                <button class = 'rounded bg-success text-white' type='submit' disabled = {firstName.length <3 || password.length < 3 } > Create User </button>
            </form>
            <div class="text-warning" >
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {passwordConfirm}</p>
            </div>
        </div>
    );
};
export default UserForm;