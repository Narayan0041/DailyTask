import React, { Component } from 'react'
import UpComingLecture from '../component/UpComingLecture'
import UpcomigLectureNavbar from '../component/UpcomigLectureNavbar';
import AddLectureContainer from './AddLectureContainer';
import { Link } from 'react-router-dom';
import BottomNavbar from '../component/BottomNavbar';

export default class UpComingLectureTecaherSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      UpComingLectureDatas: [],
      "NoOfAlert":""
    }
  }
  componentDidMount() {
    let GetDate = localStorage.getItem("AddLectureData") ? JSON.parse(localStorage.getItem("AddLectureData")) : [];
        let NoOfLecture = localStorage.getItem("AddNotification") ? JSON.parse(localStorage.getItem("AddNotification")) :[];
          if(NoOfLecture){
           this.setState({NoOfAlert:NoOfLecture.length})
          }

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
            <BottomNavbar Alert={this.state.NoOfAlert} />
          </div>
        </div>

      </>
    )
  }
}
