import React from "react"

require("./style.scss")

import Page from "../../components/Page"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div id="__Splash">
        <div className="content">
          <h1 className="title">Hi!</h1>
          <p className="subtitle"><span className="noWrap">I am Wenzel Massag,</span> <span className="noWrap">I design and code.</span></p>
        </div>
      </div>
    )
  }
}