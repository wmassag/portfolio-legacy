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
          <h1 className="title">Welcome!</h1>
          <p className="title">I do digital design.</p>
        </div>
        <Page />
      </div>
    )
  }
}