import React, { Component } from 'react'
import CircularProgress from '../component/CircularProgress'
import AbsentProgressBar from '../component/AbsentProgressBar'

export default class MapSection extends Component {
    constructor(props) {
        super(props)
        this.state ={
            "Present":"",
            "Absent":"",
            "NoOfLecture":""
        }
    }
    componentDidMount =()=>{
        let ShowPaticularData = localStorage.getItem("GetResultInMapPresent") ? JSON.parse(localStorage.getItem("GetResultInMapPresent")) : [];
        let GetCount = localStorage.getItem(ShowPaticularData) ? JSON.parse(localStorage.getItem(ShowPaticularData)) : [];
        let NoOfPresent = GetCount.length;
        this.setState({Present:NoOfPresent})
        let StudentAttendancePresent = localStorage.getItem("GetResultInMapAbsent");
        let PaticularAbsent = StudentAttendancePresent ? JSON.parse(StudentAttendancePresent) : [];
        let GetCountAbsent = localStorage.getItem(PaticularAbsent) ? JSON.parse(localStorage.getItem(PaticularAbsent)) : [];
        let NoOfAbsent = GetCountAbsent.length
        this.setState({Absent:NoOfAbsent})
        let NoOFBoth = NoOfPresent + NoOfAbsent
        this.setState({NoOfLecture:NoOFBoth})
    }
    render() {
        return (
            <>
                <div className="MapContainer">
                    <div className="MapSection">
                        <div className="MapBox">
                            <h3>Present Container</h3>
                            <div className="MapBoxContent">
                            <div>
                                <CircularProgress />
                            </div>
                            <div className='MapBoxTextContainer'>
                                <ul>
                                    <li className='Green'>No of Present Lecture: {this.state.Present}</li>
                                    <li>Total Number of Lecture : {this.state.NoOfLecture}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="MapBox">
                        <h3>Absent Container</h3>
                            <div className="MapBoxContent">
                            <div>
                                <AbsentProgressBar />
                            </div>
                            <div className='MapBoxTextContainer'>
                            <ul>
                                    <li className='Red'>No of Absent Lecture: {this.state.Absent}</li>
                                    <li>Total Number of Lecture: {this.state.NoOfLecture} </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className='sepration sepp'></div>
                        <div className='footerTextCircularSection'>
                            <p>Every peak on the graph echoes success, while every dip whispers opportunity for growth.</p>
                        
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
