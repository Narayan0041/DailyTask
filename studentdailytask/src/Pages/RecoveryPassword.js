import React, { Component } from 'react'

export default class RecoveryPassword extends Component {
    constructor() {
        super();
        this.state = {
            "Password": "",
            "ConformPassword": "",
        }
    }
    HandleChange = (event, key) => {
        this.setState({ [key]: event.target.value })
    }
    Submit = () => {
        let { Password, ConformPassword } = this.state
         let GetRecoverUserData = localStorage.getItem("RecoverPassword") ? (localStorage.getItem("RecoverPassword")) : [];
         let GetUserData = localStorage.getItem("UserRegister") ? JSON.parse(localStorage.getItem("UserRegister")) : [];
         let RecoverPassword =GetUserData.find((email)=>{
            return email.Email === GetRecoverUserData
         })
         if(RecoverPassword){
            RecoverPassword.Password = ConformPassword
            localStorage.setItem("UserRegister", JSON.stringify(GetUserData));
            alert("Password updated successfully")
         }
    }

    render() {
        return (
            <>
                <div className="RecoverPasswordContainer">
                    <div className="RecoverPasswordSection">
                        <h1>Recovery Your Password</h1>
                        <img src='./image/reset-password.png' alt='reset-password-image' width={70} />
                        <div className="ResetPasswordInputSection">
                            <div>
                                <input type='text' placeholder='New Password' autoFocus onChange={(event) => { this.HandleChange(event, "Password") }} />
                            </div>
                            <div>
                                <input type='text' placeholder='Conform Password' onChange={(event) => { this.HandleChange(event, "ConformPassword") }} />
                            </div>
                            <button className='Submit' onClick={this.Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
