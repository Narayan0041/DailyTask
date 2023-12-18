import React, { useState, useEffect } from 'react';
import CircularProgress from '../component/CircularProgress';
import AbsentProgressBar from '../component/AbsentProgressBar';
import { useParams } from 'react-router-dom';

const MapSection = ({ studentName }) => {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);
  const [noOfLecture, setNoOfLecture] = useState(0);
//   const circularProgressRef = useRef(null);

  const student =useParams();

  useEffect(() => {
    // const ShowPaticularData = JSON.parse(localStorage.getItem('GetResultInMapPresent') || '[]');
    const GetCount = JSON.parse(localStorage.getItem(`${student.Student}-Present`) || '[]');
    const NoOfPresent = GetCount.length;
    setPresent(NoOfPresent);

    // const StudentAttendancePresent = localStorage.getItem('GetResultInMapAbsent');
    // const PaticularAbsent = JSON.parse(StudentAttendancePresent || '[]');
    const GetCountAbsent = JSON.parse(localStorage.getItem(`${student.Student}-Absent`) || '[]');
    const NoOfAbsent = GetCountAbsent.length;
    setAbsent(NoOfAbsent);

    const totalLectures = present + absent;
    setNoOfLecture(totalLectures);
  }, [present, absent]);

  return (
    <>
      <div className="MapContainer">
        <div className="MapSection">
          <h3>Student Name: {studentName}</h3>
          <div className="MapBox">
            <h3>Present Container</h3>
            <div className="MapBoxContent">
              <CircularProgress name={student.Student} />
              <div className="MapBoxTextContainer">
                <ul>
                  <li className="Green">No of Present Lecture: {present}</li>
                  <li>Total Number of Lecture: {noOfLecture}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="MapBox">
            <h3>Absent Container</h3>
            <div className="MapBoxContent">
              <AbsentProgressBar name={student.Student}/>
              <div className="MapBoxTextContainer">
                <ul>
                  <li className="Red">No of Absent Lecture: {absent}</li>
                  <li>Total Number of Lecture: {noOfLecture}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="SeprateFooter"></div>
          <div className="footerTextCircularSection">
            <p>Every peak on the graph echoes success, while every dip whispers opportunity for growth.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapSection;





















// import React, { Component } from 'react'
// import CircularProgress from '../component/CircularProgress'
// import AbsentProgressBar from '../component/AbsentProgressBar'

// export default class MapSection extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             "Present": "",
//             "Absent": "",
//             "NoOfLecture": ""
//         }
//     }
//     componentDidMount = () => {
//         let ShowPaticularData = localStorage.getItem("GetResultInMapPresent") ? JSON.parse(localStorage.getItem("GetResultInMapPresent")) : [];
//         let GetCount = localStorage.getItem(ShowPaticularData) ? JSON.parse(localStorage.getItem(ShowPaticularData)) : [];
//         let NoOfPresent = GetCount.length;
//         this.setState({ Present: NoOfPresent })
//         let StudentAttendancePresent = localStorage.getItem("GetResultInMapAbsent");
//         let PaticularAbsent = StudentAttendancePresent ? JSON.parse(StudentAttendancePresent) : [];
//         let GetCountAbsent = localStorage.getItem(PaticularAbsent) ? JSON.parse(localStorage.getItem(PaticularAbsent)) : [];
//         let NoOfAbsent = GetCountAbsent.length
//         this.setState({ Absent: NoOfAbsent })
//         let NoOFBoth = NoOfPresent + NoOfAbsent
//         this.setState({ NoOfLecture: NoOFBoth })
//     }
//     render() {
//         return (
//             <>
//                 <div className="MapContainer">
//                     <div className="MapSection">
//                         <h3>Student Name :{" "}{this.props.studentName}</h3>
//                         <div className="MapBox">
//                             <h3>Present Container</h3>
//                             <div className="MapBoxContent">
//                                 <div>
//                                     <CircularProgress  name ={this.props.studentName}/>
//                                 </div>
//                                 <div className='MapBoxTextContainer'>
//                                     <ul>
//                                         <li className='Green'>No of Present Lecture: {this.state.Present}</li>
//                                         <li>Total Number of Lecture : {this.state.NoOfLecture}</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="MapBox">
//                             <h3>Absent Container</h3>
//                             <div className="MapBoxContent">
//                                 <div>
//                                     <AbsentProgressBar />
//                                 </div>
//                                 <div className='MapBoxTextContainer'>
//                                     <ul>
//                                         <li className='Red'>No of Absent Lecture: {this.state.Absent}</li>
//                                         <li>Total Number of Lecture: {this.state.NoOfLecture} </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='SeprateFooter'></div>
//                         <div className='footerTextCircularSection'>
//                             <p>Every peak on the graph echoes success, while every dip whispers opportunity for growth.</p>

//                         </div>
//                     </div>

//                 </div>
//             </>
//         )
//     }
// }
