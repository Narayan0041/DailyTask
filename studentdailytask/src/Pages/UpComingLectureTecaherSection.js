import React, { Component } from 'react'
import UpComingLecture from '../component/UpComingLecture'

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
            <h1>UpComing Lecture</h1>
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
              <p><span className="fa-solid fa-address-book"></span>  Add Lecture</p>
            </div>
          </div>
        </div>

      </>
    )
  }
}
