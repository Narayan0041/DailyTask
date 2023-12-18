import React, { useState, useEffect , useRef } from 'react';
import Present from '../component/Present';
import BottomNavbar from '../component/BottomNavbar';
import MapSection from './MapSection';
import {useReactToPrint} from "react-to-print"
import { Link, useParams } from 'react-router-dom';

const GraphPage = React.forwardRef((props, ref) => {
 const student =useParams();
  const [studentName, setStudentName] = useState('');
  
  useEffect(() => {
    setStudentName(student.Student || ''); // Set StudentName if it exists, otherwise, set an empty string
  }, [student.Student]);

  const componentRef =useRef();
  const DownloadClick = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ShivReport",
    onAfterPrint: () => alert("Print Success")
  })
  return (
    <div>
      <Link to="TeacherGraphSection">Navigate to TeacherGraphSection</Link>
      <Present click={DownloadClick} />
      <MapSection studentName={studentName} ref={componentRef}  />
      <BottomNavbar />
    </div>
  );
});

export default GraphPage;

























// import React, { Component } from 'react'
// import Present from '../component/Present'
// import BottomNavbar from '../component/BottomNavbar'
// import MapSection from './MapSection'
// import { Link } from 'react-router-dom'
// export default class GraphPage extends Component {
//     constructor(props){
//         super(props)
//     }
//   render() {
//     return (
//       <div>
//         <Link to="TeacherGraphSection">
//         <Present/>
//         <MapSection/>
//         <BottomNavbar/></Link>
//       </div>
//     )
//   }
// }
