import React, { Component } from 'react'
import UpComingLecture from '../component/UpComingLecture'
import UpcomigLectureNavbar from '../component/UpcomigLectureNavbar';
import BottomNavbar from '../component/BottomNavbar';

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
                    <UpcomigLectureNavbar NavbarValue={"UpComing Lecture"}/>

                        <div className='AllComingLecture'>
                            {
                                this.state.AddLectureSectionGetData.map((data, index) => {
                                    return (
                                        <UpComingLecture Day={data.Day} Date={data.Date} LectureDetail={data.TextArea} />
                                    )
                                })
                            }
                        </div>
                        <div>
                            <BottomNavbar Alert={this.state.NoOfAlert}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
