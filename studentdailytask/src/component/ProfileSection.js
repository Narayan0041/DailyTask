
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSection = () => {
  const [userName, setUserName] = useState('');
  const [loginUser, setLoginUser] = useState({});
  const [userNameFirstChar, setUserNameFirstChar] = useState('');
let Navigate=useNavigate();
  const Logout = () => {
    alert('you want to logout');
    localStorage.removeItem('LogginUserDetail');
    localStorage.removeItem('loggin');
  };
let profileClick=()=>{
    Navigate("/ProfileSection")
}
  useEffect(() => {
    const LoginUser = localStorage.getItem('LogginUserDetail')
      ? JSON.parse(localStorage.getItem('LogginUserDetail'))
      : [];

    if (LoginUser.length > 0) {
      const userProfile = LoginUser.find((user) => {
        setLoginUser(user);
        setUserNameFirstChar(user.Name.charAt(0));
      });
    }

    const GetClickPaticularUser = localStorage.getItem('ClickPaticularUser') || '';
    if (GetClickPaticularUser) {
      setUserName(GetClickPaticularUser);
    }
  }, []);

  return (
    <>
      <div className="profileContainerss">
        <div className="Profile">
          <span>{userNameFirstChar}</span>
          <div>{loginUser.Name}</div>
        </div>
        <div className="EditSection" onClick={profileClick}>
          <span className="fa-solid fa-pencil"></span>
          <span className="Edit">
            Edit Profile
          </span>
        </div>
        <div className="seprationTwoDiv"></div>
        <div className="Button ">
          <button className="Logout" onClick={Logout}>
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;























// import React, { Component } from 'react'

// export default class ProfileSection extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "UserName": "",
//             "LoginUser": [],
//             "userNameFirstChar":""
//         }
//     }

//     Edit = () => {
//         alert("click hua")
//     }
//     Logout =()=>{
//         alert("you want to logout");
//         localStorage.removeItem("LogginUserDetail")
//         localStorage.removeItem("loggin")
//     }
//     componentDidMount = () => {
//         let LoginUser = localStorage.getItem("LogginUserDetail") ? JSON.parse(localStorage.getItem("LogginUserDetail")) : [];
//         if (LoginUser) {
//             let userProfile = LoginUser.find((user) => {
//                 this.setState({ LoginUser: user })
//                 this.setState({userNameFirstChar:user.Name.charAt(0)})
//             })
//         }
//         let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? (localStorage.getItem("ClickPaticularUser")) : [];
//         if (GetClickPaticularUser) {
//             this.setState({ UserName: GetClickPaticularUser })
//         }
//     }
//     render() {
//         return (
//             <>
//                 <div className="profileContainerss">
//                     <div className="Profile">
//                         <span>{this.state.userNameFirstChar}</span>
//                         <div>{this.state.LoginUser.Name}</div>
//                     </div>
//                     <div className='EditSection' onClick={this.Edit}>
//                         <span className="fa-solid fa-pencil"></span><span className='Edit' onClick={this.profileClick}>Edit Profile</span>
//                     </div>
//                     <div className='seprationTwoDiv'></div>
//                     <div className='Button '>
//                         <button className='Logout' onClick={this.Logout}>LogOut</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
