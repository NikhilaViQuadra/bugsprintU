import React, { useState } from 'react';
import FormComponent from './Form';
import './SignupPage.css';

const SignupPage = () => {
    const [showForm, setShowForm] = useState(false);
   
    const handleSignupClick = () => {
       setShowForm(true);
    };
   
    return (
       <div className="container">
        <h1 className="heading">BugSprint</h1>
         {!showForm && (
           <button onClick={handleSignupClick}>Sign Up</button>
         )}
         {showForm && <FormComponent />}
       </div>
    );
};
export default SignupPage;
