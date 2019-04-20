import React from "react"

require("./style.scss")

import Splash from "../Splash/"
import Card from "../../components/Card/"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div id="__Layout">
        <Splash />
        <Card />
      </div>
    )
  }
}