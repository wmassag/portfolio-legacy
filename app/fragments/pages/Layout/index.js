import React from "react"

require("./style.scss")

import Initial from "../../components/Initial/"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div id="__Layout">
        <Initial />
      </div>
    )
  }
}