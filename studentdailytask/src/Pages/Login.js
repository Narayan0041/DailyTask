import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ForgetPassword from './ForgetPassword';

const LoginPage = ({ SetIsLoggin }) => {
    const [formData, setFormData] = useState({
        Email: "",
        Password: ""
    });

    const HandleChange = (event, key) => {
        setFormData({ ...formData, [key]: event.target.value });
    }

    const navigate =useNavigate();

    const Submit = () => {
        const { Email, Password } = formData;
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
            SetIsLoggin(true);
            localStorage.setItem("loggin", 1);
            navigate("/SelectMode")

        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <>
            <div className="Container">
                <div className="PageContainer">
                    <div className='TopSection'>
                        <div className='LoginUrl'><Link to="/Register">Sign up</Link></div>
                    </div>
                    <div className='LoginHeaderContainer'>
                        <div className='HeaderSection'>
                            <h2>Login in</h2>
                        </div>
                        <div className='UserProfileSection'>
                            <img src="./image/user.png" width={80} alt='UserImage' />
                        </div>
                        <div className='InputSection'>
                            <div>
                                <input type='text' placeholder='Email' value={formData.Email} autoFocus onChange={(event) => { HandleChange(event, "Email") }}></input>
                            </div>
                            <div>
                                <input type='password' placeholder='Password' value={formData.Password} onChange={(event) => { HandleChange(event, "Password") }}></input>
                            </div>
                            <div className='ForgetPasswordUrlLink'>
                                <span>Forget Password?</span> <Link to="/ForgotPassword" className='LinkForget'>Click here</Link>
                            </div>
                            <div className='Button'>
                                <button onClick={Submit}>Login In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;












// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import ForgetPassword from './ForgetPassword';
// export default class LoginPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "Email": "",
//             "Password": ""
//         }
//     }
//     HandleRedirect = (redirect) => {
//         this.props.history.push(redirect);
//     }
//     HandleChange = (event, key) => {
//         this.setState({ [key]: event.target.value })
//     }
//     Submit = () => {
//         const { Email, Password } = this.state;
//         const GetUserRegisterData = localStorage.getItem("UserRegister") ? JSON.parse(localStorage.getItem("UserRegister")) : [];
//         let isLoggedIn = false;
//         for (let i = 0; i < GetUserRegisterData.length; i++) {
//             if (Email === GetUserRegisterData[i].Email && Password === GetUserRegisterData[i].Password) {
//                 isLoggedIn = true;
//                 let LogginUserDetail = localStorage.getItem("LogginUserDetail") ? JSON.parse(localStorage.getItem("LogginUserDetail")) : [];
//                 LogginUserDetail.push({ "Name": GetUserRegisterData[i].UserName, "Email": GetUserRegisterData[i].Email });
//                 localStorage.setItem("LogginUserDetail", JSON.stringify(LogginUserDetail));
//                 break;
//             }
//         }

//         if (isLoggedIn) {
//             alert("Successfully logged in");
//             this.props.SetIsLoggin(true);
//             localStorage.setItem("loggin", 1);
//             this.HandleRedirect("/SelectMode")
//         } else {
//             alert("Invalid credentials");

//         }
//     }

//     render() {
//         return (
//             <>
//                 <div className="Container">
//                     <div className="PageContainer">
//                         <div className='TopSection'>
//                             <div className='LoginUrl'><Link to="/Register">Sign up</Link></div>
//                         </div>
//                         <div className='LoginHeaderContainer'>
//                             <div className='HeaderSection'>
//                                 <h2>Login in</h2>
//                             </div>
//                             <div className='UserProfileSection'>
//                                 <img src="./image/user.png" width={80} alt='UserImage' />
//                             </div>
//                             <div className='InputSection'>
//                                 <div>
//                                     <input type='text' placeholder='Email' value={this.state.Email} autoFocus onChange={(event) => { this.HandleChange(event, "Email") }}></input>
//                                 </div>
//                                 <div>
//                                     <input type='password' placeholder='Password' value={this.state.Password} onChange={(event) => { this.HandleChange(event, "Password") }}></input>
//                                 </div>
//                                 <div className='ForgetPasswordUrlLink'>
//                                     <span>Forget Password?</span> <Link to="/ForgotPassword" className='LinkForget'>Click here</Link>
//                                 </div>
//                                 <div className='Button'>
//                                     <button onClick={this.Submit}>Login In</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
