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

        let ErrorSection = document.querySelector(".ErrorSection");
        let CheckConformPassword = document.querySelector("#ConformPassword");
        let { Password, ConformPassword } = this.state;
        if (Password === ConformPassword) {
            let GetRecoverUserData = localStorage.getItem("RecoverPassword") ? (localStorage.getItem("RecoverPassword")) : [];
            let GetUserData = localStorage.getItem("UserRegister") ? JSON.parse(localStorage.getItem("UserRegister")) : [];
            let RecoverPassword = GetUserData.find((email) => {
                return email.Email === GetRecoverUserData
            })
            if (RecoverPassword) {
                RecoverPassword.Password = ConformPassword
                localStorage.setItem("UserRegister", JSON.stringify(GetUserData));
                alert("Password updated successfully")
            }
        } else {
            ErrorSection.innerHTML = "Your Password has been Changed"
            ErrorSection.style.backgroundColor = "green"
            ErrorSection.style.margin = "1rem 1.7rem 0 .7rem";
            ErrorSection.style.height = "2.5rem"
            ErrorSection.style.width = "95%";
            ErrorSection.style.color = "white";
            ErrorSection.style.fontSize = "1rem"
            ErrorSection.style.fontWeight = "300"
            ErrorSection.style.padding = ".7rem 1rem"
            ErrorSection.style.borderRadius = ".2rem"
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
                                <input type='text' placeholder='New Password' id='Password' autoFocus onChange={(event) => { this.HandleChange(event, "Password") }} />
                            </div>
                            <div>
                                <input type='text' placeholder='Conform Password' id='ConformPassword' onChange={(event) => { this.HandleChange(event, "ConformPassword") }} />
                            </div>
                            <div className='ErrorSection'></div>
                            <button className='Submit' onClick={this.Submit}>Submit</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
