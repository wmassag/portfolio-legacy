import React from "react"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

require("./style.scss")

import Home from "../Home/"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div id="__Layout">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}
