// import React, { Component } from 'react'
// import UserDetail from '../Pages/UserDetail';

// export default class StudentsList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             "UserName": ""
//         }
//     }
//     ClickTheProfile = (value) => {

//         // let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? JSON.parse(localStorage.getItem("ClickPaticularUser")) : [];
//         // let check = GetClickPaticularUser.push({ "UserName": value.StudentName, "UserEmail": value.StudentEmail });
//         // console.log(check)
//         localStorage.setItem("ClickPaticularUser", value)
//         alert("click")
//     }
//     render() {
//         return (
//             <>
//                 <div className="StudentListSection">
//                     <div className="StudentListContainer">
//                         <div className="StudentBox" onClick={() => { this.ClickTheProfile(`${this.props.StudentName}`) }}>
//                             <div className='StudentProfile'>{this.props.ProfileName}</div>
//                             <div className='StudentName'><p>{this.props.StudentName}</p></div>
//                         </div>
//                         <div className='BreakPoint'></div>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function StudentsList(props) {
    const [UserName, setUserName] = useState("");
    const navigate =useNavigate();
    let ClickTheProfile = (value) => {
        navigate(`${value}`)
        localStorage.setItem("ClickPaticularUser", JSON.stringify(`${value}`))
    }
    return (
        <>
            <div className="StudentListSection">
                <div className="StudentListContainer">
                    <div className="StudentBox" onClick={() => {ClickTheProfile(`${props.StudentName}`) }}>
                        <div className='StudentProfile'>{props.ProfileName}</div>
                        <div className='StudentName'><p>{props.StudentName}</p></div>
                    </div>
                    <div className='BreakPoint'></div>
                </div>
            </div>
        </>
    )
}
