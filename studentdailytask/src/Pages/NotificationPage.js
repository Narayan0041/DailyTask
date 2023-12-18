import React, { Component } from 'react'
import BottomNavbar from '../component/BottomNavbar'
import Notification from '../component/Notification'
import NotificationNavbar from '../component/NotificationNavbar'
import NavBar from '../component/NavBar';

export default class NotificationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "NotificationAlert": [],
            "Date": [],
            "NoOfAlert": ""
        }

    }
    componentDidMount = () => {
        let GetDate = localStorage.getItem("AddLectureData") ? JSON.parse(localStorage.getItem("AddLectureData")) : [];
        let NoOfLecture = localStorage.getItem("AddNotification") ? JSON.parse(localStorage.getItem("AddNotification")) : [];
        if (GetDate) {
            const dateArray = GetDate.map(lecture => lecture.Date); // Extract Date values into an array
            this.setState({ Date: dateArray }); // Set the Date array in the state
        }
        if (NoOfLecture) {
            this.setState({ NoOfAlert: NoOfLecture.length })
        }
        if (NoOfLecture) {
            localStorage.removeItem("AddNotification")
        }
    }
    render() {
        if(this.state.Date.length ===0){
            return(
                <>
            {/* <NavBar/> */}
            {/* <NotificationNavbar/> */}
            <div className='LectureMessage'>
            <img src='./image/no-spam.png' alt='notification logo' width={70} />
            <h1>No Notifications Available ....</h1>
            </div>
            <BottomNavbar/>

            </>
            )
        }
        return (
            this.state.Date.map((notification ,index) => {
                return(
                    <>
                    {/* <NotificationNavbar/> */}
                    <Notification Key={index+1} date={notification} />
                    <BottomNavbar/>
                    </>
                )
            })
        )
        // const { Date } = this.state;
        // console.log(Date)
        // if (!Array.isArray(Date) || Date.length <= 0) {
        //     return <div>No Notification Available</div>; // or handle the case when Date is not an array
        // } else {
        //     return (
        //         <>
        //             <div className="NotificationPageContainer">
        //                 <div className="NotificationPageSection">
        //                     <div>
        //                         <NotificationNavbar NavbarValue={"Notifications"} />
        //                     </div>
        //                     <div className='NotificationDisplayContainer'>
        //                         <div className='NotificationList'>
        //                             {Date.map((notification) => (
        //                                 <Notification key={notification.id} date={notification.date} />
        //                             ))}

        //                         </div>
        //                     </div>
        //                     <div>
        //                         <BottomNavbar Alert={this.state.NoOfAlert} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </>
        //     )
        // }
    }
}
