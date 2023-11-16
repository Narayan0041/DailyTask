import React, { Component } from 'react'

export default class UpComingLecture extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="UpComingLectureSection">
                    <div className="UpComingLectureContainer">
                        <div className="UpComingLectureBoxs">
                            <div className="UpComingLectureDateAndDaySection">
                            <div className='UpComingLectureDay'>Day: {this.props.Day}</div>
                        <div className="UpComingLectureDate"><p>Date: {this.props.Date}</p></div>
                            </div>
                        <div className='TextSection'>
                            <p>{this.props.LectureDetail}</p>
                            <span><img src='./image/teacher.png' alt='teacherImage' width={50}/></span>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

