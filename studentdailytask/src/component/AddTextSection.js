import React, { Component } from 'react'

export default class AddTextSection extends Component {
  constructor() {
    super()
    this.state = {
      "Text": "",
    }
  }
  HandleChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }
  Submit = (e) => {
    e.preventDefault();
    let { Text } = this.state;
    let UserDetailAdd = localStorage.getItem("UserDetailAdd") ? JSON.parse(localStorage.getItem("UserDetailAdd")) : [];
    let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? (localStorage.getItem("ClickPaticularUser")) : [];
    // console.log(GetClickPaticularUser)
    if(Text !==""){
      if(GetClickPaticularUser){
        UserDetailAdd.push(Text);
        localStorage.setItem("UserDetailAdd", JSON.stringify(UserDetailAdd))
        this.setState({"Text":""});
      }
    }

     // let UserDetailAdd = localStorage.getItem(`${GetClickPaticularUser}`) ? JSON.parse(localStorage.getItem(`${GetClickPaticularUser}`)) : [];
    // let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? (localStorage.getItem("ClickPaticularUser")) : [];
    // // console.log(GetClickPaticularUser)
    // if(Text !==""){
    //   if(GetClickPaticularUser){
    //     UserDetailAdd.push(Text);
    //     localStorage.setItem(`${GetClickPaticularUser}`, JSON.stringify(UserDetailAdd))
    //     this.setState({"Text":""});
    //   }
    // }
  }
  componentDidMount=()=>{
    let UserDetailAdd = localStorage.getItem("UserDetailAdd") ? JSON.parse(localStorage.getItem("UserDetailAdd")) : [];
    if(UserDetailAdd.length===0){
      alert("No data")
    }
    console.log(UserDetailAdd)
  }
  render() {
    return (
      <>
        <div className="AddTextSection">
          <div className="AddTextContainer">
            <div className='Text'>
              <img src='./image/add-task.png' width={30} alt='add-text' />
              <input type='text' placeholder='Enter Your Text' autoFocus onChange={(event) => { this.HandleChange(event, "Text") }} />
            </div>
            <div>
              <button className='Submit' onClick={this.Submit}>Submit</button>
            </div>
            <div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
