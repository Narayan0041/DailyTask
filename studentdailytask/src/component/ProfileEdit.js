
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const [editUserLogin, setEditUserLogin] = useState({});
  const [userNameFirstChar, setUserNameFirstChar] = useState('');
 let navigate = useNavigate();
 let backClick=()=>{
navigate("/")
 }
  useEffect(() => {
    const loginUserName = localStorage.getItem('Loggin') ? JSON.parse(localStorage.getItem('Loggin')) : [];
    const editUser = localStorage.getItem('LogginUserDetail') ? JSON.parse(localStorage.getItem('LogginUserDetail')) : [];

    if (editUser.length > 0) {
      const userEdit = editUser.find((user) => {
        setEditUserLogin(user);
        setUserNameFirstChar(user.Name.charAt(0));
      });
    }
  }, []);

  return (
    <>
      <div className="ProfileEditContainer">
        <div className="ProfileEditSection">
        <div className="UpperSection">
                            <div>
                                <span onClick={backClick} className="fa-solid fa-arrow-left"></span><span className='proFirstChar'>Profile</span>
                            </div>
                            <div>
                                <div className="Profile">
                                    <span>{userNameFirstChar}</span>
                                </div>
                            </div>
                        </div>
                        <div className="ProfileEdit">
                            <div className='ProfilePhoto'>
                                <img src='./image/user.png' width={111} alt='UserImage' className='image' />
                            </div>
                            <input type='file' />
                            <div className='ProfileDetailSection'>
                                <div>
                                    <h3>Name:</h3>
                                    <p>{editUserLogin.Name}</p>
                                </div>
                                <div>
                                    <h3>Email:</h3>
                                    <p>{editUserLogin.Email}</p>
                                </div>
                                <div>
                                    <button className='Submit'>Submit</button>
                                </div>
                            </div>
                      </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;


































// import React, { Component } from 'react'

// export default class ProfileEdit extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "EditUserLogin": [],
//             "UserNameFirstChar": ""
//         }
//     }
//     componentDidMount = () => {
//         let LoginUserName = localStorage.getItem("Loggin") ? JSON.parse(localStorage.getItem("Loggin")) : [];
//         let EditUser = localStorage.getItem("LogginUserDetail") ? JSON.parse(localStorage.getItem("LogginUserDetail")) : [];
//         if (EditUser) {
//             let UserEdit = EditUser.find((user) => {
//                 this.setState({ EditUserLogin: user })
//             })
//             if (EditUser) {
//                 let UserEdit = EditUser.find((user) => {
//                     this.setState({ UserNameFirstChar: user.Name.charAt(0) })
//                 })
//             }
//         }

//         }

    
//     render() {
//         return (
//             <>
//                 <div className="ProfileEditContainer">
//                     <div className="ProfileEditSection">
//                         <div className="UpperSection">
//                             <div>
//                                 <span className="fa-solid fa-arrow-left"></span><span className='proFirstChar'>Profile</span>
//                             </div>
//                             <div>
//                                 <div className="Profile">
//                                     <span>{this.state.UserNameFirstChar}</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="ProfileEdit">
//                             <div className='ProfilePhoto'>
//                                 <img src='./image/user.png' width={111} alt='UserImage' className='image' />
//                             </div>
//                             <input type='file' />
//                             <div className='ProfileDetailSection'>
//                                 <div>
//                                     <h3>Name:</h3>
//                                     <p>{this.state.EditUserLogin.Name}</p>
//                                 </div>
//                                 <div>
//                                     <h3>Email:</h3>
//                                     <p>{this.state.EditUserLogin.Email}</p>
//                                 </div>
//                                 <div>
//                                     <button className='Submit'>Submit</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }
