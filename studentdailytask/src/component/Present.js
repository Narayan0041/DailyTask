import React, { Component } from 'react'

export default class Present extends Component {
    constructor(props){
        super(props)
        this.state = {
          activeButton: 'table',
        };
    }
    DownloadClick =()=>{
      alert("click")
    }
    ClickButton =(event)=>{
      let GetData =document.querySelector(`.${event}`);
      if(GetData){
        alert(event)
        GetData.classList.toggle("active")  
      }
      this.setState({ activeButton: event });
      alert(event)
    }
  render() {
    const { activeButton } = this.state;
    return (
      <>
       <div className="PresentContainer">
        <div className="PresentSection">
            <div className='Navbar'>
                <div><img src='./image/report-analysis.png' alt='logo' width={30}></img></div>
                <div><h2>Student Attendance</h2></div>
                <div className='DownloadSection' onClick={this.DownloadClick}>Download</div>
            </div>
            <div className='DifferentButtonSection'>
              <div className={activeButton === 'table' ? 'active' : 'button'} onClick={()=>this.ClickButton("table")}><img src="./image/table.png" width={20} alt='tableImage'></img><span>Student Attendance:</span></div>
              <div className={activeButton === 'pieChart' ? 'active' : 'button'}  onClick={()=>this.ClickButton("pieChart")}><img src="./image/pie-chart.png" width={20} alt='tableImage'></img><span>Student Attendance</span></div>
            </div>
        </div>
       </div>
      </>
    )
  }
}
