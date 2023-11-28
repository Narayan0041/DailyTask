import React, { Component } from 'react'
import "../App.css"
import { redirectDocument } from "react-router-dom";
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "Search": ""
    }
  }
  HandleSearch = (event, key) => {
    this.setState({ [key]: event.target.value })
    let Search = event.target.value.toLowerCase().trim();
    let StudentListConatiner = document.querySelector(".StudentDataList")
    let StudentListContainerBox = StudentListConatiner.querySelectorAll(".StudentBox");
    let allBreakPoints = StudentListConatiner.querySelectorAll(".BreakPoint");
    allBreakPoints.forEach((breakPoint) => {
      breakPoint.style.display = "none";
    });
   
    for (let i = 0; i < StudentListContainerBox.length; i++) {
      let data = StudentListContainerBox[i].getElementsByTagName("p")[0];
      if (data) {
        let SearchValue = data.textContent || data.innerHTML;
        if (SearchValue.toLowerCase().indexOf(Search) > -1) {
          StudentListContainerBox[i].style.display = ""
        }
        else {
          StudentListContainerBox[i].style.display = "none"
        }
      }

    }
  }
  Profile = () => {
    let profileContaner = document.getElementsByClassName("ProfileContainer")[0];
    profileContaner.classList.toggle("active")
  }
  
  // handleRedirect = () => {
  //   const externalURL = "https://example.com/otherapp/login"; // Replace with your desired external URL
  //   redirectDocument(externalURL); // Call the redirect function with the URL
  // };

  render() {
    return (
      <>
        <div className='Navbar'>
          <div className='LogoSection'>
            <img src='./image/report-analysis.png' alt='Logo' width={38}  onClick={this.handleRedirect}/>
          </div>
          <div className='SearchSection'>
            <span className="fa-solid fa-magnifying-glass"></span><input type='search' placeholder='Search User' onChange={(event) => { this.HandleSearch(event, "Search") }} />
          </div>
          <div className='ProfileSection' onClick={this.Profile}>
            <p >{this.props.Profile}</p>
          </div>

        </div>

      </>


    )
  }
}
