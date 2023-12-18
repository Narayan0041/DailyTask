import React, { useEffect, useState } from 'react'
import AddTextSection from '../component/AddTextSection';
import UserDetailNavbar from '../component/UserDetailNavbar'
import UserMessageContainer from '../component/UserMessageContainer'
import { useNavigate, useParams } from 'react-router-dom';

export default function UserDetail(props) {
  const{name} =useParams();
  const [userParticularData, setUserParticularData] = useState([]);

  useEffect(() => {
    const getUserData =localStorage.getItem(`${name}`) ;
    if (getUserData) {
      setUserParticularData(JSON.parse(getUserData));
    }
  }, [name]);
  return (
    <div>
     <div className="UserDetailContainer">
         <div className="UserDetailSection">
           <UserDetailNavbar  UserName={name}/>
           <div className="DisplaySection">
             {
          userParticularData.map((value, index) => {
             return (
                <UserMessageContainer key={index} UserMessage={value} />
                )
              })
             } 
             {userParticularData.length === 0 && (
              <div className='Empty'>
                <p>{props.EmptyResult}</p>
              </div>
            )}
           </div>
           <div>
             <AddTextSection UserName={name}/>
           </div>
         </div>
       </div>
    </div>
  )
}























// import React, { Component } from 'react'
// import UserDetailNavbar from '../component/UserDetailNavbar'
// import UserMessageContainer from '../component/UserMessageContainer'
// import AddTextSection from '../component/AddTextSection'

// export default class UserDetail extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       "UserPaticularData": [],
//       "PaticulatUserName": ""
//     }
//     // textUpdate = {
//     //   "TextValue": false
//     // }
//   }
//   componentDidMount = () => {

//     // let GetUser = localStorage.getItem("StudentAddData") ? (localStorage.getItem("StudentAddData")) : [];
//     // console.log(GetUser)
//     let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? (localStorage.getItem("ClickPaticularUser")) : [];
//     if (GetClickPaticularUser) {
//       this.setState({ PaticulatUserName: GetClickPaticularUser })
//     }
//     let UserDetailAdd=  localStorage.getItem(`${GetClickPaticularUser}`) ? JSON.parse(localStorage.getItem(`${GetClickPaticularUser}`)) :[];
//     if (UserDetailAdd) {
//       this.setState({ UserPaticularData: UserDetailAdd })
//     }
    
//   }
 
//   render() {
//     // const name = this.props.match.params.id;
//     // console.log(name)
//     return (
//       <>
//         <div className="UserDetailContainer">
//           <div className="UserDetailSection">
//             <UserDetailNavbar  UserName={this.state.PaticulatUserName} />
//             {/* delted Profile={"S"} */}
//             <div className="DisplaySection">
//               {
//                 this.state.UserPaticularData.map((value, index) => {
//                   return (
//                     <UserMessageContainer key={index} UserMessage={value} />
//                   )
//                 })
//               }
//               <div className='Empty'>
//                 <p>{this.props.EmptyResult}</p>
//               </div>
//             </div>
//             <div>
//               <AddTextSection />
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }
// }
