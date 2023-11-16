import React, { Component } from 'react'
import UpComingLecture from '../component/UpComingLecture'

export default class UpComingLecturePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AddLectureSectionGetData: []
        }
    }
        componentDidMount() {
        const StudentSection = localStorage.getItem("AddLectureData");
        if (StudentSection) {
            let parseData = JSON.parse(StudentSection);
            this.setState({ AddLectureSectionGetData: parseData })
        }
    }
    render() {
        return (
            <>
                <div className="UpComingLecturePageSection">
                    <div className="UpComingLecturePageContainer">
                        <h1>Upcoming Lecture</h1>
                        <div>
                            {
                                this.state.AddLectureSectionGetData.map((data, index) => {
                                    return(
                                       <UpComingLecture Day={data.Day} Date={data.Date} LectureDetail={data.TextArea}/> 
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
