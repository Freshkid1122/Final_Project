import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import buyer from "../src/assets/resturant.png";

const SignupResurant = () => {
  return (
    <div>
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
            <div
              className="row shadow rounded-4 bg-white overflow-hidden w-100 mx-2"
              style={{ maxWidth: "900px" }}
            >
              {/* Image Section */}
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-0" style={{ backgroundColor: "#e1f0d3" }}>
                <img
                  src={buyer}
                  alt="signup-illustration"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover", minHeight: "250px" }}
                />
              </div>
      
              {/* Form Section */}
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4 p-md-5">
                <div style={{ width: "100%", maxWidth: "350px" }}>
                  <h4 className="mb-4 fw-bold text-center">Sign Up As A Resturant</h4>
      
                  <div className="mb-3">
                    <label className="form-label">Enter Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email Here"
                      />
                    </div>
                  </div>
      
                  <div className="mb-4">
                    <label className="form-label">Enter Your Password</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-lock"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Your Password Here"
                      />
                    </div>
                  </div>
      
                  <div className="d-grid mb-3">
                    <button className="btn btn-success">Get Started</button>
                  </div>
      
                  <div className="text-center my-3">
                    <hr />
                    <span className="position-relative px-2 bg-white" style={{ top: "-18px" }}>OR</span>
                  </div>
      
                  <div className="d-grid">
                    <button className="btn btn-outline-secondary">
                      <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google"
                        width="20"
                        className="me-2"
                      />
                      Sign up with Google
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SignupResurant
