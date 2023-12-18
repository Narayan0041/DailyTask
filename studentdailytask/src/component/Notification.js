import React, { Component } from 'react'

export default class Notification extends Component {
    constructor(props) {
        super(props)
    }
    Remove = (event) => {
        let GetData = localStorage.getItem("AddLectureData") ? JSON.parse(localStorage.getItem("AddLectureData")) : [];
        let RemoveNotificationId =event;
         let NewDataNotification = GetData.filter(item => item.id !== RemoveNotificationId); // Filtering based on the correct 'id'
        localStorage.setItem("AddLectureData", JSON.stringify(NewDataNotification));
        alert("you want to delete all the message")
        window.location.reload()
    }
    render() {
        console.log(this.props.date)
        return (
            <>
                <div className="NotificationContainer">
                    <div className="NotificationSection">
                        <div className="NotificationBox">
                            <div className="UpperContainer">
                                <div>
                                    <img src='./image/teacher.png' alt='TeacherImage' width={40} />
                                </div>
                                <div className='UserMessage'>
                                    <h3>Hello, Students</h3>
                                </div>
                                <div className='Remove'>
                                    <img src='./image/removed.png' alt='RemoveImage' width={40} onClick={()=>this.Remove(this.props.Key)} />
                                </div>
                            </div>
                            <div className="SecondContainer">
                                <div>
                                    <p>New Tasks:</p>
                                </div>
                                <div className='date'>
                                    <p>{this.props.date}</p>
                                </div>
                            </div>
                            <div className="thirdContainer">
                                <div>
                                    <p>Check Plz</p>
                                </div>
                                <div className='links'>
                                    <p>Go! <span><i className="fa-solid fa-angle-up"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
