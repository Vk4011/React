import React, { Component } from "react";

export default class Inline extends Component {
    clickHandle = () =>{
        this.setState({change:true})
    };
    state={
        change:false
    };


    render() {
    const btnStyle ={
        color: "black",
        backgroundColor: "rgb(28, 250, 68) ",
        fontWeight : "900",
        fontSize: "2rem"
    };

    if(this.state.change){
        btnStyle.backgroundColor = " aqua";
    }

    const txts ={
        fontSize:"80px",
        color: "black"

    }
 

    return (
      <div>
        <button onClick={this.clickHandle}  style={btnStyle} >Button</button>
        <h1 style={{...txts,...{fontSize: "150px"}}}>Hello World!</h1>
            
      </div>
    );
  }
}

//inline styleSheat
