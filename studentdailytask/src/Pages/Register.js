import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Email: "",
            Password: "",
        }
    }
    HandleChange = (event, key) => {
        this.setState({ [key]: event.target.value })
    }
    // document.getElementById("Name").value="";
    // document.getElementById("Email").value="";
    // document.getElementById("USername").value="";
    // document.getElementById("Password").value="";
    // console.log(PersonEmail,PersonName,PersonPassword,PersonUserName)
    Submit = () => {
        let { Name, Email, Password } = this.state
        let RegisterData = localStorage.getItem("UserRegister") ? JSON.parse(localStorage.getItem("UserRegister")) : [];
        RegisterData.push({ "UserName": Name, "Email": Email, "Password": Password })
        localStorage.setItem("UserRegister", JSON.stringify(RegisterData))
        alert("You Register SuccessFully")
    }
    render() {
        return (
            <>
                <div className="Container">
                    <div className="PageContainer">
                        <div className='TopSection'>
                            <div className='BackSection'><i className="fa-solid fa-arrow-left"></i></div>
                            <div className="SignUp"><a href='/'>Log in</a></div>
                        </div>
                        <div className='HeaderContainer'>
                            <div className='HeaderSection'>
                                <h2>Create your account</h2>
                            </div>
                            {/* <div className='UserProfileSection'>
                            <img src={this.props.UserImage} width={80} alt='UserImage' />
                        </div> */}
                            <div className='InputSection' style={{ marginLeft: "1rem" }}>
                                <div>
                                    <input type='text' id='Name' placeholder='Enter Your Name' autoFocus onChange={(event) => { this.HandleChange(event, "Name") }}></input>
                                </div>
                                <div>
                                    <input type='text' id='Email' placeholder='Email' onChange={(event) => { this.HandleChange(event, "Email") }}></input>
                                </div>
                                {/* <div>
                                    <input type='text' id='UserName' placeholder='Username' onChange={(event) => { this.HandleChange(event, "Username") }}></input>
                                </div> */}
                                <div>
                                    <input type='password' id='Password' placeholder='Password' onChange={(event) => { this.HandleChange(event, "Password") }}></input>
                                </div>

                                <div className='Button'>
                                    <button onClick={this.Submit}>Join Us</button>
                                </div>
                                <div className='sepration'></div>
                                <div className='RegisterText'>
                                    <p>A Daily task register page helps organize and track daily assignments and activities...</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
