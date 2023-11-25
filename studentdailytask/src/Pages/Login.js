import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "Email": "",
            "Password": ""
        }
    }
    HandleChange = (event, key) => {
        this.setState({ [key]: event.target.value })
    }

    Submit = () => {
        const { Email, Password } = this.state;
        const GetUserRegisterData = localStorage.getItem("UserRegister") ? JSON.parse(localStorage.getItem("UserRegister")) : [];
        let isLoggedIn = false;
        for (let i = 0; i < GetUserRegisterData.length; i++) {
            if (Email === GetUserRegisterData[i].Email && Password === GetUserRegisterData[i].Password) {
                isLoggedIn = true;
                let LogginUserDetail = localStorage.getItem("LogginUserDetail") ? JSON.parse(localStorage.getItem("LogginUserDetail")) : [];
                LogginUserDetail.push({ "Name": GetUserRegisterData[i].UserName, "Email": GetUserRegisterData[i].Email });
                localStorage.setItem("LogginUserDetail", JSON.stringify(LogginUserDetail));
                break;
            }
        }

        if (isLoggedIn) {
            alert("Successfully logged in");
            localStorage.setItem("loggin", 1);
            this.props.setLoggin(true);
        } else {
            alert("Invalid credentials");

        }
    }

    render() {
        return (
            <>
                <div className="Container">
                    <div className="PageContainer">
                        <div className='TopSection'>
                            <div className='BackSection'><i className="fa-solid fa-arrow-left"></i></div>
                            {/* <div className="SignUp"><a href='Register'>Sign up</a></div> */}
                            <div><Link to="/Register">Sign up</Link></div>
                        </div>
                        <div className='HeaderContainer'>
                            <div className='HeaderSection'>
                                <h2>Login in</h2>
                            </div>
                            <div className='UserProfileSection'>
                                <img src="./image/user.png" width={80} alt='UserImage' />
                            </div>
                            <div className='InputSection'>
                                <div>
                                    <input type='text' placeholder='Email' value={this.state.Email} autoFocus onChange={(event) => { this.HandleChange(event, "Email") }}></input>
                                </div>
                                <div>
                                    <input type='password' placeholder='Password' value={this.state.Password} onChange={(event) => { this.HandleChange(event, "Password") }}></input>
                                </div>
                                <div className='forgetPassword'>
                                    <p>Forget Password?<Link to='/ForgotPassword'>  Click here</Link></p>
                                </div>
                                <div className='Button'>
                                    <button onClick={this.Submit}>Login In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
