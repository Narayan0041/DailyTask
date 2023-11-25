import React, { Component } from 'react'
import UpComingLecture from '../component/UpComingLecture'
import UpcomigLectureNavbar from '../component/UpcomigLectureNavbar';
import AddLectureContainer from './AddLectureContainer';
import { Link } from 'react-router-dom';

export default class UpComingLectureTecaherSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      UpComingLectureDatas: [],
    }
  }
  componentDidMount() {
    const UpComingLectureData = localStorage.getItem("AddLectureData");
    if (UpComingLectureData) {
      const parsedData = JSON.parse(UpComingLectureData);
      this.setState({ UpComingLectureDatas: parsedData })

    }
  }


  render() {
    return (
      <>
        <div className="UpComingLectureTeacherSection">
          <div className="UpComingLectureTeacherContainer">
            <div>
              <UpcomigLectureNavbar NavbarValue={"UpComing Lecture"}/>
            </div>
            <div className="UpComingLectureTeacherBox">
              {
                this.state.UpComingLectureDatas.map((data, index) => {
                  return (
                    < UpComingLecture Day={data.Day} Date={data.Date} LectureDetail={data.TextArea} />
                  )
                })
              }

            </div>
            <div className="AddLecture">
              <Link to="/AddLectureContainer" element={<AddLectureContainer/>}>
              <p><span className="fa-solid fa-address-book"></span>  Add Lecture</p>
              </Link>
            </div>
          </div>
        </div>

      </>
    )
  }
}
