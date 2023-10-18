import React, { useState } from 'react';

const Signup = () => {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here using the input state
    console.log('Signup clicked with input:', input);
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
        <h4 className="text-center mt-1">Sign Up</h4>
        <div className="innercontent">
          <form className="form" id="account" onSubmit={handleSignup}>
            <div className="form-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group LoginPage">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"
                      aria-required="true"
                      value={input.firstName}
                      onChange={handleChange}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group LoginPage">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      aria-required="true"
                      value={input.lastName}
                      onChange={handleChange}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group LoginPage">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      aria-required="true"
                      value={input.email}
                      onChange={handleChange}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group LoginPage">
                    <input
                      type="tel"
                      name="mobileNo"
                      className="form-control"
                      placeholder="Mobile No"
                      aria-required="true"
                      value={input.mobileNo}
                      onChange={handleChange}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group LoginPage">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      aria-required="true"
                      value={input.password}
                      onChange={handleChange}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group LoginPage">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      autoComplete="confirm-password"
                      aria-required="true"
                      value={input.confirmPassword}
                      onChange={handleChange}
                    />
                    {/* You can add validation messages if needed */}
                  </div>
                </div>
              </div>

              <div className="d-flex row mb-5">
                <button
                  id="signup-submit"
                  type="submit"
                  style={buttonStyle}
                  className="btn text-light w-50 mx-auto"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
