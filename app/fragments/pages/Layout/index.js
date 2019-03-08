import React from "react"
import {HashRouter as Router, Route} from "react-router-dom"

require("./style.scss")

import Splash from "../Splash/"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div id="__Layout">
        <Router>
          <Route exact path="/">
            <Splash />
          </Route>
        </Router>
      </div>
    )
  }
}