import React, { Component } from 'react'

export default class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "UserName": ""
        }
    }
    ClickTheProfile = (value) => {

        // let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? JSON.parse(localStorage.getItem("ClickPaticularUser")) : [];
        // let check = GetClickPaticularUser.push({ "UserName": value.StudentName, "UserEmail": value.StudentEmail });
        // console.log(check)
        localStorage.setItem("ClickPaticularUser", value)
        alert("click")
        // console.log(value)
    }
    render() {
        return (
            <>
                <div className="StudentListSection">
                    <div className="StudentListContainer">
                        <div className="StudentBox" onClick={() => { this.ClickTheProfile(`${this.props.StudentName}`) }}>
                            <div className='StudentProfile'>{this.props.ProfileName}</div>
                            <div className='StudentName'>{this.props.StudentName}</div>
                            {/* <div className='StudentEmail'>{this.props.StudentEmail}</div> */}
                        </div>
                        <div className='BreakPoint'></div>
                    </div>
                </div>
            </>
        )
    }
}
