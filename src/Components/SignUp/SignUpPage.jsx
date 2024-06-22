import React, { useState } from 'react';
import './SignUpPage.css'; 
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    
    setSubmitted(true);
  };

  return (
    <div className="signup-page">
      <h2>Sign Up!!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      <div className="forgot-password-link">
        <Link to="#">Forgot Password?</Link>
      </div>
        <button className='rounded-3' type="submit">Submit</button>
        <p className='text-center'>----------------OR--------------------</p>
        <div className="sign-in ">
        <Link to="/login">Login</Link>
      </div>
      </form>
      {submitted && (
        <p className="success-message">
          Signed up successfully!
        </p>
      )}
    </div>
  );
};

export default SignUpPage;
