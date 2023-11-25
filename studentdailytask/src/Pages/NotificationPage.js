import React, { Component } from 'react'
import NavBar from '../component/NavBar'
import BottomNavbar from '../component/BottomNavbar'
import Notification from '../component/Notification'
import NotificationNavbar from '../component/NotificationNavbar'

export default class NotificationPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "NotificationAlert": [],
            "Date": [],
            "NoOfAlert":""
        }

    }
    componentDidMount = () => {
        let GetDate = localStorage.getItem("AddLectureData") ? JSON.parse(localStorage.getItem("AddLectureData")) : [];
        let NoOfLecture = localStorage.getItem("AddNotification") ? JSON.parse(localStorage.getItem("AddNotification")) :[];
        if (GetDate) {
            const dateArray = GetDate.map(lecture => lecture.Date); // Extract Date values into an array
            this.setState({ Date: dateArray }); // Set the Date array in the state
          }
          if(NoOfLecture){
           this.setState({NoOfAlert:NoOfLecture.length})
          }
          if(NoOfLecture){
            localStorage.removeItem("AddNotification")
          }
    }
    render() {
        const { Date } = this.state;
        if (!Array.isArray(Date)) {
            return <div>No dates available</div>; // or handle the case when Date is not an array
        }
        return (
            <>
                <div className="NotificationPageContainer">
                    <div className="NotificationPageSection">
                        <div>
                            <NotificationNavbar NavbarValue={"Notifications"}/>
                        </div>
                        <div className='NotificationDisplayContainer'>
                            <div className='NotificationList'>
                                {Date.map((date, index) => (
                                    <Notification Key={index+1} Date={date} />
                                ))}

                            </div>
                        </div>
                        {/* <div>
                            <BottomNavbar Alert={this.state.NoOfAlert} />
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}
