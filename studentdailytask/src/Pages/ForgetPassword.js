import React, { Component } from 'react'

export default class ForgetPassword extends Component {
  constructor() {
    super()
    this.state = {
      "Email": "",
      "UserName": ""
    }
  }
  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }
  Submit = () => {
    let { Email, UserName } = this.state
    console.log(Email, UserName)
    let GetUserData = localStorage.getItem("UserRegister") ? JSON.parse(localStorage.getItem("UserRegister")) : [];
    for (let i = 0; i < GetUserData.length; i++) {
      if (Email === GetUserData[i].Email && UserName === GetUserData[i].UserName) {
        let GetForgetPassword = localStorage.getItem("RecoverPassword") ? JSON.parse(localStorage.getItem("RecoverPassword")) : [];
        // GetForgetPassword.push({ "Email": Email, "UserName": UserName })
        localStorage.setItem("RecoverPassword",Email )
        alert("it's same data are match")
      }

    }
  }
  render() {
    return (
      <>
        <div className="ForgetPasswordSection">
          <div className="ForgetPasswordContainer">
            <h1>Password Reset</h1>
            <img src='./image/forgot-password.png' alt='forget-passwordImage' width={60} />
            <div className="ForgetPasswordInputSection">
              <div className='UserName'>
                <input type="text" placeholder='Enter UserName' autoFocus onChange={(event) => { this.handleChange(event, "UserName") }} />
              </div>

              <div className='Email'>
                <input type="text" placeholder='Enter Email' onChange={(event) => { this.handleChange(event, "Email") }} />
              </div>
              <button className='Submit' onClick={this.Submit}>Reset My Password</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
