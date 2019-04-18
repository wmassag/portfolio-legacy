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
          <p className="subtitle">I am Wenzel Massag, I design and code.</p>
        </div>
      </div>
    )
  }
}