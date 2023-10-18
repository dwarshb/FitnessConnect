import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here using the username and password
    console.log('Login clicked with username:', username, 'and password:', password);
  };

  const buttonStyle = {
    backgroundColor: '#04233b',
  };

  return (
    <div className="signup">
      <div className="whitebox">
        <div className="d-flex justify-content-center mt-5">
          <img src="fc_logo.png" className="w-75 mx-auto" alt="" />
        </div>
        <h4 className="text-center mt-1">Login</h4>
        <div className="innercontent">
          <form className="form" id="account" onSubmit={handleLogin}>
            <div className="form-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group LoginPage">
                    <input
                      className="form-control"
                      placeholder="Username"
                      autoComplete="username"
                      aria-required="true"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group LoginPage">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      autoComplete="current-password"
                      aria-required="true"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
              </div>

              <div className="checkbox d-flex">
                <label className="form-label ps-0 pb-2">
                  <input type="checkbox" className="form-check-input" />
                  &nbsp;&nbsp;&nbsp; Remember Me
                </label>
              </div>

              <div className="d-flex row mb-5">
                <button
                  id="login-submit"
                  type="submit"
                  style={buttonStyle}
                  className="btn text-light w-50 mx-auto"
                >
                  Log in
                </button>
              </div>
              <div className="col-md-12">
                <label className="form-label ps-0 pb-2">
                  <Link to="/Signup">Are you a New User?</Link>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
