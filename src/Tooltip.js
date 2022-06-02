import React, { Component } from "react";


export default class Tooltip extends Component {
  constructor() {
    super();
    this.state = {
      flag: false,
    };
  }

  handleout=()=>{
this.setState({
  flag:false
})
  }
  handleover=()=>{
this.setState({
  flag:true
})
  }

  render() {
    const { positon } = this.props;
    console.log(positon,"pos")
   
 const show={
   display:this.state.flag?"block":'none',
  //  visibility:positon==''?"hidden":"unset"
}
  
    return (
      <div 
      style={{ height: 60, width: 200 ,marginTop:130 ,marginLeft:145}}
       className="btn btn-secondary "
       onMouseOver={this.handleover}
       onMouseLeave={this.handleout}
       >
       Hover over me!
       

        <div style={show} className={ positon===''?"top":positon} >
          {positon===''?" top tooltip":positon+" tooltip"}
        </div>
        </div>
    
    );
  }
}


// // visibility:'hidden'
// left: 650px; */
//     /* right: 500px; */
//     /* top: 121px; */
//     /* bottom: 180px;
// style={{position:'absolute',left:773 }}

