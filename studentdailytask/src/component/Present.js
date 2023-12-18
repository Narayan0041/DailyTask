import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Present = (props) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(
    location.pathname === '/TeacherAttendance' ? 'table' : 'pieChart'
  );

  const ClickButton = (event) => {
    let GetData = document.querySelector(`.${event}`);
    if (GetData) {
      GetData.classList.toggle("active");
    }
    setActiveButton(event);
    if (event === "table") {
      setActiveButton(event);
      Navigate("/TeacherAttendance")
    }
    if (event === "pieChart") {
      alert("Click paticular Student")
    }
  };

  return (
    <>
      <div className="PresentContainer">
        <div className="PresentSection">
          <div className='Navbar'>
            <div>
              <Link to="/"><img src="../../image/report-analysis.png" alt='logo' width={30}></img></Link>
            </div>
            <div><h2>Student Attendance</h2></div>
            <button className='DownloadSection' onClick={props.click}>Download</button>
          </div>
          <div className='DifferentButtonSection'>
            <div className={activeButton === 'table' ? 'active' : 'button'} onClick={() => ClickButton("table")}>
              <img src="../../image/table.png" width={20} alt='tableImage'></img>
              <span>Student Attendance:</span>
            </div>
            <div className={activeButton === 'pieChart' ? 'active' : 'button'} onClick={() => ClickButton("pieChart")}>
              <img src="../../image/pie-chart.png" width={20} alt='tableImage'></img>
              <span>Student Attendance</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Present;


























// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

// export default class Present extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           activeButton: 'table',
//         };
//     }
//     DownloadClick = useReactToPrint();
//     ClickButton =(event)=>{
//       let GetData =document.querySelector(`.${event}`);
//       if(GetData){
//         alert(event)
//         GetData.classList.toggle("active")
//       }
//       this.setState({ activeButton: event });
//       alert(event)
//     }
//   render() {
//     const { activeButton } = this.state;
//     return (
//       <>
//        <div className="PresentContainer">
//         <div className="PresentSection">
//             <div className='Navbar'>
//                 <div>
//                   <Link to="/"><img src='./image/report-analysis.png' alt='logo' width={30}></img></Link></div>
//                 <div><h2>Student Attendance</h2></div>
//                 <div className='DownloadSection' onClick={this.DownloadClick}>Download</div>
//             </div>
//             <div className='DifferentButtonSection'>
//               <div className={activeButton === 'table' ? 'active' : 'button'} onClick={()=>this.ClickButton("table")}><img src="./image/table.png" width={20} alt='tableImage'></img><span>Student Attendance:</span></div>
//               <div className={activeButton === 'pieChart' ? 'active' : 'button'}  onClick={()=>this.ClickButton("pieChart")}><img src="./image/pie-chart.png" width={20} alt='tableImage'></img><span>Student Attendance</span></div>
//             </div>
//         </div>
//        </div>
//       </>
//     )
//   }
// }
