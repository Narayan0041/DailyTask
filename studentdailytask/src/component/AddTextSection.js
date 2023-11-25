import React, { Component } from 'react'

export default class AddTextSection extends Component {
  constructor(props) {
    super(props)
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
    // let { TextValue } = this.props.textUpdate;
    let UserDetailAdd = localStorage.getItem("UserDetailAdd") ? JSON.parse(localStorage.getItem("UserDetailAdd")) : [];
    let GetClickPaticularUser = localStorage.getItem("ClickPaticularUser") ? (localStorage.getItem("ClickPaticularUser")) : [];
    if (Text !== "") {
      if (GetClickPaticularUser) {
        let GetData = localStorage.getItem(`${GetClickPaticularUser}`) ? JSON.parse(localStorage.getItem(`${GetClickPaticularUser}`)) : [];
        GetData.push(Text);
        localStorage.setItem(`${GetClickPaticularUser}`, JSON.stringify(GetData));
        window.location.reload();
      }
    }
    this.setState({ Text: "" });
    //  TextValue =true
  }
  componentDidMount = () => {
    let UserDetailAdd = localStorage.getItem("UserDetailAdd") ? JSON.parse(localStorage.getItem("UserDetailAdd")) : [];
    if (UserDetailAdd.length === 0) {
      // alert("No data")
    }
  }
  render() {
    return (
      <>
        <div className="AddTextSection">
          <div className="AddTextContainer">
            <div className='Text'>
              <img src='./image/add-task.png' width={30} alt='add-text' />
              <input type='text' value={this.state.Text} placeholder='Enter Your Text' autoFocus onChange={(event) => { this.HandleChange(event, "Text") }} />
            </div>
            <div className='image'>
              <img src='./image/send.png' alt='send' width={25} onClick={this.Submit} ></img>
            </div>
          </div>
        </div>
      </>
    )
  }
}
